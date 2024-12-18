import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}
