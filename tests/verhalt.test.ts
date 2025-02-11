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
    Verhalt.en(model)
        .do(["user.age", 31])
        .do(["money", 31, "+"])
        .do(["user.age", { first: 12, last : 35}, "*"])
        .do(["user.age.first", 35, "*"])
        .do(["user.age.first", 2, "/"])
        .do(["user.name", "Karamelto"]);

    console.log(JSON.stringify(model, null, 2), typeof model.user.age);

    // V.if(model, ["money", ">", 100])
    //      .then("user.age", 31, "+")
    //          .en("user.age", 31, "+")
    //      .else("user.age", 31, "-");
});