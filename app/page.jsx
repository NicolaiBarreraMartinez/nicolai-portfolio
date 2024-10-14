import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-[#FF7A29]">Nicolai Barrera</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m a 💻 Front-End and 📱 iOS Developer, 🌱 currently expanding my expertise by studying AI development
            </p>
            {/* Btn Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
             <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-[#FF7A29] rounded-full flex justify-center items-center text-[#FF7A29] text-base hover:bg-[#FF7A29] hover:text-primary hover:trasnsition-all duration-500"></Social>
             </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo></Photo>
          </div>
        </div>
      </div>
      <Stats></Stats>
    </section>
  );
};

export default Home;
