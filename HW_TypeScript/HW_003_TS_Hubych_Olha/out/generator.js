class Generator {
    constructor(items) {
        this.items = items;
        this.arr = [];
        for (let i = 0; i < items.length; i++) {
            this.arr.push(items[i]);
        }
    }
    *addYield(item) {
        yield this.arr[item];
    }
}
let generatorString = new Generator(["to", "my", "cold", "98", "sky", "baby"]);
let pattern = /^\d+$/;
let result = "";
for (let i = 0; i < generatorString.arr.length; i++) {
    if (!pattern.test(generatorString.arr[i])) {
        generatorString.addYield(i);
        result += generatorString.arr[i];
        console.log(result);
    }
    else
        throw new Error("Числа передавать запрещено.");
}
//# sourceMappingURL=generator.js.map