episodes = [`<iframe src="https://drive.google.com/file/d/1mw4D2bPKksU3bmHcFkNDURi4mRVS-98w/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1IACOYFSZD0pp9vZNDl8oTFnkHuxv8MwA/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1BFGxssbA5DvpBixCpMClik7On-ZgylFY/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1mak4TR5gNPMGRRKXXzSP_aZOYaxjXrMc/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1vtFTHMpo7xC-zmrt3y3XbmpIr6NAJnj_/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1tXS9hWKINbmgZMltKp18rFBic0S4Xxi0/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1gX8Cm8yx_god2oDqM7Ickh3NMIWR5f6l/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`,
	`<iframe src="https://drive.google.com/file/d/1U7K43VRcolZgwK8x6yu_MIHLSHKFFPVc/preview" width="360" height="280" allow="autoplay" allowfullscreen></iframe>`


];

var player = document.getElementById("player");

function redirect(episode){
	//if(episode == 0){
	//	player.innerHTML=episodes[0];
	//}
	switch(episode){
		case 0:
			player.innerHTML=episodes[0];
			break;
		case 1:
			player.innerHTML=episodes[1];
			break;
		case 2:
			player.innerHTML=episodes[2];
			break;
		case 3:
			player.innerHTML=episodes[3];
			break;
		case 4:
			player.innerHTML = episodes[4];
			break;
		case 5:
			player.innerHTML = episodes[5];
			break;
		case 6:
			player.innerHTML = episodes[6];
			break;
		case 7:
			player.innerHTML=episodes[7];
			break;
		case 8:
			player.innerHTML=episodes[8];
			break;
	}
}

function unavailable(){
	window.alert("Episódio indisponível!");
}