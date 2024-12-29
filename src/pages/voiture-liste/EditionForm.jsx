import { faPaperPlane, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, FormControl, FormLabel, Input, Modal, Option, Select, Stack, Typography } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { editeUser } from '../../functions/editeUser'
import { addVehicule } from '../../functions/addVehicule'
import { editeVehicule } from '../../functions/editeVehicule'

const EditionForm = ({ isFormOpened = false, setisFormOpened, loadVehicule, currentValue = null }) => {
    const [data, setdata] = useState({
        id_voiture: undefined,
        date_achat: undefined,
        matricule: undefined,
        type: "Voiture",
        marque: "Toyota",
    });

    const haandleSubmit = (e) => {
        e.preventDefault();

        const {
            matricule,
            date_achat,
            type,
            marque,
            id_voiture
        } = data;

        if (!!id_voiture) {
            editeVehicule(
                matricule,
                date_achat,
                type,
                marque,
                id_voiture
            ).then(
                () => {
                    toast.success("Utilisateur modifier avec succes");
                    loadVehicule && loadVehicule();
                }
            ).catch(
                () => {
                    toast.error("Utilisateur non modifier");
                }
            ).finally(
                () => {
                    setisFormOpened(false);
                }
            )
        }
        else {
            addVehicule(
                matricule,
                date_achat,
                type,
                marque,
            ).then(
                () => {
                    toast.success("voiture ajouter avec succes");
                    loadVehicule && loadVehicule();
                }
            ).catch(
                () => {
                    toast.error("voiture non ajouter");
                }
            ).finally(
                () => {
                    setisFormOpened(false);
                }
            )
        }

    }

    useEffect(
        () => {
            if (!!currentValue) {
                setdata({
                    matricule: currentValue?.matricule,
                    date_achat: currentValue.date_achat,
                    type: currentValue?.type,
                    marque: currentValue.marque,
                    id_voiture: currentValue.id_vehicule,
                })
            }
            else {
                setdata({
                    id_voiture: undefined,
                    date_achat: undefined,
                    matricule: undefined,
                    type: "Voiture",
                    marque: "Toyota",
                })
            }

            console.log(currentValue);
            
        },
        [currentValue]
    )

    return (
        <Modal
            open={isFormOpened}
            onClose={() => setisFormOpened && setisFormOpened(false)}
            slotProps={{
                root: {
                    sx: {
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }
            }}
        >
            <form
                onSubmit={haandleSubmit}
            >
                <Card>
                    <Typography>{data.id_voiture ? 'Modifier' : "Ajouter"} de voiture de service</Typography>

                    <FormControl>
                        <FormLabel>Matricule</FormLabel>
                        <Input
                            placeholder='Saisissez le Matricule'
                            value={data.matricule}
                            onChange={({ target }) => setdata({
                                ...data,
                                matricule: target.value
                            })}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Date d'achat</FormLabel>
                        <Input
                            placeholder="Selectionnez la date d'achat"
                            value={data.date_achat}
                            onChange={({ target }) => setdata({
                                ...data,
                                date_achat: target.value
                            })}
                            type='date'
                        />
                    </FormControl>

                    <FormControl required>
                        <FormLabel>Type</FormLabel>
                        <Select
                            value={data.type || "Voiture"}
                            onChange={(e, value) => setdata({
                                ...data,
                                type: value
                            })}
                        >
                            <Option value={"Voiture"}>Voiture</Option>
                            <Option value={"Moto"}>Moto</Option>
                            <Option value={"Avion"}>Avion</Option>
                        </Select>
                    </FormControl>

                    <FormControl required>
                        <FormLabel>Marque</FormLabel>
                        <Select
                            value={data.marque || "Toyota"}
                            onChange={(e, value) => setdata({
                                ...data,
                                marque: value
                            })}
                        >
                            <Option value={"Toyota"}>Toyota</Option>
                            <Option value={"Mercedes"}>Mercedes</Option>
                            <Option value={"Yamaha"}>Yamaha</Option>
                            <Option value={"Djakarta"}>Djakarta</Option>
                            <Option value={"Escalade"}>Escalade</Option>
                        </Select>
                    </FormControl>

                    <Stack
                        gap={1}
                        direction={"row"}
                    >
                        <Button
                            color='danger'
                            variant='outlined'
                            startDecorator={
                                <FontAwesomeIcon icon={faTimesCircle} />
                            }
                            type='reset'
                            onClick={() => setisFormOpened(false)}
                        >Annuler</Button>

                        <Button
                            fullWidth
                            endDecorator={
                                <FontAwesomeIcon icon={faPaperPlane} />
                            }
                            type='submit'
                            disabled={!data.matricule || !data.date_achat || !data.type || !data.marque}
                        >Valider</Button>
                    </Stack>
                </Card>
            </form>
        </Modal>
    )
}

export default EditionForm