function myfunction(val){

    document.getElementById('output').value += val

    return val

}
function solve(){

    let x = document.getElementById('output').value

    let y = eval(x);

    document.getElementById('output').value = y

    return y

}
function clearScreen(){

    document.getElementById('output').value = ''
    console.log("khalid");

}