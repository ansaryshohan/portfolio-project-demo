const getImageUrl=(companyLogo)=>{
  return new URL(`../assets/${companyLogo}`,import.meta.url).href;
}

const workExperienceData = [
  {
    id:1,
    years: "2021-2022",
    companyLogo: getImageUrl("company1.png"),
    position: "Web Developer Intern",
    location: "Mohakhali,Dhaka",
  },
  {
    id:2,
    years: "2022-2023",
    companyLogo: getImageUrl("company2.png"),
    position: "Junior Web Developer",
    location: "New York,USA",
    jobType: "remote",
  },
  {
    id:3,
    years: "2023-Present",
    companyLogo: getImageUrl("company3.png"),
    position: "Web Developer",
    location: "Malaysia",
  },
];

export default workExperienceData;
