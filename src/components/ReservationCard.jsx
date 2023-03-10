import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

const ReservationCard = ({ data }) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '80%' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex
          flex={1}
          bg="blue.200"
        >
          <Image
            objectFit="fill"
            boxSize="100%"
            w="600px"
            h="100%"
            src={data.img}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {data.name}
          </Heading>
          <Text
            fontWeight={600}
            color={'gray.500'}
            size="sm"
            mb={4}
          >
            @{data.adr}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            {/* Actress, musician, songwriter and artist. PM for work inquires or
            <Link
              href={'#'}
              color={'blue.400'}
            >
              #tag
            </Link>
            me in your posts */}
          </Text>
          <Stack
            align={'center'}
            justify={'center'}
            direction={'row'}
            mt={6}
          >
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
              fontSize="md"
            >
              {data.date}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
              fontSize="md"
            >
              {data.price} MAD
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
              fontSize="md"
            >
              {data.zone}
            </Badge>
          </Stack>

          {/* <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200'
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500'
              }}
              _focus={{
                bg: 'blue.500'
              }}
            >
              Follow
            </Button>
          </Stack> */}
        </Stack>
      </Stack>
    </Center>
  );
};
export default ReservationCard;
