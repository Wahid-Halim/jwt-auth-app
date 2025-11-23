import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import PokemonCards from "./PokemonCards";
import Nav from "../components/Nav";
import ProtectedRoute from "../components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PokemonCards />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
