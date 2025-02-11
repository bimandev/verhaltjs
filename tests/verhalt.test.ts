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
    Verhalt.en(model, { path: "user.age", value: { first: 25, last: 35 } });
    Verhalt.en(model, { path: "money", value: 31, modus: "+" });
    Verhalt.en(model, { path: "user.age.first", value: 35, modus: "*" });
    Verhalt.en(model, { path: "user.age.first", value: 2, modus: "/" });
    Verhalt.en(model, { path: "user.name", value: "Karamelto" });

    console.log(JSON.stringify(model, null, 2), typeof model.user.age);
});