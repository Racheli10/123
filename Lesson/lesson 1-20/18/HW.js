let btn = document.querySelectorAll("button")
let aaa =""
let num1= 0
let num2= 0
let op =""

for (let index = 0; index < btn.length;index++ ) {
   if (btn[index].textContent=="ac"){
    btn[index ].addEventListener("click", function(){
        num1 = 0
        num2 = 0
        op = ""
    })
   }  else if (btn[index].textContent=="/"){
    btn[index ].addEventListener("click", function(){
       if (op != ""){
            num2 = parseFloat(aaa)
            aaa = ""
            switch (op) {
                case "+":
                    num1 = num1 + num2
                    console.log(num1)
                    break;
                case "-":
                    num1 = num1 - num2
                    console.log(num1)
                    break;
                case "/":
                    num1 = num1 / num2
                    console.log(num1)
                    break;
                case "*":
                    num1 = num1 * num2
                    console.log(num1)
                    break;
            }
       } else {
        num1 = parseFloat(aaa)
        aaa = ""
       }
        op = "/"
    })
   }
    else if (btn[index].textContent=="*"){
    btn[index ].addEventListener("click", function(){
       if (op != ""){
            num2 = parseFloat(aaa)
            aaa = ""
            switch (op) {
                case "+":
                    num1 = num1 + num2
                    console.log(num1)
                    break;
                case "-":
                    num1 = num1 - num2
                    console.log(num1)
                    break;
                case "/":
                    num1 = num1 / num2
                    console.log(num1)
                    break;
                case "*":
                    num1 = num1 * num2
                    console.log(num1)
                    break;
            }
       } else {
        num1 = parseFloat(aaa)
        aaa = ""
       }
        op = "*"
    })
   }
    else if (btn[index].textContent=="-"){
    btn[index ].addEventListener("click", function(){
       if (op != ""){
            num2 = parseFloat(aaa)
            aaa = ""
            switch (op) {
                case "+":
                    num1 = num1 + num2
                    console.log(num1)
                    break;
                case "-":
                    num1 = num1 - num2
                    console.log(num1)
                    break;
                case "/":
                    num1 = num1 / num2
                    console.log(num1)
                    break;
                case "*":
                    num1 = num1 * num2
                    console.log(num1)
                    break;
            }
       } else {
        num1 = parseFloat(aaa)
        aaa = ""
       }
        op = "-"
    })
   }
    else if (btn[index].textContent=="+"){
    btn[index ].addEventListener("click", function(){
       if (op != ""){
            num2 = parseFloat(aaa)
            aaa = ""
            switch (op) {
                case "+":
                    num1 = num1 + num2
                    console.log(num1)
                    break;
                case "-":
                    num1 = num1 - num2
                    console.log(num1)
                    break;
                case "/":
                    num1 = num1 / num2
                    console.log(num1)
                    break;
                case "*":
                    num1 = num1 * num2
                    console.log(num1)
                    break;
                case "="
                
            }
       } else {
        num1 = parseFloat(aaa)
        aaa = ""
       }
        op = "+"
    })
   } else if (btn[index].textContent=="="){
    btn[index ].addEventListener("click", function(){
    num2 = parseFloat(aaa)
    if(op=="+"){
        num1 = num1 + num2
    } else if (op=="-"){
        num1 = num1 - num2
    } else if (op == "*"){
        num1 = num1 * num2
    } else if (op == "/") {
        num1 = num1 / num2
    }
    aaa = ""
    op = "="
    console.log(num1)
    })
   }
   else{
    btn[index ].addEventListener("click", function(){
    aaa +=btn[index].textContent
    console.log(aaa);
    })
   }
}

