import {
  reactImg,
  reactNativeImg,
  bootstrapImg,
  ht_detail,
  ht_unit,
  ht_login,
  MT_TL,
  MT_DM,
  MT_USR,
  MT_main,
  NC_home,
  NC_detail,
  NF_playing,
  NF_main_list,
  NCS_main,
  NCS_campsites,
} from "../images";

export interface ProjectType {
  title: string;
  about: string;
  carousel: { src: string; altText: string; caption: string; key: number }[];
  info: { github: string; linkTitle: string; tags: string; key: number }[];
}

export const REs = {
  title: "Rebuild Electronics",
  about:
    "A project which was built for simulated E-commerce service. 2 versions of websites were built using Bootstrap and React. The state management was done by Redux. A mobile app version was made using React Native. The server side was built using Express and MongoDB.",
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
    "An iOS app for Japanese students learning business English vocabulary on iPads. Users can register/login using a Google account and study vocabulary in 5 units containing more than 1000 English words (unit 5 being the most advanced). The words are saved in the Google firebase store, and each user's missed words will be recorded in the store. The app was built using SwiftUI.",
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
    "This was a school project. This project helped me better understand things I learned during the lectures, like React and especially Redux.",
  carousel: [
    {
      src: NC_home,
      altText: "home screen",
      caption: "Home screen",
      key: 1,
    },
    {
      src: NC_detail,
      altText: "Campsite detail",
      caption: "Campsite detail",
      key: 2,
    },
  ],
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
    "A custom Twitter client app for Android. Users can enjoy a message-like interface for tweets and know the latest tweets which are not yet read by the user. Multiple account login supported.",
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

export const NOTIFLASH = {
  title: "NOTIFLASH",
  about:
    "A flash card app for android. The content will show up in the notification bar when they start the app, and users can study vocabulary while loading another app or waiting for messages to come back etc. by going to the notification bar without needing to close the app. ",
  carousel: [
    {
      src: NF_playing,
      altText: "Notification Screen",
      caption: "Notification Screen",
      key: 1,
    },
    {
      src: NF_main_list,
      altText: "Main List",
      caption: "Main List",
      key: 2,
    },
  ],
  info: [
    {
      github: "https://github.com/hayato1234/NotificationFlashCard",
      linkTitle: "NotiFlash",
      tags: "Java, Android, Notification, Espresso",
      key: 1,
    },
  ],
};

export const NUCAMPSERVER = {
  title: "NUCAMPSERVER",
  about:
    "This was a school project. This project deepened my understanding of the backend development. The API was managed using Express.js, and the database was with MongoDB and Mongoose. There are preloaded campsites data in the database and client apps can access the data using GET, POST, PUT and DELETE. The MongoDB database is managed by Mongoose. Users can add comments to the database when logged in. An account can be created using an email and password or through Google Auth.",
  carousel: [
    {
      src: NCS_main,
      altText: "Main Screen",
      caption: "Main Screen",
      key: 1,
    },
    {
      src: NCS_campsites,
      altText: "Router",
      caption: "Router",
      key: 2,
    },
  ],
  info: [
    {
      github: "https://github.com/hayato1234/Node-express-study2",
      linkTitle: "NuCamp Server",
      tags: "Express.js, MongoDB, Mongoose, Passport, Google Auth",
      key: 1,
    },
  ],
};
