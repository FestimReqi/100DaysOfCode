const quotes = [
  "Keep pushing, even when it’s hard.",
  "Code like nobody's watching.",
  "Every bug you fix makes you stronger.",
  "You’re one step away from mastering it.",
  "Stay curious. Stay hungry.",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex];

  document.getElementById("quote").textContent = quoteText;
}

function getNewYear() {
  const year = document.getElementById("year");
  const now = new Date();
  const currentYear = now.getFullYear();
  const newYear = currentYear;

  console.log("Year element:", year);
  console.log("Setting year to:", newYear);

  year.textContent = newYear;
}

fetch("../footer_projects/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;

    // Pasi futet footer-i, vendos vitin
    const year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  });
