"use strickt"

 let user_otvet = prompt("Выберите тип сайта", "Сайт-визитка, Интернет-магазин, Портфолио")
    if(user_otvet == "Сайт-визитка"){
      alert("+500р"); 
      }
if(user_otvet == "Портфолио"){
      alert("+500р") 
      } 
if(user_otvet == "Интернет-магазин"){
      alert("+500р") 
      }
else {
        alert("Выберите из предложенных вариантов"); 
        };

let name = prompt("Выберите тип дизайна", "Maximum, Medium")
if(name == "Maximum"){
    alert("+1000р")
}
if(name == "Medium"){
    alert("+800р")
}
else{
        alert("Выберите из предложенных вариантов"); 
        };

let adaptive = prompt("Выберите тип адаптивности", "All devices, Only mobile devices")
if(adaptive == "All devices"){
    alert("+1000$")
}
if(adaptive == "Only mobile devices"){
    alert("+500$")
} 
else{
        alert("Выберите из предложенных вариантов"); 
        };






