import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx"; // Import the Layout component
import Home from "./pages/Home.tsx";
// import Team from "./pages/Team.tsx";
import Campaigns from "./pages/Campaigns.tsx";
import Contact from "./pages/Contact.tsx";
import Donate from "./pages/Donate.tsx";
import Event from "./pages/Event.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import PrivacyPolicy from "./pages/Privacy.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="team" element={<Team />} /> */}
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="event/:id" element={<Event/>} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />

          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
