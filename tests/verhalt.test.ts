import { Verhalt } from "../lib/verhalt";
import { VerhaltEn } from "../lib/verhaltEn";

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
const fieldToUpdate : VerhaltEn<string> = {
    path: 'user.age',
    value: "25",
};

test('Verhalt.update', () => {
    Verhalt.update(model, fieldToUpdate);
    Verhalt.update(model, { path: "money", value: 31 });

    console.log(model, typeof model.user.age);
});