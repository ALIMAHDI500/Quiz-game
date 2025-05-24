// Create const to handle elelemnet in HTML
const MathsButton=document.querySelector('#Maths')
const ScinceButton=document.querySelector('#Scince')
const TechnologeyButton=document.getElementById('Technologey');
const Instructions=document.getElementById('Instructions')
const Cheacked=document.querySelector('#Cheaked');
const body=document.querySelector('body')
const Categrey=document.getElementById('categorey')


//Question of Maths 
const MathQuestion1=document.querySelector(".Maths-box-questions1")
const MathQuestion2=document.querySelector(".Maths-box-questions2")
const MathQuestion3=document.querySelector(".Maths-box-questions3")
const MathQuestion4=document.querySelector(".Maths-box-questions4")
const MathQuestion5=document.querySelector(".Maths-box-questions5")


//Taegt the Answer of Questions to make it vaildation
const MathANS_1=document.getElementById('ANS1_Math')
const MathANS_2=document.getElementById('ANS2_Math')
const MathANS_3=document.getElementById('ANS3_Math')
const MathANS_4=document.getElementById('ANS4_Math')
const MathANS_5=document.getElementById('ANS5_Math')




//Question of Technology
const TechnoQuestion1=document.querySelector('.Techo-box-questions1')
const TechnoQuestion2=document.querySelector('.Techo-box-questions2')
const TechnoQuestion3=document.querySelector('.Techo-box-questions3')
const TechnoQuestion4=document.querySelector('.Techo-box-questions4')
const TechnoQuestion5=document.querySelector('.Techo-box-questions5')



//Answer of Technology
const ANS1_Techno=document.querySelector('#ANS1_Techno')
const ANS2_Techno=document.querySelector('#ANS2_Techno')
const ANS3_Techno=document.querySelector('#ANS3_Techno')
const ANS4_Techno=document.querySelector('#ANS4_Techno')
const ANS5_Techno=document.querySelector('#ANS5_Techno')


//Questions of Science
const ScinceQuestion1=document.querySelector('.Science-box-questions1')
const ScinceQuestion2=document.querySelector('.Science-box-questions2')
const ScinceQuestion3=document.querySelector('.Science-box-questions3')
const ScinceQuestion4=document.querySelector('.Science-box-questions4')
const ScinceQuestion5=document.querySelector('.Science-box-questions5')

// Answer of Science
const ANS1_Science=document.querySelector('#ANS1_Sc')
const ANS2_Scinece=document.querySelector('#ANS2_Sc')
const ANS3_Scinece=document.querySelector('#ANS3_Sc')
const ANS4_Scinece=document.querySelector('#ANS4_Sc')
const ANS5_Scinece=document.querySelector('#ANS5_Sc')

//Put All Questions on Arrayto use it to diplay Questions If user click the button 
const AllQuestionsMaths=[MathQuestion1,MathQuestion2,MathQuestion3,MathQuestion4,MathQuestion5];
const AllQuestionsTechnonlogy=[TechnoQuestion1,TechnoQuestion2,TechnoQuestion3,TechnoQuestion4,TechnoQuestion5]
const AllQuestionsScinece=[ScinceQuestion1,ScinceQuestion2,ScinceQuestion3,ScinceQuestion4,ScinceQuestion5]




//Categrey Sections
const Maths_Sections=document.querySelector('#Maths_Sections')
const TechnologeySections=document.querySelector('#TechnologeySections');
const ScinceSections=document.querySelector('#ScinceSections');


//Control button
const nextButton=document.getElementById("next")
const resetbutton=document.getElementById('reset')
const controlbutton=document.getElementById('controlButton')
// Two const to sum the Score and diplay point
const TotalScore=document.getElementById("totalScore")
const totaldisplay=document.querySelector('.total');


//Varible
let totalScore=0
let i=0;




//Actions of reset button
handlereset=()=>{
  TotalScore.innerHTML=""
  totaldisplay.innerHTML=""
totalScore=0;
  i=0;
  Maths_Sections.style.display="none"
  controlbutton.style.visibility="hidden"
  Categrey.style.display="flex"
  TechnologeySections.style.display="none"
  ScinceSections.style.display="none"
       body.style.background=""
}

//Actions of Technology
     handleTechnologey=()=>{

    TechnologeySections.style.display="block"
    TechnoQuestion1.style.display="block"
    controlbutton.style.visibility="visible";
    Categrey.style.display="none"
    Instructions.style.display="none"
    body.style.backgroundImage="url('http://wallpapercave.com/wp/u1xVDSf.jpg')"
    body.setAttribute('aria-label',"background Maths Sections");
   

  }


  //Actions of Maths 
    handleMaths=()=>{

Maths_Sections.style.display='block';
MathQuestion1.style.display="block"
controlbutton.style.visibility="visible";
Categrey.style.display="none"
Instructions.style.display="none"
body.style.backgroundImage="url('https://cdn.wallpapersafari.com/47/95/3Lwnjz.jpg')"
}


