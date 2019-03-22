var x=[],i;
         var num=Math.floor((Math.random() * 10)-1);
         function myFunction() {
             for(i=0;i<9;i++){
           x[i] = Math.floor((Math.random() * 10) + 1);
          document.querySelector("#id"+(i+1)).textContent=x[i];
         }
             
}
         function random(number){
             if(number>x[num])
                 {
                     alert("greater");
                 }
             else if(number<x[num]){
                 alert("smaller");
             }
             else{
                 alert("success");
             }
         }
