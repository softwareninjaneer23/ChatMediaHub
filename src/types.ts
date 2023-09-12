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
