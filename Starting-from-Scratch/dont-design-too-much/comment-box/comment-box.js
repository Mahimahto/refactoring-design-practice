const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

// Show selected files
fileInput.addEventListener("change", () => {
  fileList.innerHTML = "";

  Array.from(fileInput.files).forEach((file, index) => {
    const item = document.createElement("div");
    item.className = "file-item";

    item.innerHTML = `
      <span>${file.name}</span>
      <span class="remove-btn" data-index="${index}">Remove</span>
    `;

    fileList.appendChild(item);
  });
});

// Remove file item visually
fileList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
  }
});
