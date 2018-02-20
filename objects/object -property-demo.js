var o = { x: 1, y: 2, z: 3 }

for (property in o) {

    console.log(property)
    console.log(o[property])

}


for (property in o) {

    o[property] += 1;

    console.log(o[property])

}


var obj = new Object();

Object.defineProperty(obj, 'x', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: '15'
  });