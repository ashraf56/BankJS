document.getElementById('Wbtn').addEventListener('click',function (){

let WIinput=document.getElementById('W-amaunt');
let Wiinputfeild=WIinput.value ;
let WifeildInput=parseFloat(Wiinputfeild);

WIinput.value='';

if(isNaN(WifeildInput)){
    alert('entar valid number');
    return;
}

let WithTxt=document.getElementById('withdrow-money');
let WithTxtconvert=WithTxt.innerText;
let WithFinaltxt=parseFloat(WithTxtconvert);


let bal=document.getElementById('Bal-money');
let Bal=bal.innerText;
let CurrentBal=parseFloat(Bal);



if(WifeildInput > CurrentBal){
    alert('chor')
    return;
}

let finalWithdrow=WifeildInput+ WithFinaltxt;

WithTxt.innerText=finalWithdrow;



let newbal=CurrentBal - WifeildInput;
bal.innerText=newbal;



})