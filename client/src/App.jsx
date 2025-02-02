import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import { ShopingCartProvider } from "./context/ShopingContext";
import ShopingCart from "./pages/ShopingCart";
import ProtectedRout from "./ui/ProtectedRout";
import Favorites from "./pages/Favorites";
import { AuthContextProvider } from "./context/AuthContext";
import NotFound from "./pages/NotFound";
import ProtectedAdmin from "./ui/ProtectedAdmin";
import LayoutAdminPage from "./ui/LayoutAdminPage";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Users from "./pages/Users";
import { FavoriteContextProvider } from "./context/FavoriteContext";
import Setting from "./pages/Setting";
import ChangePassword from "./pages/ChangePassword";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <FavoriteContextProvider>
          <ShopingCartProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRout />}>
                  <Route path="/cart" element={<ShopingCart />} />
                  <Route path="/favoriets" element={<Favorites />} />
                  <Route path="/setting" element={<Setting />} />
                  <Route path="/changePassword" element={<ChangePassword />} />
                </Route>
                <Route element={<ProtectedAdmin />}>
                  <Route element={<LayoutAdminPage />}>
                    <Route path="/adminDashboard" element={<Dashboard />} />
                    <Route path="/addProduct" element={<AddProduct />} />
                    <Route path="/edit" element={<EditProduct />} />
                    <Route path="/users" element={<Users />} />
                  </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </ShopingCartProvider>
        </FavoriteContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
