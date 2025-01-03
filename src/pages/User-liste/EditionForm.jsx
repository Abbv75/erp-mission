import { faPaperPlane, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, FormControl, FormLabel, Input, Modal, Option, Select, Stack, Typography } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addUser } from '../../functions/addUser'
import { editeUser } from '../../functions/editeUser'

const EditionForm = ({ isFormOpened = false, setisFormOpened, loadUser, currentValue = null, roleList = [] }) => {
    const [data, setdata] = useState({
        id_utilisateur: undefined,
        nom: undefined,
        prenom: undefined,
        login: undefined,
        password: undefined,
        passwordConfirmation: undefined,
        telephone: undefined,
        idRole: 1,
    });

    const haandleSubmit = (e) => {
        e.preventDefault();

        const {
            password,
            passwordConfirmation,
            nom,
            login,
            idRole,
            prenom,
            telephone,
            id_utilisateur
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
                idRole,
                prenom,
                telephone
            ).then(
                () => {
                    toast.success("Utilisateur modifier avec succes");
                    loadUser && loadUser();
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
                idRole,
                prenom,
                telephone
            ).then(
                () => {
                    toast.success("Utilisateur ajouter avec succes");
                    loadUser && loadUser();
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
                    id_utilisateur: undefined,
                    nom: undefined,
                    prenom: undefined,
                    login: undefined,
                    password: undefined,
                    passwordConfirmation: undefined,
                    telephone: undefined,
                    idRole: undefined,
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
                    <Typography>{data.id_utilisateur ? 'Modification' : "Ajout"} d'un utilisateur</Typography>
                    <FormControl required>
                        <FormLabel>Nom</FormLabel>
                        <Input
                            placeholder='Saisissez le nom'
                            value={data.nom}
                            onChange={({ target }) => setdata({
                                ...data,
                                nom: target.value
                            })}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Prenom</FormLabel>
                        <Input
                            placeholder='Saisissez le prenom'
                            value={data.prenom}
                            onChange={({ target }) => setdata({
                                ...data,
                                prenom: target.value
                            })}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Numero</FormLabel>
                        <Input
                            placeholder='Saisissez le numero'
                            value={data.telephone}
                            onChange={({ target }) => setdata({
                                ...data,
                                telephone: target.value
                            })}
                        />
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Login</FormLabel>
                        <Input
                            placeholder='Saisissez le login'
                            value={data.login}
                            onChange={({ target }) => setdata({
                                ...data,
                                login: target.value
                            })}
                        />
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Role</FormLabel>
                        <Select
                            value={data.idRole}
                            onChange={(e, value) => setdata({
                                ...data,
                                idRole: value
                            })}
                        >
                            {
                                roleList.map(value => (
                                    <Option value={value.idRole}>{value.nomRole}</Option>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Mot de passe</FormLabel>
                        <Input
                            placeholder='Saisissez le mot de passe'
                            value={data.password}
                            onChange={({ target }) => setdata({
                                ...data,
                                password: target.value
                            })}

                        />
                    </FormControl>
                    <FormControl required>
                        <FormLabel>Confirmez le mot de passe</FormLabel>
                        <Input
                            placeholder='Confirmez le mot de passe'
                            value={data.passwordConfirmation}
                            onChange={({ target }) => setdata({
                                ...data,
                                passwordConfirmation: target.value
                            })}
                            type='password'
                        />
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
                            disabled={!data.password || !data.passwordConfirmation || data.password != data.passwordConfirmation}
                        >Valider</Button>
                    </Stack>
                </Card>
            </form>
        </Modal>
    )
}

export default EditionForm