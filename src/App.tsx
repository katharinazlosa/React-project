import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/styles.scss";
import Button from "./components/button";
import ModalWindow from "./components/modal";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     // element: <Home />,
  //   },
  // ]);

  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <h1>Hello!</h1>
      <Button text="Click me" color="blue" />
      <ModalWindow title="Modal window" paragraph="Neki tekst" />
    </div>
  );
}

export default App;
