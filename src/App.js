import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.BASE_NAME || "/coinbase-react"}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
