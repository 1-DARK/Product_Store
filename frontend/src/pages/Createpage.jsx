import React, { useState } from "react";
import { Container, Heading, VStack, Box, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
const Createpage = () => {
  const [newP, setnewP] = useState({
    name: "",
    price: "",
    image: "",
  });
  const handleAddProduct = () => {
    // Reset form fields after submissions
    setnewP({
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
              value={newP.name}
              onChange={(e) => setnewP({ ...newP, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newP.price}
              onChange={(e) => setnewP({ ...newP, price: e.target.value })}
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newP.image}
              onChange={(e) => setnewP({ ...newP, image: e.target.value })}
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
