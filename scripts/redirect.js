
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
		episodes : [
    `<iframe src="https://drive.google.com/file/d/1mw4D2bPKksU3bmHcFkNDURi4mRVS-98w/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1IACOYFSZD0pp9vZNDl8oTFnkHuxv8MwA/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1BFGxssbA5DvpBixCpMClik7On-ZgylFY/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1mak4TR5gNPMGRRKXXzSP_aZOYaxjXrMc/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1vtFTHMpo7xC-zmrt3y3XbmpIr6NAJnj_/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1tXS9hWKINbmgZMltKp18rFBic0S4Xxi0/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1gX8Cm8yx_god2oDqM7Ickh3NMIWR5f6l/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1upIQzNEpNnP33_aTpfC7c_3m7NCAPfCY/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://rr2---sn-voxuxaxjvh-gxjs.googlevideo.com/videoplayback?expire=1664227444&ei=9KcxY4iOEseU4QTgnJ2wCA&ip=138.99.153.2&id=4b6b0a1dff2e1c54&itag=22&source=blogger&mh=d9&mm=31&mn=sn-voxuxaxjvh-gxjs&ms=au&mv=m&mvi=2&pcm2cms=yes&pl=24&susc=bl&eaua=6D8GqLyRrDg&mime=video/mp4&vprv=1&dur=1419.157&lmt=1607709111878390&mt=1664198232&txp=1311224&sparams=expire,ei,ip,id,itag,source,susc,eaua,mime,vprv,dur,lmt&sig=AOq0QJ8wRQIgLnG988HqFKzn7weE6S-cPo77y7EFDskP6ZB9bsThK6MCIQDVPEiosZbh6smko9zN5W7JZtSstqLQmI9853Xrd0yR5A%3D%3D&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRgIhAOIDoNPyWSv-9Jv7H3dIXEH1bXVhuWJhtTAaCkP5RkCsAiEA8e59wQN-1ii8d9Beq1EBuXL4z6u6qpoIrpeIPDd7IGw%3D&cpn=11IKu7CR0-47Tv5y&c=WEB_EMBEDDED_PLAYER&cver=1.20220921.01.00" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`,
    `<iframe src="https://drive.google.com/file/d/1Id2J_-JHyT28GYOli_3E-D7jea_hlThY/preview" width="640" height="480" allow="autoplay" allowfullscreen></iframe>`


]
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
                case 11:
                    player.innerHTML = animes[1]['episodes'][11];
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