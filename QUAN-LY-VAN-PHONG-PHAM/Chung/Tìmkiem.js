const form = document.querySelector(".search-form");
const input = form.querySelector("input[name='q']");
const list = document.getElementById("suggestions");
const KEY = "lichSuTimKiem";

function getHistory() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

function saveHistory(keyword) {
  keyword = keyword.trim();
  if (!keyword) return;
  let history = getHistory().filter(h => h !== keyword);
  history.unshift(keyword);
  history = history.slice(0, 8);
  localStorage.setItem(KEY, JSON.stringify(history));
}

function removeHistory(keyword) {
  const history = getHistory().filter(h => h !== keyword);
  localStorage.setItem(KEY, JSON.stringify(history));
}

function render() {
  const keyword = input.value.trim().toLowerCase();
  const items = getHistory().filter(h => h.toLowerCase().includes(keyword));

  list.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = item;

    const del = document.createElement("span");
    del.textContent = "✕";
    del.className = "xoa";

    li.append(text, del);

    li.addEventListener("click", () => {
      input.value = item;
      form.requestSubmit();
    });

    del.addEventListener("click", e => {
      e.stopPropagation();
      removeHistory(item);
      render();
    });

    list.appendChild(li);
  });

  list.style.display = items.length ? "block" : "none";
}

form.addEventListener("submit", () => {
  saveHistory(input.value);
  list.style.display = "none";
});

input.addEventListener("input", render);
input.addEventListener("focus", render);

document.addEventListener("click", e => {
  if (!e.target.closest(".search-form")) list.style.display = "none";
});