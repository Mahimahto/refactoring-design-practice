document.querySelector(".search-btn").addEventListener("click", function () {
const departure = document.querySelector("input[placeholder='City or Airport']").value;
const destination = document.querySelectorAll("input[placeholder='City or Airport']")[1].value;
const depDate = document.querySelector("input[type='date']").value;
const retDate = document.querySelectorAll("input[type='date']")[1].value;


if (!departure || !destination || !depDate) {
alert("Please fill all required fields.");
return;
}


alert(`Searching flights from ${departure} to ${destination} on ${depDate}.`);
});("Flight search UI ready.");