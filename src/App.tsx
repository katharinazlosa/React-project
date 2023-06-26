import "./styles/styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./features/home";
import Contact from "./features/contact";
import Layout from "./components/layout";
import NoMatch from "./features/nomatch";
import LoaderPage from "./features/loaderpage";
import ProgressBarPage from "./features/progressbarpage";
import SelectPage from "./features/selectpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/progress-bar" element={<ProgressBarPage />} />
          <Route path="/loader" element={<LoaderPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
