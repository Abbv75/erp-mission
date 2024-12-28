import { faPaperPlane, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, FormControl, FormLabel, Input, Modal, Stack, Typography } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { addMission } from '../../functions/addMission'
import { editeMission } from '../../functions/editeMission'

const EditionForm = ({ isFormOpened = false, setisFormOpened, loadMission, currentValue = null }) => {
    const [data, setdata] = useState({
        id_mission: undefined,
        date_depart: undefined,
        date_arrivee: undefined,
        kilometrage: undefined,
    });

    const haandleSubmit = (e) => {
        e.preventDefault();

        const {
            id_mission,
            date_depart,
            date_arrivee,
            kilometrage,
        } = data;

        if (!!id_mission) {
            editeMission(
                date_depart,
                date_arrivee,
                kilometrage,
                id_mission,
            ).then(
                () => {
                    toast.success("Mission modifier avec succes");
                    loadMission && loadMission();
                }
            ).catch(
                () => {
                    toast.error("Mission non modifier");
                }
            ).finally(
                () => {
                    setisFormOpened(false);
                }
            )
        }
        else {
            addMission(
                date_depart,
                date_arrivee,
                kilometrage,
            ).then(
                () => {
                    toast.success("Mission ajouter avec succes");
                    loadMission && loadMission();
                }
            ).catch(
                () => {
                    toast.error("Mission non ajouter");
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
                    date_arrivee: currentValue?.date_arrivee,
                    date_depart: currentValue.date_depart,
                    kilometrage: currentValue?.kilometrage,
                    id_mission: currentValue.id_mission,
                })
            }
            else {
                setdata({
                    id_mission: undefined,
                    date_depart: undefined,
                    date_arrivee: undefined,
                    kilometrage: undefined,
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
                    <Typography>{data.id_mission ? "Modification" : "Ajout"} de mission</Typography>

                    <FormControl>
                        <FormLabel>Date de depart</FormLabel>
                        <Input
                            placeholder='Selectionnez la date de depart'
                            value={data.date_depart}
                            onChange={({ target }) => setdata({
                                ...data,
                                date_depart: target.value
                            })}
                            type='date'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Date d'arrivée</FormLabel>
                        <Input
                            placeholder="Selectionnez la date d'arrivée"
                            value={data.date_arrivee}
                            onChange={({ target }) => setdata({
                                ...data,
                                date_arrivee: target.value
                            })}
                            type='date'
                        />
                    </FormControl>

                    <FormControl required>
                        <FormLabel>Kilometrage</FormLabel>
                        <Input
                            placeholder="Saisissez le kilometrage"
                            value={data.kilometrage}
                            onChange={({ target }) => setdata({
                                ...data,
                                kilometrage: target.value
                            })}
                            type='number'
                            endDecorator={"Km"}
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
                            disabled={!data.date_arrivee || !data.date_depart || !data.kilometrage}
                        >Valider</Button>
                    </Stack>
                </Card>
            </form>
        </Modal>
    )
}

export default EditionForm