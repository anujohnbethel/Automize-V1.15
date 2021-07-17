 //Make the DIV element draggagle:
 dragElement(document.getElementById("range-ball"));
 var milstone1Breakpoint=125,milstone2Breakpoint=275,milstone3Breakpoint=425,active_milestone=0;
 var rangeBarPoint1=45,rangeBarPoint2=195,rangeBarPoint3=335,rangeBarPoint4=460;


 function dragElement(elmnt) {
   var pos1 = 0, pos3 = 0, x=0; 
   
   
     /* otherwise, move the DIV from anywhere inside the DIV:*/
     elmnt.onmousedown = dragMouseDown;
   
 
   function dragMouseDown(e) {
     e = e || window.event;
     e.preventDefault();
     // get the mouse cursor position at startup:
     pos3 = e.clientX;

    var circle=document.getElementsByClassName('circle');
     for (var i = 0; i < circle.length; i++) {
        if(circle[i].classList.contains('active'))
        {
            active_milestone=i+1;            
        } 
      }

    document.documentElement.style.setProperty('--range-before-transition', 'none');
    document.documentElement.style.setProperty('--range-ball-transition', 'none');
    


     document.onmouseup = closeDragElement;
     // call a function whenever the cursor moves:
     document.onmousemove = elementDrag;
   }
 
   function elementDrag(e) {
    
    
     e = e || window.event;
     e.preventDefault();
     // calculate the new cursor position:
     pos1 = pos3 - e.clientX;
    
     //pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     //pos4 = e.clientY;
     // set the element's new position:
     x=elmnt.offsetLeft - pos1;
     if(x>500)
     {
        x=500;
     }
     if(x>0 & x<=500)
     {

        document.documentElement.style.setProperty('--dynamic-width', x+'px');
        document.documentElement.style.setProperty("--range-ball-left", x+"px")



        if(x<milstone1Breakpoint)
        {
            if(active_milestone!=1)
            {
              
              removeActiveMilestone();
              active_milestone=1;

              var milstone1=document.getElementsByClassName('curve-circle-one');
                  if(milstone1.length>0){
                    milstone1[0].classList.add('active');
                  }
                  changeMilstone(active_milestone);
            }
        }
        else if(x>=milstone1Breakpoint & x < milstone2Breakpoint)
        {
          if(active_milestone!=2)
            {
              removeActiveMilestone();
              active_milestone=2;
              
              var milstone1=document.getElementsByClassName('curve-circle-two');
                  if(milstone1.length>0){
                    milstone1[0].classList.add('active');
                  }
                  changeMilstone(active_milestone);
            }
        }
        else if(x>=milstone2Breakpoint & x < milstone3Breakpoint)
        {
          if(active_milestone!=3)
            {
              removeActiveMilestone();
              active_milestone=3;
              
              var milstone1=document.getElementsByClassName('curve-circle-three');
                  if(milstone1.length>0){
                    milstone1[0].classList.add('active');
                  }
                  changeMilstone(active_milestone);
            }
        }
        else if(x>=milstone3Breakpoint)
        {
          if(active_milestone!=4)
            {
              removeActiveMilestone();
              active_milestone=4;
              
              var milstone1=document.getElementsByClassName('curve-circle-four');
                  if(milstone1.length>0){
                    milstone1[0].classList.add('active');
                  }
                  changeMilstone(active_milestone);
            }
        }
     }
     
     
     
         
   }
 
   function closeDragElement() {
     /* stop moving when mouse button is released:*/
     

     if(active_milestone==1)
     {
            document.documentElement.style.setProperty('--dynamic-width', rangeBarPoint1+'px');
            document.documentElement.style.setProperty("--range-ball-left", rangeBarPoint1+'px');
        
     }
     else if(active_milestone==2)
     {
            document.documentElement.style.setProperty('--dynamic-width', rangeBarPoint2+'px');
            document.documentElement.style.setProperty("--range-ball-left", rangeBarPoint2+'px');
      
     }
     
     else if(active_milestone==3)
     {
        
            document.documentElement.style.setProperty('--dynamic-width',  rangeBarPoint3+'px');
            document.documentElement.style.setProperty("--range-ball-left",  rangeBarPoint3+'px');
        
     }
     else if(active_milestone==4)
     {
            document.documentElement.style.setProperty('--dynamic-width',  rangeBarPoint4+'px');
            document.documentElement.style.setProperty("--range-ball-left", rangeBarPoint4+'px');
      
     }
    
    document.documentElement.style.setProperty('--range-before-transition', 'all .5s linear');
    document.documentElement.style.setProperty('--range-ball-transition', 'all .5s linear');
   
     document.onmouseup = null;
     document.onmousemove = null;
   }
 }
 function rangeBall_click(e) {
  e.stopPropagation(); // to prevent bubbling up to parent elements or capturing down to child elements
 }

 function range_click(e) {
  
   var range=document.getElementById('range');


   var screenwidth=window.innerWidth;
   console.log('screen2: '+ screenwidth);
                 
   //get the current position of cursor on the range bar
   var x= e.clientX-range.offsetParent.offsetLeft;
   console.log(x);

   if(screenwidth<=450)
   {
     return;
   }
   else{

     if(x>500)//if user click outside x-bar, then make x=500 
     {
        x=500;
     }
     if(x>0 & x<=500)
     {

      
  if(x<milstone1Breakpoint)
  {
      if(active_milestone!=1)
      {
        
        removeActiveMilestone();
        active_milestone=1;

        var milstone1=document.getElementsByClassName('curve-circle-one');
            if(milstone1.length>0){
              milstone1[0].classList.add('active');
            }
            changeMilstone(active_milestone);

            document.documentElement.style.setProperty('--dynamic-width', rangeBarPoint1+'px');
            document.documentElement.style.setProperty("--range-ball-left", rangeBarPoint1+'px');
 
      }
  }
  else if(x>=milstone1Breakpoint & x < milstone2Breakpoint)
  {
    if(active_milestone!=2)
      {
        removeActiveMilestone();
        active_milestone=2;
        
        var milstone1=document.getElementsByClassName('curve-circle-two');
            if(milstone1.length>0){
              milstone1[0].classList.add('active');
            }
            changeMilstone(active_milestone);

            document.documentElement.style.setProperty('--dynamic-width', rangeBarPoint2+'px');
            document.documentElement.style.setProperty("--range-ball-left", rangeBarPoint2+'px');
 
      }
  }
  else if(x>=milstone2Breakpoint & x < milstone3Breakpoint)
  {
    if(active_milestone!=3)
      {
        removeActiveMilestone();
        active_milestone=3;
        
        var milstone1=document.getElementsByClassName('curve-circle-three');
            if(milstone1.length>0){
              milstone1[0].classList.add('active');
            }
            changeMilstone(active_milestone);

            document.documentElement.style.setProperty('--dynamic-width', rangeBarPoint3+'px');
            document.documentElement.style.setProperty("--range-ball-left", rangeBarPoint3+'px');
 
      }
  }
  else if(x>=milstone3Breakpoint)
  {
    if(active_milestone!=4)
      {
        removeActiveMilestone();
        active_milestone=4;
        
        var milstone1=document.getElementsByClassName('curve-circle-four');
            if(milstone1.length>0){
              milstone1[0].classList.add('active');
            }
            changeMilstone(active_milestone);
           
           
              document.documentElement.style.setProperty('--dynamic-width', rangeBarPoint4+'px');
              document.documentElement.style.setProperty("--range-ball-left", rangeBarPoint4+'px');

            
 
      }
  }

    }
    
   }
 
 }

