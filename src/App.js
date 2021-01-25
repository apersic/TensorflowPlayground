import "./static/style/style.scss";
import { Sidebar } from "./common/Sidebar";
import { Router } from "./Routing/Router";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router />
    </div>
  );
}

export default App;
