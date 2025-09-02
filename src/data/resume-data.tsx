import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Claudio Canales",
  initials: "CC",
  location: "Lehi, Utah, United States (MST)",
  locationLink: "https://www.google.com/maps/place/Lehi",
  about:
    "Technologist, Certified SRE/DevOps/CloudOps, #1 World Bounty Hunter in Profits on Replit (2023) solving Problems with AI 🤖. Always learning.",
  summary:
    "First-generation college graduate, I've overcome numerous obstacles to excel in the tech industry. With multiple important certifications in the industry and experience working as a Senior DevOps. I was the top bounty hunter in the world on Replit, working in AI/ML projects. Always seeking new challenges and opportunities to learn more.",
  avatarUrl: "/images/k_gg.jpg",
  personalWebsiteUrl: "https://www.claud.me",
  contact: {
    email: "claudio@kytzo.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/klaudioz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/canalesclaudio/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://www.twitter.com/klaudioz",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Maharishi University of Management",
      degree: "Master of Science in Computer Science",
      start: <strong>2016</strong>,
      end: <strong>2018</strong>,
      url: "https://www.miu.edu"
    },
    {
      school: "Pontificia Universidad Catolica de Valparaiso",
      degree: "Bachelor of Science in Computer Engineering",
      start: <strong>2001</strong>,
      end: <strong>2009</strong>,
      url: "https://www.pucv.cl"
    },
  ],
  work: [
    {
      company: "General Assembly",
      link: "https://www.generalassemb.ly",
      badges: ["Chile","Remote USA", "Contractor"],
      title: "Enterprise lead instructor & SME",
      logo: ParabolLogo,
      start: <strong>11/2023</strong>,
      end: <strong>Now</strong>,
      description:
        "Enterprise lead instructor and subject matter expert in Generative AI, Solutions Architecture AI, and Software Development with Python, Docker, AWS, & Kubernetes, offering technical expertise and guidance in AI and industry best practices."
    },
    {
      company: "VMWare",
      link: "https://www.vmware.com",
      badges: ["USA","Remote"],
      title: "Site Reliability Engineer",
      logo: ParabolLogo,
      start: <strong>12/2021</strong>,
      end: <strong>06/2023</strong>,
      description:
        "Led migration of thousands of resources in multiple zones to AWS Transit Gateway using Terraform. Managed 20 Kubernetes clusters with about 1000 nodes, performing upgrades and troubleshooting issues.",
    },
    {
      company: "Seegrid",
      link: "https://www.seegrid.com",
      badges: ["USA","Remote"],
      title: "Cloud Engineer",
      logo: ClevertechLogo,
      start: <strong>09/2020</strong>,
      end: <strong>12/2021</strong>,
      description:
        "Performed multiple tooling and Kubernetes cluster upgrades in GKE and Azure. Implemented cloud infrastructure management using Terraform and ArgoCD.",
    },
    {
      company: "Kasten",
      link: "https://www.kasten.io/",
      badges: ["USA","Remote"],
      title: "DevOps Engineer",
      logo: JojoMobileLogo,
      start: <strong>02/2020</strong>,
      end: <strong>07/2020</strong>,
      description:
        "Implemented Openshift v4 automation across multiple clouds, enhancing system scalability. Achieved a 50% reduction in cloud costs through effective monitoring and optimization.",
    },
    {
      company: "Progrexion",
      link: "https://www.progrexion.com",
      badges: ["USA"],
      title: "DevOps Engineer",
      logo: NSNLogo,
      start: <strong>04/2017</strong>,
      end: <strong>02/2020</strong>,
      description: "Linux admin with experience in configuring, monitoring, upgrading, and maintaining system infrastructure. Improved time to implement any project with Control-M by 80% by building new processes and standards. Implemented CI/CD workflows and automation, enhancing deployment processes and operational efficiency.",
    },
    {
      company: "Paygroup",
      link: "https://www.paygroup.com",
      badges: ["Chile"],
      title: "Software Developer Engineer",
      logo: NSNLogo,
      start: <strong>01/2014</strong>,
      end: <strong>04/2016</strong>,
      description: "Ensured successful and accurate processing of transactions over $8,000 by designing back-end functionalities. Evolved the Itaú Bank High Amounts System by converting it into an RPM-packed product. Implemented and optimized multiple automation processes with high efficiency and performance.",
    },
    {
      company: "Adexus",
      link: "https://www.adexus.com",
      badges: ["Chile"],
      title: "Software Developer Engineer",
      logo: NSNLogo,
      start: <strong>04/2011</strong>,
      end: <strong>12/2013</strong>,
      description: "Main developer for the VTR's phone which increased system efficiency from 30% to 60% through DB tuning. Led development improving payroll extraction processes, reducing the process from 6 hours to 40 minutes.",
    },
    {
      company: "Atcom",
      link: "https://www.atcom.cl",
      badges: ["Chile"],
      title: "Software Developer Engineer",
      logo: NSNLogo,
      start: <strong>06/2010</strong>,
      end: <strong>03/2011</strong>,
      description: "Contractor at VTR working at the datawarehouse team.",
    },
  ],
  skills: [
    "AWS",
    "Kubernetes",
    "Docker",
    "GitHub Actions",
    "GitLab CI/CD",
    "Terraform",
    "Python",
    "Linux",
    "Automation",
    "GCP",
    "Azure",
    "GitOps",
    "Next.js",
    "React",
    "AI",
    "MLOps",
    "LLMs",
    "RAG",
    "Prompt Engineering",
    "Generative AI",
    "Solana",
    "Web3",
    "Learning Design",
  ],

  projects: [
    {
      title: "Vision Canvas",
      techStack: [
      "TypeScript",
      "Next.js",
      "OpenAI",
      "Replicate",
      "GitHub/Vercel",
      ],
      description: "AI-powered image generation platform focused on creative exploration and visual storytelling through text-to-image models.",
      link: {
        label: "visioncanvas.ai",
        href: "https://www.visioncanvas.ai",
      },
    },
    {
      title: "Christian Doctrine",
      techStack: [
        "TypeScript",
        "Next.js",
        "OpenAI",
        "Langchain",
        "GitHub/Vercel",
      ],
      description: "Enhancing accessibility of bible and theology with AI-assisted learning and cited sources.",
      link: {
        label: "christiandoctrine.ai",
        href: "https://www.christiandoctrine.ai",
      },
    },
    {
      title: "NBA ML Sports predictor",
      techStack: [
        "Python",
        "ML",
        "DL",
        "Tensorflow",
        "Keras",
        "GCP",
      ],
      description: "AI predicts NBA game outcomes using neural networks, enhancing betting insights",
    },
    {
      title: "Dynamic Chatbot Assistant",
      techStack: [
        "Python",
        "Notion",
        "OpenAI",
        "Langchain",
      ],
      description: "AI chatbot tailors responses using Notion databases for informed action",
    },
  ],

  links: [
    { name: "GitHub", url: "https://github.com/klaudioz" },
    { name: "LinkedIn", url: "https://linkedin.com/in/canalesclaudio" },
    { name: "X", url: "https://x.com/klaudioz" },
    { name: "Email", url: "mailto:claudio@kytzo.com" },
  ],
} as const;