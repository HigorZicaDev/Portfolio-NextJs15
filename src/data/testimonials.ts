interface Testimonial {
    id: number
    author: string
    avatar: string
    content: string
    createdAt: string
  }
  
 export const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Academic Softwares",
      avatar: "/depoiments/LogoAcademic.png",
      content: "Thank you for 7 years of work and friendship! Great collaborator, responsible, dynamic. ",
      createdAt: "01/03/2024"
    }
  ]