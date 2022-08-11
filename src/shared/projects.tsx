import reactImg from "../images/RE-react.png";
import reactNativeImg from "../images/RE-iOS.png";
import bootstrapImg from "../images/RE-bootstrap.png";
import ht_detail from "../images/HT-unit-detail.png";
import ht_unit from "../images/HT-unit-list.png";
import ht_login from "../images/HT-login.png";

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
  about: "Flash card app",
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
