
//this is for all Input Feild
function Allinput(inID) {
    let Allfeild=document.getElementById(inID);
    let AllinputFeildString=Allfeild.value ;
    let AllinputFeild=parseFloat(AllinputFeildString);
    Allfeild.value='';
    return AllinputFeild;
}

function AllText(ElementId) {
    let Allelement=document.getElementById(ElementId);
    let AllelementString=Allelement.innerText;
    let Allelementfeild=parseFloat(AllelementString);
    return Allelementfeild;
}

function setValue(ElementId,newV) {
    let TxtElement=document.getElementById(ElementId);
    TxtElement.innerText=newV;
    
}