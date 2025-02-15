import { it, expect, describe } from 'vitest';
import { parseStep } from '../../../src/lib/step/parseStep';

it("should return undefined for empty inputs", () => {
    expect(parseStep("")).toBeUndefined();
    expect(parseStep(undefined as unknown as string)).toBeUndefined()
});

it("should throw error for unexpected inputs", () => {
    expect(() => parseStep(null as unknown as string)).toThrowError();
    expect(() => parseStep(2004 as unknown as string)).toThrowError();
    expect(() => parseStep(true as unknown as string)).toThrowError();
    expect(() => parseStep({ myObject : 1} as unknown as string)).toThrowError();
});

describe("Static Name Steps", () => {
    it("should return correct values", () => {
        expect(parseStep("My_StEp")).toEqual({ form: "name", display: "My_StEp", content: "My_StEp", structure: "static", catching: "native", useRedirect: false });
        expect(parseStep("My_StEp?")).toEqual({ form: "name", display: "My_StEp?", content: "My_StEp", structure: "static", catching: "optional", useRedirect: false  });
        expect(parseStep("My_StEp!")).toEqual({ form: "name", display: "My_StEp!", content: "My_StEp", structure: "static", catching: "strict", useRedirect: false });
        
        expect(parseStep("__My_StEp")).toEqual({ form: "name", display: "__My_StEp", content: "__My_StEp", structure: "static", catching: "native", useRedirect: false });
        expect(parseStep("__My_StEp?")).toEqual({ form: "name", display: "__My_StEp?", content: "__My_StEp", structure: "static", catching: "optional", useRedirect: false });
        expect(parseStep("__My_StEp!")).toEqual({ form: "name", display: "__My_StEp!", content: "__My_StEp", structure: "static", catching: "strict", useRedirect: false });
    
        expect(parseStep("{My_StEp}")).toEqual({ form: "name", display: "{My_StEp}", content: "My_StEp", structure: "static", catching: "native", useRedirect: false });
        expect(parseStep("{My_StEp}?")).toEqual({ form: "name", display: "{My_StEp}?", content: "My_StEp", structure: "static", catching: "optional", useRedirect: false });
        expect(parseStep("{My_StEp}!")).toEqual({ form: "name", display: "{My_StEp}!", content: "My_StEp", structure: "static", catching: "strict", useRedirect: false });
        
        expect(parseStep("{__My_StEp}")).toEqual({ form: "name", display: "{__My_StEp}", content: "__My_StEp", structure: "static", catching: "native", useRedirect: false });
        expect(parseStep("{__My_StEp}?")).toEqual({ form: "name", display: "{__My_StEp}?", content: "__My_StEp", structure: "static", catching: "optional", useRedirect: false });
        expect(parseStep("{__My_StEp}!")).toEqual({ form: "name", display: "{__My_StEp}!", content: "__My_StEp", structure: "static", catching: "strict", useRedirect: false });
    });
});

describe("Static Name Redirect Steps", () => {
    it("should return correct values", () => {
        expect(parseStep("My_StEp>")).toEqual({ form: "name", display: "My_StEp>", content: "My_StEp", structure: "static", catching: "native", useRedirect: true });
        expect(parseStep("My_StEp>?")).toEqual({ form: "name", display: "My_StEp>?", content: "My_StEp", structure: "static", catching: "optional", useRedirect: true  });
        expect(parseStep("My_StEp>!")).toEqual({ form: "name", display: "My_StEp>!", content: "My_StEp", structure: "static", catching: "strict", useRedirect: true });
        
        expect(parseStep("__My_StEp>")).toEqual({ form: "name", display: "__My_StEp>", content: "__My_StEp", structure: "static", catching: "native", useRedirect: true });
        expect(parseStep("__My_StEp>?")).toEqual({ form: "name", display: "__My_StEp>?", content: "__My_StEp", structure: "static", catching: "optional", useRedirect: true });
        expect(parseStep("__My_StEp>!")).toEqual({ form: "name", display: "__My_StEp>!", content: "__My_StEp", structure: "static", catching: "strict", useRedirect: true });
    
        expect(parseStep("{My_StEp}>")).toEqual({ form: "name", display: "{My_StEp}>", content: "My_StEp", structure: "static", catching: "native", useRedirect: true });
        expect(parseStep("{My_StEp}>?")).toEqual({ form: "name", display: "{My_StEp}>?", content: "My_StEp", structure: "static", catching: "optional", useRedirect: true });
        expect(parseStep("{My_StEp}>!")).toEqual({ form: "name", display: "{My_StEp}>!", content: "My_StEp", structure: "static", catching: "strict", useRedirect: true });
        
        expect(parseStep("{__My_StEp}>")).toEqual({ form: "name", display: "{__My_StEp}>", content: "__My_StEp", structure: "static", catching: "native", useRedirect: true });
        expect(parseStep("{__My_StEp}>?")).toEqual({ form: "name", display: "{__My_StEp}>?", content: "__My_StEp", structure: "static", catching: "optional", useRedirect: true });
        expect(parseStep("{__My_StEp}>!")).toEqual({ form: "name", display: "{__My_StEp}>!", content: "__My_StEp", structure: "static", catching: "strict", useRedirect: true });
    });
});

