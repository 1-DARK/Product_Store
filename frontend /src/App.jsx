import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes>
      <ToastContainer />
    </Box>
  );
}

export default App;
