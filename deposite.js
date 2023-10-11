document.getElementById('Dbtn').addEventListener('click',function(){

    let iT=document.getElementById('D-amaount');
    let t=iT.value;
   let inputDeposite= parseFloat(t);
 iT.value='';

 if(isNaN(inputDeposite) ){
  alert('entar number');
  return;
 }

    let depositeMOney=document.getElementById('deposite-money')
    let M=depositeMOney.innerText;
    let depositetxtfeild=parseFloat(M);

      let bal=document.getElementById('Bal-money');
  let Bal=bal.innerText;
  let CurrentBal=parseFloat(Bal);


let finaldeposite=inputDeposite +depositetxtfeild;
 
depositeMOney.innerText=finaldeposite;




  let CurentBalTotal=CurrentBal+inputDeposite;
  bal.innerText=CurentBalTotal;

    
    })




