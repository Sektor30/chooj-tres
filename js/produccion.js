const container = document.querySelector('.container');
const inicio = document.querySelector('#inicio');
const ingresovideo = document.querySelector('.ingresovideos');


modulos.forEach(element => {


   if(element.id == 3){
       let ingreso = document.createElement('div')
       let principal = document.createElement('div')
       let card = document.createElement('div') 


       principal.innerHTML = `
           <img src="${element.imagen}" alt="">
           <h2>${element.nombre}</h2>
       `
       

       ingreso.innerHTML = `
           <h1>${element.nombre}</h1>
           <p>${element.descripcion}</p>
           <button id="btnvideo"><a href="./curso.html">inicia tu aventura -></a></button>
       `
       

       card.innerHTML = `
           <div class="card">
               <div class="card-header">
                   <img src="${element.imagen}" alt="">
               </div>
               <div class="card-body">
                   <h1 class="title">${element.titulouno}</h1>
                   <p class="text">${element.infouno}</p>
               </div>
           </div>
       

           <div class="card">
               <div class="card-header">
                   <img src="${element.imagen}" alt="">
               </div>
               <div class="card-body">
                 <h1 class="title">${element.titulodos}</h1>
                 <p class="text">${element.infodos}</p>
               </div>
           </div>
       
       
           <div class="card">
               <div class="card-header">
                   <img src="${element.imagen}" alt="">
               </div>
               <div class="card-body">
                 <h1 class="title">${element.titulotres}</h1>
                 <p class="text">${element.infotres}</p>
               </div>
           </div>
      `
      
       inicio.appendChild(principal)
       ingresovideo.appendChild(ingreso)
       container.appendChild(card)
   }
   
})