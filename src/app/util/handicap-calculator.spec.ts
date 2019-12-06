import { HandicapCalculator } from "./handicap-calculator";

it('#calculateHandicapForScores should return valid handicap', () =>{
    let scores: number[] = [50, 40, 33, 20, 30, 55];
    let handicap = HandicapCalculator.calculateHandicapForScores(scores);
    console.log(handicap);
    expect(handicap).toBe(35);
});