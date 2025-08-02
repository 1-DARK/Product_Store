import { useState } from "react";

import "./index.css";
import App from "./App.jsx";
function App() {
  return (
    <Steps.Root>
      <Steps.List>
        <Steps.Item>
          <Steps.Trigger>
            <Steps.Indicator />
            <Steps.Title />
            <Steps.Description />
          </Steps.Trigger>
          <Steps.Separator />
        </Steps.Item>
      </Steps.List>
      <Steps.Content />
      <Steps.CompletedContent />
      <Steps.PrevTrigger />
      <Steps.NextTrigger />
    </Steps.Root>
  );
}

export default App;
