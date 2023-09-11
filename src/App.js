import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
// import Parent from "./components/Parent/Parent";
// import Product from "./components/Prodcut/Product";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Product from "./components/Shop/Shop";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  const routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "contactUs",
          element: <ContactUs />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
    // <div className="App">
    //   {/* <Home />
    //   <About />
    //   <ContactUs />
    //   <Parent />
    //   <Product /> */}
    // </div>
  );
}

export default App;
