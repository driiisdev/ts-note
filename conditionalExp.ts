// 

const check: Record<number, string> = {
    10: "a",
    20: "b"
}
check[30] = "c";

if (check[10]==="d") {
    // do something
}

for (let i:number = 0; i < 10; i++){
    // do something
}

[1,2,3].forEach((num) => {
    console.log(num);
});