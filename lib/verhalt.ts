/*import { parsePathKeys, parseKey } from "@verhalt/parser/lib"
import { VerhaltArrayObject, VerhaltKey, VerhaltLink, VerhaltLinkOptions, VerhaltModel, VerhaltObjectModel, VerhaltPointer, VerhaltReference, VerhaltReferenceFlag, VerhaltStep, VerhaltStructureObject } from "@verhalt/types/lib";

export class verhalt {
    public static link(model : VerhaltObjectModel, path : string, options? : VerhaltLinkOptions) : VerhaltLink {
        const origin : VerhaltReference = new VerhaltReference(null as unknown as VerhaltStep, { value: ":" }, model);
        const pointers : VerhaltPointer[] = [];

        const keys = parsePathKeys(path);
        let target : VerhaltObjectModel = model;

        while(keys.length > 0) {
            const key : VerhaltKey = parseKey(keys.shift() as string) as VerhaltKey;
            const references : VerhaltReference[] = [];

            for(const step of key.steps) {
                if(typeof target !== "object") throw new Error("Invalid Target: target is not an object");
                const isArray = Array.isArray(target);

                let flag : VerhaltReferenceFlag;
                switch(step.structure) {
                    case "variable": {
                        const link = verhalt.link(model, step.content as string);
                        flag = {
                            link: link,
                            value: link.current.obj as unknown as any
                        }
                        break;
                    }
                    default:
                    case "static": {
                        flag = {
                            link: undefined,
                            value: step.content as string
                        }
                        break;
                    }
                }

                switch(step.form) {
                    case "name": {                        
                        if(isArray) throw new Error("Invalid Target: Target is an array");

                        target = (target as VerhaltStructureObject)[flag.value as string]
                        break;
                    }
                    default:
                    case "index": {
                        if(!isArray) throw new Error("Invalid Target: Target is not an array");

                        target = (target as VerhaltArrayObject)[flag.value as number]
                        break;
                    }
                }

                references.push(new VerhaltReference(step, flag, target));
            }

            pointers.push(new VerhaltPointer(key, references));
        }

        return new VerhaltLink(origin, path, options ?? {}, pointers);
    }

    public static lookup(model : VerhaltObjectModel, path : string) : VerhaltModel {
        const link = verhalt.link(model, path);
        return link.current.obj;
    }

    public static assign(model : VerhaltObjectModel, path : string, value : VerhaltModel) : void {
        const link = verhalt.link(model, path);
        const parent = link.parent!;
        const flag = link.current.flag;
        
        if(parent.step.form === "name")
            (link.parent!.obj as VerhaltStructureObject)[flag.value as string] = value;
        else
            (link.parent!.obj as VerhaltArrayObject)[flag.value as number] = value
    }
}

export default verhalt;*/