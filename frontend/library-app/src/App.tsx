import "./App.css";
import { ExploreTopBooks } from "./layouts/Homepage/ExploreTopBooks";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
    </div>
  );
}

export default App;
