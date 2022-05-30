export interface Extremity {
    value: number,
    inclusion: "INCLUDED" | "NOT_INCLUDED",
}

export type Segment = [Extremity, Extremity];

export const calcSegment = (firstSegment: Segment, secondSegment: Segment): boolean => {
    if (firstSegment.length && secondSegment.length) {
        if ((secondSegment[0].inclusion == "INCLUDED") && (secondSegment[1].inclusion == "INCLUDED") && (firstSegment[0].inclusion == "INCLUDED") && (firstSegment[1].inclusion == "INCLUDED")) {
            console.log("OK");
            return ((firstSegment[0].value >= secondSegment[0].value) && (firstSegment[1].value <= secondSegment[1].value));
        }
        console.log("Not ok");
        return ((firstSegment[0].value > secondSegment[0].value) && (firstSegment[1].value < secondSegment[1].value));

    }
    return null;
}