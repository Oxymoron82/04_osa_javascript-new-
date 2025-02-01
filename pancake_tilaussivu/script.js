
function updateTotalPrice() {
  const typeSelect = document.getElementById('type');
  const basePrice = parseInt(typeSelect.value);

  let totalPrice = basePrice;

 
  const addOns1Euro = document.querySelectorAll('.customization-section input[type="checkbox"][value="1"]:checked');
  addOns1Euro.forEach((checkbox) => {
    totalPrice += parseInt(checkbox.value);
  });

 
  const addOns2Euro = document.querySelectorAll('.customization-section input[type="checkbox"][value="2"]:checked');
  addOns2Euro.forEach((checkbox) => {
    totalPrice += parseInt(checkbox.value);
  });


  const addOns3Euro = document.querySelectorAll('.customization-section input[type="checkbox"][value="3"]:checked');
  addOns3Euro.forEach((checkbox) => {
    totalPrice += parseInt(checkbox.value);
  });

  
  document.getElementById('totalPrice').textContent = `${totalPrice}€`;
  document.getElementById('totalPriceDisplay').textContent = `${totalPrice}€`;

 
  const priceBanner = document.querySelector('.price-banner');
  priceBanner.style.animation = 'none'; 
  priceBanner.offsetHeight; 
  priceBanner.style.animation = 'fadeInPrice 0.5s ease-in-out'; 
}


document.getElementById('type').addEventListener('change', updateTotalPrice);


const allCheckboxes = document.querySelectorAll('.customization-section input[type="checkbox"]');
allCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', updateTotalPrice);
});


updateTotalPrice();
