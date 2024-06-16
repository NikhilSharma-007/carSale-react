import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import CarList from "./components/CarList.jsx";
import CarDetails from "./components/CarDetails.jsx";
import RootLayout from "./components/RootLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<CarList />} />
      <Route path="car/:id" element={<CarDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
