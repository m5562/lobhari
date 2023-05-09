import "./App.css";
import Topbar from "./comps/Topbar";

const App = () => {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="content">
        <div className="product-card-holder">
          <div className="product-card">
            <img src="https://picsum.photos/200/300" alt="product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
