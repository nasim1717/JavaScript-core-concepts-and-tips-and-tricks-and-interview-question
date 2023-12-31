const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`processing order for ${customer}`);

  setTimeout(() => {
    console.log(`cooking complate`);
    console.log(`order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`complate order for ${customer}`);
};

takeOrder("customer 1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});
