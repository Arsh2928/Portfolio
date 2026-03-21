export const NAV_ITEMS = ['Home', 'Skills', 'Projects', 'Certifications', 'Achievements', 'Resume', 'Contact'];

export const SKILLS = [
  {
    cat: 'Frontend',
    color: '#22D3EE',
    items: [
      { name: 'React.js',     pct: 88, logo: 'Re', bg: 'rgba(34,211,238,0.07)',  borderColor: 'rgba(34,211,238,0.25)'  },
      { name: 'JavaScript',   pct: 85, logo: 'JS', bg: 'rgba(234,179,8,0.07)',   borderColor: 'rgba(234,179,8,0.25)'   },
      { name: 'HTML5',        pct: 95, logo: 'HT', bg: 'rgba(239,68,68,0.07)',   borderColor: 'rgba(239,68,68,0.25)'   },
      { name: 'CSS3',         pct: 98, logo: 'CS', bg: 'rgba(59,130,246,0.07)',  borderColor: 'rgba(59,130,246,0.25)'  },
      { name: 'Tailwind CSS', pct: 80, logo: 'Tw', bg: 'rgba(6,182,212,0.07)',   borderColor: 'rgba(6,182,212,0.25)'   },
    ],
  },
  {
    cat: 'Backend',
    color: '#818CF8',
    items: [
      { name: 'Node.js',    pct: 85, logo: 'No', bg: 'rgba(34,197,94,0.07)',   borderColor: 'rgba(34,197,94,0.25)'   },
      { name: 'Express.js', pct: 82, logo: 'Ex', bg: 'rgba(100,100,100,0.07)', borderColor: 'rgba(100,100,100,0.25)' },
      { name: 'PHP',        pct: 70, logo: 'PH', bg: 'rgba(139,92,246,0.07)',  borderColor: 'rgba(139,92,246,0.25)'  },
      { name: 'JWT Auth',   pct: 82, logo: 'JW', bg: 'rgba(234,179,8,0.07)',   borderColor: 'rgba(234,179,8,0.25)'   },
      { name: 'REST APIs',  pct: 85, logo: 'AP', bg: 'rgba(99,102,241,0.07)',  borderColor: 'rgba(99,102,241,0.25)'  },
    ],
  },
  {
    cat: 'Databases',
    color: '#F472B6',
    items: [
      { name: 'MongoDB', pct: 88, logo: 'Mo', bg: 'rgba(0,237,100,0.07)',  borderColor: 'rgba(0,237,100,0.25)'  },
      { name: 'MySQL',   pct: 75, logo: 'My', bg: 'rgba(0,127,255,0.07)', borderColor: 'rgba(0,127,255,0.25)'  },
    ],
  },
  {
    cat: 'Languages & Tools',
    color: '#A3E635',
    items: [
      { name: 'C++',  pct: 85, logo: 'C+', bg: 'rgba(59,130,246,0.07)',  borderColor: 'rgba(59,130,246,0.25)'  },
      { name: 'Java', pct: 72, logo: 'Jv', bg: 'rgba(239,68,68,0.07)',   borderColor: 'rgba(239,68,68,0.25)'   },
      { name: 'C',    pct: 80, logo: 'C',  bg: 'rgba(99,102,241,0.07)',  borderColor: 'rgba(99,102,241,0.25)'  },
      { name: 'Git',  pct: 83, logo: 'Gt', bg: 'rgba(239,100,68,0.07)',  borderColor: 'rgba(239,100,68,0.25)'  },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Super Furniture House',
    subtitle: 'Full Stack E-Commerce Platform',
    desc: 'A complete e-commerce platform for a furniture store — supporting user registration, JWT-based authentication, product browsing, cart management, and full order workflows with an admin dashboard.',
    highlights: [
      'JWT-based auth with bcrypt secure password hashing',
      'Role-based admin access control for backend management',
      'Full CRUD operations for products, users & orders',
      'Deployed and live on Vercel with MongoDB Atlas',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'CSS3'],
    live: 'https://full-stack-project-8jr2.vercel.app/',
    github: 'https://github.com/Arsh2928/FullStackProject.git',
    img: '/super-furniture-house.png',
    color: '#6366F1',
    isLive: true,
  },
  {
    id: 2,
    title: 'Disaster Management System',
    subtitle: 'Full Stack Web Application',
    desc: 'A full-stack disaster reporting and awareness platform. Features user authentication, severity-filtered dynamic search, emergency contacts directory, and a knowledge base for preparedness.',
    highlights: [
      'PHP session-based auth & MySQL secure data storage',
      'JavaScript dynamic severity-filter with client-side search',
      'Emergency contact directory for rapid crisis response',
      'Preparedness knowledge base and awareness module',
    ],
    tech: ['HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript'],
    live: null,
    github: 'https://github.com/Arsh2928/Disaster-management.git',
    img: '/disaster-management.png',
    color: '#F472B6',
    isLive: false,
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Oct 2023',
    url: 'https://freecodecamp.org/certification/fcce45a424a-f1cf-4251-94dc-661de2854f29/responsive-web-design',
    img: '/cert-responsive-web-design.png',
    emoji: '🎨',
    bgColor: '#0A0A23',
    accent: '#F8F8FF',
    accentText: '#0A0A23',
  },
  {
    title: 'Unraveling Basic Python towards ML/AI',
    issuer: 'CSE Pathshala',
    date: 'Mar 2024',
    url: 'https://drive.google.com/file/d/1xsQgHwiLYj7IbH7ObrL1dtaD7A6dU0Pv/view?usp=drive_link',
    img: '/cert-cse-pathshala.png',
    emoji: '🐍',
    bgColor: '#0D1B2A',
    accent: '#3B82F6',
    accentText: '#fff',
  },
  {
    title: 'CodeQuest: DSA Summer Bootcamp',
    issuer: 'LPU · Centre for Professional Enhancement',
    date: 'Aug 2025',
    url: '/summer-certificate.pdf',
    img: '/cert-lpu-dsa-bootcamp.png',
    emoji: '☀️',
    bgColor: '#1A1A2E',
    accent: '#F59E0B',
    accentText: '#fff',
  },
  {
    title: '13× MongoDB University Badges',
    issuer: 'MongoDB / Credly',
    date: 'Jun 2025',
    url: 'https://www.credly.com/users/arshdeep-singh.33914f7b/badges#credly',
    img: '/cert-mongodb-basics.png',
    emoji: '🍃',
    bgColor: '#001E2B',
    accent: '#00ED64',
    accentText: '#001E2B',
  },
];

export const ACHIEVEMENTS = [
  {
    platform: 'LeetCode',
    num: '150+',
    label: 'Problems Solved',
    color: '#FFA116',
    bg: 'rgba(255,161,22,0.06)',
    link: 'https://leetcode.com/u/Arshdeep2928/',
    topics: ['Arrays', 'Recursion', 'Binary Search', 'Dynamic Programming', 'Linked Lists'],
    icon: '⚡',
    desc: 'Consistently solving medium and hard problems across core DSA topics.',
  },
  {
    platform: 'GeeksForGeeks',
    num: '30+',
    label: 'Problems Solved',
    color: '#2F8D46',
    bg: 'rgba(47,141,70,0.06)',
    link: 'https://www.geeksforgeeks.org/profile/arsh2928',
    topics: ['Data Structures', 'Algorithms', 'Trees & Graphs', 'Sorting', 'Hashing'],
    icon: '∑',
    desc: 'Deep-dived into fundamentals and competitive problem solving.',
  },
  {
    platform: 'MongoDB University',
    num: '13',
    label: 'Badges Earned',
    color: '#00ED64',
    bg: 'rgba(0,237,100,0.06)',
    link: 'https://www.credly.com/users/arshdeep-singh.33914f7b/badges#credly',
    topics: ['MongoDB Basics', 'Aggregation', 'Data Modeling', 'Atlas Search', 'NoSQL'],
    icon: '🍃',
    desc: 'Certified expertise across MongoDB tools, Atlas, and NoSQL design.',
  },
];

export const CONTACT_LINKS = [
  {
    icon: '✉',
    label: 'Email',
    val: 'arshdeep17022005@gmail.com',
    href: 'mailto:arshdeep17022005@gmail.com',
    color: '#6366F1',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    val: 'linkedin.com/in/arsh2928',
    href: 'https://www.linkedin.com/in/arsh2928/',
    color: '#0A66C2',
  },
  {
    icon: '⌥',
    label: 'GitHub',
    val: 'github.com/Arsh2928',
    href: 'https://github.com/Arsh2928',
    color: '#E2E8F0',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    val: '+91 9116795395',
    href: 'https://wa.me/919116795395',
    color: '#25D366',
  },
  {
    icon: '📞',
    label: 'Mobile',
    val: '+91 9116795395',
    href: 'tel:+919116795395',
    color: '#22D3EE',
  },
];
