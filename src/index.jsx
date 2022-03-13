import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Posts from "./Posts";

function App() {
  return (
    <div className="root">
      <Navbar />
      <div className="corpo">
        <div className="esquerda">
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

let root = document.querySelector(".root");
ReactDOM.render(<App />, root);
