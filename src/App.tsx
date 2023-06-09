import "./styles/styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./features/home";
import Contact from "./features/contact";
import Layout from "./components/layout";
import NoMatch from "./features/nomatch";
import LoaderPage from "./features/loaderpage";
import ProgressBarPage from "./features/progressbarpage";
import SelectPage from "./features/selectpage";
import Animals from "./features/animals";
import AnimalCreate from "./components/animalcreate";
import AnimalEdit from "./components/animaledit";
import Lotr from "./features/lotr";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="lotr" element={<Lotr />} />
          <Route path="/progress-bar" element={<ProgressBarPage />} />
          <Route path="/loader" element={<LoaderPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="animals" element={<Animals />} />
          <Route path="animals/new" element={<AnimalCreate />} />
          <Route
            path="animals/:animalId"
            element={
              <>
                <AnimalEdit />
              </>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
