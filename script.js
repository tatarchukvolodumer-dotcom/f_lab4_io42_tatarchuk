// ====== Завдання 1 ======
const N = 82; // <--НОМЕР ВАРІАНТА
const index = (N % 10) + 1; // номер потрібного елемента по порядку

// Перший елемент (за номером index) шукаємо через getElementById
const firstEl = document.getElementById("block-" + index);

// Наступний елемент шукаємо через querySelector (якщо останній — беремо перший)
const nextIndex = index === 11 ? 1 : index + 1;
const secondEl = document.querySelector("#block-" + nextIndex);

// Клік вмикає колір, повторний клік вимикає (classList.toggle)
firstEl.addEventListener("click", function () {
    firstEl.classList.toggle("color-first");
});

secondEl.addEventListener("click", function () {
    secondEl.classList.toggle("color-second");
});

// ====== Завдання 2 ======
const photos = document.getElementById("block-11");
const baseImg = photos.querySelector("img");

// Остання картинка в контейнері — саме з нею працюють кнопки
function lastImg() {
    const all = photos.querySelectorAll("img");
    return all[all.length - 1];
}

document.getElementById("btn-add").addEventListener("click", function () {
    const img = document.createElement("img");
    img.src = baseImg ? baseImg.src : "Whiterun.jpg";
    img.alt = "Вайтран";
    img.width = 300;
    photos.appendChild(img);
});

document.getElementById("btn-grow").addEventListener("click", function () {
    const img = lastImg();
    if (img) img.width = Math.round(img.width * 1.1);
});

document.getElementById("btn-shrink").addEventListener("click", function () {
    const img = lastImg();
    if (img) img.width = Math.round(img.width * 0.9);
});

document.getElementById("btn-delete").addEventListener("click", function () {
    const img = lastImg();
    if (img) img.remove();
});