export class HandicapCalculator {

    /**
     * @brief Handicap Differential = (Adjusted Gross Score - Course Rating) X 113 ÷ Slope Rating
     * @param scores 
     */
    static calculateHandicapForScores(scores: number[]) : number {

        // constants for our given course
        const numberToAverage = 5; 
        const adjusementRatio = 0.96; 
        const courseRating = 32.9;
        const slopeRating = 113/114;

        // Adjusted Gross Score
        scores.sort; 
        scores.slice(0,numberToAverage) 
        var sum = 0;
        for(let score of scores) {
            sum = sum + score;
        }
        // const sum = scores.reduce((previous, current) => current += previous);
        const adjustedGrossScore = sum/(scores.length) * adjusementRatio

        // handicap calculation
        const handciap = (adjustedGrossScore - courseRating) * slopeRating;

        return handciap; 
    }
}