//Actions of Scince
handleScince=()=>{

  ScinceSections.style.display='block';
ScinceQuestion1.style.display="block"
controlbutton.style.visibility="visible";
Categrey.style.display="none"
Instructions.style.display="none"
body.style.backgroundImage="url('https://wallpapercave.com/wp/wp2780735.jpg')";

}

 

//Fuction of Submit button with all effact
handleChecked=()=>{

       if(Maths_Sections.style.display==="block"){

    if(MathANS_1.checked||MathANS_2.checked||MathANS_3.checked||MathANS_4.checked||MathANS_5.checked){
        totalScore+=2; 
  
      MathANS_1.style.backgroundColor="green"
      totaldisplay.innerHTML=" 2/2 Point"
      totaldisplay.style.background="green"
      Correctsound();
    }else{
    Incorrectsound();
    totaldisplay.innerHTML="0/2 Point"
     totaldisplay.style.background="red"
    } 
    
  
  }else if(TechnologeySections.style.display==="block"){


if(ANS1_Techno.checked||ANS2_Techno.checked||ANS3_Techno.checked||ANS4_Techno.checked||ANS5_Techno.checked){
        totalScore+=2; 
      
      totaldisplay.innerHTML=" 2/2 Point"
       totaldisplay.style.background="green"
      Correctsound();
    }else{
    Incorrectsound();
    totaldisplay.innerHTML="0/2 Point"
     totaldisplay.style.background="red"
    } 


  } else if(ScinceSections.style.display==="block"){

if(ANS1_Science.checked||ANS2_Scinece.checked||ANS3_Scinece.checked||ANS4_Scinece.checked||ANS5_Scinece.checked){
        totalScore+=2; 
        
      totaldisplay.innerHTML=" 2/2 Point"
       totaldisplay.style.background="green"
      Correctsound();
    }else{
    Incorrectsound();
    totaldisplay.innerHTML="0/2 Point"
     totaldisplay.style.background="red"
     totaldisplay.style.display="icon"
    } 

  }


}


//Method for Create and play the Sound
Correctsound=()=>{

let audoi=new Audio("correct-choice.mp3")

audoi.play("correct-choice.mp3")
}

Incorrectsound=()=>{

    let audoi2=new Audio("incorrectSound.mp3")
audoi2.play("incorrectSound.mp3");
}


 

 //Handle the Next Button
handlenext=()=>{


     if(Maths_Sections.style.display==="block"){
//display the ruselt after complate all questions
  if(i===AllQuestionsMaths.length-1){
    totaldisplay.innerHTML=""
   //Caluclate the Score from out of 100
    TotalScore.innerHTML=`Your Total Score out of 100% =     ${totalScore*10}/100`
    //display MEssages of wins or loos based on the Score if >=60 wins and <60 loss 
     if(totalScore>=6){
      totaldisplay.innerHTML+= " Congratulation You wins"
            totaldisplay.style.backgroundColor="chartreuse"

    }else{
        totaldisplay.innerHTML+=  "Sorry! You loss good luck In next time"
              totaldisplay.style.backgroundColor="orange"

    }
   }

 AllQuestionsMaths[i].style.display="none";
   AllQuestionsMaths[i+1].style.display="block";  
       totaldisplay.innerHTML=""
  
        i++;
  } else if(TechnologeySections.style.display==="block"){

if(i===AllQuestionsTechnonlogy.length-1){
    totaldisplay.innerHTML=""
    TotalScore.innerHTML=`Your Total Score out of 100% =     ${totalScore*10}/100`
     
if(totalScore>=6){
      totaldisplay.innerHTML+= " Congratulation You wins"
            totaldisplay.style.backgroundColor="chartreuse"

    }else{
        totaldisplay.innerHTML+=  " Sorry! You loss good luck In next time"
              totaldisplay.style.backgroundColor="orange"

    }



   }

 AllQuestionsTechnonlogy[i].style.display="none";
   AllQuestionsTechnonlogy[i+1].style.display="block";  
       totaldisplay.innerHTML=""
  
        i++;


  }else if(ScinceSections.style.display==="block"){


if(i===AllQuestionsScinece.length-1){
    totaldisplay.innerHTML=""
    TotalScore.innerHTML=`Your Total Score out of 100% =     ${totalScore*10}/100`
    
if(totalScore>=6){
      totaldisplay.innerHTML= " Congratulation You wins"
            totaldisplay.style.backgroundColor="chartreuse"

    }else{
        totaldisplay.innerHTML=  "Sorry! You loss good luck In next time"
              totaldisplay.style.backgroundColor="orange"

    }

   }

 AllQuestionsScinece[i].style.display="none";
   AllQuestionsScinece[i+1].style.display="block";  
       totaldisplay.innerHTML=""
  
        i++;

  }
 

}



 ///Add event for all button and actions to working
resetbutton.addEventListener('click',handlereset)
Cheacked.addEventListener('click',handleChecked);
TechnologeyButton.addEventListener('click',handleTechnologey);
MathsButton.addEventListener('click',handleMaths)
ScinceButton.addEventListener('click',handleScince)
nextButton.addEventListener('click',handlenext)