import React, { useState } from "react";
import {
  Container,
  Heading,
  VStack,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import { useProductStore } from "@/store/product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    try {
      // Ensure price is a number
      const productData = {
        ...newProduct,
        price: parseFloat(newProduct.price) || 0,
      };

      // Validate inputs
      if (!productData.name || !productData.price || !productData.image) {
        toast.error("All fields are required.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }

      console.log("Adding product:", productData);
      const { success, message } = await createProduct(productData);

      if (!success) {
        toast.error(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.success(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      // Reset form fields after submission
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("An unexpected error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxW="2xl">
      <ToastContainer />
      <VStack spacing="8">
        <br />
        <Heading as="h1" size="3xl" textAlign="center">
          Create New Product
        </Heading>
        <br />
        <Box w="full" p="6" shadow="md" rounded="lg">
          <VStack spacing="4">
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
            />
            <Button
              bgColor="blue.600"
              color="white"
              w="full"
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
