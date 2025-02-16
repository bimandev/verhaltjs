import { CharInfo } from "../charInfo";
import { InputInfo } from "../inputInfo";

export function parseRoutePaths(input?: string): string[] {
    if (!input) {
        return [];
    }

    const head = "VERHALT-ROUTE-PATHS";
    const info = new InputInfo(input);
    const paths: string[] = [];
    let pathBuffer: string[] = [];
    
    do {        
        info.checkCurlyClose(head);
        info.checkSquareClose(head);

        const char = info.current as CharInfo;
        pathBuffer.push(char.target);

        if(char.isWhitespace) {
            if(!(info.curlyStack !== 0 || info.squareStack !== 0)) {
                if (input.slice(info.cursor, info.cursor + 4) === " ?? ") {
                    info.skip(3);
                    pathBuffer.pop();

                    paths.push(pathBuffer.join(""));
                    pathBuffer = [];
                } else {
                    throw new Error("Unexpected character or structure.");
                }
            }
        }

        if(info.isLast()) {
            paths.push(pathBuffer.join(""));
        }

    } while(info.next());

    info.checkCurlyOpen(head);
    info.checkSquareOpen(head);

    return paths;
}