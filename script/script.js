const productList = document.querySelector(".product-list");

fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) => {
    let productContent = data.map((item) => {
      return `    
        <div class="product-item">
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
    });

    productList.innerHTML=productContent
  });
