import styles from "../style";
import { fullstack, hero3 } from "../assets";


// import GetStarted from "./GetStarted";
// import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-2 ${styles.flexStart} flex-col xl:px-0 sm:px-3 px-6 py-6 `}>
        <div className="flex flex-row items-center py-[4px] px-10 bg-discount-gradient rounded-[10px] mb-4">
          <img src={fullstack} alt="discount" className="w-[28px] h-[28px]" />
          <p className={`${styles.paragraph} ml-4 py-2`}>
            Full Stack Developer{" "}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[60px] leading-[75px]">
            Hello, I'm Naresh 👋<br className="sm:block hidden" />{" "}
            <span className="text-gradient">a Software Developer</span>{" "}
          </h1>
          
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        with expertise building <span className="text-white">Blockchain</span> , mobile, and web applications. 
        Skilled in <span className="text-white">Agile Workflow</span>, Data Structures and Algorithms, Operating Systems, and<span className="text-white"> DevOps</span> . 
        Currently seeking to master blockchain Technology.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <div id="myscene" >
          {/* <Spline scene="https://prod.spline.design/zWtkHgDkcI2ImRBz/scene.splinecode" /> */}
          <img src={hero3} alt="" />
        </div>




        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>      
    
    </section>
  );
};

export default Hero;
