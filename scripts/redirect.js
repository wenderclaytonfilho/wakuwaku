var player = document.getElementById("player");
ep8 = document.getElementById("ep8");

function redirectEp8(){
    var ep8link = `<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`
    player.innerHTML=ep8link;
}

function redirectEp9(){
    var ep9link =`<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`;
    let ep9 = document.getElementById("ep9");
    player.innerHTML=ep9link;
}

ep9.addEventListener('click', redirectEp9);
ep8.addEventListener('click',redirectEp8);
