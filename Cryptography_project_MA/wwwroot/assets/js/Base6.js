let encode=document.getElementById('encoding')
let decode=document.getElementById('decoding')
let output=document.getElementById('output')

encode.addEventListener("click",()=>{
    output.value=btoa(output.value);
})

decode.addEventListener("click",()=>{
    output.value=atob(output.value);
})

function reset(){
   
    document.getElementById('output').value='';
}