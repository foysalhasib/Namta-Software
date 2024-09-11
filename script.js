let input = document.querySelector("input")
let btn = document.querySelector("button")
let list = document.querySelector("ul")
let error = document.querySelector(".error")



btn.addEventListener("click",function(){
    
    if(input.value == ""){
        error.innerHTML = "Please Enter a Number"
    }else{
        error.innerHTML = ""
        list.innerHTML = ""
        for(i = 1; i <=10; i++){
            list.innerHTML += `<li> ${input.value} x ${i}  =  ${input.value*i }  </li>`  
        }
    }
})
    
  
 