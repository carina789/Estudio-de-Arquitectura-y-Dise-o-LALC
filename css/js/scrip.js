const form= document.getElementById("form")
const button=document.getElementById("submit")

const number=document.getElementById("telefono")



const formisvalied={
    
      apellido:false,
      name:false,
      email:false,
      telefono:false,
   
}


apellido.addEventListener("change",(e)=>{
 if(e.target.value.trim().length>0 )formisvalied.apellido=true
})


nombre.addEventListener("change",(e)=>{
    if(e.target.value.trim().length>0 )formisvalied.name=true
})

email.addEventListener("change",(e)=>{
    if(e.target.value.trim().length>0 )formisvalied.email=true
})

telefono.addEventListener("change",(e)=>{
    if(e.target.value.trim().length>0 )formisvalied.telefono=true
})


const validateform=()=>{

const formvalues=Object.values(formvalues)
const valid=formvalues.findindex(vlue=>value==false)
if(valid== -1)form. submit()
else alert ("form invalid")
}

 // Cargar la API de OpenCage Geocoder
 function loadAPI() {
    var script = document.createElement('script');
    script.src = 'https://api.opencagedata.com/js/v1.11/your-api-key.js'; // Reemplaza "your-api-key" con tu clave de API
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
   
}
        
// Ejecutar la función de carga 
window.onload = loadAPI;



