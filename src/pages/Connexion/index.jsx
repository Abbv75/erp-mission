import { Avatar, Button, Card, Input, Stack, Typography } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { login as loginUser } from "../../functions/login"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Connexion = () => {
    const [login, setlogin] = useState(null);
    const [password, setpassword] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(login, password);

            if (user) {
                toast.success("Connexion reussit avec success");
                setTimeout(() => {
                    navigate("user-liste");
                }, 3000);
            }
            else {
                toast.error("Identifiant incorrecte");
            }

        } catch (error) {
            toast.error("Une eerrue est survenue");
        }
    }

    useEffect(
        () => {
            !!localStorage.getItem("currentUser") && navigate("user-liste");
        },
        []
    )

    return (
        <Stack
            alignItems={"center"}
            justifyContent={"center"}
            flex={1}
            height={"100vh"}
        >
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <Card
                    sx={{
                        alignItems: "center"
                    }}
                >
                    <Avatar
                        size='lg'
                    >
                        <FontAwesomeIcon icon={faUserAstronaut} />
                    </Avatar>
                    <Typography level='h3'>Connexion</Typography>
                    <Input
                        placeholder='Login'
                        value={login}
                        onChange={({ target }) => setlogin(target.value)}
                        required
                    />
                    <Input
                        placeholder='mot de passe'
                        value={password}
                        onChange={({ target }) => setpassword(target.value)}
                        type='password'
                        required
                    />
                    <Button
                        endDecorator={
                            <FontAwesomeIcon icon={faLock} />
                        }
                        fullWidth
                        type='submit'
                    >Se connecter</Button>
                </Card>
            </form>
        </Stack>

    )
}

export default Connexion