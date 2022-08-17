import reactImg from "../images/RE-react.png";
import reactNativeImg from "../images/RE-iOS.png";
import bootstrapImg from "../images/RE-bootstrap.png";
import ht_detail from "../images/HT-unit-detail.png";
import ht_unit from "../images/HT-unit-list.png";
import ht_login from "../images/HT-login.png";
import MT_TL from "../images/MT_time_line_tab.png";
import MT_DM from "../images/MT_conversation.png";
import MT_USR from "../images/MT_nav.png";
import MT_main from "../images/MT_main.png";

export interface ProjectType {
  title: string;
  about: string;
  carousel: { src: string; altText: string; caption: string; key: number }[];
  info: { github: string; linkTitle: string; tags: string; key: number }[];
}

export const REs = {
  title: "Rebuild Electronics",
  about:
    "A simulated project that was made for an E-commerce website. 2 versions of the website were made using Bootstrap and React. A mobile app was made using React Native. The server side was made using Express.",
  carousel: [
    {
      src: reactImg,
      altText: "React App",
      caption: "React App",
      key: 1,
    },
    {
      src: reactNativeImg,
      altText: "React Native App",
      caption: "React Native App",
      key: 2,
    },
    {
      src: bootstrapImg,
      altText: "Bootstrap page",
      caption: "Bootstrap page",
      key: 3,
    },
  ],
  info: [
    {
      github: "https://github.com/hayato1234/E-commerce-bootstrap",
      linkTitle: "Webpage with Bootstrap",
      tags: "Bootstrap, SASS, JavaScript, jQuery, CSS, HTML",
      key: 1,
    },
    {
      github: "https://github.com/hayato1234/E-commerce-React",
      linkTitle: "Webpage with React",
      tags: "React, Redux, Reactstrap, Thunk",
      key: 2,
    },
    {
      github: "https://github.com/hayato1234/ReactNative-Typescript-Ecommerce",
      linkTitle: "React Native App",
      tags: "React Native, TypeScript, Redux toolkit, Expo",
      key: 3,
    },
    {
      github: "https://github.com/hayato1234/Server-for-E_commerce",
      linkTitle: "REST Server",
      tags: "NodeJS, Express, MongoDB, Mongoose, RESTful, OAuth 2.0, JWT/Passport, CORS, ejs",
      key: 4,
    },
  ],
};

export const HT = {
  title: "HayaTan (Vocabulary Learning iOS App)",
  about:
    "A flash card app for Japanese students learning business English vocabulary. Users can register/login using a Google account and study vocabulary in 5 units (5 being the most advanced). The words are saved in the Google firebase store and records user's missed words.",
  carousel: [
    {
      src: ht_detail,
      altText: "Vocab screen",
      caption: "Vocab screen",
      key: 1,
    },
    {
      src: ht_unit,
      altText: "Unit list",
      caption: "Unit list",
      key: 2,
    },
    {
      src: ht_login,
      altText: "Google login page",
      caption: "Google login page",
      key: 3,
    },
  ],
  info: [
    {
      github: "https://github.com/hayato1234/HT",
      linkTitle: "HayaTan App",
      tags: "SwiftUI, Xcode, iOS app, firebase",
      key: 1,
    },
  ],
};

export const NUCAMPSITE = {
  title: "NUCAMPSITE",
  about:
    "This was a shool project. This project helped me better understand things I learned during the lectures like React and especially Redux.",
  carousel: [],
  info: [
    {
      github: "https://github.com/hayato1234/React-Redux-Reactstrap",
      linkTitle: "NuCampsite",
      tags: "React, Reactstrap, Redux",
      key: 1,
    },
  ],
};

export const MORITWITTER = {
  title: "MORITWITTER",
  about:
    "A custom Twitter client app for Twitter. Users can enjoy message-like interface for tweets and know the tweets which are not yet read by the user. Multiple accounts login supported",
  carousel: [
    {
      src: MT_main,
      altText: "Follower list screen",
      caption: "Follower list screen",
      key: 1,
    },
    {
      src: MT_TL,
      altText: "Timeline",
      caption: "Timeline",
      key: 2,
    },
    {
      src: MT_DM,
      altText: "Direct messages",
      caption: "Direct messages",
      key: 3,
    },
    {
      src: MT_USR,
      altText: "Account list",
      caption: "Account list",
      key: 3,
    },
  ],
  info: [
    {
      github: "https://github.com/hayato1234/MoriTwitter",
      linkTitle: "MoriTwitter",
      tags: "Java, Android, Twitter API, butterknife",
      key: 1,
    },
  ],
};
