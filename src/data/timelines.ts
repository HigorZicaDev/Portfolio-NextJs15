interface TimelineItem {
    date: string
    title: string
    description: string
    learnMoreUrl?: string
  }
  
  interface TimelineProps {
    items: TimelineItem[]
  }

export const timelineItems = [
    {
      date: "Feb. 2020 - Mar. 2024",
      title: "Web Developer @ Academic Softwares Escolares - Brazil",
      description: "In my professional experience, I have successfully developed and maintained web modules using PHP and C#, ensuring functionality and user satisfaction. I created robust desktop applications with the Delphi framework in Pascal, meeting specific business needs. I managed a WordPress showcase website, guaranteeing an optimal user experience through updates and maintenance. By working closely with clients, I defined clear requirements, translating them into effective technical solutions. Additionally, I administered and optimized MySQL, PSQL, and SQL Server databases, maintaining performance, security, and data integrity to support operational efficiency.",
      learnMoreUrl: "#",
    },
    {
      date: "Jan. 2017 - Mar. 2022",
      title: "Support technician @ Academic Softwares Escolares - Brazil",
      description: "As a Technical Support Analyst, I managed user requests efficiently, ensuring timely resolution of issues. I provided support for the proper use of the software suite, offering guidance and training to optimize user experience. I diagnosed bugs and incidents, whether software or hardware-related, identifying root causes and implementing effective solutions. Additionally, I handled the installation and configuration of software and hardware in customer environments, tailoring setups to meet specific operational requirements.",
    },
    {
      date: "2016 - 2017",
      title: "Assistant logistique @ Court of Justice of Minas Gerais - Brazil",
      description: "As a Logistics Assistant, I coordinated inventory management, ensuring accurate tracking and organization of goods. I supported the planning and execution of deliveries, optimizing routes and schedules to meet deadlines. Additionally, I managed documentation related to shipments and received goods, ensuring compliance with regulations and company procedures. My role required effective communication with suppliers, carriers, and internal teams to maintain seamless operations.",
      learnMoreUrl: "#",
    },
]