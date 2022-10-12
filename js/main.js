let display=document.getElementById("display");

let div=document.createElement("div");
let head=document.createElement("h2");
div.append(head);
let para=document.createElement("p");
div.append(para);

display.append(div);



function fun4(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            head.innerText="fun4";
            resolve();
        },3000);
    })
}
function fun3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            head.innerText="fun3";
            resolve();
        },3000);
    })
}
function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            head.innerText="fun1";
            resolve();
        },3000);
    })
}
function fun2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            head.innerText="fun2";
            let yes="condition pass";
            resolve(yes);
        },3000);
    })
}

fun2()
    .then(function(a){
        para.innerText="success"+ " " + a;
        fun1()
            .then(function(){
                para.innerText="success";
                fun3()
                    .then(function(){
                        para.innerText="success";
                    })
                    .catch(function(){
                        para.innerText="error";
                    })
            })
            .catch(function(){
                para.innerText="error";
                
            })
    })
    .catch(function(){
        para.innerText="error";
    })