import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFile } from "react-icons/fa";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = { job: Experience };
function ExperienceCard({ job }: Props) {
  console.log("job data", job);
  const orderedTechnologies = job.technologies.sort(
    (a, b) => a.order - b.order
  );
  return (
    <article
      className="mt-2 flex flex-col rounded-md justify-between space-y-4 flex-shrink-0 mx-auto shadow-xl 
      snap-center w-11/12 md:max-w-[700px] xl:h-[625px] text-center
      dark:bg-card bg-cardLight p-5 pb-12 md:p-10 overflow-hidden hover:shadow-2xl transition-transform duration-10 "
    >
      <div className="flex flex-col justify-start items-center">
        <motion.img
          onClick={() => window.open(job.linkToWebsite, "_blank")}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="object-cover object-center cursor-pointer "
          src={urlFor(job?.companyImage).url()}
          style={
            job.company === "WageUp"
              ? { maxWidth: "200px", maxHeight: "100px", marginTop: "-35px" }
              : {
                  width: "75px",
                  height: "75px",
                  marginBottom: "5px",
                  marginTop: "-15px",
                }
          }
          alt="work experience image"
        />
        <div className="px-0 md:px-2">
          <h4
            className="text-3xl font-light cursor-pointer "
            onClick={() => window.open(job.linkToWebsite, "_blank")}
          >
            {job.jobTitle}
          </h4>
          <p
            className="font-bold text-xl mt-2 cursor-pointer "
            onClick={() => window.open(job.linkToWebsite, "_blank")}
          >
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
          <p className="uppercase pt-5  text-sm ">Started: {job.dateStarted}</p>
          {job.dateEnded ? (
            <p className="uppercase mb-5  text-sm  ">Ended: {job.dateEnded}</p>
          ) : (
            <p className="uppercase mb-5  text-sm ">Current Job</p>
          )}
          <ul className="list-disc space-y-4 text-md px-6 lg:px-4  text-left">
            {job.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
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
      </div>
    </article>
  );
}
export default ExperienceCard;
