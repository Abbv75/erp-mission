import { faPaperPlane, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, FormControl, FormLabel, Input, Modal, Option, Select, Stack, Typography } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addUser } from '../../functions/addUser'
import { editeUser } from '../../functions/editeUser'

const EditionForm = ({ isFormOpened = false, setisFormOpened, loadVehicule, currentValue = null, roleList = [] }) => {
    const [data, setdata] = useState({
        id_voiture: undefined,
        date_achat: undefined,
        matricule: undefined,
        type: 1,
        marque: 1,
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

        if (password != passwordConfirmation) {
            toast.error("Les mot de passe ne sont pas les memes");
            return false;
        }

        if (!!id_utilisateur) {
            editeUser(
                id_utilisateur,
                nom,
                login,
                password,
                idRole || 1,
                prenom,
                telephone
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
            addUser(
                nom,
                login,
                password,
                idRole || 1,
                prenom,
                telephone
            ).then(
                () => {
                    toast.success("Utilisateur ajouter avec succes");
                    loadVehicule && loadVehicule();
                }
            ).catch(
                () => {
                    toast.error("Utilisateur non ajouter");
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
                    id_utilisateur: currentValue?.id_utilisateur,
                    nom: currentValue.nom_utilisateur,
                    prenom: currentValue?.prenom_utilisateur,
                    login: currentValue.login,
                    password: currentValue.password,
                    passwordConfirmation: currentValue.password,
                    telephone: currentValue?.telephone,
                    idRole: currentValue.idRole,
                })
            }
            else {
                setdata({
                    id_voiture: undefined,
                    date_achat: undefined,
                    matricule: undefined,
                    type: 1,
                    marque: 1,
                })
            }
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
                    <Typography>Ajout d'utilisateur</Typography>

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
                        <FormLabel>Numero</FormLabel>
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
                            value={data.type || "Toyota"}
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