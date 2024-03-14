// discounts.js

function applyDiscount(total, discountPercent) {
    const discountAmount = total * (discountPercent / 100);
    return total - discountAmount;
  }
  
  module.exports = {
    applyDiscount
  };
  