
document.getElementById('Dbtn').addEventListener('click', function(){

    let DepositeADD=Allinput('D-amaount');
    let DepoShow=AllText('deposite-money');
    let Finalbalence =AllText('Bal-money');


    if(isNaN(DepositeADD) ){
        alert('entar number');
        return;
       }


let TotalAdd=  DepositeADD + DepoShow;

setValue('deposite-money', TotalAdd);

let CurrentNetworth= Finalbalence + DepositeADD;
setValue('Bal-money',CurrentNetworth);

})