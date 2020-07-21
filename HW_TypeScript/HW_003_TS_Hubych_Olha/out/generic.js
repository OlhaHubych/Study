class WriteToDictionary {
    set key(item) {
        if (item == null || item == undefined) {
            throw new Error("Пустое значение ключа невозможно.");
        }
        this._key = item;
    }
    get key() {
        return this._key;
    }
    set value(elem) {
        if (elem == null || elem == undefined) {
            throw new Error("Пустое значение невозможно.");
        }
        this._value = elem;
    }
    get value() {
        return this._value;
    }
    set description(desc) {
        if (desc == null || desc == undefined) {
            throw new Error("Пустое описание невозможно.");
        }
        this._description = desc;
    }
    get description() {
        return this._description;
    }
}
class Dictionary {
    constructor() {
        this.archive = [];
    }
    addIntoDictionary(key, value, description) {
        let instanceOfWriting = new WriteToDictionary();
        instanceOfWriting.key = key;
        instanceOfWriting.value = value;
        instanceOfWriting.description = description;
        this.archive.push(instanceOfWriting);
    }
    getDescriptionByValue(value) {
        for (let i = 0; i < this.archive.length; i++) {
            if (this.archive[i].value == value) {
                return this.archive[i].description;
            }
        }
        return null;
    }
    getFromDictionaryByKey(key) {
        for (let i = 0; i < this.archive.length; i++) {
            if (this.archive[i].key == key) {
                return this.archive[i].description;
            }
        }
        return null;
    }
}
let di = new Dictionary();
di.addIntoDictionary(1, "hypothalamus", "The hypothalamus is a small region of the brain. It's located at the base of the brain, near the pituitary gland.");
di.addIntoDictionary(2, "cell", "The cell is the basic structural, functional, and biological unit of all known organisms. A cell is the smallest unit of life. Cells are often called the 'building blocks of life'.The study of cells is called cell biology, cellular biology, or cytology.");
di.addIntoDictionary(3, "DNA", "Deoxyribonucleic acid is a molecule composed of two polynucleotide chains that coil around each other to form a double helix carrying genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses.");
console.log(di.getDescriptionByValue("hypothalamus"));
console.log(di.getFromDictionaryByKey(2));
console.log("-----------");
let dic = new Dictionary();
dic.addIntoDictionary("Biology", false, 30000);
dic.addIntoDictionary("Math", true, 25000);
dic.addIntoDictionary("Music", false, 32000);
console.log(dic.getFromDictionaryByKey("Biology"));
console.log(dic.getDescriptionByValue(true));
//# sourceMappingURL=generic.js.map