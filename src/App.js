import { Route, Routes } from "react-router-dom";
import "./App.css";
import Congratulations from "./Onboarding/Congratulations";
import Planning from "./Onboarding/Planning";
import Setup from "./Onboarding/Setup";
import Welcome from "./Onboarding/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Setup" element={<Setup />} />
        <Route path="/Planning" element={<Planning />} />
        <Route path="/Congratulations" element={<Congratulations />} />
      </Routes>
    </div>
  );
}

export default App;
