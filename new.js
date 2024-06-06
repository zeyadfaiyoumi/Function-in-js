let num="";
let number=prompt("enter")
for(i=number.length-1;i>=0;i--){

num+=number[i];

}
alert(num)
for(i=0;i<=15;i++){
if(i%2==0){alert("num is even")}
else{alert("num is ood")}
}



let text=prompt("enter text")
let arr = text.split("")

function fun(){
    let raraang=arr.sort()
    return raraang;
}
alert(fun())


function Agechecker(age){
if (age>=18) {
    alert("he user is Adult")}

    else {alert(" The user is Minor")}
}

Agechecker(prompt("enter your age"));

let dashes=prompt("enter any num")


let cut=[]

for(i=0;i<dashes.length;i++){
if(dashes[i]%2===0 && dashes[i+1]%2===0){
    cut.push(dashes[i]+"-"+dashes[i+1])}
    else{cut.push(dashes[i])}


}alert(cut)









