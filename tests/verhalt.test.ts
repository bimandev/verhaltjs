import { Verhalt as V } from "../lib/verhalt";

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
    V.en(model, ["user.age", 31]);
    V.en(model, ["money", 31, "+"]);
    V.en(model, ["user.age", { first: 12, last : 35}, "*"]);
    V.en(model, ["user.age.first", 35, "*"]);
    V.en(model, ["user.age.first", 2, "/"]);
    V.en(model, ["user.name", "Karamelto"]);

    console.log(JSON.stringify(model, null, 2), typeof model.user.age);

    // V.if(["money", ">", 100])
    //      .then("user.age", 31, "+")
    //      .else("user.age", 31, "-");
});