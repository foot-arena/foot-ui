import { Center, Container, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SoccerFieldCard from '../components/SoccerFieldCard';
import { SoccerFieldsSearch } from '../components/SoccerFieldsSearch';

const HomePage = () => {
  const [fields, setFields] = useState([]);
  const [fieldAdr, setFieldAdr] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [fieldName, setFieldName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8080/FootWebUI/fields')
      .then((res) => setFields(res.data));
  }, []);

  const onSearch = () => {
    console.log('f:', fieldName);
    console.log('a:', fieldAdr);
    axios
      .get(
        `http://localhost:8080/FootWebUI/fields/filter?adr=${fieldAdr}&name=${fieldName}&zoneId=${zoneId}`
      )
      .then((res) => setFields(res.data));
  };

  return (
    <>
      <Navbar />
      <Container
        maxW="80%"
        marginTop={10}
      >
        <Center>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          >
            Chercher un terrain
          </Heading>
        </Center>
        <SoccerFieldsSearch
          setFieldAdr={setFieldAdr}
          setFieldName={setFieldName}
          setZoneId={setZoneId}
          onSearch={onSearch}
        />
        <Wrap>
          {fields.map((field) => (
            <WrapItem key={field.id}>
              <SoccerFieldCard data={field} />
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </>
  );
};

export default HomePage;
