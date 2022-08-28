interface Coordinate {
    i: number;
    j: number;
}
// function overloading

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate{
    let coord: Coordinate = {
        i: 0,
        j: 0
    };

    if (typeof arg1 === 'string') {
        (arg1 as string).split(",").forEach((arg)=>{
            const [key, value] = arg.split(":")         
            coord[key as "i" | "j"] = parseInt(value, 10);
        })
    }
    else if (typeof arg1 === 'object'){
        coord = {
            ...arg1 as Coordinate
        };
        // console.log('its an object');
        
    }else{
        coord = {
            i: arg1 as number,
            j: arg2 as number
        };
        // console.log("its neither a atring or object");
        
    }
    return coord;
}

// console.log(parseCoordinate(10, 20));
// console.log(parseCoordinate({x:15, y:29}));
console.log(parseCoordinate("x:52,y:89"));


// NB: 'unknown' is same as 'any' type, but you have to cast it before you use it. In other words,'unknown is a safer 'any'.

// NB: "as"  is a typescript keyword 