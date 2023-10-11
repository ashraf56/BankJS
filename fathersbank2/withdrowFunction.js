document.getElementById('Wbtn').addEventListener('click',function(){

let WithdroMoney=Allinput('W-amaunt');
let WithdrowSHow=AllText('withdrow-money');
let Finalbal=AllText('Bal-money');

if(isNaN(WithdroMoney) ){
    alert('entar number');
    return;
   }


   if(WithdroMoney > Finalbal){
    alert('chor')
    return;
}



let TOtalWithdrow= WithdroMoney + WithdrowSHow;
setValue('withdrow-money' ,TOtalWithdrow);


let CurretNet= Finalbal -WithdroMoney;
setValue('Bal-money', CurretNet);


})