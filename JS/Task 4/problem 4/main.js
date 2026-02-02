 const products = [
      { name: "Laptop" },
      { name: "Phone" },
      { name: "Headphones" },
      { name: "Keyboard" },
      { name: "Mouse" },
      { name: "Monitor" }
    ];

    const searchInput = document.getElementById("searchInput");
    const productList = document.getElementById("productList");
    const noResult = document.getElementById("noResult");

    function renderProducts(items) {
      productList.innerHTML = "";

      items.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        productList.appendChild(li);
      });
    }

    renderProducts(products);

    searchInput.addEventListener("input", () => {
      const searchValue = searchInput.value.toLowerCase();

      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
      );

      if (filteredProducts.length === 0) {
        productList.style.display = "none";
        noResult.style.display = "block";
      } else {
        productList.style.display = "block";
        noResult.style.display = "none";
        renderProducts(filteredProducts);
      }
    });