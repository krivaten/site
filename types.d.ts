declare module "@flowershow/remark-wiki-link";
interface IPost {
  title: string;
  banner?: string;
  date: string | Date;
  description?: string;
  updated?: string | Date;
  created?: string | Date;
  categories?: string;
  tags?: string[];
  children?: React.ReactNode;
  urlPath: string;
}
