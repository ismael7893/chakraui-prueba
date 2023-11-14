import {
  Flex,
  Box,
  Spacer,
  Text,
  Link,
  List,
  ListItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      <Flex bg="blue.500" p="4" color="white">
        <Box>
          <strong>Prueba</strong>
        </Box>
        <Spacer />
      </Flex>

      {/* Main Content */}
      <Flex>
        {/* Sidebar */}
        <Box w="250px" bg="gray.200" p="4">
          <Text fontSize="xl" mb="4">
            Menu
          </Text>
          <List spacing={3}>
            <ListItem>
              <Link color="blue.500">Menu 1</Link>
            </ListItem>
            <ListItem>
              <Link color="blue.500">Menu 2</Link>
            </ListItem>
            <ListItem>
              <Link color="blue.500">Menu 3</Link>
            </ListItem>
          </List>
        </Box>
        <Box flex="1" p="4">
          <Text fontSize="xl" mb="4" textAlign={'left'}>
            Dashboard Overview
          </Text>
          <Box bg="white" p="4" borderRadius="md" boxShadow="md">
            <Button mt="4" colorScheme="teal" onClick={handleOpenModal}>
              Abrir un modal
            </Button>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>titulo de Modal</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Contenido de prueba del modal</Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="teal" mr={3} onClick={handleCloseModal}>
                    Cerrar
                  </Button>
                  {/* Add additional modal actions as needed */}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default App;
