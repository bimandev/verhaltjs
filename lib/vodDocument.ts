import Vod from "./vod";
import VodBody from "./vodBody";
import VodOp from "./vodOp";

export type VodDocument = {
    body : VodBody;
}

export default VodDocument;



export const document = () : VodBody  => {
    const userAge = ":user.age";
    const userAgeLT18 = VodOp.comp(userAge, VodOp.lt, 18);
    const userAgeGT65 = VodOp.comp(userAge, VodOp.gt, 65);

    const money = ":money";
    const moneyLT0 = VodOp.comp(money, VodOp.lt, 0);
    const moneyGTE0 = VodOp.comp(money, VodOp.gte, 0); const moneyLT100 = VodOp.comp(money, VodOp.lt, 200);
    const moneyGTE0AndLT100 = VodOp.logic(moneyGTE0, VodOp.and, moneyLT100);
    const moneyGTE100 = VodOp.comp(money, VodOp.gte, 100); const moneyLT200 = VodOp.comp(money, VodOp.lt, 200);
    const moneyGTE100AndLT200 = VodOp.logic(moneyGTE100, VodOp.and, moneyLT200);
    const moneyGTE200 = VodOp.comp(money, VodOp.gte, 200); const moneyLT500 = VodOp.comp(money, VodOp.lt, 500);
    const moneyGTE200AndLT500 = VodOp.logic(moneyGTE200, VodOp.and, moneyLT500);

    const userWage = ":user.wage"; 
    const a = "(:money-RANGE-0-100)";

    return [
        Vod.if(":user.age-LT-18", [
            Vod.set(userAge, 18)
        ], Vod.elseif(":user.age-GT-65", [
            Vod.set(userAge, 65)
        ])),

        Vod.if(":money-LT-0", [
            Vod.set(userWage, 0)
        ], Vod.elseif(":money-RANGE-0-100", [
            Vod.set(userWage, 10)
        ], Vod.elseif(":money-RANGE-100-200", [
            Vod.set(userWage, 30)
        ], Vod.elseif(":money-RANGE-200-500", [
            Vod.set(userWage, 50)
        ], Vod.else([

        ])))))
    ]
}