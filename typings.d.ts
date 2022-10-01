interface SanityBody {
  _createAt:string;
  _id:string;
  _rev:string;
  _updateAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref:string;
    _type: "reference";
  }
}
export interface Cv {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface IcV {
  result: {
    cv: string;
  };
}
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  cv: Cv;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
  projectStatus: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentLyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}


export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;

}