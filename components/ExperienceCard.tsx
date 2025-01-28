import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFile } from "react-icons/fa";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import { MdWeb } from "react-icons/md";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
type Props = {
  job: Experience;
  scroll: (direction: "left" | "right") => void;
  experienceIndex: number;
  experienceLength: number;
};
function ExperienceCard({
  job,
  experienceIndex,
  scroll,
  experienceLength,
}: Props) {
  console.log("job data", job);

  const orderedTechnologies = job.technologies.sort(
    (a, b) => a.order - b.order
  );

  const renderCustomStyles = (company: string) => {
    switch (company) {
      case "WageUp":
        return { maxWidth: "200px", maxHeight: "100px" };
      case "FareHarbor":
        return {
          width: "125px",
          height: "100px",
        };
      default:
        return {
          width: "100px",
          height: "100px",
        };
    }
  };

  return (
    <>
      <div className="h-[80%] flex justify-center items-center md:w-[150px] w-[0px]">
        {experienceIndex > 0 && (
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex justify-center items-center hover:text-accent text-heading animate-pulse mx-2"
          >
            <MdArrowBack size="4em" />
          </button>
        )}
      </div>

      <article className="flex flex-col items-center mt-12 md:mt-6 rounded-md justify-start space-y-7 shadow-lg md:w-[600px]  text-center  dark:bg-card bg-cardLight ">
        <div className="flex flex-col justify-start items-center">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="object-cover object-center cursor-pointer my-5"
            src={urlFor(job?.companyImage).url()}
            style={renderCustomStyles(job.company)}
            alt="work experience image"
          />
          <div className="px-0 md:px-2">
            <h4 className="text-3xl font-light cursor-pointer ">
              {job.jobTitle}
            </h4>
            <p className="font-bold text-xl mt-2 cursor-pointer ">
              {job.company}
            </p>
            <div className="flex flex-wrap justify-center items-center w-full space-x-2 mt-4">
              {orderedTechnologies.map((technology) => (
                <Image
                  className="w-8 h-8 my-2"
                  width={200}
                  height={200}
                  key={technology._id}
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              ))}
            </div>
            <p className="uppercase pt-5  text-sm ">
              Started: {job.dateStarted}
            </p>
            {job.dateEnded ? (
              <p className="uppercase mb-5  text-sm  ">
                Ended: {job.dateEnded}
              </p>
            ) : (
              <p className="uppercase mb-5  text-sm ">Current Job</p>
            )}
            <ul className="list-disc space-y-4 text-md px-8 lg:px-12  text-left">
              {job.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center pb-8">
          <button
            type="button"
            className="projectButton"
            onClick={() =>
              window.open(
                "https://amplify-venu20-dev-131644-deployment.s3.amazonaws.com/Patrick+Poole+Resume.pdf",
                "_blank"
              )
            }
          >
            Read More on Resume
            <FaFile className="text-text ml-2" color="#fff" size={"1em"} />
          </button>
          <button
            type="button"
            className="projectButton"
            onClick={() => window.open(job.linkToWebsite, "_blank")}
          >
            Company Website
            <MdWeb className="text-text ml-2" color="#fff" size={"1.25em"} />
          </button>
        </div>
      </article>
      <div className="h-[80%] flex justify-center items-center md:w-[150px] w-[0px]">
        {experienceIndex < experienceLength - 1 && (
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex  justify-center  items-center hover:text-accent text-heading animate-pulse mx-2"
          >
            <MdArrowForward size="4em" />
          </button>
        )}
      </div>
    </>
  );
}
export default ExperienceCard;
