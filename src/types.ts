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
  id: string;
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
  noOfAlumni: number;
  employeeTotal: string;
  followers: number;
  companyType: string;
  onSocialMediaHub: number;
  recruiterDetails: RecruiterDetails[];
  jobDetails: JobDetails[];
};

export type ConnectionWhoWorkHere = {
  id: string;
  connectionImage: string;
};

export type RecruiterDetails = {
  id: string;
  recruiterImage: string;
  recruiterName: string;
  subscribed: string;
  position: string;
  memberSince: string;
  mutualConnectionTotal: number;
};

export type JobDetails = {
  postedOn: string;
  startDate: string;
  closingDate: string;
  placeOfWork: string;
  salaryRange: string;
  responsibilities: JobResponsibilities[];
  qualification: JobQualifications[];
  companyDetails: string;
};

export type JobResponsibilities = {
  id: string;
  responsibility: string;
};

export type JobQualifications = {
  id: string;
  qualify: string;
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

export type NotificationList = {
  id: string;
  isVerified: boolean;
  isNew: boolean;
  isBusiness: boolean;
  isUser: boolean;
  isNewJob: boolean;
  isOnline: boolean;
  isLive: boolean;
  isCurrentlyLive: boolean;
  liveEnded: boolean;
  isPoll: boolean;
  isRepost: boolean;
  liveVideo: string;
  liveThumbnail: string;
  liveTitle: string;
  isCongrats: boolean;
  position: string;
  isFollow: boolean;
  userImage: string;
  userName: string;
  notificationDescription: string;
  notifyTime: string;
  isMyPost: boolean;
  mentioned: boolean;
};
