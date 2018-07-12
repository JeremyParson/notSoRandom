function random(max){
    return Math.floor(Math.random() * max + 1);
};
console.log(random(10));

function randomChar(str){
    return str.charAt(Math.floor(Math.random() * str.length + 1));
}
console.log(randomChar("Jeremy"));

function myGuy(name){
    return name + ", my guy..."
}
console.log(myGuy("Jeremy"));

function string_N_times(str, repeations){
    for(let i = 0; i < repeations; i++){
        console.log((i + 1) + ": " + str);
    }
}
string_N_times("Hello, World", 10);

function hypotenuse(b, c){
    console.log(Math.sqrt(Math.pow(b,2) + Math.pow(c,2)));
}
hypotenuse(5, 5);

