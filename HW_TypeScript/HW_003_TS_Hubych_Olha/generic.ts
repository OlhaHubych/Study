/*
Создать словарь собственных определений, используя Generic function. 
Внутри должно быть определение для 3 свойств – ключ, значение, описание (различных типов данных). 
Для получения или записи использовать get/set реализацию доступа. Также для полей нужно использовать 
модификаторы доступа (на Ваш выбор). В итоге должен получится словарь терминов, принимающий на входящий 
параметр различные типы данных для реализации.
*/

class WriteToDictionary<Tkey, TValue, TDescription> {
    private _key: Tkey;
    private _value: TValue;
    private _description: TDescription;
    
    //key
    public set key(item: Tkey) {
        if(item == null || item == undefined) {
            throw new Error("Пустое значение ключа невозможно.");
        }
        this._key = item;
    }
    public get key(): Tkey {
        return this._key;
    }
    //value
    public set value(elem: TValue) {
        if(elem == null || elem == undefined) {
            throw new Error("Пустое значение невозможно.");
        }
        this._value = elem;
    }
    public get value(): TValue {
        return this._value;
    }
    //description
    public set description(desc: TDescription) {
        if(desc == null || desc == undefined) {
            throw new Error("Пустое описание невозможно.");
        }
        this._description = desc;
    }
    public get description(): TDescription {
        return this._description;
    }
}

class Dictionary <Tkey, TValue, TDescription> {
    protected archive: WriteToDictionary<Tkey, TValue, TDescription>[] = [];
    
    public addIntoDictionary(key: Tkey, value: TValue, description: TDescription) {
        let instanceOfWriting = new WriteToDictionary<Tkey, TValue, TDescription>();
        instanceOfWriting.key = key;
        instanceOfWriting.value = value;
        instanceOfWriting.description = description;
        this.archive.push(instanceOfWriting);
    }

    public getDescriptionByValue(value: TValue): TDescription | null {
        for(let i = 0; i < this.archive.length; i++) {
            if(this.archive[i].value == value) {
                return this.archive[i].description;
            }
        }
        return null; 
    }

    public getFromDictionaryByKey(key: Tkey): TDescription | null {
        for(let i = 0; i < this.archive.length; i++) {
            if(this.archive[i].key == key) {
               return this.archive[i].description;
            }
        } 
        return null;
    }
    
    
}

/*let d = new WriteToDictionary<number, string, string>();
d.key = 1;
d.value = "hypothalamus";
d.description = "The hypothalamus is a small region of the brain. It's located at the base of the brain, near the pituitary gland.";

console.log(d); */

let di = new Dictionary<number, string, string>();
di.addIntoDictionary(1, "hypothalamus", "The hypothalamus is a small region of the brain. It's located at the base of the brain, near the pituitary gland.");
di.addIntoDictionary(2, "cell", "The cell is the basic structural, functional, and biological unit of all known organisms. A cell is the smallest unit of life. Cells are often called the 'building blocks of life'.The study of cells is called cell biology, cellular biology, or cytology.");
di.addIntoDictionary(3, "DNA", "Deoxyribonucleic acid is a molecule composed of two polynucleotide chains that coil around each other to form a double helix carrying genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses.");

console.log(di.getDescriptionByValue("hypothalamus"));
console.log(di.getFromDictionaryByKey(2));
console.log("-----------");

let dic = new Dictionary<string, boolean, number>();
dic.addIntoDictionary("Biology", false, 30000);
dic.addIntoDictionary("Math", true, 25000);
dic.addIntoDictionary("Music", false, 32000);

console.log(dic.getFromDictionaryByKey("Biology"));
console.log(dic.getDescriptionByValue(true));


