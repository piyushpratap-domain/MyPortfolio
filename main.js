// MOBILE MENU

const mobileNav = () => {
  const headerBtn = document.querySelector('.header__bars');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  let isMobileNavOpen = false;

  headerBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    } else {
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMobileNavOpen = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
};

mobileNav();


// DARK/LIGHT MODE

const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll('#theme-toggle');

  const theme = localStorage.getItem('theme');

  theme && document.body.classList.add(theme);

  const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  };
  themeToggleBtns.forEach(btn =>
    btn.addEventListener('click', handleThemeToggle)
  );
};

darkMode();
