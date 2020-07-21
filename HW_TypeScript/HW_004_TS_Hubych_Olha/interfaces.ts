// or export interface Animal { ... }

interface Animal {
    name?: string;
    type: string;
    zooType: string;
    leavingPlace: string; 
    favoriteFood?: string [];

    eat: () => string;
    move: () => string;
}

export { Animal as Interface };