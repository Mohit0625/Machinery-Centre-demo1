/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { Quote } from "./pages/Quote";
import { Contact } from "./pages/Contact";
import { Feedback } from "./pages/Feedback";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import { Trendi } from "./pages/Trendi";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="trendi" element={<Trendi />} />
          <Route path="services" element={<Services />} />
          <Route path="quote" element={<Quote />} />
          <Route path="contact" element={<Contact />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
