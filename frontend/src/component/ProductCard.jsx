import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Button,
  CloseButton,
  Dialog,
  Portal,
  Input,
  Text,
} from "@chakra-ui/react";
import { MdMovieEdit, MdOutlineDelete } from "react-icons/md";
import React, { useState } from "react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteproduct, updateProduct } = useProductStore();
  const [formData, setFormData] = useState({
    name: product.name,
    image: product.image,
    price: product.price,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // Submit updated product data
  const handleUpdateProduct = async () => {
    try {
      const result = await updateProduct(product._id, formData);
      if (result?.success) {
        toast.success(result.message || "Product updated successfully", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error(result?.message || "Failed to update product", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(error.message || "Update failed", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleDeleteProduct = async (pid) => {
    try {
      const result = await deleteproduct(pid);
      console.log("Delete result:", result);
      if (!result?.success) {
        toast.error(result?.message || "Failed to delete product", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.success(result?.message || "Product Deleted Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(
        error.message || "An error occurred while deleting the product",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
      w={{ base: "full", md: "sm" }}
      maxW="400px"
    >
      <Image
        src={product.image}
        alt={product.name}
        h="62"
        w="100%"
        objectFit="cover"
        objectPosition="center"
      />
      <Box p="4">
        <Heading as="h3" size="md" mb="2">
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" mb="4" color={textColor}>
          ${product.price}
        </Text>
        <HStack>
          <IconButton onClick={handleEditClick}>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <MdMovieEdit />
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>Update Product</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Product Name"
                      />

                      <Input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                      />

                      <Input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="Image URL"
                      />
                    </Dialog.Body>
                    <Dialog.Footer>
                      <Dialog.ActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                      </Dialog.ActionTrigger>
                      <Dialog.ActionTrigger asChild>
                        <Button onClick={handleUpdateProduct}>Save</Button>
                      </Dialog.ActionTrigger>
                    </Dialog.Footer>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </IconButton>
          <IconButton
            onClick={() => handleDeleteProduct(product._id, formData)}
          >
            <MdOutlineDelete />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
