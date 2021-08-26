type SNS = {
  name: string;
  url: string;
};

const twitter: SNS = {
  name: "Twitter",
  url: "https://twitter.com/snamiki1212",
};

const github: SNS = {
  name: "GitHub",
  url: "https://github.com/snamiki1212",
};

export const SNS_LIST: SNS[] = [github, twitter];

export const TWITTER_URL = twitter.url;
