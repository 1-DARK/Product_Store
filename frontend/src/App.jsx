import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import Navbar from "./component/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./pages/Update";
function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      <ToastContainer />
    </Box>
  );
}

export default App;
