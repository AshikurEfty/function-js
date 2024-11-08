var shoppingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen:25
}
var penCount= shoppingCard.pen;
console.log(shoppingCard);
console.log(penCount);

var penCount2 = shoppingCard['pen'];
var properties = Object.keys(shoppingCard);
var propertiesValue = Object.values(shoppingCard);
var propertiesName='keyboard';
var propertyValue=shoppingCard[propertiesName];


console.log(properties);
console.log(propertiesValue);
console.log(propertiesName, propertiesValue);
shoppingCard.mouse =12;
console.log(shoppingCard);
shoppingCard[propertiesName]=45;
console.log(shoppingCard);