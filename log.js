



document.getElementById('btn').addEventListener('click',function () {
    
let mail=document.getElementById('umail').value;
let pass=document.getElementById('upass').value;

if( mail=='ask@' &&  pass == 1234){
    window.location.href='bank.html';

} 
else{
    alert('Invalid input')
}

})




