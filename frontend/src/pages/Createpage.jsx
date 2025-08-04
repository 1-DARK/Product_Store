import React, { useState } from "react";
import { Container, Heading, VStack, Box, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useProductStore } from "@/store/product";
const Createpage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const handleAddProduct = () => {
    createProduct(newProduct);
    // Reset form fields after submissions
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };
  return (
    <Container w={"2xl"}>
      <VStack spacing={"8"}>
        <br />
        <Heading as={"h1"} size={"3xl"} textAlign={"center"}>
          Create New Product
        </Heading>
        <br />
        <Box w={"full"} p={"6"} shadow={"md"} rounded={"lg"}>
          <VStack spacing={"4"}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button bgColor={"blue.600"} w={"full"} onClick={handleAddProduct}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Createpage;
