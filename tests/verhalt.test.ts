//(?:\:([^:\[]+(?:\[[^\]]*\])*[^:]*))
type ExampleModel = {
    cigu : any[];
    money : number;
    age : number;
    name : {
        first : string;
        last : string;
    }
    lib: any[];
}

const exampleModel : ExampleModel = {
    cigu: [
        2, 0, {nina: 1}
    ],
    money : 100,
    age : 20,
    name : {
        first : "John",
        last : "Doe"
    },
    lib: ["a", { haha: "woho"}, "c"]
}

test('Verhalt.value', () => {

});