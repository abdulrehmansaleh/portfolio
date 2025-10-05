document.addEventListener("DOMContentLoaded", () => {
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const contactBtn = document.getElementById("contactBtn");

  learnMoreBtn.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  contactBtn.addEventListener("click", () => {
    alert("Thank you for visiting my portfolio! You can reach me via email or phone anytime.");
  });
});
