import { Verhalt } from "../lib/verhalt";
import { keyContent } from "../regex/key/keyContent";
import { optionalGroups, rootGroup } from "../regex/path/pathGroups";
import { continueKeys, rootKey } from "../regex/path/pathKeys";
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
    const [root, optional] = rootGroup(":lib[:cigu[:cigu[0]?].nina?]?.haha ?? :yourmama ?? :sisisu") ?? [];
    const _optionalGroups = optionalGroups(optional ?? "");
    const _rootKey = rootKey(root ?? "");

    console.log(root, _rootKey); //
});