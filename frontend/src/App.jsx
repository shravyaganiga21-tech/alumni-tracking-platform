import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AlumniDirectory from "./pages/AlumniDirectory";
import Opportunities from "./pages/Opportunities";
import Events from "./pages/Events";
import AlumniProfile from "./pages/AlumniProfile";
import OpportunityDetails from "./pages/OpportunityDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alumni" element={<AlumniDirectory />} />
        <Route path="/alumni/:id" element={<AlumniProfile />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route
  path="/opportunities/:id"
  element={<OpportunityDetails />}
/>
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;