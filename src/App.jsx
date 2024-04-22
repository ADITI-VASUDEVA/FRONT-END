import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardStart from "./pages/DashboardStart";
import Dashboard from "./pages/Dashboard";
import InventoryPage from "./pages/InventoryPage";
import NewProductPage from "./pages/NewProductPage";
import ViewpdtPAGE from "./pages/ViewpdtPAGE";
import EditStockPage from "./pages/EditStockPage";
import OrderPage from "./pages/OrderPage";
import ViewOrderPage from "./pages/ViewOrderPage";
import CartPage from "./pages/CartPage";
import EditOrderPage from "./pages/EditOrderPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import EditCartPage from "./pages/EditCartPage";
import PartnerPage from "./pages/PartnerPage";
import NewPartnerPage from "./pages/NewPartnerPage";
import Profile from "./pages/Profile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/register-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-start":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/inventory-page":
        title = "";
        metaDescription = "";
        break;
      case "/new-product-page":
        title = "";
        metaDescription = "";
        break;
      case "/viewpdt-page":
        title = "";
        metaDescription = "";
        break;
      case "/edit-stock-page":
        title = "";
        metaDescription = "";
        break;
      case "/order-page":
        title = "";
        metaDescription = "";
        break;
      case "/view-order-page":
        title = "";
        metaDescription = "";
        break;
      case "/cart-page":
        title = "";
        metaDescription = "";
        break;
      case "/edit-order-page":
        title = "";
        metaDescription = "";
        break;
      case "/create-order-page":
        title = "";
        metaDescription = "";
        break;
      case "/edit-cart-page":
        title = "";
        metaDescription = "";
        break;
      case "/partner-page":
        title = "";
        metaDescription = "";
        break;
      case "/new-partner-page":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/dashboard-start" element={<DashboardStart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory-page" element={<InventoryPage />} />
      <Route path="/new-product-page" element={<NewProductPage />} />
      <Route path="/viewpdt-page" element={<ViewpdtPAGE />} />
      <Route path="/edit-stock-page" element={<EditStockPage />} />
      <Route path="/order-page" element={<OrderPage />} />
      <Route path="/view-order-page" element={<ViewOrderPage />} />
      <Route path="/cart-page" element={<CartPage />} />
      <Route path="/edit-order-page" element={<EditOrderPage />} />
      <Route path="/create-order-page" element={<CreateOrderPage />} />
      <Route path="/edit-cart-page" element={<EditCartPage />} />
      <Route path="/partner-page" element={<PartnerPage />} />
      <Route path="/new-partner-page" element={<NewPartnerPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
