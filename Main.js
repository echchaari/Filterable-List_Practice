//console.log("Hello from JavaScript");

 // input element
 
 var filterInput = document.querySelector('#filter');

 filterInput.addEventListener('keyup', filterNames);

 function filterNames(){
     //console.log(1);

     let filterValue= filterInput.value.toUpperCase();
     //console.log(filterValue);

     let ul=document.querySelector('#Names');
     //console.log(ul);

     let li=document.querySelectorAll('li.sw-link');
     //console.log(li);

     for (let i=0;i<li.length;i++){
         let a=li[i].querySelector('a');
         if(a.innerHTML.toUpperCase().includes(filterValue)){
             li[i].style.display='block';

         }else{
             li[i].style.display='none';
         }

     }

 }


