function scrollToSection(index) {
  const sections = document.querySelectorAll('.section');
  if (sections[index]) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
  }
}

function copyEmail() {
  navigator.clipboard.writeText("hosin1386.rd.x@gmail.com").then(() => {
    alert("ایمیل کپی شد!");
  });
}
