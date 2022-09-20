import { Routes, Route } from "react-router-dom";

// Global Styles
import GlobalStyle from "./globalStyles";

// Pages
import Dashboard from "./pages/dashboard";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="app" element={<Dashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
