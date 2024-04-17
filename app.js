let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");
let q3 = document.querySelector(".q3");
let q4 = document.querySelector(".q4");
let ho1 = document.querySelector(".hover1");
let ho2 = document.querySelector(".hover2");
let ho3 = document.querySelector(".hover3");
let ho4 = document.querySelector(".hover4");
q1.addEventListener("mouseover",()=>{
    ho1.style.opacity="1";
    ho1.style.top="7%";
});
q1.addEventListener("mouseout",()=>{
    ho1.style.opacity="0";
    ho1.style.top="0%";
});
q2.addEventListener("mouseover",()=>{
    ho2.style.opacity="1";
    ho2.style.top="18%";
});
q2.addEventListener("mouseout",()=>{
    ho2.style.opacity="0";
    ho2.style.top="0%";
});
q3.addEventListener("mouseover",()=>{
    ho3.style.opacity="1";
    ho3.style.top="29%";
});
q3.addEventListener("mouseout",()=>{
    ho3.style.opacity="0";
    ho3.style.top="0%";
});
q4.addEventListener("mouseover",()=>{
    ho4.style.opacity="1";
    ho4.style.top="40%";
});
q4.addEventListener("mouseout",()=>{
    ho4.style.opacity="0";
    ho4.style.top="0%";
});

function checkInt(n){
    switch(n){
        case undefined :return true;
        case '0':return true;
        case '1':return true;
        case '2':return true;
        case '3':return true;
        case '4':return true;
        case '5':return true;
        case '6':return true;
        case '7':return true;
        case '8':return true;
        case '9':return true;
    }
    return false;
}

let inputError= document.querySelector(".noChar");
let valid1=true;
let valid2=true;
let valid3=false;
let valid4=true;
let indexing={};
let count=0;


let egai = document.querySelector("#egai");
let e1 =document.querySelector(".e1");



egai.addEventListener("input",()=>{
   let check=true;
   for(let i=0;i<egai.value.length;i++){
    check=checkInt((egai.value[i]));
    if(check==false){
        break;
    }
   }
   if(check==false){
    e1.style.opacity="1";
    egai.style.backgroundColor="red";
    valid1=false;
    indexing[count++]=egai.value.length-1;
   }
   else{
    e1.style.opacity="0";
    egai.style.backgroundColor="inherit";
    valid1=true;
    indexing={};
    count=0;
   }
});

let indexing2={};
let count2=0;

let eei = document.querySelector("#eei");
let e2 =document.querySelector(".e2");
let e3 = document.querySelector(".e3");
eei.addEventListener("input",()=>{
   let check =true;
   for(let i=0;i<eei.value.length;i++){
    check=checkInt((eei.value[i]));
    if(check==false){
        break;
    }
   }
   if(check==false){
    e2.style.opacity="1";
    eei.style.backgroundColor="red";
    valid2=false;
    indexing2[count2++]=eei.value.length-1;
   }
   else{
    e2.style.opacity="0";
    eei.style.backgroundColor="inherit";
    valid2=true;
    indexing2={};
    count2=0;
   }
});

let indexing3={};
let count3=0;

let etad = document.querySelector("#etad");
let e4 =document.querySelector(".e4");
etad.addEventListener("input",()=>{
   let check = true;
   for(let i=0;i<etad.value.length;i++){
    check=checkInt((etad.value[i]));
    if(check==false){
        break;
    }
   }
   if(check==false){
    e4.style.opacity="1";
    etad.style.backgroundColor="red";
    valid4=false;
    indexing3[count3++]=etad.value.length-1;
   }
   else{
    e4.style.opacity="0";
    etad.style.backgroundColor="inherit";
    valid4=true;
    indexing3={};
    count3=0;
   }
});

let noage = document.querySelector(".noAge");
e1.addEventListener("mouseover",()=>{
    if(e1.style.opacity=="1")
    inputError.classList.add("opclass1");
});
e1.addEventListener("mouseout",()=>{
    inputError.classList.remove("opclass1");
});
e2.addEventListener("mouseover",()=>{
    if(e2.style.opacity=="1")
    inputError.classList.add("opclass2");
});
e2.addEventListener("mouseout",()=>{

    inputError.classList.remove("opclass2");
});
e3.addEventListener("mouseover",()=>{
    if(e3.style.opacity=="1")
    noage.classList.add("noage");
});
e3.addEventListener("mouseout",()=>{
    noage.classList.remove("noage");
});
e4.addEventListener("mouseover",()=>{
    if(e4.style.opacity=="1")
    inputError.classList.add("opclass3");
});
e4.addEventListener("mouseout",()=>{
    inputError.classList.remove("opclass3");
});

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let clbtn = document.querySelector("#close");
let result = document.querySelector(".result");
let select = document.querySelector("select");

clbtn.addEventListener("click",()=>{
    h1.innerText="Your overall income will be";
    h2.innerText="";
    p.innerText="after tax deductions";
    result.style.opacity="0";
    result.style.top="-25%";
});


let form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let validness;
     if(valid1==true&&valid2==true&&valid4==true){
         if(form.elements[2].value!='0'){
            validness=true;
         }
         else{
            select.style.border="2px solid red";
            e3.style.opacity="1";
            validness=false;
         }
     }
     if(validness==true){
        select.style.border="2px solid slategrey";
        e3.style.opacity="0";
        let income=parseInt(form.elements[0].value);
        if(isNaN(income)){
            income=0;
        }
        let extraIncome=parseInt(form.elements[1].value);
        if(isNaN(extraIncome)){
            extraIncome=0;
        }
        let deduction=parseInt(form.elements[3].value);
        if(isNaN(deduction)){
            deduction=0;
        }
        let min=800000;
        if(income+extraIncome-deduction<=min){
            console.log("No tax");
            h2.innerText="No Tax";
            h1.innerText="There is";
            p.innerText="for you becouse your income is bellow 8,00,000";
            result.style.opacity="1";
            result.style.top="25%";
        }
        else{
            let percent;
            switch(form.elements[2].value){
                case '1':percent=0.3;break;
                case '2':percent=0.4;break;
                case '3':percent=0.1;break;
            }
            let tax =(income+extraIncome-deduction-min)*percent;
            let TotalIncomeAfterTaxDeduction=income+extraIncome-tax;
           
            let value=Math.floor(TotalIncomeAfterTaxDeduction).toString();
            let c;
            if(value.length%2==0){
                 c=2;
            }
            else{
                 c=1;
            }
            let toPrint="";
            for(let i=0;i<value.length;i++){
                if(c==0){
                    toPrint+=",";
                    c=2;
                    i--;
                }else{
                    toPrint+=value.charAt(i);
                    c--;
                }   
            }
            h2.innerText=toPrint;
            result.style.opacity="1";
            result.style.top="25%";
        }
     }
})
