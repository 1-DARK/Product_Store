import { Container, VStack, HStack, Text } from "@chakra-ui/react";
import { IoRocketOutline } from "react-icons/io5";

import React from "react";

const Homepage = () => {
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
      </VStack>
    </Container>
  );
};

export default Homepage;
