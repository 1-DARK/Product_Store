import {
  Container,
  VStack,
  HStack,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useProductStore } from "@/store/product";
const Homepage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("Products", products);
  return (
    <Container maxW="2xl" py={"12"}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          color={"blue.500"}
        >
          <HStack>
            Current Products <IoRocketOutline />
          </HStack>
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={full}
        >
          {products.map((product) => (
            <ProductCard />
          ))}
        </SimpleGrid>
        <Text
          fontSize={"xl"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"gray.500"}
        >
          No Products Found {""}
          <Link to={"/create"}>
            <Text
              as={"span"}
              color={"blue.500"}
              _hover={{ textDecoration: "underline" }}
            >
              Create a Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default Homepage;
