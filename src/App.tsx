import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/public/HomePage";
import AboutPage from "./pages/public/AboutPage";
import MenuPage from "./pages/public/MenuPage";
import ContactPage from "./pages/public/ContactPage";
import EventsPage from "./pages/public/EventsPage";
import GalleryPage from "./pages/public/GalleryPage";
import ReservationsPage from "./pages/public/ReservationsPage";
import BookPage from "./pages/public/BookPage";
import PrivateDiningPage from "./pages/public/PrivateDiningPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/private-dining" element={<PrivateDiningPage />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
