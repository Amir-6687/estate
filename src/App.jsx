import Navbar from "./component/Navbar/Navbar";
import "./layout.scss";
import HomePage from "./routes/homePage/homePage"; // اضافه کردن این خط

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
