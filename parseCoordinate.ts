interface Coordinate {
    x: number;
    y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
    return{
        ...obj,
    }
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate{
    return{
        x,
        y,
    }
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
// NB: 'unknown' is same as 'any' type, but you have to cast it before you use it. In other words,'unknown is a safer 'any'.
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate{
    
}
 