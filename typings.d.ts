import { Typewriter } from "react-simple-typewriter";


interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference"
  }
}

interface smallImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference"
  }
}

export interface PageInfo extends SanityBody {
  _type: "PageInfo";
  address: string;
  aboutImage: string;
  email: string;
  role: string;
  typewriter: string[];
  heroImage: Image;
  name: string;
  about: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  smallImage: smallImage;
  order: number;
  skillType: string;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  linkToWebsite: string;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  linkToGithub: string;
  summary: string;
  technologies: Technology[]
}

export interface Social extends SanityBody {
  _type: "social"
  title: string;
  url: string;
}