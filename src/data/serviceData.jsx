const serviceData = [
  {
    id: crypto.randomUUID(),
    title: "Front-end Development",
    description: "I am expert in front end development with REACT js",
    icon: "fi-rr-it-alt",
    section: "development",
  },
  {
    id: crypto.randomUUID(),
    title: "Back-end Development",
    description: "I am expert in front end development with Node.js, Express",
    icon: "fi-bs-lesson",
    section: "development",
  },
  {
    id: crypto.randomUUID(),
    title: "Full-stack Development",
    description:
      "I am expert in front end development with REACT.js, php, Laravel",
    icon: "fi-ss-globe-pointer",
    section: "development",
  },
  {
    id: crypto.randomUUID(),
    title: "UI/UX Design",
    description:
      "I can make a user friendly design into a beautiful responsive web page with React.js",
    icon: "fi-rr-browser-ui",
    section: "design",
  },
  {
    id: crypto.randomUUID(),
    title: "Figma to React",
    description:
      "I can turn a Figma design into a beautiful responsive web page with React.js",
    icon: "fi-brands-figma",
    section: "design",
  },
  {
    id: crypto.randomUUID(),
    title: "Xd files to React",
    description:
      "I can turn a XD file design into a beautiful responsive web page with React.js",
    icon: "fi-rs-edit-alt",
    section: "design",
  },
  {
    id: crypto.randomUUID(),
    title: "On Page SEO",
    description: "I can Do the On Page SEO of the website with proper keyword",
    icon: "fi-rs-dashboard",
    section: "marketing",
  },
  {
    id: crypto.randomUUID(),
    title: "Off Page SEO",
    description:
      "I can Do the Off Page SEO of the website like Back Link, Link Building, Robot.txt",
    icon: "fi-rr-cloud-question",
    section: "marketing",
  },
  {
    id: crypto.randomUUID(),
    title: "Wordpress SEO",
    description: "I can Do the On Page SEO of Wordpress websites",
    icon: "fi-brands-wordpress",
    section: "marketing",
  },
];

export function getDevelopmentData() {
  return serviceData.filter((service) => service.section === "development");
}
export function getDesignData() {
  return serviceData.filter((service) => service.section === "design");
}
export function getMarketingData() {
  return serviceData.filter((service) => service.section === "marketing");
}
