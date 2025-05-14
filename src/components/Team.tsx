import { motion } from "framer-motion";
import linkedin from "/link-black.svg";
import x from "/xblack.svg";
import sarthak from "/sarthak.png";
import kamal from "/kamal.png";
import anurag from "/anurag.png";
import utkarsh from "/utkarsh.png";
import square from "/square.svg";

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
    },
  },
};

export default function Team() {
  const teamMembers = [
    {
      name: "Sarthak Krishak",
      title: "Co-founder | CEO",
      description:
        "Driven CEO and development expert, leading the company to innovative, user-focused solutions.",
      image: sarthak,
      customImageClass:
        "lg:object-contain lg:w-full lg:max-h-fit h-full lg:size-[60vw] md:size-[32vw]",
      slinks: [
        { href: "https://x.com/krishak_sarthak", icon: x, label: "X" },
        {
          href: "https://www.linkedin.com/in/sarthakkrishak/",
          icon: linkedin,
          label: "LinkedIn",
        },
      ],
    },
    {
      name: "Kamal Sinha",
      title: "Co-founder | CTO",
      description:
        "Innovative CTO with expertise in tech development, driving user-centered, cutting-edge solutions.",
      image: kamal,
      customImageClass:
        "lg:object-contain lg:w-full lg:max-h-fit h-full lg:size-[60vw] md:size-[32vw]",
      slinks: [
        {
          href: "https://x.com/kamal_sinha_?t=rZ3AxSkE91f3VqDEHCwTmg&s=08",
          icon: x,
          label: "X",
        },
        {
          href: "https://www.linkedin.com/in/kamal-sinha-48ba91351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: linkedin,
          label: "LinkedIn",
        },
      ],
    },
    {
      name: "Anurag Adarsh",
      title: "CPO | Head of Design",
      description:
        "Creative CPO and Head of Design, shaping product vision and user experiences to drive innovation.",
      image: anurag,
      customImageClass:
        "lg:object-contain lg:w-full lg:max-h-fit h-full lg:size-[60vw] md:size-[32vw]",
      slinks: [
        { href: "https://x.com/Anurag195869", icon: x, label: "X" },
        {
          href: "https://www.linkedin.com/in/adarshanurag/",
          icon: linkedin,
          label: "LinkedIn",
        },
      ],
    },
    {
      name: "Utkarsh Raj",
      title: "Head of Development",
      description:
        "Visionary Head of Development, leading teams to build innovative and scalable technology solutions.",
      image: utkarsh,
      customImageClass:
        "lg:object-contain lg:w-full lg:max-h-fit h-full lg:scale-[40vw] md:size-[32vw]",
      slinks: [
        { href: "https://x.com/MrUtkarsh049", icon: x, label: "X" },
        {
          href: "https://www.linkedin.com/in/utkarsh49/",
          icon: linkedin,
          label: "LinkedIn",
        },
      ],
    },
  ];

  return (
    <section aria-labelledby="team-heading" id="team-home">
      <div className="text-white font-geist font-bold text-2xl md:text-3xl px-6 ml-2 lg:ml-0 lg:px-[6rem] md:px-[6.6vw] flex flex-col gap-4 md:mt-36 mt-24 mb-10">
        <div className="flex items-center">
          <img src={square} alt="Team section icon" className="size-9" />
          <h1
            id="team-heading"
            className="ml-[0.4rem] md:ml-[0.6rem] font-['Geist'] tracking-wide"
          >
            Our Team
          </h1>
        </div>
        <div className="border-gradient-custom w-[6rem] shadow-[0px_0px_7px_0px_rgba(0,221,255,1.00)] outline outline-[3px] outline-offset-[-2.5px] outline-cyan-400/40 rounded"></div>
      </div>

      {/* The Card structure */}
      <div className="px-6 sm:px-10 md:px-[6vw] lg:px-[4vw] xl:px-[3vw] py-5 lg:ml-5 lg:mr-5">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="w-full max-w-[90vw] sm:max-w-[40vw] md:max-w-[38vw] lg:max-w-[18vw] bg-gradient-to-tl from-black to-[#002774] border border-[#575757] rounded-xl overflow-hidden flex flex-col transition-all duration-300 ease-in-out shadow-md hover:shadow-[0px_0px_20px_#00FFFF60]"
            >
              {/* Image + Social Icons */}
              <div className="relative bg-[#f1f1f1] h-[220px] flex justify-center items-end overflow-hidden px-4">
                {/* Social Icons */}
                <div className="absolute top-2 right-2 flex gap-2 z-10">
                  {member.slinks.map((e, idx) => (
                    <a
                      key={idx}
                      href={e.href}
                      aria-label={e.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={e.icon}
                        alt={e.label}
                        className="w-7 h-7 p-1 transition-transform duration-300 hover:scale-125"
                      />
                    </a>
                  ))}
                </div>

                {/* Profile Image */}
                <img
                  src={member.image}
                  alt={member.name}
                    className={`${member.customImageClass} hover:scale-105 ease-in-out duration-100`}
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="px-4 py-5 flex flex-col gap-2 text-white">
                <div>
                  <h1 className="font-bold text-lg font-['Geist'] tracking-wide">
                    {member.name}
                  </h1>
                  <h2 className="text-[#ADCC00] text-sm font-['Geist'] tracking-wide">
                    {member.title}
                  </h2>
                </div>
                <p className="text-[#a2a2a2] text-sm font-['Geist'] tracking-wide">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
