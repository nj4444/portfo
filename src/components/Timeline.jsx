
import { layout } from "../style";

import { Experience } from "../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


// import { useState } from "react";


// const [isActive, setIsActive] = useState(false);


const Timline = () =>  (
  <>
    <section id="experience" className={layout.sectionInfo}>

    <section className="w-full flex items-center justify-center">


            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      // background: "rgba(51, 52, 54, 0.2)",
                      
                      color: "rgb(193, 187, 187)",
                      borderRadius: "24px",
                      WebkitBackdropFilter:"blur(18px)",
                      boxShadow: "rgba(0,0,0, 0.75) 0px 5px 30px 10px",
                      }}
                    contentArrowStyle={{
                      borderRight: "7px solid  #888",
                    }}
                    date={n.date}
                    iconStyle={{ 
                      background: "linear-gradient( 144.39deg, #ffffff -278.56%,#6d6d6d -78.47%, #11101d 91.61%)",
                      backdropFilter: "blur(25px)",
                      WebkitBackdropFilter:"blur(25px)",

                      color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="font-poppins font-semibold xs:text-[28px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full vertical-timeline-element-title text-gradient ">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p className="vertical-timeline-element-description" >{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>
      </section>
  </>
  
);

export default Timline;
