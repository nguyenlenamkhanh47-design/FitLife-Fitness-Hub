const themeBtn =
document.getElementById("themeBtn");

const topBtn =
document.getElementById("topBtn");

const contactForm =
document.getElementById("contactForm");

const bmiForm =
document.getElementById("bmiForm");

const result =
document.getElementById("result");

/* DARK MODE */

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }

});

/* BACK TO TOP */

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* CONTACT FORM */

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const message =
    document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    alert(
        "Thank you, " +
        name +
        "! Your message has been sent."
    );

    contactForm.reset();

});

/* BMI CALCULATOR */

bmiForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const height =
    parseFloat(
        document.getElementById("height").value
    );

    const weight =
    parseFloat(
        document.getElementById("weight").value
    );

    if (
        isNaN(height) ||
        isNaN(weight) ||
        height <= 0 ||
        weight <= 0
    ) {
        result.textContent =
        "Please enter valid values.";
        return;
    }

    const bmi =
    weight / ((height / 100) ** 2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal Weight";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    result.textContent =
        "Your BMI is " +
        bmi.toFixed(1) +
        " (" +
        category +
        ")";
});
