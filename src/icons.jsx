import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaServer,
  FaCode
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiC,
  SiExpress,
  SiJsonwebtokens
} from 'react-icons/si'

export const getIcon = (name) => {
  const size = 16;
  const mapping = {
    'React.js': <FaReact size={size} />,
    'JavaScript': <FaJs size={size} />,
    'HTML5': <FaHtml5 size={size} />,
    'CSS3': <FaCss3Alt size={size} />,
    'Tailwind CSS': <SiTailwindcss size={size} />,
    'Node.js': <FaNodeJs size={size} />,
    'Express.js': <SiExpress size={size} />,
    'PHP': <FaPhp size={size} />,
    'JWT Auth': <SiJsonwebtokens size={size} />,
    'JWT': <SiJsonwebtokens size={size} />,
    'REST APIs': <FaServer size={size} />,
    'MongoDB': <SiMongodb size={size} />,
    'MySQL': <SiMysql size={size} />,
    'C++': <SiCplusplus size={size} />,
    'Java': <FaJava size={size} />,
    'C': <SiC size={size} />,
    'Git': <FaGitAlt size={size} />,
  }

  return mapping[name] || <FaCode size={size} />;
}
