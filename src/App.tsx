import Players from "./pages/Players";
import Player from "./pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/players">
          <Route index element={<Players />} />
          <Route path=":playerId" element={<Player />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
