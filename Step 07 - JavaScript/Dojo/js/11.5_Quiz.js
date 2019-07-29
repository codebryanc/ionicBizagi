function helloA(){
    return {
        bar: "hello"
    };
}

function helloB(){
    return
    {
        bar: "hello"
    };
}

console.log(helloA());
console.log(helloB());