'use strict';

(function () {
    console.log('Hi! We can do it!')

    function Product(name, price, expirationDate) {
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.id = (function () {
            
            return parseInt(((90001) * Math.random()) + 9999);

        })();

        this.getInfo = function () {
            var firstLast = this.name[0] + this.name[this.name.length - 1]
            return firstLast.toUpperCase() + this.id + ', ' + this.name + ', ' + this.expirationDate;
        }
    };

    var coffeeExpirationDate = new Date(2018, 7, 13)
    var coffee = new Product('Grand kafa', 102.45, coffeeExpirationDate)

    var drink = new Product('Vinjak', 800.45, new Date(2099, 11, 13));

    var bread = new Product('Budjav lebac', 35, new Date(2017, 11, 13))

    function ShoppingBag() {
        this.listOfProducts = [];
        this.productAVGPrice = function () {

            var sum = 0;

            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum = sum + this.listOfProducts[i].price;
            }

            var avg = sum / this.listOfProducts.length;

            return avg.toPrecision(3)
        };
        this.mostExpensive = function () {

            var max = this.listOfProducts[0].price;
            var index = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                if (max < this.listOfProducts[i].price) {

                    max = this.listOfProducts[i].price;
                    index = i;
                }
            }
            return this.listOfProducts[index].getInfo()
        }
        this.addProduct = function (product) {
            var today = new Date()
            // exp date
            if (today < product.expirationDate) {
                this.listOfProducts.push(product);
            } else {
                console.log("Danger! " + product.name + " out of date")
            }

        }

        this.totalPrice = function () {

            var sum = 0;

            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum = sum + this.listOfProducts[i].price;
            }

            return sum;
        }

    };

    function PaymentCard(cash, status, valid) {
        this.accountBalance = cash;
        this.status = status;
        this.validUntil = valid;
    }

    var checkoutAndBuy = function (bag, card) {

        console.log(card.accountBalance);
        console.log(bag.totalPrice());

        if (card.accountBalance - bag.totalPrice() >= 0) {
            return 'Success'


        } else {
            return 'Insufficient fonds missing ' + (card.accountBalance - bag.totalPrice)
        }

    }

    var myBag = new ShoppingBag();
    var myCard = new PaymentCard(100000, 'active', new Date(2020, 3, 4));


    myBag.addProduct(coffee);
    myBag.addProduct(drink);
    myBag.addProduct(bread);





})();