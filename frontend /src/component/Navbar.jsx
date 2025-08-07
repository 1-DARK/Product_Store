import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuSun, LuMoon } from "react-icons/lu";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          color={"blue.500"}
        >
          <Link to={"/"}>
            <HStack>
              Product Store <PiShoppingCartSimpleFill />
            </HStack>
          </Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <IconButton variant="outline" size="lg">
              <CiSquarePlus />
            </IconButton>
          </Link>
          <IconButton onClick={toggleColorMode} variant="outline" size="lg">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
