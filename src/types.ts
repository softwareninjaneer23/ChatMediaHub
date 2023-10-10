//write all the prop types here...

//home feed types
export type Post = {
  id: string;
  content: string;
  image?: string; // string or missing
  likes: Likes[];
  repost: number;
  author: User;
  comments: Comments[];
};

export type Likes = {
  id: string;
  userImage: string;
  likeType: string;
};

export type Comments = {
  commentId: string;
  subscribed: string;
  position: string;
  commentDate: string;
  userName: string;
  userImage: string;
  userComment: string;
  commentLikes: CommentLikes[];
  nestedComment: NestedComment[];
};

export type NestedComment = {
  commentId: string;
  subscribed: string;
  position: string;
  commentDate: string;
  userName: string;
  userImage: string;
  userComment: string;
};

export type CommentLikes = {
  likeId: string;
  likeType: string;
};

//user account types
export type User = {
  id: string;
  name: string;
  position: string;
  image?: string;
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

//my network types
export type JobTitleList = {
  id: number;
  backImage: string;
  userImage: string;
  userName: string;
  userPosition: string;
  userCompany: string;
  userMutualConnections: number;
  openToWork: boolean;
  hasAJob: boolean;
};
export type PeopleYouMayKnowList = {
  id: number;
  backImage: string;
  userImage: string;
  userName: string;
  userPosition: string;
  userCompany: string;
  userMutualConnections: number;
  openToWork: boolean;
  hasAJob: boolean;
};
export type PeopleYouMayKnowInYourLocationList = {
  id: number;
  backImage: string;
  userImage: string;
  userName: string;
  userPosition: string;
  userCompany: string;
  userMutualConnections: number;
  openToWork: boolean;
  hasAJob: boolean;
};
export type GroupsYouMayLikeList = {
  id: number;
  backImage: string;
  groupImage: string;
  groupName: string;
  groupMembers: number;
};

//jobs types
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

export type PeopleCountryList = {
  id: string;
  userProfilePicture: string;
  userCoverImage: string;
  userName: string;
  userBio: string;
  userDescription: string;
  followers: CountryPeopleFollowers[];
};

export type CountryPeopleFollowers = {
  id: string;
  userName: string;
  userPicture: string;
};

export type OnlineEventsList = {
  id: string;
  eventImage: string;
  eventName: string;
  eventStartDate: string;
  eventEndDate: string;
  eventAttendees: number;
  eventConnectionAttendees: EventAttendeesConnection[];
};

export type EventAttendeesConnection = {
  id: string;
  userName: string;
  userPicture: string;
};
