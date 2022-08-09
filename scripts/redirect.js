var kanojo = {
    '1-episode':`<iframe src="https://drive.google.com/file/d/1_lFygtSJFV524uB8gPNvHfQG7rGzptBo/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
}

var player = document.getElementById("player");


function unavailable(){
    window.alert("Episódio indisponível!");
}


//Updated redirect function

function redirect(anime,episode){
    switch(anime){
        case 'kanojo':
            switch(episode){
                case 1:
                player.innerHTML = kanojo['1-episode'];
                break;
            }
    }
}