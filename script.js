const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

const search = document.getElementById("topicSearch");
const cards = [...document.querySelectorAll(".topic-card")];
const emptyState = document.getElementById("emptyState");
search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matches = (card.innerText + " " + card.dataset.search).toLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visible++;
  });
  emptyState.hidden = visible !== 0;
});
