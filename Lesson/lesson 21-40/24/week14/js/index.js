// alert("hello")
// console.log('hey world');
// function din(aaa){
//     console.log(aaa + " * " + aaa)
//     return aaa * aaa
// }
 function recursion(mispar){
     if (mispar == 1){
         console.log(mispar)
         return "FINISHED";
    }  
     else {
        console.log(mispar)
         recursion(mispar -1)
     }
 }
// let hadhash = din(5)
// function ca(rohav,gova){
//     console.log("rohav:"+rohav+" * gova:"+gova+" ="+rohav*gova)
//     return rohav*gova
// }
// ca(5,7)
let mone = 0;
let divkachol = document.getElementById("kachol");
divkachol.addEventListener("click",   function () {
    mone++;
    console.log(mone);
});
//# sourceMappingURL=index.js.map
