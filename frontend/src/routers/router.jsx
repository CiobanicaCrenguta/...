import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import CategoryPage from '../pages/category/CategoryPage';
import Search from '../pages/search/Search';
import ShopPage from '../pages/shop/ShopPage';
import SingleProduct from '../pages/shop/productDetails/SingleProduct';
import PrivacyPolicy from '../pages/policy/PrivacyPolicy'; 
import TermsAndConditions from '../pages/policy/TermsAndConditions';
import CookiePolicy from '../pages/policy/CookiePolicy';
import ReturnPolicy from '../pages/policy/ReturnPolicy';
import ContactPage from '../pages/policy/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/categories/:categoryName', element: <CategoryPage /> },
      { path: '/search', element: <Search /> },
      { path: '/Magazin', element: <ShopPage /> },
      { path: '/product/:productId', element: <SingleProduct /> },
      { path: '/politica-confidentialitate', element: <PrivacyPolicy /> },
      { path: '/termeni-si-conditii', element: <TermsAndConditions /> },
      { path: '/politica-cookies', element: <CookiePolicy /> },
      { path: '/politica-retur', element: <ReturnPolicy /> },
      { path: '/contact', element: <ContactPage /> },
       
    ],
    errorElement: <div>404 - Page Not Found</div>,
  },
]);

export default router;
