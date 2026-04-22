const form = document.getElementById("shortenForm");
const input = document.getElementById("urlInput");
const linksContainer = document.getElementById("shortenedLinks");

document.addEventListener("DOMContentLoaded", loadLinks);
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const url = input.value.trim();
  if (!url) {
    input.classList.add("is-invalid");
    return;
  }
  input.classList.remove("is-invalid");
  try {
    const res = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );

    const shortLink = await res.text();
    addLink(url, shortLink);
    saveLink(url, shortLink);

    input.value = "";

  } catch (error) {
    input.classList.add("is-invalid");
  }
});

function addLink(original, shortened) {
  const div = document.createElement("div");

  div.className =
    "link-card d-flex flex-column flex-lg-row justify-content-between align-items-lg-center";

  div.innerHTML = `
    <span class="text-break">${original}</span>

    <div class="d-flex align-items-center gap-3 mt-3 mt-lg-0 link-right">
      <a href="${shortened}" target="_blank">${shortened}</a>
      <button class="btn btn-info btn-sm copy-btn">Copy</button>
    </div>
  `;

  linksContainer.prepend(div);
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {

    const link = e.target.previousElementSibling.textContent;

    navigator.clipboard.writeText(link);

    e.target.textContent = "Copied!";
    e.target.style.backgroundColor = "var(--dark-violet)";

    setTimeout(() => {
      e.target.textContent = "Copy";
      e.target.style.backgroundColor = "var(--cyan)";
    }, 2000);
  }
});


function saveLink(original, shortened) {
  const links = JSON.parse(localStorage.getItem("links")) || [];
  links.push({ original, shortened });
  localStorage.setItem("links", JSON.stringify(links));
}

function loadLinks() {
  const links = JSON.parse(localStorage.getItem("links")) || [];
  links.forEach(link => addLink(link.original, link.shortened));
}