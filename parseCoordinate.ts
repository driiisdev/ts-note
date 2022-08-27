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
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate{
    let coord: Coordinate = {
        x: 0,
        y: 0
    };

    if (typeof arg1 === 'object'){
        coord = {
            ...arg1 as Coordinate
        };
        console.log('its an object');
        
    }else{
        coord = {
            x: arg1 as number,
            y: arg2 as number
        };
        console.log("its not an object");
        
    }
    return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({x:15, y:29}));


// NB: 'unknown' is same as 'any' type, but you have to cast it before you use it. In other words,'unknown is a safer 'any'.