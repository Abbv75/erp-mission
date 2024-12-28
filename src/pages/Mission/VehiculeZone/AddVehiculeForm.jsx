import { faPaperPlane, faTimesCircle, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, FormControl, FormLabel, Modal, Option, Select, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addMissionVehicule } from '../../../functions/addMissionVehicule'
import { getAllVehicule } from '../../../functions/getAllVehicule'

const AddVehiculeForm = ({ isFormOpened = false, setisFormOpened, id_mission, loadVehicule }) => {
    const [id, setid] = useState(null);
    const [vehiculeListe, setvehiculeListe] = useState([]);

    const loadUser = useCallback(
        () => {
            getAllVehicule().then(res => res && setvehiculeListe(res));
        },
        []
    );

    useEffect(
        () => {
            loadUser();
        },
        []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        addMissionVehicule(id, id_mission).then(
            () => {
                toast.success("Vehicule ajouter avec succes");
                loadVehicule && loadVehicule();
            }
        ).catch(
            () => {
                toast.error("Vehicule non ajouter");
            }
        ).finally(
            () => {
                setisFormOpened(false);
            }
        )
    }

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
                onSubmit={handleSubmit}
            >
                <Card>
                    <Typography>Ajouter un vehicule a la mission</Typography>

                    <FormControl required>
                        <FormLabel>Selectionnez le vehicule</FormLabel>
                        <Select
                            value={id}
                            onChange={(e, value) => setid(value)}
                            startDecorator={
                                <FontAwesomeIcon icon={faTruck} />
                            }
                        >
                            <Option value={null}>Selectionnez</Option>
                            {
                                vehiculeListe.map(value => (
                                    <Option value={value.id_vehicule}>{value.matricule} | {value.marque}</Option>
                                ))
                            }
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
                            disabled={!id}
                        >Valider</Button>
                    </Stack>
                </Card>
            </form>
        </Modal>
    )
}

export default AddVehiculeForm