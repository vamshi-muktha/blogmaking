var title=document.getElementById("title");
        var content=document.getElementById("content");
        var head=document.getElementById("head");
        var para=document.getElementById("para");

          var loadFile = function(event) {
              var image = document.getElementById('output');
              image.src=URL.createObjectURL(event.target.files[0]);
             
          };
         form.addEventListener("submit",function(e){
          e.preventDefault();
          display();
          
         });
         function display(){
          
          head.innerHTML=title.value;
          para.innerHTML=content.value;
         }