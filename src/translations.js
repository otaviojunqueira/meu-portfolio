const translations = {
  pt: {
    about: "SOBRE",
    portfolio: "PORTFÓLIO",
    contact: "CONTATO",
    aboutMe: "SOBRE MIM",
    aboutText: "Olá, eu sou Otávio Costa! Sou um Desenvolvedor Web baseado no Brasil.",
    contactTitle: "ENTRE EM CONTATO",
    contactText: "Se interessou pelo meu trabalho ou quer apenas dizer olá, adoraria ouvir de você!"
  },
  en: {
    about: "ABOUT",
    portfolio: "PORTFOLIO",
    contact: "CONTACT",
    aboutMe: "ABOUT ME",
    aboutText: "Hi, I'm Otávio Costa! I'm a Web Developer based in Brazil.",
    contactTitle: "CONTACT ME",
    contactText: "Whether you're interested in working with me or just want to say hello, I'd love to hear from you!"
  }
};

// Export for both ES modules and direct script inclusion
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
} else {
  window.translations = translations;
}
