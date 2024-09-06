const mobile = {
    name: "Samsung",
    price: "500$",
    color: "Blue",
    origin: "South Korea"
}

for(const prop in mobile){
    //console.log(prop);  // it will show all the property name in mobile object
   // console.log(mobile[prop]); // it will show all the element name of property in this mobile object as we are calling it with the index
}

const keys = Object.keys(mobile);  // we are keeping all the object property in an arry name keys.

console.log(keys); // it will show all the property name in an arry

for(const key of keys){
    console.log(key, ':', mobile[key]); // it will show both keys(property) and its element(key)
}