describe("Variable Name Steps", () => {
    it("should return correct values for variable name steps", () => {
        expect(parseStep("{:My_StEp[0]}")).toEqual({ form: "name", display: "{:My_StEp[0]}", content: ":My_StEp[0]", structure: "variable", catching: "native", useRedirect: false });
        expect(parseStep("{:My_StEp[0]}?")).toEqual({ form: "name", display: "{:My_StEp[0]}?", content: ":My_StEp[0]", structure: "variable", catching: "optional", useRedirect: false });
        expect(parseStep("{:My_StEp[0]}!")).toEqual({ form: "name", display: "{:My_StEp[0]}!", content: ":My_StEp[0]", structure: "variable", catching: "strict", useRedirect: false });
    
        expect(parseStep("{:My_StEp[:{My_OtHeR_sTeP}]}")).toEqual({ form: "name", display: "{:My_StEp[:{My_OtHeR_sTeP}]}", content: ":My_StEp[:{My_OtHeR_sTeP}]", structure: "variable", catching: "native", useRedirect: false });
        expect(parseStep("{:My_StEp[:{My_OtHeR_sTeP}]}?")).toEqual({ form: "name", display: "{:My_StEp[:{My_OtHeR_sTeP}]}?", content: ":My_StEp[:{My_OtHeR_sTeP}]", structure: "variable", catching: "optional", useRedirect: false });
        expect(parseStep("{:My_StEp[:{My_OtHeR_sTeP}]}!")).toEqual({ form: "name", display: "{:My_StEp[:{My_OtHeR_sTeP}]}!", content: ":My_StEp[:{My_OtHeR_sTeP}]", structure: "variable", catching: "strict", useRedirect: false });
    
        expect(parseStep("{irrelevant content !_^'^_'!^!'_ 354* [] {} }")).toEqual({ form: "name", display: "{irrelevant content !_^'^_'!^!'_ 354* [] {} }", content: "irrelevant content !_^'^_'!^!'_ 354* [] {} ", structure: "variable", catching: "native", useRedirect: false });
        expect(parseStep("{irrelevant content !_^'^_'!^!'_ 354* [] {} }?")).toEqual({ form: "name", display: "{irrelevant content !_^'^_'!^!'_ 354* [] {} }?", content: "irrelevant content !_^'^_'!^!'_ 354* [] {} ", structure: "variable", catching: "optional", useRedirect: false });
        expect(parseStep("{irrelevant content !_^'^_'!^!'_ 354* [] {} }!")).toEqual({ form: "name", display: "{irrelevant content !_^'^_'!^!'_ 354* [] {} }!", content: "irrelevant content !_^'^_'!^!'_ 354* [] {} ", structure: "variable", catching: "strict", useRedirect: false });
    })
});

