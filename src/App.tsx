import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import PantryDetail from "./pages/pantry-detail";
import Settings from "./pages/settings";
import AIRecipes from "./pages/ai-recipes";
import UIShowcase from "./pages/uiShowcase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pantry-detail" element={<PantryDetail />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/ai-recipes" element={<AIRecipes />} />
      <Route path="/ui-showcase" element={<UIShowcase />} />
    </Routes>
  );
}

export default App;