function removeActiveMilestone(){

  var circle=document.getElementsByClassName('circle');
     for (var i = 0; i < circle.length; i++) {
        if(circle[i].classList.contains('active'))
        {
            circle[i].classList.remove('active');
            
        }
    }
}

function changeMilstone(active_milestone){
  
  if(active_milestone==1)
     {
         
            
            var milestoneHead =document.getElementsByClassName('milestone-head');
            var milestonePara =document.getElementsByClassName('milestone-para');

            if(milestoneHead.length>0)
            {
              milestoneHead[0].innerHTML="1-2 VA’s";
            }
            if(milestonePara.length>0)
            {
              milestonePara[0].innerHTML= "You’re Able To <br/> Maintain Your Business<br/><br/>  <b>Estimated Time Savings:\n 20 hours a week</b>";
              
            }

            
    
        
     }
     else if(active_milestone==2)
     {
        
            var milestoneHead =document.getElementsByClassName('milestone-head');
            var milestonePara =document.getElementsByClassName('milestone-para');
            
            if(milestoneHead.length>0)
            {
              milestoneHead[0].innerHTML='3-5 VA’s';
            }
            if(milestonePara.length>0)
            {
              milestonePara[0].innerHTML= 'Time To Catch<br\>Your Breath; where is your business going next?<br\><br\>  <b>Estimated Time Savings:\n 40-80 hours a week</b>';
            }
     }
     
     else if(active_milestone==3)
     {
        
            var milestoneHead =document.getElementsByClassName('milestone-head');
            var milestonePara =document.getElementsByClassName('milestone-para');
            
            if(milestoneHead.length>0)
            {
              milestoneHead[0].innerHTML='5-10 VA’s';
            }
            if(milestonePara.length>0)
            {
              milestonePara[0].innerHTML= 'Launching your <br\>next product?<br\> Entering a New Market? No problem.<br\><br\>  <b>Estimated Time Savings:<br\> 80 – 200 hours a week</b>';
            }
        
     }
     else if(active_milestone==4)
     {
        
            var milestoneHead =document.getElementsByClassName('milestone-head');
            var milestonePara =document.getElementsByClassName('milestone-para');
            
            if(milestoneHead.length>0)
            {
              milestoneHead[0].innerHTML="10+VA’s";
            }
            if(milestonePara.length>0)
            {
              milestonePara[0].innerHTML= "Running your business<br\>from the beach doesn’t sound too bad<br\><br\>  <b>Estimated Time Savings:<br\> 200+ hours a week</b>";
            }
            
     }
}