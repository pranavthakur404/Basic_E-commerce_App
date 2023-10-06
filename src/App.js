import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login, Cart, Error, SearchItems, Home, ProductDetails } from "./pages";
import RootLayout from "./root_layout/RootLayout";
import { loader as fetchAllProduct } from "./pages/Home";
import { useAuth } from "./contexts/AuthProvider";
import { loader as cartLoader } from "./pages/Cart";
import { loader as singleProductDetails } from "./pages/ProductDetails";

function App() {
  const { isLogin, setIsLogin } = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          loader={(args) => {
            return fetchAllProduct(args, { isLogin: isLogin });
          }}
          element={<Home />}
        />
        <Route
          path="/cart"
          loader={(args) => {
            return cartLoader(args, { isLogin: isLogin });
          }}
          element={<Cart />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchItems />} />
        <Route
          path="/products/:id"
          loader={(args) => {
            return singleProductDetails(args, { isLogin: isLogin });
          }}
          element={<ProductDetails />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
