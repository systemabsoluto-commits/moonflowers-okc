import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFab from "@/components/WhatsAppFab";
import HomePage from "@/pages/HomePage";
import OccasionsPage from "@/pages/OccasionsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import FaqPage from "@/pages/FaqPage";
import SympathyPage from "@/pages/SympathyPage";
import BoxFlowersPage from "@/pages/BoxFlowersPage";
import { OccasionCategoryPage } from "@/pages/CategoryPages";
import NotFoundPage from "@/pages/NotFoundPage";
import { site } from "@/data/site";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const map: Record<string, string> = {
      "/": `${site.name} | Flower Delivery in Oklahoma City`,
      "/occasions": `Occasions | ${site.name}`,
      "/occasions/:slug": `Occasions | ${site.name}`,
      "/box-flowers": `Box Flowers | ${site.name}`,
      "/sympathy": `Funeral & Sympathy Flowers | ${site.name}`,
      "/about": `About | ${site.name}`,
      "/contact": `Contact | ${site.name}`,
      "/faq": `FAQ | ${site.name}`,
    };
    document.title = map[pathname] ?? site.name;
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/occasions" element={<OccasionsPage />} />
          <Route path="/occasions/:slug" element={<OccasionCategoryPage />} />
          <Route path="/box-flowers" element={<BoxFlowersPage />} />
          <Route path="/sympathy" element={<SympathyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
