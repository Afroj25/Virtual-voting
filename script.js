
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");

var chk;

// let res=document.getElementById("res");
// let bjp=document.getElementById("bjp");
// let aap=document.getElementById("aap");
// let cong=document.getElementById("congress");

if(chk!=false){

    var aapc=0;
    var bjpc=0;
    var congc=0;
    chk=false;

}

 var check=false;

// count for bjp..
function countb1(){

     bjpc++;

    // res.innerHTML=`Vote Of BJP : ${bjpc}`;
    
    let audio=new Audio("tune.mp3");
    audio.play();

    check=true;

    if(check==true){
    b2.disabled=true;
    b3.disabled=true;
    b1.disabled=true;
    b1.innerHTML="you have already voted";
    b2.innerHTML="you have already voted";
    b3.innerHTML="you have already voted";


}
}



// count for aap..
function countb2(){


    aapc++;
    // res.innerHTML=`Vote Of AAP  : ${aapc}`;

    let audio=new Audio("tune.mp3");
    audio.play();
    check=true;

    if(check==true){
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b1.innerHTML="you have already voted";
        b2.innerHTML="you have already voted";
        b3.innerHTML="you have already voted";


    }
}
   
// count for congress..
function countb3(){
 
    congc++
    
    // res.innerHTML=`Vote Of CONGRESS : ${congc}`;
    let audio=new Audio("tune.mp3");
    audio.play();

     check=true;

    if(check==true){
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;

        b1.innerHTML="you have already voted";
        b2.innerHTML="you have already voted";
        b3.innerHTML="you have already voted";

    }
}

function newf(){
    
    check=false;

    b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;

    b1.innerHTML="Vote BJP";
    b2.innerHTML="Vote AAP";
    b3.innerHTML="Vote CONGRESS";
    
    

}

let uname=document.getElementById("uname");
let pass=document.getElementById("pass");
let cont=document.getElementById("cont");
let t=document.getElementById("restable");
t.style.display="none";

function showresult(){
    
    if(uname.value=="admin" && pass.value=="admin123"){
        // cont.style.display="none";
        t.style.display="block";
        logindiv.style.display="none";
        v1=document.getElementById("bjp_v")
        v2=document.getElementById("aap_v")
        v3=document.getElementById("cong_v");

        v1.innerHTML=bjpc;
        v2.innerHTML=aapc;
        v3.innerHTML=congc;

    }
    else{
        alert("enter correct username and password");
    }

}
 
document.getElementById("login").style.display="none";
let mainc=document.getElementById("mainc");
 let logindiv=document.getElementById("login")

function login(){
logindiv.style.display="block";
mainc.style.display="none";
}

function goback(){
    logindiv.style.display="none";
    mainc.style.display="block";
    t.style.display="none";
    

}

