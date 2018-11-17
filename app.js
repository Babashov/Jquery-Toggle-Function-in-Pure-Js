const $ = el=>{

  function toggle(){
    var domElements = document.querySelectorAll(el);
    domElements.forEach(el=>{
      var a = false;
      el.onclick = e=>{
        e.preventDefault();
        a = !a;
        e.target.style.opacity = Number(a);
      }

    });
  }

  return {
    toggle
  }


}

$('.main').toggle(); // Sade formada yazmiwam sen daha da mukemmelesdire bilersen



// Toggle in native function

// var elements = document.querySelectorAll('.main');

// elements.forEach(el=>{
//   var a = false;  
//   el.onclick = e=>{    
//     e.preventDefault();
//     a = !a;
//     e.target.style.opacity = Number(a);
//   }
// });
