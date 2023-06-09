import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/styles.scss";
import Button from "./components/button";

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
    </div>
  );
}

export default App;
