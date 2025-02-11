import { Verhalt } from "./verhalt";
import { VerhaltField } from "./verhaltField";

// Örnek Model
export type ExampleModel = {
    money: number;
    user: {
        name: string;
        age: number;
    };
};

// Model
const model: ExampleModel = {
    money: 100,
    user: {
        name: 'John',
        age: 30
    }
};

// Güncelleme
const fieldToUpdate : VerhaltField<number> = {
    path: 'user.age',
    value: 25,
    behaviour: "set"
};

Verhalt.update(model, fieldToUpdate);

console.log(model.user.age); // 25