document.addEventListener("DOMContentLoaded", () => {
  if (
    !("selected-product" in localStorage) ||
    localStorage.getItem("selected-product") === "[]"
  ) {
    window.location.href = "./index.html";
    return;
  }

  const data = JSON.parse(localStorage.getItem("selected-product"));

  const productTitle = document.getElementById("product-title");
  const productCity = document.getElementById("product-city");
  const productPrice = document.getElementById("product-price");
  const productBrand = document.getElementById("product-brand");
  const productYear = document.getElementById("product-year");
  const productColor = document.getElementById("product-color");
  const productMileage = document.getElementById("product-mileage");

  const productTitleMobile = document.getElementById("product-title-mobile");
  const productCityMobile = document.getElementById("product-city-mobile");
  const productPriceMobile = document.getElementById("product-price-mobile");
  const productBrandMobile = document.getElementById("product-brand-mobile");
  const productYearMobile = document.getElementById("product-year-mobile");
  const productColorMobile = document.getElementById("product-color-mobile");
  const productMileageMobile = document.getElementById(
    "product-mileage-mobile",
  );

  const productImage = document.getElementById("product-image");
  const productDesc = document.getElementById("product-desc");
  const stnk = document.getElementById("stnk");
  const stnkStatus = document.getElementById("stnk-status");
  const bpkb = document.getElementById("bpkb");
  const bpkbStatus = document.getElementById("bpkb-status");
  const service = document.getElementById("service");
  const serviceStatus = document.getElementById("service-status");

  productTitle.innerHTML = data[0].title;
  productCity.innerHTML = data[0].city;
  productPrice.innerHTML = formatCurrency(parseInt(data[0].price));
  productBrand.innerHTML = data[0].model.brand + ", " + data[0].model.name;
  productYear.innerHTML = data[0].model.year;
  productColor.innerHTML = data[0].model.color;
  productMileage.innerHTML =
    formatDecimal(parseInt(data[0].model.mileage)) + " KM";

  productTitleMobile.innerHTML = data[0].title;
  productCityMobile.innerHTML = data[0].city;
  productPriceMobile.innerHTML = formatCurrency(parseInt(data[0].price));
  productBrandMobile.innerHTML =
    data[0].model.brand + ", " + data[0].model.name;
  productYearMobile.innerHTML = data[0].model.year;
  productColorMobile.innerHTML = data[0].model.color;
  productMileageMobile.innerHTML =
    formatDecimal(parseInt(data[0].model.mileage)) + " KM";

  productImage.src = data[0].vehicle_images;
  productImage.alt = data[0].title;
  productDesc.innerHTML = data[0].description;
  if (data[0].stnk) {
    stnk.classList.remove("bg-secondary");
    stnk.classList.add("bg-indigo-50");
    stnkStatus.classList.remove("text-muted-foreground");
    stnkStatus.classList.add("text-foreground");
    stnkStatus.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#1BB257]" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M400 48H112a64.07 64.07 0 00-64 64v288a64.07 64.07 0 0064 64h288a64.07 64.07 0 0064-64V112a64.07 64.07 0 00-64-64zm-35.75 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"/></svg>Tersedia`;
  }

  if (data[0].bpkb) {
    bpkb.classList.remove("bg-secondary");
    bpkb.classList.add("bg-indigo-50");
    bpkbStatus.classList.remove("text-muted-foreground");
    bpkbStatus.classList.add("text-foreground");
    bpkbStatus.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#1BB257]" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M400 48H112a64.07 64.07 0 00-64 64v288a64.07 64.07 0 0064 64h288a64.07 64.07 0 0064-64V112a64.07 64.07 0 00-64-64zm-35.75 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"/></svg>Tersedia`;
  }

  if (data[0].service_book) {
    service.classList.remove("bg-secondary");
    service.classList.add("bg-indigo-50");
    serviceStatus.classList.remove("text-muted-foreground");
    serviceStatus.classList.add("text-foreground");
    serviceStatus.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#1BB257]" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M400 48H112a64.07 64.07 0 00-64 64v288a64.07 64.07 0 0064 64h288a64.07 64.07 0 0064-64V112a64.07 64.07 0 00-64-64zm-35.75 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"/></svg>Tersedia`;
  }
});
