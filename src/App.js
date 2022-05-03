import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";

function App() {
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div className="App">
      <h1>
        <Profile />
        <Login />
        <br />
        <ChangeColor />
      </h1>
    </div>
  );
}

export default App;
