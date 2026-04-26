import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiEnvelope,
  BiPhone,
} from "react-icons/bi";

export const profile = {
  fullName: "Mohammed Niyas NF",
  headline: "Linux Engineer & Aspiring Cybersecurity Professional",
  shortBio:
    "Results-driven Linux Engineer with nearly 2 years of hands-on experience managing enterprise Oracle Linux and Ubuntu environments across multi-client infrastructures in the UAE. Actively transitioning towards a cybersecurity-focused engineering role.",
  location: "Dubai, UAE",
  email: "mohammedniyas654@gmail.com",
  phone: "+971 050 700 5382",
  resumeURL: "/Mohammed Niyas.pdf",
  availableForWork: true,
};

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/Blur141",
    icon: BiLogoGithub,
    status: "social",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/mohammedniyasnf",
    icon: BiLogoLinkedin,
    status: "social",
  },
  {
    id: 3,
    name: "mohammedniyas654@gmail.com",
    url: "mailto:mohammedniyas654@gmail.com",
    icon: BiEnvelope,
    status: "contact",
  },
  {
    id: 4,
    name: "+971 050 700 5382",
    url: "tel:+971507005382",
    icon: BiPhone,
    status: "contact",
  },
];

export const jobs = [
  {
    _id: "1",
    name: "Gerab System Solutions LLC",
    tagline: "Leading digital solutions provider",
    jobTitle: "Linux Engineer",
    location: "Dubai, UAE",
    industry: "IT Solutions",
    url: "https://www.gerabsys.com/",
    website: "www.gerabsys.com",
    description: [
      "As a Linux Engineer, I administer enterprise Oracle Linux and Ubuntu server environments, ensuring high availability and security compliance. I develop Bash and Ansible automation scripts to streamline operations, manage virtualization platforms like OLVM and ILOM, and proactively handle SOC/NOC incidents to maintain consistent SLA adherence.",
      "Gerab System Solutions LLC is a leading digital solutions provider in the UAE, specializing in innovative IT solutions and business transformation services. The company helps organizations solve complex challenges through cost-effective technological strategies, focusing on customization to meet unique business needs."
    ],
    startDate: "2024-08-01",
    endDate: null,
  },
];

export const projects = [
  {
    _id: "1",
    name: "ORION IDS",
    tagline: "Operational Reconnaissance & Intelligent Observation Network",
    badge: "MSc Capstone",
    projectUrl: "https://github.com/Blur141",
    highlights: [
      "Full-stack real-time NIDS with Wireshark-grade live packet capture using Scapy in promiscuous mode, covering TCP, UDP, ICMP, ARP, DNS, HTTP, HTTPS, and IPv6.",
      "Stateful rule-based threat detection engine identifying 9 attack types — ARP Spoofing, SYN Flood, Port Scanning, ICMP Flood, DNS Tunneling, Credential Leakage, Brute Force, Low TTL Anomaly, and Sensitive Port Access — with zero false-positive design.",
      "5-tier service resolution pipeline (TLS SNI → DNS → Reverse DNS → IP Prefix → Port) identifying 80+ services without decrypting HTTPS traffic.",
      "FastAPI backend with WebSocket server streaming live packets to a React dashboard at sub-100ms latency, with real-time analytics, alert management, and 14-category traffic classification.",
      "SQLite persistence for historical forensic queries; simulation mode for rootless development environments.",
    ],
    stack: ["Python", "Scapy", "FastAPI", "React", "WebSocket", "SQLite"],
  },
  {
    _id: "2",
    name: "Oracle Linux Health Check",
    tagline: "A comprehensive health check script for Oracle Linux systems.",
    badge: "Open Source",
    projectUrl: "https://github.com/Blur141/oracle-linux-healthcheck",
    highlights: [
      "Developed a robust Bash script to quickly assess system health, checking CPU, memory, disk usage, and running services.",
      "Automated the retrieval of critical system information including hostname, IP, OS release, and uptime to streamline administrative tasks.",
      "Included advanced checks for Chrony service status, top processes, multipath, and hardware information (dmidecode).",
      "Designed for ease of use with zero dependencies other than standard Linux utilities."
    ],
    stack: ["Bash", "Linux", "System Administration"],
  },
  {
    _id: "3",
    name: "OLVM Resource Management",
    tagline: "Standard operating procedure for managing VM resources in Oracle Linux Virtualization Manager.",
    badge: "Documentation",
    projectUrl: "https://github.com/Blur141/olvm-vm-resource-management",
    highlights: [
      "Created a comprehensive guide detailing the standard procedure to safely increase CPU resources for VMs in OLVM.",
      "Established pre-shutdown checks to ensure application and database integrity, emphasizing graceful shutdown procedures.",
      "Documented step-by-step instructions for modifying VM configurations within the OLVM web interface.",
      "Included post-change verification steps to confirm resource allocation and system stability."
    ],
    stack: ["OLVM", "Virtualization", "Technical Writing"],
  },
];

export const skills = [
  {
    category: "Operating Systems",
    items: ["Oracle Linux", "Ubuntu Server", "RHEL"],
    color: "green",
  },
  {
    category: "Scripting & Automation",
    items: ["Bash", "Ansible"],
    color: "green",
  },
  {
    category: "Virtualization",
    items: ["OLVM", "Oracle VM (OVM)", "ILOM"],
    color: "green",
  },
  {
    category: "Cloud Platforms",
    items: ["Oracle Cloud Infrastructure (OCI)", "Amazon Web Services (AWS)"],
    color: "green",
  },
  {
    category: "Security & Monitoring",
    items: [
      "Scapy (Packet Analysis)",
      "Network Intrusion Detection",
      "ARP/SYN/DNS Threat Detection",
      "NOC/SOC Incident Management",
    ],
    color: "green",
  },
  {
    category: "Development",
    items: ["Python (FastAPI)", "React", "WebSocket", "SQLite", "REST APIs"],
    color: "green",
  },
  {
    category: "ITSM Tools",
    items: ["Strygo Portal", "Change Management", "Root Cause Analysis"],
    color: "green",
  },
];

export const certifications = [
  {
    id: "1",
    title: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    id: "2",
    title: "OCI 2025 Certified Foundations Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    id: "3",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Reliable Network Technologies Ltd",
    year: "",
  },
  {
    id: "4",
    title: "Linux Administration: The Complete Linux Bootcamp",
    issuer: "Udemy",
    year: "",
  },
  {
    id: "5",
    title: "Professional Bootcamp in UX/UI Design",
    issuer: "DesignBoat UI/UX School",
    year: "",
  },
];

export const education = [
  {
    id: "1",
    degree: "Master of Science — Information Security (MSc IS)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    startYear: "Jul 2025",
    endYear: "Jul 2027",
    status: "In Progress",
    coursework:
      "Cybersecurity Fundamentals, Risk Management, Digital Forensics, Network Security, Cloud Security, Secure Systems Design",
  },
  {
    id: "2",
    degree: "Bachelor of Computer Applications (BCA) — Computer Science",
    institution: "Brindavan College, Bangalore",
    startYear: "2019",
    endYear: "2022",
    status: "Completed",
    coursework:
      "Programming, Data Structures, Databases, Web Development, Software Engineering",
  },
];

export const areasOfInterest = [
  "Linux Infrastructure Security",
  "Cybersecurity Operations (SOC / NOC)",
  "Network Intrusion Detection & Analysis",
  "Cloud Security (AWS / OCI)",
  "Infrastructure Automation",
  "Digital Forensics",
];
