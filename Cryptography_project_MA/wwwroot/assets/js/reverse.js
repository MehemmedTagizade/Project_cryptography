function reverse(){
    let val1=document.getElementById('input').value
    let val2=document.getElementById('output')
    let reversedArr=[];
    for (let i=val1.length-1;i>=0;i--){
        reversedArr.push(val1[i]);
    }
    val2.value=reversedArr.join('');
}

function reset(){
    document.getElementById('input').value='';
    document.getElementById('output').value='';
}