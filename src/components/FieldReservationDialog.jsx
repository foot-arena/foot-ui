import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Icon,
  chakra,
  Tooltip,
  Button,
  useDisclosure,
  AlertDialogFooter,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { TbHandClick } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const FieldReservationDialog = ({ bookField, fieldId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [dateRes, setDateRes] = useState(new Date());

  return (
    <>
      <Tooltip
        label="Reserver"
        bg="white"
        placement={'top'}
        color={'gray.800'}
        fontSize={'1.2em'}
      >
        <chakra.a
          href={'#'}
          display={'flex'}
        >
          <Icon
            as={TbHandClick}
            h={7}
            w={7}
            alignSelf={'center'}
            onClick={onOpen}
          />
        </chakra.a>
      </Tooltip>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
            >
              Reserver
            </AlertDialogHeader>

            <AlertDialogBody>
              <FormControl>
                <FormLabel>Date de reservation:</FormLabel>
                <Input
                  id="date-res"
                  type="datetime-local"
                  onChange={(event) => setDateRes(event.target.value)}
                  required
                />
              </FormControl>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                colorScheme="red"
              >
                Annuler
              </Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  bookField(fieldId, dateRes);
                  onClose();
                }}
                ml={3}
              >
                Ok
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
export default FieldReservationDialog;
