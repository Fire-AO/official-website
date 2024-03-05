import Modal from "react-modal"; // 추가
import Root from "./pages/Root";
import Form from "./components/Form"

import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

Modal.setAppElement("#root"); // 추가

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Root />}
        />

        <Route
          path="/apply"
          element={<Form/> }
        /> 
      </>
    ));

  return <RouterProvider router={router} />
};

export default App;
