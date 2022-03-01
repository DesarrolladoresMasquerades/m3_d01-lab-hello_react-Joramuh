import "./App.css";

import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <div className="dark-bg">
        <Navbar />
      <div className="headline"> 
        <Headline />
        </div>
      </div>
      <div className="gallery-flex">
        <Gallery />
      </div>
    </div>
  );
}
export default App;