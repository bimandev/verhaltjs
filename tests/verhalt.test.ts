import { Verhalt } from "../lib/verhalt";
import { VerhaltField } from "../lib/verhaltField";

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
const fieldToUpdate : VerhaltField<string> = {
    path: 'user.age',
    value: "25",
    behaviour: "set"
};

test('Verhalt.update', () => {
    Verhalt.update(model, fieldToUpdate);
    console.log(model.user.age, typeof model.user.age);
});