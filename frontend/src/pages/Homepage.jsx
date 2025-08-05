import { Container, VStack, HStack, Text, SimpleGrid } from "@chakra-ui/react";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useProductStore } from "@/store/product";
import ProductCard from "@/component/ProductCard";

const Homepage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("Products", products);
  return (
    <Container py={"12"} maxW="container.xl">
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
        <br />
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          w="full" // Full width for larger boxes
          maxW="1200px" // Maximum width for the grid
          gapX={"14"}
          gapY={"14"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
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