describe("Variable Name Redirect Steps", () => {
    it("should return correct values for variable name steps", () => {
        expect(parseStep("{:My_StEp[0]}>")).toEqual({ form: "name", display: "{:My_StEp[0]}>", content: ":My_StEp[0]", structure: "variable", catching: "native", useRedirect: true });
        expect(parseStep("{:My_StEp[0]}>?")).toEqual({ form: "name", display: "{:My_StEp[0]}>?", content: ":My_StEp[0]", structure: "variable", catching: "optional", useRedirect: true });
        expect(parseStep("{:My_StEp[0]}>!")).toEqual({ form: "name", display: "{:My_StEp[0]}>!", content: ":My_StEp[0]", structure: "variable", catching: "strict", useRedirect: true });
    
        expect(parseStep("{:My_StEp[:{My_OtHeR_sTeP}]}>")).toEqual({ form: "name", display: "{:My_StEp[:{My_OtHeR_sTeP}]}>", content: ":My_StEp[:{My_OtHeR_sTeP}]", structure: "variable", catching: "native", useRedirect: true });
        expect(parseStep("{:My_StEp[:{My_OtHeR_sTeP}]}>?")).toEqual({ form: "name", display: "{:My_StEp[:{My_OtHeR_sTeP}]}>?", content: ":My_StEp[:{My_OtHeR_sTeP}]", structure: "variable", catching: "optional", useRedirect: true });
        expect(parseStep("{:My_StEp[:{My_OtHeR_sTeP}]}>!")).toEqual({ form: "name", display: "{:My_StEp[:{My_OtHeR_sTeP}]}>!", content: ":My_StEp[:{My_OtHeR_sTeP}]", structure: "variable", catching: "strict", useRedirect: true });
    
        expect(parseStep("{irrelevant content !_^'^_'!^!'_ 354* [] {} }>")).toEqual({ form: "name", display: "{irrelevant content !_^'^_'!^!'_ 354* [] {} }>", content: "irrelevant content !_^'^_'!^!'_ 354* [] {} ", structure: "variable", catching: "native", useRedirect: true });
        expect(parseStep("{irrelevant content !_^'^_'!^!'_ 354* [] {} }>?")).toEqual({ form: "name", display: "{irrelevant content !_^'^_'!^!'_ 354* [] {} }>?", content: "irrelevant content !_^'^_'!^!'_ 354* [] {} ", structure: "variable", catching: "optional", useRedirect: true });
        expect(parseStep("{irrelevant content !_^'^_'!^!'_ 354* [] {} }>!")).toEqual({ form: "name", display: "{irrelevant content !_^'^_'!^!'_ 354* [] {} }>!", content: "irrelevant content !_^'^_'!^!'_ 354* [] {} ", structure: "variable", catching: "strict", useRedirect: true });
    })
});


it("should return correct values for static index steps", () => {
    expect(parseStep("[12]")).toEqual({ form: "index", display: "[12]", content: "12", structure: "static", catching: "native", useRedirect: false });
    expect(parseStep("[12]?")).toEqual({ form: "index", display: "[12]?", content: "12", structure: "static", catching: "optional", useRedirect: false });
    expect(parseStep("[12]!")).toEqual({ form: "index", display: "[12]!", content: "12", structure: "static", catching: "strict", useRedirect: false });
})

it("should return correct values for variable index steps", () => {
    expect(parseStep("[:My_StEp[0]]")).toEqual({ form: "index", display: "[:My_StEp[0]]", content: ":My_StEp[0]", structure: "variable", catching: "native", useRedirect: false });
    expect(parseStep("[:My_StEp[0]]?")).toEqual({ form: "index", display: "[:My_StEp[0]]?", content: ":My_StEp[0]", structure: "variable", catching: "optional", useRedirect: false });
    expect(parseStep("[:My_StEp[0]]!")).toEqual({ form: "index", display: "[:My_StEp[0]]!", content: ":My_StEp[0]", structure: "variable", catching: "strict", useRedirect: false });

    expect(parseStep("[:My_StEp[:{My_OtHeR_sTeP}]]")).toEqual({ form: "index", display: "[:My_StEp[:{My_OtHeR_sTeP}]]", content: ":My_StEp[:{My_OtHeR_sTeP}]", structure: "variable", catching: "native", useRedirect: false });
    expect(parseStep("[:My_StEp[:{My_OtHeR_sTeP}]]?")).toEqual({ form: "index", display: "[:My_StEp[:{My_OtHeR_sTeP}]]?", content: ":My_StEp[:{My_OtHeR_sTeP}]", structure: "variable", catching: "optional", useRedirect: false });
    expect(parseStep("[:My_StEp[:{My_OtHeR_sTeP}]]!")).toEqual({ form: "index", display: "[:My_StEp[:{My_OtHeR_sTeP}]]!", content: ":My_StEp[:{My_OtHeR_sTeP}]", structure: "variable", catching: "strict", useRedirect: false });

    expect(parseStep("[irrelevant content !_^'^_'!^!'_ 354* [] {} ]")).toEqual({ form: "index", display: "[irrelevant content !_^'^_'!^!'_ 354* [] {} ]", content: "irrelevant content !_^'^_'!^!'_ 354* [] {} ", structure: "variable", catching: "native", useRedirect: false });
    expect(parseStep("[irrelevant content !_^'^_'!^!'_ 354* [] {} ]?")).toEqual({ form: "index", display: "[irrelevant content !_^'^_'!^!'_ 354* [] {} ]?", content: "irrelevant content !_^'^_'!^!'_ 354* [] {} ", structure: "variable", catching: "optional", useRedirect: false });
    expect(parseStep("[irrelevant content !_^'^_'!^!'_ 354* [] {} ]!")).toEqual({ form: "index", display: "[irrelevant content !_^'^_'!^!'_ 354* [] {} ]!", content: "irrelevant content !_^'^_'!^!'_ 354* [] {} ", structure: "variable", catching: "strict", useRedirect: false });
})