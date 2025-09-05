document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;

        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth"
        });
      }
    });
  });
});


function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}

const text1 = "Perancang desain antarmuka pengguna (UI) dan sistem desain.";
const text2 = "Pengembang front-end yang menulis kode yang bersih, elegan, dan efisien.";
let i = 0, j = 0;

function typeFirst() {
  if (i < text1.length) {
    document.getElementById("typing1").textContent += text1.charAt(i);
    i++;
    setTimeout(typeFirst, 50);
  }

  if (j < text2.length) {
    document.getElementById("typing2").textContent += text2.charAt(j);
    j++;
    setTimeout(typeSecond, 50);
  }
}

function typeSecond() {
  if (j < text2.length) {
    document.getElementById("typing2").textContent += text2.charAt(j);
    j++;
    setTimeout(typeSecond, 50);
  }
}

window.onload = typeFirst;

function downloadCV() {
  const btn = document.querySelector(".start-button");
  btn.textContent = "⏳ Mengunduh...";

  const link = document.createElement("a");
  link.href = "CV_Subkha.pdf"; 
  link.download = "CV_Subkha.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    btn.textContent = "✅ CV Terunduh";
  }, 2000);
} 

const carousel = document.getElementById('carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const totalCards = carousel.children.length;
 
function updateCarousel() {
  const containerWidth = carousel.parentElement.offsetWidth;
  const card = carousel.children[index];  
  const cardWidth = card.offsetWidth;

  const cardLeft = card.offsetLeft;

  const translateX = -(cardLeft - (containerWidth - cardWidth) / 2);

  carousel.style.transform = `translateX(${translateX}px)`;
}


next.addEventListener('click', (e) => {
  e.preventDefault();
  index = (index + 1) % totalCards;
  updateCarousel();
});

prev.addEventListener('click', (e) => {
  e.preventDefault();
  index = (index - 1 + totalCards) % totalCards;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);


 
(function () {
  emailjs.init("5tbFljVGNqVbkQTE1");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const commentsList = document.getElementById("comments-list");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs
        .sendForm("SubkhaAgency_05", "template_jd3qqrj", this)
        .then(
          () => {
            const name = form.querySelector("[name='user_name']").value;
            const message = form.querySelector("[name='message']").value;

            if (commentsList) {
              const li = document.createElement("li");
              li.innerHTML = `<strong>${name}</strong>: ${message}`;
              commentsList.appendChild(li);
            }

            alert("✅ Pesan berhasil dikirim!");
            form.reset();
          },
          (error) => {
            alert("❌ Gagal mengirim pesan: " + JSON.stringify(error));
          }
        );
    });
  }
});
