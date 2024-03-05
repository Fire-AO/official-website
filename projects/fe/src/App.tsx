import Modal from "react-modal"; // 추가
import Root from "@/pages/home/page/index";
import Form from "@/pages/apply/page"
import History from "@/pages/history/page/index"

import "@/App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import InitialSetup from "@/common/components/InitialSetup";

Modal.setAppElement("#root"); // 추가

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          element={<InitialSetup />}
        >
          <Route
            path="/"
            element={<Root />}
          />

          <Route
            path="/apply"
            element={<Form />}
          />

          <Route
            path="/History"
            element={<History />}
          />

        </Route>
      </>
    ));

  return <RouterProvider router={router} />
};

export default App;
