
var animes = [
	{
		nome: 'kanojo',
		link:'../navigation/kanojo2.html',
		diretor: 'Kazuya',
		cover: '../assets/covers/Kanojo-2ndseason.jpg',
        episodes: [`<iframe src="https://drive.google.com/file/d/1_lFygtSJFV524uB8gPNvHfQG7rGzptBo/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`]
	},

	{
		nome: 'tonikawa',
		link:'../navigation/tonikawa.html',
		diretor: 'Hiro',
		cover: '../assets/covers/tonikawa.jpg',
		episodes: [`<iframe src="https://drive.google.com/file/d/1mw4D2bPKksU3bmHcFkNDURi4mRVS-98w/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
			`<iframe src="https://drive.google.com/file/d/1IACOYFSZD0pp9vZNDl8oTFnkHuxv8MwA/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
			`<iframe src="https://drive.google.com/file/d/1BFGxssbA5DvpBixCpMClik7On-ZgylFY/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
			`<iframe src="https://drive.google.com/file/d/1mak4TR5gNPMGRRKXXzSP_aZOYaxjXrMc/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
			`<iframe src="https://drive.google.com/file/d/1vtFTHMpo7xC-zmrt3y3XbmpIr6NAJnj_/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
			`<iframe src="https://drive.google.com/file/d/1tXS9hWKINbmgZMltKp18rFBic0S4Xxi0/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
			`<iframe src="https://drive.google.com/file/d/1gX8Cm8yx_god2oDqM7Ickh3NMIWR5f6l/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
			`<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
			`<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`]

	},

    {
        nome:'Sen to Chihiro no Kamikakushi',
        link:'../navigation/chihiro.html',
        diretor:'Hayao Miyazaki',
        cover:'../assets/covers/chihiro.jpg',
        episodes:[
        `<iframe src="https://drive.google.com/file/d/1GudoaVPLFu8W-r1QldLphjZkcJYWr3Mn/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`
        ]

    }
];


var player = document.getElementById("player");

function unavailable(option){
    switch (option) {
        case 'funcionalidade':
            window.alert('Funcionalidade em desenvolvimento!')
            break;
        case 'episode':
            window.alert("Episódio indisponível!");
            break;
    }
    
}



//Updated redirect function

function redirect(anime,episode){
    switch(anime){
        case 'kanojo':
            switch(episode){
                case 0:
                player.innerHTML = animes[0]['episodes'][0];
                break;
            }
        break;
        
        case 'tonikawa':
            switch(episode){
                case 0: 
                    window.alert("Tonikawa");
                    player.innerHTML = animes[1]['episodes'][0];
                    break;
                case 1:
                    player.innerHTML = animes[1]['episodes'][1];
                    break;
                case 2:
                    player.innerHTML = animes[1]['episodes'][2];
                    break;
                case 3:
                    player.innerHTML = animes[1]['episodes'][3];
                    break;
                case 4:
                    player.innerHTML = animes[1]['episodes'][4];
                    break;
                case 5:
                    player.innerHTML = animes[1]['episodes'][5];
                    break;
                case 6:
                    player.innerHTML = animes[1]['episodes'][6];
                    break;
                case 7:
                    player.innerHTML = animes[1]['episodes'][7];
                    break;
                case 8:
                    player.innerHTML = animes[1]['episodes'][8];
                    break;
                case 9:
                    player.innerHTML = animes[1]['episodes'][9];
                    break;
                case 10:
                    player.innerHTML = animes[1]['episodes'][10];
                    break;
            }
        break;

        case 'chihiro-filme':
            switch(episode){
                case 0:
                    player.innerHTML=animes[2]['episodes'][0];
                    break;
            }
        break;
    }
}