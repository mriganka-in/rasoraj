import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Key_Features from "@/components/key_features";
import Excellence from "@/components/special";
import Awards_Certification from "@/components/awards_certification";
import Sweets from "@/components/sweets";
import Savories from "@/components/savories";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";
import Login from "@/app/login";
import Register from "@/app/signup";


export default function Home() {
  return (
    <div className="bg-[#F5E5CB] text-black overflow-hidden">
        <Navbar />
        <Banner />
        <Key_Features />
        <Excellence />
        <Awards_Certification />
        <Sweets />
        <Savories />
        <Contact />
        <Footer />
        <hr />
        <Copyright />
        {/* <Login />
        <Register /> */}
    </div>
  );
}
