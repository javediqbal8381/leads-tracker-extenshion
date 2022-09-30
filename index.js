let count =0;

let element = document.getElementById('countshow')
let saved =document.getElementById ('saved')

function increment (){
     count =count+1;
     element.innerText=count;
  }

  function savecount(){
       totalpeople= count+'-'
       saved.innerText+=totalpeople
  }

  function reset(){
       count =0;
       element.innerText=count;


  }
  function decrement (){
       count=count-1;
       element.innerText=count;


  }

















// let count =0;
// let saved =document.getElementById('allcounts')
// let element= document.getElementById('count')

// function increment (){
//    count =count+1;
//    element.innerText=count
   
// }


// function save(){  
//   countstr=count+'-';
//   saved.innerText+=countstr
// }





