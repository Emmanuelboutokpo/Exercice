let forms = document.querySelector("form");
forms.addEventListener("submit", (e)=>{
    e.preventDefault();
    let jours =parseInt(document.getElementById("jours").value);
    let mois =parseInt(document.getElementById("mois").value);
    let annee =parseInt(document.getElementById("annee").value);
    let test = document.getElementById("test");
    let jours_Max = 0;
    if (isNaN(jours) || isNaN(mois) || isNaN(annee) ) {
        test.innerHTML="Inputs values valid"
    } else if(mois >=1 && mois <=12){
         if (mois==2 && (annee%4==0 && annee%100 !=0)) {
            jours_Max = 29
         }else if (mois == 2) {
            jours_Max =28
         }
         else if (mois==4 || mois==6 || mois == 9 || mois==11) {
            jours_Max = 30  
         }else{
            jours_Max = 31
         }
         if (jours >=1 && jours <=jours_Max) {
            test.innerHTML="Date valide"
         } else {
             test.innerHTML="Date invalide"
         }
    }

})