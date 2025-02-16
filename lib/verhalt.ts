import { parsePathKeys, parseKey, parseKeyIndex } from "@verhalt/parser/lib"
import { VerhaltArrayObject, VerhaltKey, VerhaltLink, VerhaltLinkOptions, VerhaltModel, VerhaltObjectModel, VerhaltPointer, VerhaltReference, VerhaltStep, VerhaltStructureObject } from "@verhalt/types/lib";

export class verhalt {
    public static link(model : VerhaltObjectModel, path : string, options? : VerhaltLinkOptions) : VerhaltLink {
        const origin : VerhaltReference = new VerhaltReference(null as unknown as VerhaltStep, ":", model);
        const pointers : VerhaltPointer[] = [];

        const keys = parsePathKeys(path);
        let target : VerhaltObjectModel = model;

        while(keys.length > 0) {
            const key : VerhaltKey = parseKey(keys.shift() as string) as VerhaltKey;
            const references : VerhaltReference[] = [];

            for(const step of key.steps) {
                if(typeof target !== "object") throw new Error("Invalid Target: target is not an object");
                const isArray = Array.isArray(target);

                let raw : string;
                switch(step.structure) {
                    case "variable": {
                        raw = ""; // TODO: Implement variable structure
                        break;
                    }
                    default:
                    case "static": {
                        raw = step.content as string;
                        break;
                    }
                }

                let flag : string | number;
                switch(step.form) {
                    case "name": {                        
                        if(isArray) throw new Error("Invalid Target: Target is an array");

                        flag = raw;
                        target = (target as VerhaltStructureObject)[flag]
                        break;
                    }
                    default:
                    case "index": {
                        if(!isArray) throw new Error("Invalid Target: Target is not an array");

                        flag = Number(raw);
                        target = (target as VerhaltArrayObject)[flag]
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
        (link.parent!.obj as VerhaltStructureObject)[link.current.flag] = value;
    }
}

export default verhalt;