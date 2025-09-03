"use client";

import { motion } from "framer-motion";

import dockerLogo from "../../assets/icons/docker.png";
import kubernetesLogo from "../../assets/icons/kubernetes.png";
import awsLogo from "../../assets/icons/aws.png";
import terraformLogo from "../../assets/icons/terraform.png";
import ansibleLogo from "../../assets/icons/ansible.png";
import linuxLogo from "../../assets/icons/linux.png";
import githubLogo from "../../assets/icons/github.png";
import gitlabLogo from "../../assets/icons/gitlab.png";
import azureLogo from "../../assets/icons/azure.png";

const skills = [
  { name: "Docker", logo: dockerLogo },
  { name: "Kubernetes", logo: kubernetesLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Terraform", logo: terraformLogo },
  { name: "Ansible", logo: ansibleLogo },
  { name: "Linux", logo: linuxLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "GitLab", logo: gitlabLogo },
  { name: "Azure", logo: azureLogo },
];

const Skills = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0" />

      <motion.div
        className="flex gap-16"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
        whileHover={{ animationPlayState: "paused" as any }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-16 w-auto object-contain"
              draggable="false"
            />
            <span className="text-[#7F7A7A] text-lg font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
