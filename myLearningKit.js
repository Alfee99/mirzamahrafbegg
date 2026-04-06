function p01Func() {
	document.getElementById("problem").innerHTML="<p>precondition: a, b belongs to real numbers<br>postcondition: Larger of a,b is outputted</p>" ;
    
  

 
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
  
  /* in Ex3, update display of images */
document.getElementById("flowchart").style.display="none";
document.getElementById("js").style.display="none";
document.getElementById("another").style.display="none";
}

function p02Func() {
	document.getElementById("problem").innerHTML="<p>precondition: a, b belongs to real numbers<br>postcondition:Rectangle's perimeter is calculated and outputted</p>" ;
    
    document.getElementById("flowchart").src="images/des_01.jpg";
    document.getElementById("js").src="images/jssol1.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}

/* in Ex2, uncomment the following function and complete it*/


function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
    document.getElementById("flowchart").style.display="inline";
    
      

     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to one of "inline" or "none"	 

	 
  }
  else {
   document.getElementById("flowchart").style.display="none";
   
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to one of "inline" or "none"	 
	  
	  
  }
}


function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
   document.getElementById("js").style.display="inline";
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
	 
	 
  }
  else {
   document.getElementById("js").style.display="none";
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
	  
	  
  }
}

function checkUncheck3(){
   if (document.getElementById("check3").checked==true) {
    document.getElementById("another").style.display="inline";
      // add a getElementById here to get "js" img and 
      // set the display property of its style  
     
     
   }
   else {
    document.getElementById("another").style.display="none";
      // add a getElementById here to get "js" img and 
      // set the display property of its style  
      
      
   }}
/* in Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/

function zoomIn() {
document.getElementById("flowchart").style.width="200%";
}
function zoomOut() {
  document.getElementById("flowchart").style.width="100%";
}

function zoomIn1() {
  document.getElementById("js").style.width="200%";
  }
  function zoomOut1() {
    document.getElementById("js").style.width="100%";
  }

  function zoomIn2() {
    document.getElementById("another").style.width="200%";
    }
    function zoomOut2() {
      document.getElementById("another").style.width="100%";
    }
/* in Ex3, create function p02Func similar to p01Func */

