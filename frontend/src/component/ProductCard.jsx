import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdMovieEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import React from "react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteproduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    try {
      const result = await deleteproduct(pid);
      console.log("Delete result:", result); // Debug: Log the result
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
        toast.success(result?.message || "Product deleted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error("Delete error:", error); // Debug: Log any errors
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

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
      w={{ base: "full", md: "sm" }} // Medium size: full width on mobile, 16rem (sm) on larger screens
      maxW="400px" // Caps the width for medium size
    >
      <Image
        src={product.image}
        alt={product.name}
        h={"62"} // Increased height to fit image better
        w="100%" // Matches box width
        objectFit={"cover"} // Fills the space, cropping excess
        objectPosition="center" // Centers the image
      />
      <Box p={"4"}>
        <Heading as={"h3"} size={"md"} mb={"2"}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} mb={"4"} color={textColor}>
          ${product.price}
        </Text>
        <HStack>
          <IconButton>
            <MdMovieEdit />
          </IconButton>
          <IconButton onClick={() => handleDeleteProduct(product._id)}>
            <MdOutlineDelete />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
