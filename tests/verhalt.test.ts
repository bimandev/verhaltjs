import { keyContent, pathKeys, routePaths } from "@verhalt/parser";
import Verhalt from "../lib/verhalt";
import { test } from 'vitest';

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

const exampleModel = [{
    cigu: [
        2, 0, {nina: "as"}
    ],
    money : 100,
    age : 20,
    name : {
        first : "John",
        last : "Doe"
    },
    lib: ["a", { haha: "woho"}, "c"],
    shihi: [[], [["a", "b"]], ["c", "d"]]
}]

test('Verhalt.value', () => {
    //const values = VerhaltParser.pathValues(":cigu[0]? ?? :money[:age ?? 0]? ?? :name[first] ?? :lib[:lib[1].a ?? 0]?.haha? ?? :cigu[2].nina");
    //const keys = VerhaltParser.pathKeyContent("lib[:age ?? 0]?[4]?[dsf][0]?[:cigu[0]? ?? :money[:age ?? 0]? ?? :name[first] ?? :lib[:lib[1].a ?? 0]?.haha? ?? :cigu[2].nina]?[dfsd]");
    const path = routePaths(":cigu[0]?")[0];
    console.log(routePaths(":cigu[0] ?? :money ?? :age ?? :name[first] ?? :lib[:lib[1].a ?? 0]?.haha ?? :cigu[2].nina"));

    console.log(Verhalt.model(exampleModel, ":[0].shihi[1][0][1]"));
});