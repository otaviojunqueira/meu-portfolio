const translations = {
  pt: {
    about: "SOBRE",
    portfolio: "PORTFÓLIO",
    design: "DESIGN",
    contact: "CONTATO",
    aboutMe: "SOBRE MIM",
    aboutText: "Olá! Me chamo Otávio Costa, sou Designer e Desenvolvedor Front-end. Curto transformar ideias em interfaces limpas, modernas e responsivas, sempre com foco na experiência do usuário. Gosto de unir estética e funcionalidade pra criar soluções que realmente fazem a diferença. Sou movido por desafios e apaixonado por aprender, cada projeto é uma oportunidade de evoluir e impactar pessoas de forma positiva.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤ ㅤㅤ Abaixo estão as tecnologias e soft skills que tenho domínio e que me acompanham nos projetos do dia a dia.",
    contactTitle: "ENTRE EM CONTATO",
    contactText: "Se você está interessado em trabalhar comigo ou só quer dar um alô, vou adorar ouvir de você!",
    viewProject: "Ver no GitHub",
    cv: "Currículo",
    designTitle: "DESIGN GRÁFICO",
    portfolioLabel: "Portfólio"
  },
  en: {
    about: "ABOUT",
    portfolio: "PORTFOLIO",
    design: "DESIGN",
    contact: "CONTACT",
    aboutMe: "ABOUT ME",
    aboutText: "Hello! My name is Otávio Costa, I'm a Designer and Front-end Developer. I enjoy transforming ideas into clean, modern and responsive interfaces, always focusing on the user experience. I like to combine aesthetics and functionality to create solutions that really make a difference. I'm driven by challenges and passionate about learning, each project is an opportunity to evolve and impact people in a positive way.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤ ㅤㅤ ㅤㅤ Below are the technologies and soft skills that I have mastered and that accompany me in my day-to-day projects.",
    contactTitle: "CONTACT ME",
    contactText: "Whether you're interested in working with me or just want to say hi, I'd love to hear from you!",
    viewProject: "View on GitHub",
    cv: "Resume",
    designTitle: "GRAPHIC DESIGN",
    portfolioLabel: "Portfolio"
  }
};

// Export for both ES modules and direct script inclusion
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
} else {
  window.translations = translations;
}
