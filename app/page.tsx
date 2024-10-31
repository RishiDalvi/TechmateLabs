import Image from "next/image";
import { BackgroundBoxes } from "@/components/background-boxes";

export default function Home() {
  return (
    <div className="overflow-x-hidden">

    <div className="bg-[url('/assets/images/image1.jpg')] bg-cover bg-center h-screen w-full overflow-x-hidden">
      <div className="relative m-0 p-0 flex flex-col justify-center items-center">
        <Image src={"/assets/images/logo.png"} height={300} width={300} alt={"logo"} className="m-0 p-0 sm:w-50 sm:h-50"></Image>
        <div style={{ fontFamily: "Tenada" }} className="sm:text-7xl text-3xl text-white p-3">TECHMATE</div>
        <div style={{ fontFamily: "VampireWars" }} className="sm:text-3xl text-xl p-3 dark:text-blue-500 text-blue-600">Empowering Skills, Building Futures: A Community for Growth, Connection, and Success in Tech</div>
      </div>
    </div>

    <div className="h-full w-screen overflow-x-hidden sm:p-4 p-3 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-blue-600 font-sans font-bold">Purpose</h1>
        <span className="sm:text-2xl text-xl md:m-0 m-4 md:p-3 p-0 font-serif">To empower students by offering job placements, internships, startup opportunities, and valuable learning experiences. To build a strong tech community at Sinhgad Institute and beyond through hackathons, projects, and team activities. To make education inclusive with free, open-source content, ensuring everyone can access the latest technology knowledge. Ultimately, to develop the next generation of tech leaders who innovate and create meaningful solutions for the world.</span>
        <Image src={"/assets/images/image8.png"} height={800} width={800} alt={"logo"} className="m-0 p-0 sm:w-50 sm:h-50 rounded-2xl"></Image>
        <h1 className="sm:text-5xl text-2xl dark:text-green-800 text-green-600 m-3 p-4">&quot;Let&apos;s Work Together&quot;</h1>
    </div>
    
    <div className="h-4/5 w-screen overflow-x-hidden sm:p-2 p-2 flex flex-col justify-center items-center">
        <BackgroundBoxes/>
    </div>
    
    </div>
  );
}
