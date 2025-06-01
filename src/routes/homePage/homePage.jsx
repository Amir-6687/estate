import "./homePage.scss";
import SearchBar from "../../component/Navbar/searchBar/SearchBar";
function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find your dream home with us</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            aliquid consectetur sint laboriosam pariatur blanditiis repellat sit
            tenetur. Eius excepturi laboriosam minima soluta omnis debitis?
            Voluptates autem ipsa repellat rem.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
