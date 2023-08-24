import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Terms  from "./terms/Terms";


const App = () => {
  return (
  <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="/terms" element={<Terms />} />
    </Routes>     
  </BrowserRouter>
  );
};

export default App;
