import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp";
import Cliente from "./components/Cliente";
import Endereco from "./components/Endereco";
import Produto from "./components/Produto";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Button, useDisclosure, Table, Thead, Tr, Th, Tbody, Td, useBreakpointValue } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_produto")
      ? JSON.parse(localStorage.getItem("cad_produto"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = (id) => {
    const newArray = data.filter((item) => item.id !== id);

    setData(newArray);

    localStorage.setItem("cad_produto", JSON.stringify(newArray));
  };

  return (
    <div className="App">
      <h1>My App</h1>
      <BrowserRouter>
        <ul>
          <li> <Link to="/produtos">Cadastro de Produto</Link></li>
          <li> <Link to="/enderecos">Cadastro de Endereço</Link></li>
          <li> <Link to="/clientes">Cadastro de Cliente</Link></li>
        </ul>
        <Routes>
          <Route path="/produtos" index element={<Produto/>}></Route>
          <Route path="/enderecos" index element={<Endereco/>}></Route>
          <Route path="/clientes" index element={<Cliente/>}></Route>
        </Routes>
      </BrowserRouter>
      <Flex h="100vh" align="center" justify="center" fontSize="20px" fontFamily="poppins">
        <Box maxW={800} w="100%" h="100vh" py={10} px={2}>
          <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>
            CADASTRAR PRODUTO
          </Button>

          <Box overflowY="auto" height="100%">
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                    ID
                  </Th>
                  <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                    Nome
                  </Th>
                  <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                    Cor
                  </Th>
                  <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                    Valor
                  </Th>
                  <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                    Tipo
                  </Th>
                  <Th p={0}></Th>
                  <Th p={0}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(({ nome, id, cor, preco, tipo }, index) => (
                  <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                    <Td maxW={isMobile ? 5 : 100}>{id}</Td>
                    <Td maxW={isMobile ? 5 : 100}>{nome}</Td>
                    <Td maxW={isMobile ? 5 : 100}>{cor}</Td>
                    <Td maxW={isMobile ? 5 : 100}>{preco}</Td>
                    <Td maxW={isMobile ? 5 : 100}>{tipo}</Td>
                    <Td p={0}>
                      <EditIcon fontSize={20} onClick={() => [setDataEdit({ nome, id, cor, preco, tipo, index }), onOpen(),]} />
                    </Td>
                    <Td p={0}>
                      <DeleteIcon fontSize={20} onClick={() => handleRemove(id)} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
        {isOpen && (
          <ModalComp isOpen={isOpen} onClose={onClose} data={data} setData={setData} dataEdit={dataEdit} setDataEdit={setDataEdit} />
        )}
      </Flex>
    </div>
  );
};

export default App;