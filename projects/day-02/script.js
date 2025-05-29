// Kemi krijuar një vlerë numerike fillestare (count) që do ndryshojë me klikimet
// We created an initial numeric value (count) that will change on button clicks
let count = 0;

// Marrim elementin HTML që do shfaqë vlerën e count-it
// Get the HTML element that displays the count value
const value = document.getElementById("value");

// Marrim të gjithë butonat me klasën "btn"
// Select all buttons with the class "btn"
const btns = document.querySelectorAll(".btn");

// Përdorim një loop për të shtuar event listener për secilin buton
// Loop through each button and add a click event listener
btns.forEach((btn) => {
  // Kur një buton klikohet
  // When a button is clicked
  btn.addEventListener("click", (e) => {
    // Marrim listën e klasave të butonit të klikuar
    // Get the list of classes from the clicked button
    const styles = e.currentTarget.classList;

    // Kontrollojmë se cili buton është klikuar në bazë të klasës
    // Check which button was clicked based on its class
    if (styles.contains("btn_decrease")) {
      count--;
    } else if (styles.contains("btn_increase")) {
      count++;
    } else {
      count = 0; // për reset button // for reset button
    }

    // Përditësojmë vlerën e shfaqur në ekran
    // Update the displayed value on the screen
    value.textContent = count;

    // Ndryshojmë ngjyrën e tekstit në varësi të vlerës
    // Change the text color based on the value
    if (count > 0) {
      value.style.color = "#A0C878"; // Jeshile // Green
    } else if (count < 0) {
      value.style.color = "#E55050"; // E kuqe // Red
    } else {
      value.style.color = "#222831"; // E zezë // Black
    }
  });
});

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
