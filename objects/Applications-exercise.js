function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}

WebApp.prototype.getData = function () {
    console.log(this.name + ', ' + this.url + ', ' + this.technologies + ', ' + this.licence + ', ' + this.stars);
}

WebApp.prototype.reactBased = function () {

    if (this.technologies == 'React') {
        return true;
    } else {
        return false;
    }

}

var app1 = new WebApp('jinx', 'www.jinx.com', 'JS', 'CC', 5)
var app2 = new WebApp('bing', 'www.bing.com', 'React', 'some-licence', 4.5)

// console.log(app1)
// app1.getData()
// app2.getData()
// console.log(app1.reactBased())
// console.log(app2.reactBased())



function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}
MobileApp.prototype.getData = function () {
    console.log(this.name + ', ' + this.platforms, ', ' + this.licence + ', ' + this.stars)
}
MobileApp.prototype.forAndroid = function () {
    if (this.platforms == 'Android') {
        return true

    } else {
        return false
    }
}

var mob1 = new MobileApp('jinxMobile', 'Android', 'some-licence', 4)
var mob2 = new MobileApp('bingMobile', 'IOS', 'CC', 3)


var shareObj = {
    isCCLicence: function () {

        if (this.licence == 'CC') {
            return true

        } else {
            return false
        }
    },
    like: function () {
        this.stars ++;
    },
    showStars: function () {
       console.log(this.stars) 
    }

}

WebApp.prototype.__proto__ = shareObj;
MobileApp.prototype.__proto__ = shareObj;


// console.log(mob1)
// mob1.getData()
// mob2.getData()
// console.log(mob1.forAndroid())
// console.log(mob2.forAndroid())

console.log(mob1.isCCLicence())
console.log(mob2.isCCLicence())

mob1.like()
mob1.like()

console.log(mob1.stars)
mob1.showStars()