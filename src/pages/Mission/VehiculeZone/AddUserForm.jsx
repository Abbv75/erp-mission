import { faPaperPlane, faTimesCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, FormControl, FormLabel, Modal, Option, Select, Stack, Typography } from '@mui/joy'
import React, { useCallback, useEffect, useState } from 'react'
import { getAllUser } from '../../../functions/getAllUser'
import { addMissionParticipant } from '../../../functions/addMissionParticipant'
import { toast } from 'react-toastify'

const AddUserForm = ({ isFormOpened = false, setisFormOpened, id_mission, loadParticipant }) => {
    const [idUser, setidUser] = useState(null);
    const [userListe, setuserListe] = useState([])

    const loadUser = useCallback(
        () => {
            getAllUser().then(res => res && setuserListe(res));
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

        addMissionParticipant(idUser, id_mission).then(
            () => {
                toast.success("Utilisateur ajouter avec succes");
                loadParticipant && loadParticipant();
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
                    <Typography>Ajouter un utilisateur a la mission</Typography>

                    <FormControl required>
                        <FormLabel>Selectionnez l'utilisateur</FormLabel>
                        <Select
                            value={idUser}
                            onChange={(e, value) => setidUser(value)}
                            startDecorator={
                                <FontAwesomeIcon icon={faUser} />
                            }
                        >
                            <Option value={null}>Selectionnez</Option>
                            {
                                userListe.map(value => (
                                    <Option value={value.id_utilisateur}>{value.nom_utilisateur} {value.prenom_utilisateur}</Option>
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
                            disabled={!idUser}
                        >Valider</Button>
                    </Stack>
                </Card>
            </form>
        </Modal>
    )
}

export default AddUserForm