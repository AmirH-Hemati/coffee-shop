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
import Dashboard from "./pages/Dashboard";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ShopingCartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRout />}>
                <Route path="/cart" element={<ShopingCart />} />
                <Route path="/favoriets" element={<Favorites />} />
              </Route>
              <Route element={<ProtectedAdmin />}>
                <Route path="/admin" element={<Dashboard />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ShopingCartProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
