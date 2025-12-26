import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectSingle = ({ title, category, image, tags, url, github }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      {/* <Link to="/projects/single-project" aria-label="Single Project"> */}
      <div className="h-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <div>
          <img
            src={image}
            className="rounded-t-xl border-none"
            alt="Single Project"
          />
        </div>
        <div className="text-center px-4 py-6">
          <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-6">
            {title}
          </p>
          {/* <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {category}
          </span> */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              wordBreak: "break-word",
              whiteSpace: "normal",
            }}
            className="mb-6"
          >
            {tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  maxWidth: "100%",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
                className="px-3 py-1 p-2 text-sm rounded-full border border-white bg-purple-100 text-ternary-dark dark:text-ternary-light"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-lg text-ternary-dark dark:text-ternary-light border border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900 transition"
            >
              <FiGithub />
              Code
            </a>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-lg text-ternary-dark dark:text-ternary-light border border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900 transition"
            >
              View Site
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </motion.div>
  );
};

export default ProjectSingle;
