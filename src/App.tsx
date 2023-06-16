import "./styles/styles.scss";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./features/home";
import Contact from "./features/contact";
import Layout from "./components/layout";
import NoMatch from "./features/nomatch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
