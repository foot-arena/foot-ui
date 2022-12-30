import { Center, Container, Heading, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ReservationCard from '../components/ReservationCard';

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/FootWebUI/reservations/fields')
      .then((res) => {
        const data = [];
        res.data.forEach((v) => {
          data.push({
            name: v.soccerField.name,
            img: v.soccerField.photos[0].url,
            adr: v.soccerField.address,
            price: v.soccerField.price,
            date: new Date(v.date.replace('[UTC]', '')).toLocaleString(),
            zone: v.soccerField.zone.name,
            id: v.reservation.id
          });
        });

        setReservations(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Container
        maxW={'100%'}
        marginTop={10}
      >
        <Center>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          >
            Liste des resevations:
          </Heading>
        </Center>
        <VStack>
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              data={reservation}
            />
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default ReservationsPage;
