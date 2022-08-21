function addNumbers(a: number, b:number): number{ // return type
    return a+b;
}

export default addNumbers; 

export const addStrings = (str1: string, str2: string=""): string => `${str1} ${str2}`;

export const format = (title: string, param: string | number ): string => `${title} ${param}`;

// void function is a function that nothing is returned
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
}

// promise function
export const fetchData = (url: string): Promise<string> =>{
    return(
        Promise.resolve(`Data from ${url}`)
    );
}

function introduce(salutaion:string, ...name:string[]): string {
    return(`${salutaion} ${name.join(" ")}`);
}

export function getName(user:{first: string; last: string;}): string {
    return `${user?.first} ${user?.last}`
}