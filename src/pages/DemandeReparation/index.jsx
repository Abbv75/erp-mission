import { Button, Stack } from '@mui/joy';
import React, { useCallback, useEffect, useState } from 'react';
import VoitureCard from '../../components/VoitureCard';
import { getAllVehicule } from '../../functions/getAllVehicule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';

const DemandeReparation = () => {
    const [voitureListe, setvoitureListe] = useState([]);

    const loadVehicule = useCallback(
        () => {
            getAllVehicule().then(res => res && setvoitureListe(res));
        },
        []
    );

    useEffect(
        () => {
            loadVehicule();
        },
        []
    );


    return (
        <Stack
            gap={2}
            direction={"row"}
            flexWrap={"wrap"}
        >
            {
                voitureListe.map(value => (
                    <VoitureCard
                        data={value}
                        button={(
                            <Button
                                endDecorator={
                                    <FontAwesomeIcon icon={faGears} />
                                }
                            >Demande une de reparation</Button>
                        )}
                    />
                ))
            }
        </Stack>
    )
}

export default DemandeReparation