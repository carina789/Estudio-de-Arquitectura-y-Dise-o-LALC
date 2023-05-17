
const form= document.getElementById("form")
const button=document.getElementById("submit")

const apellido=document.getElementById("apellido")
const nombre= document.getElementById("nombre")
const email=document.getElementById("email")
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





