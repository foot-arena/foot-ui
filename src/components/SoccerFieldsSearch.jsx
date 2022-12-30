import { SearchIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Input, Select } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const SoccerFieldsSearch = ({
  setFieldName,
  setFieldAdr,
  setZoneId,
  onSearch
}) => {
  const [cities, setCitites] = useState([]);
  const [zones, setZones] = useState([]);

  const getCities = () => {
    axios
      .get('http://localhost:8080/FootWebUI/cities')
      .then((res) => setCitites(res.data));
  };

  const getZones = () => {
    axios
      .get('http://localhost:8080/FootWebUI/zones')
      .then((res) => setZones(res.data));
  };

  const getZonesByCity = (cityId) => {
    axios
      .get(`http://localhost:8080/FootWebUI/cities/${cityId}/zones`)
      .then((res) => setZones(res.data));
  };

  useEffect(() => {
    getCities();
    getZones();
  }, []);

  return (
    <HStack margin={10}>
      <Input
        w="30%"
        placeholder="nom"
        onChange={(event) => setFieldName(event.target.value)}
      />
      <Input
        w="30%"
        placeholder="addresse"
        onChange={(event) => setFieldAdr(event.target.value)}
      />
      <Select
        w="15%"
        placeholder="Ville"
        onChange={(event) => getZonesByCity(event.target.value)}
      >
        {cities.map((city) => (
          <option
            key={city.id}
            value={city.id}
          >
            {city.name}
          </option>
        ))}
      </Select>
      <Select
        w="15%"
        placeholder="Zone"
        onChange={(event) => setZoneId(event.target.value)}
      >
        {zones.map((zone) => (
          <option
            key={zone.id}
            value={zone.id}
          >
            {zone.name}
          </option>
        ))}
      </Select>
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        onClick={() => onSearch()}
      />
    </HStack>
  );
};
