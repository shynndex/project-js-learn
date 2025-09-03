const productList = document.querySelector(".product-list");

import { fetchData } from "./fetchData.js";

const data = await fetchData("products");
let productData = data.map((item) => {
  return `<div class="product-item">
        <div class="product-image">
          <img
            src=${item.images}
            alt=""
          />
        </div>

        <div class="product-content">
          <div class="product-discount-percentage">${item.discountPercentage}%</div>
          <div class="product-title">${item.title}</div>

          <div class="product-meta">
            <div class="product-price">${item.price}$</div>
            <div class="product-stock">Còn lại:${item.stock} sp</div>
          </div>
        </div>
      </div>`;
}).join("");
productList.innerHTML = productData;
