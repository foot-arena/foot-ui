import { InfoOutlineIcon, Icon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  HStack,
  Tooltip
} from '@chakra-ui/react';
import axios from 'axios';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FieldReservationDialog from './FieldReservationDialog';

function Rating({ rank }) {
  const rating = parseInt(rank[rank.length - 1]);
  return (
    <Box
      marginTop={3}
      d="flex"
      alignItems="center"
    >
      <HStack>
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return (
                <BsStarHalf
                  key={i}
                  style={{ marginLeft: '1' }}
                />
              );
            }
            return (
              <BsStar
                key={i}
                style={{ marginLeft: '1' }}
              />
            );
          })}
      </HStack>
    </Box>
  );
}

const SoccerFieldCard = ({ data }) => {
  const bookField = (id, date) => {
    const resData = {
      date: new Date(),
      fieldsReservations: [
        {
          fieldId: id,
          date: date
        }
      ]
    };
    axios
      .post('http://localhost:8080/FootWebUI/reservations', resData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((d) => console.log(d));
  };

  return (
    <Flex
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={data.photos[0].url}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
          w="340px"
          h="200px"
        />

        <Box p="6">
          <Flex
            mt="1"
            justifyContent="space-between"
            alignContent="center"
          >
            <HStack>
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
              <Box
                as="span"
                ml="2"
                color="gray.600"
                fontSize="sm"
              >
                {data.address}
              </Box>
            </HStack>

            <HStack>
              <FieldReservationDialog
                bookField={bookField}
                fieldId={data.id}
              />

              <Tooltip
                label="Info"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}
              >
                <Link
                  display={'flex'}
                  to={`/fields/${data.id}`}
                  state={data}
                >
                  <Icon
                    as={InfoOutlineIcon}
                    h={7}
                    w={7}
                    alignSelf={'center'}
                  />
                </Link>
              </Tooltip>
            </HStack>
          </Flex>

          <Flex
            justifyContent="space-between"
            alignContent="center"
          >
            <Rating
              rank={data.rank}
              numReviews={data.numReviews}
            />
            <Box
              fontSize="2xl"
              color={useColorModeValue('gray.800', 'white')}
            >
              <Box
                as="span"
                color={'gray.600'}
                fontSize="lg"
              >
                MAD
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default SoccerFieldCard;
