import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  MarkerF,
  useJsApiLoader
} from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '600px'
};

const SoccerFieldPage = () => {
  const field = useLocation().state;
  const center = {
    lat: field.latitude,
    lng: field.longitude
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAwWUO_YKog2HhVCI0PuhuQH3zdb_XmryA'
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  return (
    <>
      <Navbar />
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <VStack>
              <Image
                rounded={'md'}
                alt={'product image'}
                src={field.photos[0].url}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />

              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={50}
                  mapTypeId={window.google.maps.MapTypeId.HYBRID}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  <MarkerF
                    position={center}
                    label={field.name}
                  />
                </GoogleMap>
              ) : (
                <></>
              )}
            </VStack>
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              >
                {field.name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
              >
                {field.price} MAD
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            >
              <Text fontSize={'lg'}>{field.description}</Text>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  Detail:
                </Text>

                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={10}
                >
                  <List spacing={2}>
                    <ListItem>
                      <Text fontWeight={'bold'}>Capacité:</Text>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight={'bold'}>Rank:</Text>
                    </ListItem>{' '}
                    <ListItem>Latitude:</ListItem>
                    <ListItem>
                      <Text fontWeight={'bold'}>Longitude:</Text>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight={'bold'}>Zone:</Text>
                    </ListItem>
                    <ListItem>
                      <Text fontWeight={'bold'}>Ville:</Text>
                    </ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{field.capacity}</ListItem>
                    <ListItem>{field.rank}</ListItem>
                    <ListItem>{field.latitude}</ListItem>
                    <ListItem>{field.longitude}</ListItem>
                    <ListItem>{field.zone.name}</ListItem>
                    <ListItem>{field.zone.city.name}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default SoccerFieldPage;
