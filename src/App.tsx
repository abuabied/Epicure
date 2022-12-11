import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/layout/Layout';
import { Home } from './pages/home/Home';
import { Restaurants } from './pages/restaurants/Restaurants';
import { Chefs } from './pages/chefs/Chefs';
import { ContactUs } from './pages/contact_us/ContactUs';
import { TermsOfUse } from './pages/terms_of_use/TermsOfUse';
import { PrivacyPolicy } from './pages/privacy_policy/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
