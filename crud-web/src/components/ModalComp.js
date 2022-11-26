import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
  import { useState } from "react";
  
  const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [nome, setNome] = useState(dataEdit.nome || "");
    const [id, setId] = useState(dataEdit.id || "");
    const [cor, setCor] = useState(dataEdit.cor || "");
    const [preco, setPreco] = useState(dataEdit.preco || "");
    const [tipo, setTipo] = useState(dataEdit.tipo || "");
  
    const handleSave = () => {
      if (!nome || !id || !cor || !preco || !tipo) return;
  
      if (idAlreadyExists()) {
        return alert("ID já cadastrado!");
      }
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { nome, id, cor, preco, tipo };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { nome, id, cor, preco, tipo }]
        : [...(data ? data : [])];
  
      localStorage.setItem("cad_produto", JSON.stringify(newDataArray));
  
      setData(newDataArray);
  
      onClose();
    };
  
    const idAlreadyExists = () => {
      if (dataEdit.id !== id && data?.length) {
        return data.find((item) => item.id === id);
      }
  
      return false;
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro de Produtos</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>ID</FormLabel>
                  <Input
                    type="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Cor</FormLabel>
                  <Input
                    type="text"
                    value={cor}
                    onChange={(e) => setCor(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Valor</FormLabel>
                  <Input
                    type="text"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Tipo</FormLabel>
                  <Input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleSave}>
                SALVAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalComp;