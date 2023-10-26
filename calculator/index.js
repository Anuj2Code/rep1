let string ="";

let button = document.querySelectorAll('.btn');
// let re = document.getElementById('re');
Array.from(button).forEach(function(item){
    item.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
         string = eval(string);
        document.querySelector("input").value=string
       }
       else if(e.target.innerHTML=='DEL'){
             string=string.substring(0,string.length-1);
             document.querySelector('input').value = string;
       }
       else if(e.target.innerHTML=='AC'){
        document.querySelector('input').value="";
      string="";
    }
       else{
         string=string+e.target.innerHTML;
        document.querySelector('input').value=string
       }
    })
})
