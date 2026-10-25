import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
    <div className="pageparent">
      <div className="fullpagecontainer">
        <Navbar/>
        <Hero/>
      </div>
      
    </div>
    </>
  );
}
