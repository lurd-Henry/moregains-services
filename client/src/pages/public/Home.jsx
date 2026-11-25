import { useEffect, useState } from "react";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import Footer from "../../components/landing/Footer";
import api from "../../services/api";

function Home() {
  const [apiStatus, setApiStatus] = useState("checking");

  useEffect(() => {
    api
      .get("/api/health")
      .then(() => setApiStatus("online"))
      .catch(() => setApiStatus("offline"));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />

      <div className="api-status">
        <span
          className={`status-dot ${
            apiStatus === "online" ? "online" : ""
          }`}
        />

        {apiStatus === "online"
          ? "Moregains Services is online"
          : apiStatus === "checking"
          ? "Connecting to Moregains..."
          : "Service temporarily unavailable"}
      </div>

      <Footer />
    </>
  );
}

export default Home;
