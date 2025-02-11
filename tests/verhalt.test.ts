import { Verhalt } from "../lib/verhalt";

export type ExampleModel = {
    money: number;
    user: {
        name: string;
        age: number;
    };
};

const model: ExampleModel = {
    money: 100,
    user: {
        name: 'John',
        age: 30
    }
};

test('Verhalt.update', () => {
    Verhalt.en(model, { path: "user.age", value: "25", modus: "add" });
    Verhalt.en(model, { path: "money", value: 31, modus: "add" });

    console.log(model, typeof model.user.age);
});