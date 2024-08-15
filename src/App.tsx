import "./App.css";
import ChessboardDisplay from "./components/ChessBoardDisplay";
import SideMenu from "./components/LeftSideNavbar/LeftSideNavbar";
import Navbar from "./components/NavBar/Navbar";

export default function App() {
  return (
    <div>
      <SideMenu />
      <Navbar />
      <ChessboardDisplay />
    </div>
  );
}
