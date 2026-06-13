import { CategoryPageData } from "@/app/_types";

const pagesData: CategoryPageData[] = [
  {
    page_id: "app-design",
    header: {
      title: "App Design",
      description:
        "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    },
    projects: [
      {
        title: "AIRFILTER",
        description:
          "Solving the problem of poor indoor air quality by filtering the air.",
        image: "/images/app-design/image-airfilter.jpg",
      },
      {
        title: "EYECAM",
        description:
          "Product that lets you edit your favorite photos and videos at any time.",
        image: "/images/app-design/image-eyecam.jpg",
      },
      {
        title: "FACEIT",
        description:
          "Get to meet your favorite internet superstar with the faceit app.",
        image: "/images/app-design/image-faceit.jpg",
      },
      {
        title: "TODO",
        description:
          "A todo app that features cloud sync with light and dark mode.",
        image: "/images/app-design/image-todo.jpg",
      },
      {
        title: "LOOPSTUDIOS",
        description: "A VR experience app made for Loopstudios.",
        image: "/images/app-design/image-loopstudios.jpg",
      },
    ],
    remaining_categories: [
      {
        title: "WEB DESIGN",
        bgImage: "/images/home/desktop/image-web-design.jpg",
        link: "/web-design",
      },
      {
        title: "GRAPHIC DESIGN",
        bgImage: "/images/home/desktop/image-graphic-design.jpg",
        link: "/graphic-design",
      },
    ],
  },
  {
    page_id: "web-design",
    header: {
      title: "Web Design",
      description:
        "We build websites that are fast, secure, and responsive with stunning visual design.",
    },
    projects: [
      {
        title: "EXPRESS",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
        image: "/images/web-design/image-express.jpg",
      },
      {
        title: "TRANSFER",
        description:
          "Site for low-cost money transfers and sending money within seconds",
        image: "/images/web-design/image-transfer.jpg",
      },
      {
        title: "PHOTON",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
        image: "/images/web-design/image-photon.jpg",
      },
      {
        title: "BUILDER",
        description:
          "Connects users with local contractors based on their location",
        image: "/images/web-design/image-builder.jpg",
      },
      {
        title: "BLOGR",
        description:
          "Blogr is a platform for creating an online blog or publication",
        image: "/images/web-design/image-blogr.jpg",
      },
      {
        title: "CAMP",
        description:
          "Get expert training in coding, data, design, and digital marketing",
        image: "/images/web-design/image-camp.jpg",
      },
    ],
    remaining_categories: [
      {
        title: "APP DESIGN",
        bgImage: "/images/home/desktop/image-app-design.jpg",
        link: "/app-design",
      },
      {
        title: "GRAPHIC DESIGN",
        bgImage: "/images/home/desktop/image-graphic-design.jpg",
        link: "/graphic-design",
      },
    ],
  },
  {
    page_id: "graphic-design",
    header: {
      title: "Graphic Design",
      description:
        "We deliver eye-catching branding materials and digital designs that leave a lasting impression.",
    },
    projects: [
      {
        title: "AIRFILTER",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
        image: "/images/graphic-design/image-change.jpg",
      },
      {
        title: "EYECAM",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
        image: "/images/graphic-design/image-boxed-water.jpg",
      },
      {
        title: "FACEIT",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
        image: "/images/graphic-design/image-science.jpg",
      },
    ],
    remaining_categories: [
      {
        title: "WEB DESIGN",
        bgImage: "/images/home/desktop/image-web-design.jpg",
        link: "/web-design",
      },
      {
        title: "APP DESIGN",
        bgImage: "/images/home/desktop/image-app-design.jpg",
        link: "/app-design",
      },
    ],
  },
];

export default pagesData;
