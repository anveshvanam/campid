import React, { Suspense, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import userContext from "../components/useContext";

function App() {
  const [selectedValue , setSelectedValue] = useState([])

  return (
    <Router>
      <Suspense>
        <userContext.Provider value={[selectedValue, setSelectedValue]}>
          <AppRoutes />
        </userContext.Provider>
      </Suspense>
    </Router>
  );
}

export default App;
