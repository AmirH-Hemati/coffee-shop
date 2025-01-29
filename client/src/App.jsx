import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductPage from "./pages/ProductPage";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
