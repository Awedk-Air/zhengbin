var number = 1;
var gongde = 0;
var password = prompt("品正的WIFI密码");
if (!(password == "67676767")){
    alert("密码错误");
    location.reload();
}
function dong() {
    var muyu = document.querySelector("#muyu");
    muyu.style.width = "380px";
    muyu.style.marginBottom = "7.55px";
    muyu.style.marginTop = "8.25px";
}
function pang() {
    let number_ = number;
    var muyu = document.querySelector("#muyu");
    muyu.style.width = "400px";
    muyu.style.marginBottom = "0px";
    muyu.style.marginTop = "0px";
    var muyudiv = document.querySelector("#muyudiv");
    muyudiv.insertAdjacentHTML("beforeend", `<div id="tip${number_}" class="tip" style="opacity:0;"><p>次数+1</p></div>`);
    number++;
    show(document.querySelector(`#tip${number_}`));
    setTimeout(function () { hide(document.querySelector(`#tip${number_}`)) }, 500);
    gongde += 1;
    const audio = document.createElement("audio");
    audio.hidden = "true";
    audio.src = "./file/audio.mp3";
    audio.play();
    update();
}


function getStyle(obj, styleName) {
    if (obj.currentStyle) {
        return obj.currentStyle[styleName];
    } else {
        return getComputedStyle(obj, null)[styleName];
    }
}
function show(v) {
    var du = parseFloat(getStyle(v, "opacity"));
    du = du + 0.05;
    v.style.opacity = du;
    v.style.marginTop = `${-330-du*20}px`;
    if (du != 1) {
        setTimeout(function () {
            show(v);
        }, 5);
    }
}
function hide(v) {
    var du = parseFloat(getStyle(v, "opacity"));
    du = du - 0.05;
    v.style.opacity = du;
    if (du != 1) {
        setTimeout(function () {
            hide(v);
        }, 50);
    }
}
function update() {
    var gd = document.querySelector("#gd");
    gd.innerHTML = "祈祷次数：" + gongde;
}
