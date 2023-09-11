//write all the prop types here...

export type Post = {
  id: string;
  content: string;
  image?: string; // string or missing
  likes: number;
};

export type User = {
  id: string;
  name: string;
  position: string;
  image?: string; // string or missing
};
