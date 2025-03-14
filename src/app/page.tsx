import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Key_Features from "@/components/key_features";
import Excellence from "@/components/special";
import Awards_Certification from "@/components/awards_certification";
import Sweets from "@/components/sweets";
import Login from "@/app/login";
import Register from "@/app/signup";


export default function Home() {
  return (
    <div className="bg-[#f0f8ff] text-black overflow-hidden">
        <Navbar />
        <Banner />
        <Key_Features />
        <Excellence />
        <Awards_Certification />
        <Sweets />
        {/* <Login />
        <Register /> */}
    </div>
  );
}
