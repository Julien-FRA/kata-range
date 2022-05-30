export interface Segment extends Array<number> { };

export const calcSegment = (firstSegment: Segment, secondSegment: Segment): boolean => {
    if (firstSegment.length && secondSegment.length) {
        return ((firstSegment[0] >= secondSegment[0]) && (firstSegment[1] <= secondSegment[1]));
    }
    return null;
}