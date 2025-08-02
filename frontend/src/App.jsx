import { useState } from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/create" element={<createpage></createpage>}></Route>
        </Routes>
      </Navbar>
    </Box>
  );
}

export default App;
