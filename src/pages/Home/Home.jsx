import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MenuSection from "./MenuSection";
import PromotionSection from "./PromotionSection";
import ShopSection from "./ShopSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <PromotionSection />
      <ShopSection />
      <BlogSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
