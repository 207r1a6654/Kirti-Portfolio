// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  const paragraphs = document.querySelectorAll('.bio p');

  paragraphs.forEach((paragraph) => {
    const words = paragraph.textContent.split(' ');
  
    const modifiedContent = words
      .map((word) => {
        const letters = word.split('');
        const modifiedWord = letters
          .map((letter) => `<span class="zoom-effect">${letter}</span>`)
          .join('');
  
        return `<span class="word">${modifiedWord}</span>`;
      })
      .join(' ');
  
    paragraph.innerHTML = modifiedContent;
  });
  


function checkScroll() {
  const educationBoxes = document.querySelectorAll('#education .box');
  const certiBoxes = document.querySelectorAll('#certi .certi-box');
  const triggerBottom = window.innerHeight * 0.8;

  educationBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });

  certiBoxes.forEach((certiBox) => {
    const boxTop = certiBox.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      certiBox.classList.add('show');
    } else {
      certiBox.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);


//scroll snap
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 10) - 1;
  sections.forEach((section, index) => {
    if (index === current) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});
