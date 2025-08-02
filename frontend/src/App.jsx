import { useState } from "react";
import { Drawer } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Drawer.Root>
      <Drawer.Backdrop />
      <Drawer.Trigger />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.CloseTrigger />
          <Drawer.Header>
            <Drawer.Title />
          </Drawer.Header>
          <Drawer.Body />
          <Drawer.Footer />
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}

export default App;
