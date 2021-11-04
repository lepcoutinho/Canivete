let click=0;
function toggle(){
    click ++;
    let circle = document.getElementById("toggleCircle");
    let result = document.getElementById("resultToggle");
    if(click == 1){
        circle.style.float = "right";
        circle.style.backgroundColor = "#be0753";
        //result.innerHTML = "ON";
    }
    if(click == 2){
        circle.style.float = "left";
        circle.style.backgroundColor = "#ee4c90";
        //result.innerHTML = "OFF";
        click=0;
    }
}
let onmouse = 0;
function navBurger(){
    onmouse++;
    let pao1 = document.getElementById("pao1");
    let pao2 = document.getElementById("pao2");
    let bife = document.getElementById("bife");
    if(onmouse == 1){
        pao1.style.marginTop = "15px";
        pao2.style.marginTop = "-15px";
        pao1.style.transform =  "rotate(45deg)";
        pao2.style.transform =  "rotate(-45deg)";
        pao1.style.width = "43px";
        pao2.style.width = "43px";
        bife.style.display = "none";
    }else{
        pao1.style.marginTop = "inherit";
        pao2.style.marginTop = "inherit";
        pao1.style.transform = "inherit";
        pao2.style.transform = "inherit";
        pao1.style.width = "40px";
        pao2.style.width = "40px";
        bife.style.display = "inherit";
        onmouse=0;
    }
    
}