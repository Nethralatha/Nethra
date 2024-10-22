# Sample Code for QSpider

function qSpiderExample() {
    const data = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Doe", age: 22 }
    ];

    data.forEach(person => {
        console.log(`Name: ${person.name}, Age: ${person.age}`);
    });
}

qSpiderExample();