// Обработка формы записи
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('termin-form');

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Не перезагружать страницу

            // Получаем значения
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;

            // Показываем сообщение
            alert(`Vielen Dank, ${name}! Wir haben Ihre Anfrage für den ${date} erhalten. Wir melden uns bald per E-Mail (${email}).`);

            form.reset(); // Очистка формы
        });
    }
});

(function () {
  emailjs.init("PUBLIC_KEY"); // из EmailJS
})();

document.getElementById("terminForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "SERVICE_ID",
    "TEMPLATE_ID",
    this
  ).then(() => {
    document.getElementById("status").innerText =
      "Danke! Ihre Anfrage wurde gesendet.";
    this.reset();
  }, (error) => {
    document.getElementById("status").innerText =
      "Fehler beim Senden.";
  });
});

// ==========================
// SCROLL ANIMATION (SECTIONS)
// ==========================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ==========================
// HEADER SCROLL EFFECT
// ==========================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.padding = "10px 40px";
    header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
  } else {
    header.style.padding = "20px 40px";
    header.style.boxShadow = "none";
  }
});

// ==========================
// BUTTON CLICK EFFECT
// ==========================
document.querySelectorAll(".button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 200);
  });
});


// ==========================
// LOGO MICRO ANIMATION
// ==========================
const logo = document.querySelector(".logo");

if (logo) {
  setInterval(() => {
    logo.style.transform = "scale(1.04)";
    setTimeout(() => {
      logo.style.transform = "scale(1)";
    }, 600);
  }, 5000);
}

// ==========================
// BURGER MENU
// ==========================
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

// ==========================
// PARALLAX EFFECT
// ==========================
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const speed = 0.08;
    const offset = window.scrollY - section.offsetTop;
    section.style.backgroundPositionY = offset * speed + "px";
  });
});
