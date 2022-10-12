import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";


const ProjectCard = () => (
  // <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    
  // </section>
  <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
          >
            {Projects &&
              Projects.map((n, i) => (
                <motion.div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>

                  <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    <a href={n.github}>
                      <motion.div whileTap={{ scale: 0.5 }}>
                        {/* <IoLogoGithub className="text-textBase text-3xl cursor-pointer" /> */}
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              ))}
    </section>
);

export default ProjectCard;
