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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: product.name,
    image: product.image,
    price: product.price,
  });

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

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData({
      name: product.name,
      image: product.image,
      price: product.price,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const result = await updateProduct(product._id, formData);
      if (result?.success) {
        toast.success("Product Updated Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setIsModalOpen(false);
      } else {
        toast.error(result?.message || "Failed to update product", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error(
        error.message || "An error occurred while updating the product",
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
            <MdMovieEdit />
          </IconButton>
          <IconButton onClick={() => handleDeleteProduct(product._id)}>
            <MdOutlineDelete />
          </IconButton>
        </HStack>
      </Box>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="outline" size="sm">
            Open Dialog
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog Title</Dialog.Title>
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
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Image URL"
                />

                <Input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Price"
                />
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button>Save</Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </Box>
  );
};

export default ProductCard;
