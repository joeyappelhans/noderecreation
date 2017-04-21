(function)(){
    const doc=document;
    let img1=doc.querySelector("#first div img");
    let leftdiv=doc.querySelector("#left");
    let rightdiv=doc.querySelector("#right");
    img1.addEventListener("mouseover",function(){
        img1.style.border="13px solid green";
    })
    img1.addEventListener("mouseout",function(){
        img1.style.border="13px solid transparent";
    })
    leftdiv.addEventListener("mouseover",function(){
        leftdiv.style.opacity="0.8";
    })
    leftdiv.addEventListener("mouseout"funtion(){
        leftdiv.style.opacity="1";
    })
    rightdiv.addEventListener("mouseover",function(){
        rightdiv.style.opacity="0.8";
    })
    rightdiv.addEventListener("mouseout"funtion(){
        rightdiv.style.opacity="1";
    })
}
