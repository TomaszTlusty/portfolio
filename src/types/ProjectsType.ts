export enum Tag {
  web = "Web",
  security = "Security",
  hardware = "Hardware",
}

export type ProjectType = {
  title: string;
  description: string;
  href: string;
  github: string;
  demo: string;
  tag: Tag[];
};
