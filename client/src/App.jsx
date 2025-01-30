import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import { ShopingCartProvider } from "./context/ShopingCart";
import ShopingCart from "./pages/ShopingCart";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ShopingCartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<ShopingCart />} />
          </Route>
        </Routes>
      </ShopingCartProvider>
    </QueryClientProvider>
  );
}

export default App;
