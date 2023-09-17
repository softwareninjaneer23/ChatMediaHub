//write all the prop types here...

export type Post = {
  id: string;
  content: string;
  image?: string; // string or missing
  likes: number;
  author: User;
};

export type User = {
  id: string;
  name: string;
  position: string;
  image?: string; // string or missing
  subscribed: string;
  backImage?: string;
  connections: number;
  about?: string;
  location: string;
  experience?: Experience[];
};

export type Experience = {
  id: number;
  title: string;
  companyName: string;
  companyImage?: string;
  occupationType: string;
  fromDate: string;
  toDate: string;
  duration: string;
  location: string;
  skills?: Skills[];
};

export type Skills = {
  id: number;
  skill: string;
};

export type RecentJobSearch = {
  id: number;
  jobName: string;
  jobLocation: string;
  newJob: boolean;
  jobCount: number;
};

export type RecommendedJobList = {
  id: number;
  companyImage: string;
  jobTitle: string;
  companyName: string;
  companyLocation: string;
  jobType: string;
  activelyRecruiting: boolean;
  postedDate: string;
  isEasyApply: boolean;
  promoted: boolean;
  numberOfApplicants: number;
  connectionWhoWorkHere: ConnectionWhoWorkHere[];
};

export type ConnectionWhoWorkHere = {
  id: number;
  connectionImage: string;
};

export type PremiumJob = {
  id: number;
  userImage: string;
  premiumPeople: PremiumPeople[];
};

export type PremiumPeople = {
  id: number;
  personImage: string;
};

export type PremiumJobList = {
  id: number;
  companyImage: string;
  jobTitle: string;
  companyName: string;
  companyLocation: string;
  jobType: string;
  activelyRecruiting: boolean;
  postedDate: string;
  isEasyApply: boolean;
  promoted: boolean;
  numberOfApplicants: number;
  matchesProfile: boolean;
  userProfile: string;
};
