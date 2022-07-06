"use strickt"

/*let user_otvet = prompt("Выберите тип сайта", "Сайт-визитка, Интернет-магазин, Портфолио")
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

let name = prompt("Выберите тип дизайна", "Minimal, Maximum, Medium")
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
        };*/


$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

/*$("#carouselExampleControls").carousel({
         interval : false
});
$("#carouselExampleControls1").carousel({
         interval : false
});*/

$(document).ready(function() {
setTimeout(function(){ 
    $("#modal1").click();
}, 20000);
    });

 //Калькулятор    
    function calculate(){
       let sum = parseInt($("#selectSite option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptive option:selected").val());
       let days = parseInt($("#selectSite option:selected").attr("days")) + parseInt($("#selectDesign option:selected").attr("days")) + parseInt($("#selectAdaptive option:selected").attr("days"));
        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }
    calculate();
    $("select").on("change", function(){
       calculate();
    });

   


//Отложенная Анимации при скролле
        let options = {
            threshold: [0.5]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation');

        elements.each((i, el) => {
            observer.observe(el);
        });


        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
        }





//Бегающие цифры статистики
     let optionsStat = {
            threshold: [0.5]
        };
        let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
        let elementsStat = $('.statAnimation');

        elementsStat.each((i, el) => {
            observerStat.observe(el);
        });


        function onEntryStat(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    if(!$('.statAnimation').hasClass("done")){
                        $('.statAnimation').addClass("done");
                        $('.statAnimation').spincrement({
                         thousandSeparator: "",
                         duration: 3000
                    });
                  }
                }
            });
        }