/* in Ex4, create functions zoomIn() and zoomOut() */
function p03Func() {
	document.getElementById("problem").innerHTML="<p>precondition: a,b,c belongs to real numbers and qualify for semi axes of an ellipsoid<br>postcondition:Volume of an ellipsoid is calculated and outputted</p>" ;
    
    document.getElementById("flowchart").src="images/des_02.jpg";
    document.getElementById("js").src="images/jssol2.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}

function p04Func() {
	document.getElementById("problem").innerHTML="<p>precondition: a,b,c belongs to real numbers and are distinct<br>postcondition: Largest of 3 is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/des_03.jpg";
    document.getElementById("js").src="images/jssol3.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p05Func() {
	document.getElementById("problem").innerHTML="<p>precondition: a,b,c belongs to real numbers<br>postcondition: Whether the quadratic equation has two distinct real roots,one root, or no roots in real numbers is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/des_04.jpg";
    document.getElementById("js").src="images/jssol4.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p06Func() {
	document.getElementById("problem").innerHTML="<p>precondition: a belongs to real numbers<br>postcondition: Whether a is divisible by 6 or not is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/des_05.jpg";
    document.getElementById("js").src="images/jssol5.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p07Func() {
	document.getElementById("problem").innerHTML="<p>precondition: n belongs to real numbers,[0<=a<=100]<br>postcondition: From a numerical number turned to a letter based grade is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/des_6A.jpg";
    document.getElementById("js").src="images/jssol6A.png";
    document.getElementById("another").src="images/jssol6B.png";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p08Func() {
	document.getElementById("problem").innerHTML="<p>precondition: numb belongs to a real number<br>postcondition: Whether a number is positive or negative is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_07.jpg";
    document.getElementById("js").src="images/js7 (1).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p09Func() {
	document.getElementById("problem").innerHTML="<p>precondition: numb belongs to a real number<br>postcondition: The digits of a positive integer is outputted separately</p>" ;
    
    document.getElementById("flowchart").src="images/img_08.jpg";
    document.getElementById("js").src="images/js7 (2).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p10Func() {
	document.getElementById("problem").innerHTML="<p>precondition: numb belongs to a real number<br>postcondition: No. of 3s or 7s a number has is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_09.jpg";
    document.getElementById("js").src="images/js7 (3).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p11Func() {
	document.getElementById("problem").innerHTML="<p>precondition: numb belongs to a real number<br>postcondition: If a number is equal to its reverse or not is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_10.jpg";
    document.getElementById("js").src="images/js7 (4).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p12Func() {
	document.getElementById("problem").innerHTML="<p>precondition: numb belongs to a real number<br>postcondition: The number's factorial is outputted using for loop</p>" ;
    
    document.getElementById("flowchart").src="images/img_11A.jpg";
    document.getElementById("js").src="images/js7 (5).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p13Func() {
	document.getElementById("problem").innerHTML="<p>precondition: numb belongs to a real number<br>postcondition: The number's factorial is outputted using while loop</p>" ;
    
    document.getElementById("flowchart").src="images/img_11B.jpg";
    document.getElementById("js").src="images/js7 (6).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p14Func() {
	document.getElementById("problem").innerHTML="<p>precondition: n belongs to a real number<br>postcondition: First n values of the Fibonacci sequence is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_12.jpg";
    document.getElementById("js").src="images/js7 (7).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p15Func() {
	document.getElementById("problem").innerHTML="<p>precondition: a belongs to a real number<br>postcondition: A triangle figure of n rows is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_13.jpg";
    document.getElementById("js").src="images/js7 (8).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p16Func() {
	document.getElementById("problem").innerHTML="<p>precondition: num belongs to a real number<br>postcondition:Whether the number is prime or not is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_14.png";
    document.getElementById("js").src="images/js8 (1).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p17Func() {
	document.getElementById("problem").innerHTML="<p>precondition: num belongs to a real number<br>postcondition:How many positive and negative numbers are inputted until 0 while p<=2n are outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_15.png";
    document.getElementById("js").src="images/js8 (2).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p18Func() {
	document.getElementById("problem").innerHTML="<p>precondition: num belongs a positive integer number<br>postcondition:A number's binary representation is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_16.png";
    document.getElementById("js").src="images/js8 (3).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p19Func() {
	document.getElementById("problem").innerHTML="<p>precondition: num belongs to a real number<br>postcondition:Whether the number of negative numbers within the first 4 inputted numbers is equal to the number of positive numbers within the last 4 inputted numbers is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_17.png";
    document.getElementById("js").src="images/js8 (4).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p20Func() {
	document.getElementById("problem").innerHTML="<p>precondition: ai belongs to a real number<br>postcondition: The sum of the even values of a[i] stored in the even position of the array is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_18.jpeg";
    document.getElementById("js").src="images/js8 (5).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p21Func() {
	document.getElementById("problem").innerHTML="<p>precondition(A): num belongs to a real number<br>postcondition(A):All the prime numbers less than the number inputted are outputted<br>precondition(B): num belongs to a real number.<br>postcondition(B): The largest of the prime numbers less than or equals to the number inputted is outputted.</p>" ;
    
    document.getElementById("flowchart").src="images/img_19.png";
    document.getElementById("js").src="images/js8 (6).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p22Func() {
	document.getElementById("problem").innerHTML="<p>precondition: array of n elements of which belongs to real numbers<br>postcondition: All the prime numbers in the array that have digit 7 are outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_20.jpeg";
    document.getElementById("js").src="images/js8 (7).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p23Func() {
	document.getElementById("problem").innerHTML="<p>precondition:m and n are natural numbers <br>postcondition: Their multiplication is computed recursively and outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_21 (1).jpeg";
    document.getElementById("js").src="images/js9 (1).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p24Func() {
	document.getElementById("problem").innerHTML="<p>precondition:n is a natural number <br>postcondition: Using recursion, how many digits in the number are equal to 3 or 7 is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_21 (2).jpeg";
    document.getElementById("js").src="images/js9 (2).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p25Func() {
	document.getElementById("problem").innerHTML="<p>precondition: array of numbers is created<br>postcondition:Using recursion the sum of values in array with is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_21 (3).jpeg";
    document.getElementById("js").src="images/js9 (3).png";
    document.getElementById("another").src="images/js9 (4).png";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p26Func() {
	document.getElementById("problem").innerHTML="<p>precondition:array of numbers is created <br>postcondition:The max value in the array is found out iteratively and is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_21 (5).jpeg";
    document.getElementById("js").src="images/js9 (5).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p27Func() {
	document.getElementById("problem").innerHTML="<p>precondition:array of numbers is created <br>postcondition:Using recursion ,the max value in the array is found out and is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_21 (6).jpeg";
    document.getElementById("js").src="images/js9 (6).png";
    document.getElementById("another").src="images/js9 (7).png";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p28Func() {
	document.getElementById("problem").innerHTML="<p>precondition: A string is received<br>postcondition:Using recursion the reverse of the string is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_21 (8).jpeg";
    document.getElementById("js").src="images/js9 (8).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p29Func() {
	document.getElementById("problem").innerHTML="<p>precondition: array of 20 non-descending numbers is created a number is received  <br>postcondition:Using recursion, if the number exists in the array or not is outputted</p>" ;
    
    document.getElementById("flowchart").src="images/img_21 (9).jpeg";
    document.getElementById("js").src="images/js9 (9).png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p30Func() {
	document.getElementById("problem").innerHTML="<p>precondition:none<br>postcondition: returns a random number in [0,1), i.e., 0 inclusive, 1 exclusive and outputs it</p>" ;
    
    document.getElementById("flowchart").src="images/Img_30.jpeg";
    document.getElementById("js").src="images/js10.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p31Func() {
	document.getElementById("problem").innerHTML="<p>precondition:upTo belongs to Natural numbers > 0 <br>postcondition:returns a random whole number in range [1, upTo] and outputs it</p>" ;
    
    document.getElementById("flowchart").src="images/Img_31.jpeg";
    document.getElementById("js").src="images/js11.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p32Func() {
	document.getElementById("problem").innerHTML="<p>precondition:upTo belongs to Natural numbers >= 0<br>postcondition:returns sum of all natural numbers (start from 1) and less than or equal to upTo and outputs it</p>" ;
    
    document.getElementById("flowchart").src="images/Img_32.jpeg";
    document.getElementById("js").src="images/js12.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p33Func() {
	document.getElementById("problem").innerHTML="<p>precondition:none<br>postcondition:returns a random natural number in [1,6] and outputs it</p>" ;
    
    document.getElementById("flowchart").src="images/Img_33.jpeg";
    document.getElementById("js").src="images/js13.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p34Func() {
	document.getElementById("problem").innerHTML="<p>precondition:none<br>postcondition:returns current time and date in this format: 'It's HOUR:MIN. Today is MONTH DAY, YEAR (DAYOFWEEK)'<br>where capital words are replaced by appropriate values and outputs it.</p>" ;
    
    document.getElementById("flowchart").src="images/Img_34.jpeg";
    document.getElementById("js").src="images/js14.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}
function p35Func() {
	document.getElementById("problem").innerHTML="<p>precondition:i belongs to N<br>postcondition:returns i-1 if i>=1; otherwise returns BOOM! and outputs it.</p>" ;
    
    document.getElementById("flowchart").src="images/Img_35.jpeg";
    document.getElementById("js").src="images/js15.png";
    document.getElementById("another").src="null";
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
 
  /* in Ex3, update display of images */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";

}