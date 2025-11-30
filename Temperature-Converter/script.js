let selectedUnit = "celsius";

function setUnit(unit) {
    selectedUnit = unit;
    document.querySelectorAll(".unit").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    convertTemp();
}

function convertTemp() {
    let value = parseFloat(document.getElementById("inputValue").value);

    if (isNaN(value)) {
        reset();
        return;
    }

    let c, f, k;

    if (selectedUnit === "celsius") {
        c = value;
        f = (value * 9/5) + 32;
        k = value + 273.15;
    }
    if (selectedUnit === "fahrenheit") {
        f = value;
        c = (value - 32) * 5/9;
        k = c + 273.15;
    }
    if (selectedUnit === "kelvin") {
        k = value;
        c = value - 273.15;
        f = (c * 9/5) + 32;
    }

    document.getElementById("celsiusResult").innerText = `Celsius: ${c.toFixed(2)} °C`;
    document.getElementById("fahrenheitResult").innerText = `Fahrenheit: ${f.toFixed(2)} °F`;
    document.getElementById("kelvinResult").innerText = `Kelvin: ${k.toFixed(2)} K`;
}

function reset() {
    document.getElementById("celsiusResult").innerHTML = "Celsius: --";
    document.getElementById("fahrenheitResult").innerHTML = "Fahrenheit: --";
    document.getElementById("kelvinResult").innerHTML = "Kelvin: --";
}
const switchToggle = document.getElementById("themeSwitch");

// Load saved mode
if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    switchToggle.checked = true;
}

switchToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    // Save mode
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
