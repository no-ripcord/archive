document.addEventListener("DOMContentLoaded", function() {
  // Create banner
  const banner = document.createElement("div");
  banner.innerHTML = `
    <strong>This is an archived version of the old No Ripcord website.</strong>
    Please visit our new site at 
    <a href="https://www.noripcord.com" style="color:#0ff;">noripcord.com</a>.
  `;

  // Style banner
  Object.assign(banner.style, {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    background: "#111",
    color: "#fff",
    textAlign: "center",
    padding: "1em",
    fontFamily: "sans-serif",
    zIndex: "9999"
  });

  // Add a close button
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "×";
  Object.assign(closeBtn.style, {
    marginLeft: "1em",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "1.2em",
    cursor: "pointer"
  });
  closeBtn.onclick = () => banner.remove();
  banner.appendChild(closeBtn);

  // Insert banner at the top of the page
  document.body.prepend(banner);
});
