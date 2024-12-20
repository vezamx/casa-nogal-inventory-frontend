import 
  React,
  {
    useContext,
    useState,
    useEffect
  }
from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import {
  FaArrowCircleLeft,
  FaPlus,
  FaSearch
} from "react-icons/fa";
import { AddMenuPageContext } from "@/app/context/AddMenuPageContext";

const addMenuPage = () => {
  const AddMenuContext = useContext(AddMenuPageContext);
  const [searchText, setSearchText] = useState("");
  const [filteredMenu, setFilteredMenu] = useState([]);

  const menu = [
    {
      platillos: [
        { nombre: "Ensalada César", precio: 8.99 },
        { nombre: "Bruschetta", precio: 6.5 },
      ],
    },
    {
      platillos: [
        { nombre: "Sopa de Tortilla", precio: 5.99 },
        { nombre: "Crema de Champiñones", precio: 4.99 },
      ],
    },
  ];

  useEffect(() => {
    setFilteredMenu(menu);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    if (value.trim() === "") {
      setFilteredMenu(menu);
    } else {
      const filtered = menu.map((categoria) => ({
        ...categoria,
        platillos: categoria.platillos.filter((platillo) =>
          platillo.nombre.toLowerCase().includes(value)
        ),
      }));
      setFilteredMenu(filtered.filter((categoria) => categoria.platillos.length > 0));
    }
  };

  if (!AddMenuContext) {
    console.log("Contexto addmenu no disponible");
    return null;
  }

  const { setShowAddMenuPage } = AddMenuContext;

  return (
    <Flex w="100vw" h="100%" direction="column" bg="gray.50">
      <Box p={4}>
        <FaArrowCircleLeft
          className="cursor-pointer"
          size="60"
          title="Regresar a menú anterior"
          onClick={() => setShowAddMenuPage(false)}
        />
      </Box>

      <Box px={4} pb={4}>
        <InputGroup size="md">
          <Input
            placeholder="Buscar..."
            borderRadius="full"
            bg="white"
            boxShadow="sm"
            value={searchText}
            onChange={handleSearch}
          />
          <InputRightElement>
            <IconButton
              aria-label="Buscar"
              icon={<FaSearch />}
              size="sm"
              bg="blue.300"
              _hover={{ bg: "blue.400" }}
              borderRadius="full"
              color="white"
            />
          </InputRightElement>
        </InputGroup>
      </Box>

      <Box flex="1" p={4}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {filteredMenu.map((categoria, index) =>
            categoria.platillos.map((platillo, idx) => (
              <GridItem
                key={`${index}-${idx}`}
                bg="yellow.300"
                borderRadius="lg"
                boxShadow="md"
                p={4}
              >
                <Grid
                  templateColumns="1fr 2fr"
                  templateRows="repeat(3, 1fr)"
                  gap={2}
                  h="100%"
                >
                  <GridItem rowSpan={3}>
                    <Image
                      src="/image-not-found.png"
                      alt={platillo.nombre}
                      borderRadius="md"
                      boxSize="80px"
                      objectFit="cover"
                      bg="white"
                    />
                  </GridItem>

                  <GridItem>
                    <Text fontWeight="bold" fontSize="md" isTruncated>
                      {platillo.nombre}
                    </Text>
                  </GridItem>

                  <GridItem>
                    <Text fontSize="sm" color="gray.700">
                      ${platillo.precio.toFixed(2)}
                    </Text>
                  </GridItem>

                  <GridItem display="flex" justifyContent="flex-center" alignItems="center">
                    <IconButton
                      aria-label="Agregar platillo"
                      icon={<FaPlus />}
                      size="sm"
                      bg="yellow.400"
                      color="white"
                      _hover={{ bg: "yellow.500" }}
                      borderRadius="full"
                    />
                  </GridItem>
                </Grid>
              </GridItem>
            ))
          )}
        </Grid>
      </Box>
    </Flex>
  );
};

export default addMenuPage;