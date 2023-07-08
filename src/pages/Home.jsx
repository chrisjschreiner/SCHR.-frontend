import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import FeaturedBrands from "../components/FeaturedBrands";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../data";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <ImageSlider slides={SliderData} />
      <Categories />
      <FeaturedBrands />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
