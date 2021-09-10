type Collaboration = {
  name: string;
  link: string;
  logo: string;
};

const FROG: Collaboration = {
  name: "Frog",
  link: "https://frogagent.com/",
  logo: "/assets/collaborations_Frog.png",
};

const COS: Collaboration = {
  name: "COS",
  link: "https://cosvancouver.com/",
  logo: "/assets/collaborations_COS.png",
};

export const collaborations = [FROG, COS];
