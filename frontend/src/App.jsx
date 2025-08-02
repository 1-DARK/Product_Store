import { useState } from "react";
import { Drawer } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Stack maxW="320px">
      <For each={["subtle", "surface", "outline"]}>
        {(variant) => (
          <CheckboxCard.Root
            defaultChecked
            key={variant}
            variant={variant}
            colorPalette="teal"
          >
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control>
              <CheckboxCard.Label>Checkbox {variant}</CheckboxCard.Label>
              <CheckboxCard.Indicator />
            </CheckboxCard.Control>
          </CheckboxCard.Root>
        )}
      </For>
    </Stack>
  );
}

export default App;
