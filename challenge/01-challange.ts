import houses from './houses';

interface House {
    name: string,
    planet: string | string[]
}
interface HouseWithID {
    id: number,
    name: string,
    planet: string | string[]
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
    houses: string,
    filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
    house: House[],
    filter: (house: House) => boolean
): HouseWithID[]{
    return [];
}

console.log(
    findHouses(JSON.stringify(houses), ({name}) => name === "Atreides")
);

console.log(findHouses(houses), ({name}) => name === "Atreides");