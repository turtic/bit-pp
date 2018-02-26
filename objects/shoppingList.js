'use strict';

(function () {
    console.log('Hi! We can do it!')

    var today = new Date()
//------------------------------------------ Product function --------------------------------
    function Product(name, price, expirationDate) {
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.id = (function () {

            return parseInt(((90001) * Math.random()) + 9999);

        })();
    };
//------------------------------------------ Product prototype --------------------------------
    Product.prototype.getInfo =  function () {
        var firstLast = this.name[0] + this.name[this.name.length - 1]
        return firstLast.toUpperCase() + this.id + ', ' + this.name + ', ' + this.expirationDate;
    };

    var coffeeExpirationDate = new Date(2018, 7, 13)
    var coffee = new Product('Grand kafa', 102.45, coffeeExpirationDate)

    var drink = new Product('Vinjak', 800.45, new Date(2099, 11, 13));

    var bread = new Product('Budjav lebac', 35, new Date(2017, 11, 13))
//------------------------------------------ ShoppingBag function --------------------------------
    function ShoppingBag() {
        this.listOfProducts = [];
    };
//------------------------------------------ ShoppingBag.prototype --------------------------------
    ShoppingBag.prototype.productAVGPrice = function () {

        var sum = 0;

        for (var i = 0; i < this.listOfProducts.length; i++) {
            sum = sum + this.listOfProducts[i].price;
        }

        var avg = sum / this.listOfProducts.length;

        return avg.toPrecision(3)
    };

    ShoppingBag.prototype.mostExpensive = function () {

        var max = this.listOfProducts[0].price;
        var index = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            if (max < this.listOfProducts[i].price) {

                max = this.listOfProducts[i].price;
                index = i;
            }
        }
        return this.listOfProducts[index].getInfo()
    };

    ShoppingBag.prototype.addProduct = function (product) {

        // exp date
        if (today < product.expirationDate) {
            this.listOfProducts.push(product);
        } else {
            console.log("Danger! " + product.name + " is out of date. This product will not be added!")
        }

    }

    ShoppingBag.prototype.totalPrice = function () {

        var sum = 0;

        for (var i = 0; i < this.listOfProducts.length; i++) {
            sum = sum + this.listOfProducts[i].price;
        }

        return sum;
    }
//------------------------------------------ PaymentCard function --------------------------------

    function PaymentCard(cash, validUntil) {
        this.accountBalance = cash;
        this.validUntil = validUntil;
        this.status = (function () {

            if (today < validUntil) {
                return 'Active'
            } else {
                return 'Inactive'
            }

        })();
    }

//------------------------------------------ PaymentCard prototype --------------------------------

    var checkoutAndBuy = function (bag, card) {

        // console.log(card.accountBalance);
        // console.log(bag.totalPrice());

        var dif = card.accountBalance - bag.totalPrice();

        // console.log(dif.toPrecision(2));

        if (dif >= 0) {
            return 'Success'


        } else {
            return 'Insufficient fonds, missing ' + dif.toFixed(2) + ' dinars ¯\\_(ツ)_/¯'
        }

    }

    var myBag = new ShoppingBag();
    var myCard = new PaymentCard(10, new Date(2020, 3, 4));


    myBag.addProduct(coffee);
    myBag.addProduct(drink);
    myBag.addProduct(bread);


    console.log(checkoutAndBuy(myBag, myCard))


})();