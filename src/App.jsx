import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroTabs from "./components/HeroTabs";
import UpcomingEvents from "./components/UpcomingEvents";
import MemoriesSlider from "./components/MemoriesSlider";
import Destinations from "./components/Destinations";
import PhotoGallery from "./components/PhotoGallery";
import LocalCuisine from "./components/LocalCuisine";
import InteractiveMap from "./components/InteractiveMap";
import PlanTripSection from "./components/PlanTripSection";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import natureBg from "./assets/nature-full.jpg";

// Pages
import ResortsPage from "./pages/ResortsPage";
import HotelsPage from "./pages/HotelsPage";
import TemplesPage from "./pages/TemplesPage";
import BeachesPage from "./pages/BeachesPage";
import WaterfallsPage from "./pages/WaterfallsPage";

function App() {
  return (
    <>
      {/* Navbar with black background only */}
      <div className="bg-black text-white">
        <Navbar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
<div
  className="relative text-white"
  style={{
    backgroundImage: `url(${natureBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
  <div className="relative z-10">
              <HeroTabs />
              <UpcomingEvents />
              <MemoriesSlider />
              <Destinations />
              <PhotoGallery />
              <LocalCuisine />
              <InteractiveMap />
              <PlanTripSection />
            </div>
	    </div>
          }
        />
        <Route path="/resorts" element={<ResortsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/temples" element={<TemplesPage />} />
        <Route path="/beaches" element={<BeachesPage />} />
        <Route path="/waterfalls" element={<WaterfallsPage />} />
      </Routes>

      {/* Footer and Chatbot inside black container */}
      <div className="bg-black text-white">
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}

export default App;
