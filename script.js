let newProduct = {
    name: "Porsche", color: "Red", year: 2018,
    getCar: function () {
        console.log("I currently have a" + " " + this.color + " " + this.year + " " + this.name);
    }
};
newProduct.getCar();

let wishList = { 
    name: "Mercedes-Benz", color: "Blue", year: 2019,
    iWant: function () {
        console.log("I really want a" + " " + this.color + " " + this.year + " " + this.name);
    }
};
wishList.iWant();