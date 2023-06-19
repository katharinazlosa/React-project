import "./styles/styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./features/home";
import Contact from "./features/contact";
import Layout from "./components/layout";
import NoMatch from "./features/nomatch";
import ProgressBar from "./features/progressbar";
import Loader from "./features/loader";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/progress-bar" element={<ProgressBar />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
