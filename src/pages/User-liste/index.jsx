import { faPaperPlane, faPlus, faTimes, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card, DialogActions, FormControl, FormLabel, Input, Modal, ModalClose, ModalDialog, Stack, Typography } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import CustomTable from '../../components/CustomTable'
import { getAllUser } from '../../functions/getAllUser'
import { Dialog } from '@mui/material'

const UserListe = () => {
    const [data, setdata] = useState([]);
    const [isFormOpened, setisFormOpened] = useState(true);

    useEffect(
        () => {
            getAllUser().then(res => res && setdata(res))
        }
    )

    return (
        <Stack
            gap={2}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
            >
                <Typography level="h4">Liste des utilisateurs</Typography>
                <Button
                    endDecorator={
                        <Avatar
                            size='sm'
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Avatar>
                    }
                    size='sm'
                    onClick={() => setisFormOpened(true)}
                >Ajouter</Button>
            </Stack>

            <CustomTable
                headerList={['id', 'Nom', "Prenom", "Login", "Role", "Telephone"]}
                data={data.map(value => [
                    value?.id_utilisateur,
                    value?.nom_utilisateur,
                    value?.prenom_utilisateur,
                    value?.login,
                    value?.nomRole,
                    value?.telephone,
                ])}
            />

            <Modal
                open={isFormOpened}
                onClose={() => setisFormOpened(false)}
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
                <form>
                    <Card>
                        <Typography>Ajout d'utilisateur</Typography>
                        <FormControl>
                            <FormLabel>Nom</FormLabel>
                            <Input placeholder='Saisissez le nom' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Prenom</FormLabel>
                            <Input placeholder='Saisissez le prenom' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Numero</FormLabel>
                            <Input placeholder='Saisissez le numero' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Login</FormLabel>
                            <Input placeholder='Saisissez le login' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mot de passe</FormLabel>
                            <Input placeholder='Saisissez le mot de passe' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Confirmez le mot de passe</FormLabel>
                            <Input placeholder='Confirmez le mot de passe' />
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
                            >Annuler</Button>
                            <Button
                                fullWidth
                                endDecorator={
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                }
                                type='submit'
                            >Valider</Button>
                        </Stack>
                    </Card>
                </form>
            </Modal>
        </Stack>
    )
}

export default UserListe