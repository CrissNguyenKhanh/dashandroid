import Content from "./components/content";
import Profile from "./components/profile";
import Sidebar from "./components/sidebar";
import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Content />
        <Profile />
      </div>
    </div>
  );
}

export default App;
