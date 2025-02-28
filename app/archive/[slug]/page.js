import React from "react";
import ProjectPage from "../../../components/pages/ProjectPage";

export const generateMetadata = async ({params}) => {
  const id = (await params).slug;
  const title = decodeURIComponent(id);
  return {
    title: `${title} | Yong Zhuo`,
    description: `Yong Zhuo's Portfolio Website - ${title}`,
  };
};

const Page = () => {
  return <ProjectPage />;
};

export default Page;
