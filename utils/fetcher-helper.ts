import { Experience, IcV, PageInfo, Project, Skill, Social } from "../typings";


const dev = process.env.NODE_ENV !== "production";
const BASE_URL = dev ? process.env.NEXT_PUBLIC_BASE_URL : process.env.VERCEL_URL;
export const fetchSkills =async () => {
  const res = await fetch(`${BASE_URL}api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills

  return skills;
};

export const fetchPageInfo = async () => {
  const res = await fetch(`${BASE_URL}api/getPageInfo`);

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};

export const fetchSocials = async () => {
    const res = await fetch(`${BASE_URL}/api/getSocial`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
}

export const fetchProjects =async () => {
  const res = await fetch(`${BASE_URL}api/getProjects`);

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
}

export const fetchExperiences = async () => {
   const res = await fetch(`${BASE_URL}api/getExperience`);

   const data = await res.json();
   const experiences: Experience[] = data.experiences;

   return experiences;
}

export const fetchCv =async () => {
  const res = await fetch(`${BASE_URL}api/getCv`);
  const data = await res.json();
  const cv: IcV = data.cv

  return cv
}