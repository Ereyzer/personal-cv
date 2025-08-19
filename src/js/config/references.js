export const location = window.location;
export const language = document.children[0].getAttribute('lang');

export const avatarRef = document.getElementById('home-avatar-img');
export const introRef = document.getElementById('home-intro-text');
export const aboutRef = document.getElementById('about-text');
export const resumeDownloadRef = document.getElementById('resume-download');

export const socialLinkListsRef = document.querySelectorAll(
  '[social-list-id="social-link-list"]'
);

export const hardSkillsListRef = document.getElementById('hard-skills-list');

export const softSkillsListRef = document.getElementById('soft-skills-list');

export const loaderRef = document.getElementById('loader');
export const hardSkillsPaginationRef = document.getElementById(
  'hard-skills-pagination'
);

export const softSkillsPaginationRef = document.getElementById(
  'soft-skills-pagination'
);

export const portfolioSectionRef = document.getElementById('portfolio');
