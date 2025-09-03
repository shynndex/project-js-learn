import { fetchData } from "./fetchData.js";

const categoryDiv = document.querySelector(".category-list");

const data = await fetchData("categories");

console.log(data);

let categoriesData = data.map((item) => {
  return `
    <div class="category-item">${item.name}</div>`;
}).join("");

categoryDiv.innerHTML = categoriesData;
