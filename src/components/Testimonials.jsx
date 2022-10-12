import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-4 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People have <br className="sm:block hidden" /> opinion about me
      </h2>
      <div className="w-full md:mt-0 mt-6 ml-auto">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you might want to hear from other, that what 
          things i would offer and how willingly i do put efforts.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
