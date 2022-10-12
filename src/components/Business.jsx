import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { hero4} from "../assets";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Why Hire Me For Next <br className="sm:block hidden" />
        Project ?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Since, i have been continously coping up with tech trend,
        I can help you to build modern engaging app or Services.
        I have made lot of meaningful contributions.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div id="hero4" className={`${layout.sectionInfo} `}>
      <img src={hero4} alt="" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
