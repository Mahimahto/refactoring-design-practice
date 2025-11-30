document.getElementById("search-btn").addEventListener("click", function () {

    const trip = document.querySelector('input[name="trip"]:checked').parentElement.innerText;
    const departure = document.getElementById("departure").value || "Not selected";
    const destination = document.getElementById("destination").value || "Not selected";
    const depDate = document.getElementById("departure-date").value || "Not selected";
    const retDate = document.getElementById("return-date").value || "Not selected";
    const passengers = document.getElementById("passengers").value;
    const travelClass = document.getElementById("class").value;

    let message = 
        "✈️ Searching for Flights...\n\n" +
        "• Trip Type: " + trip + "\n" +
        "• Leaving From: " + departure + "\n" +
        "• Going To: " + destination + "\n" +
        "• Departure Date: " + depDate + "\n";

    if (trip === "Round Trip") {
        message += "• Return Date: " + retDate + "\n";
    }

    message +=
        "• Passengers: " + passengers + "\n" +
        "• Class: " + travelClass + "\n\n" +
        "Searching best flight deals for you...";

    alert(message);
});
