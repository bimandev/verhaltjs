import Verhalt from "../lib/verhalt";
import VerhaltParser from "../lib/verhaltParser";


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
    //const values = VerhaltParser.pathValues(":cigu[0]? ?? :money[:age ?? 0]? ?? :name[first] ?? :lib[:lib[1].a ?? 0]?.haha? ?? :cigu[2].nina");
    //const keys = VerhaltParser.pathKeyContent("lib[:age ?? 0]?[4]?[dsf][0]?[:cigu[0]? ?? :money[:age ?? 0]? ?? :name[first] ?? :lib[:lib[1].a ?? 0]?.haha? ?? :cigu[2].nina]?[dfsd]");
    console.log(VerhaltParser.pathKeyContent("lib[0].aha.hihi[1]")); 
});