const myObject = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    swift: "Swift",
    java: "Java",
}

//forin loop

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);   
}

const programmingLanguages = ["JavaScript", "Python", "Ruby", "Swift", "Java"];

for (const key in programmingLanguages) {
    console.log(key); // 0 1 2 3 4
    console.log(programmingLanguages[key]); // JavaScript Python Ruby Swift Java 
}

// for in mein key milta hai
// for of mein value milta hai

const map = new Map()
map.set("IN", "India") 
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("IN", "India")

for (const key in map) {
    console.log(key);
    }
// map is not iterable, so we cannot use for in loop on map