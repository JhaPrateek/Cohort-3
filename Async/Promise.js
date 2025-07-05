// const cart=["shoes,","pants","jeans"]

// createOrder(cart)
//     .then(orderId=>proceedToPayment(orderId))
//     .then(paymentId=>showOrderSummary(paymentId))
//     .then(paymentInfo=>updateWalletBalance(paymentInfo))

//-------------------------------------------------------------------------------------------------------------
function getUser(userId) {
  return fetch(`/api/users/${userId}`)
    .then(response => response.json());
}

function getOrders(userId) {
  return fetch(`/api/users/${userId}/orders`)
    .then(response => response.json());
}

getUser(123)
  .then(user => {
    console.log("User:", user);
    return getOrders(user.id); // Pass user ID to next API
  })
  .then(orders => {
    console.log("Orders:", orders);
  })
  .catch(err => {
    console.error("Something went wrong:", err);
  });
//-------------------------------------------------------------------------------------------------------------
