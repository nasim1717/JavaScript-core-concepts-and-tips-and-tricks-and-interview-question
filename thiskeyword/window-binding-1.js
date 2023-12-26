var PrintName = function () {
  console.log(this);
  console.log(this.name); // undifined
};

var sakib = {
  name: "Sakib",
};

PrintName();
