import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// Layouts
import LandingLayout from "@layouts/landingLayout/index.jsx";

// Pages
import HomePage from "@pages/home/index.jsx";
import ValentineConfirmation from "@pages/confirmation/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/valentine-confirmation"
            element={<ValentineConfirmation />}
          />
          <Route path="*" element={<p>Error Page</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
