import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card } from '@mui/joy'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const PageCard = ({ icon = faFolderOpen, title, href }) => {
    return (
        <Link
            to={href}
        >
            <Card
                sx={{
                    p: 1,
                    border: `2px solid`,
                    borderRadius: 20,
                    transition: `all .2s`,
                    ":hover": {
                        transform: "scale(1.05)",
                    },
                    boxShadow: `0px 3px 15px ${blue[500]}`
                }}
                variant='soft'
                color='primary'
            >
                <Avatar
                    sx={{
                        alignSelf: "center",
                        width: 100,
                        height: 100,
                    }}
                    variant='solid'
                    color='primary'
                >
                    <FontAwesomeIcon size='2x' icon={icon} />
                </Avatar>
                <Button>{title}</Button>
            </Card>
        </Link>
    )
}

export default PageCard