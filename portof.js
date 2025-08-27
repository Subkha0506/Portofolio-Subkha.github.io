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
    

    if (j < text2.length) {
      document.getElementById("typing2").textContent += text2.charAt(j);
      j++;
      setTimeout(typeSecond, 50);
    }
  }
}


window.onload = typeFirst;

function downloadCV() {
  const btn = document.querySelector(".start-button");
  btn.textContent = "⏳ Mengunduh...";

  const link = document.createElement("a");
  link.href = "CV_Muhammad_Subkha.pdf"; 
  link.download = "CV_Muhammad_Subkha.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    btn.textContent = "✅ CV Terunduh";
  }, 2000);
}


(function () {
  emailjs.init("5tbFljVGNqVbkQTE1");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs
        .sendForm("SubkhaAgency_05", "template_jd3qqrj", this)
        .then(
          () => {
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

