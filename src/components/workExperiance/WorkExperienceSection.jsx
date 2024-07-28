import workExperienceData from "../../data/workExperienceData";
import TopHeading from "../shared/TopHeading";
import SingleWorkExperience from "./SingleWorkExperience";

function WorkExperienceSection() {
  return (
    <section className="bg-primary-bgColor pb-20">
      <div className="container">
        {/* === top heading og the section=== */}
        <TopHeading
          title={"My Work Experience"}
          paragraph={
            "Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system"
          }
        />
        {/* === section content ===== */}
        {
          workExperienceData.map(work=>(<SingleWorkExperience key={work.id} work= {work}/>))
        }

      </div>
    </section>
  );
}

export default WorkExperienceSection;
