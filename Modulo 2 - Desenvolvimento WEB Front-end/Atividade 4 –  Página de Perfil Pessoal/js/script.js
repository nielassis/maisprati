document.addEventListener("DOMContentLoaded", () => {
  const projectsContent = document.querySelector(".projects-content");
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
          <div class="project-info">
            <h2>${project.name}</h2>
            <h3><a href="${project.repo}" target="_blank"><i class="fa-brands fa-github"></i>Repositorio</a></h3>
            <span>${project.period}</span>
            <p>${project.description}</p>
          </div>
          
        `;

    projectsContent.appendChild(card);
  });

  const experienceContent = document.querySelector(".experience-content");
  experience.forEach((ex) => {
    const card = document.createElement("div");
    card.classList.add("experience-card");

    card.innerHTML = `
            <img src="${ex.image}" alt="Logo da ${ex.interprise}" />
            <div class="experience-info">
              <h2>${ex.interprise}</h2>
              <h3>${ex.role} - ${ex.position}</h3>
              <span>${ex.period}</span>
              <p>${ex.description}</p>
            </div>
          `;

    experienceContent.appendChild(card);
  });
});

const navbarToggle = document.getElementById("navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".navbar-links a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });

    navbarLinks.classList.remove("active");
  });
});
