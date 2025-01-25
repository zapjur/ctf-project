import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Challenge 3';
  }, []);
  return <AppRoutes/>;
};

export default App;
