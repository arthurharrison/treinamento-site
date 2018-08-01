const xhr = new XMLHttpRequest();
const PRIV_KEY = '22b9ec5fccada12f519cd646152c9fe3fb1414b8';
const PUBLIC_KEY = '4abbfa04a939ae834189993c17551473';
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
const url = 'https://gateway.marvel.com:443/v1/public/characters?name=';

function addPic(pic,text){
    document.getElementById('log').innerHTML += `<div class='hist'>
      <img src='${pic}/portrait_uncanny.jpg' class='cardanimation' id='coverpic'/>
      <p id='charname'>${text}</p>
    </div>`;
    
}

function changer(){
    const logo = document.getElementsByClassName('logo')[0];
    if(document.getElementsByClassName('bottext')[0].innerHTML=='DC É Superior'){
        logo.src = 'https://cdn.ome.lt/vl309CswdoRsJnwPxDfe1DaqT2E=/837x0/smart/uploads/conteudo/fotos/dc-logo.jpg';
        document.getElementsByClassName('bottext')[0].innerHTML = 'Marvel É Superior';
        document.getElementsByClassName('topnav')[0].style.background = '#003f98';
        document.getElementsByClassName('botnav')[0].style.background = '#ed1d24';
    }
    else{
        document.getElementsByClassName('logo')[0].src = 'https://logodownload.org/wp-content/uploads/2017/05/marvel-logo.png';
        document.getElementsByClassName('bottext')[0].innerHTML = 'DC É Superior';
        document.getElementsByClassName('topnav')[0].style.background = '#ed1d24';
        document.getElementsByClassName('botnav')[0].style.background = '#003f98';
    }
    
}

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById('shower').innerHTML = 'Loading...'
    const name = document.getElementById('txt').value;
    xhr.open('GET', url+name+'&ts='+ts+'&apikey='+PUBLIC_KEY+'&hash='+hash, true);

    xhr.onload = function () {
        const text = JSON.parse(xhr.response);
        document.getElementById('log').style.visibility= 'visible';
        document.getElementById('txt').value = '';
        /*document.getElementById('cardDead').style.visibility = 'visible';
        document.getElementById('cardDead').className = 'cardanimation';*/
        addPic(text.data.results[0].thumbnail.path,text.data.results[0].name);
        //document.getElementById('coverpic').src = text.data.results[0].thumbnail.path + '/portrait_uncanny.jpg';
        document.getElementById('shower').innerHTML = '';
        //document.getElementById('charname').innerHTML = text.data.results[0].name;
    };

    xhr.send(null);
    
    //document.getElementById('cardDead').className = 'card'
});

Array.from(document.getElementsByClassName('hist')).forEach( e => e.style.backgroundColor = 'white');
/*
document.getElementById("btn").onclick = () => {
    document.getElementById('shower').innerHTML = 'Loading...'
    const name = document.getElementById('txt').value;
    xhr.open('GET', url+name+'&ts='+ts+'&apikey='+PUBLIC_KEY+'&hash='+hash, true);

    xhr.onload = function () {
        const text = JSON.parse(xhr.response);
        document.getElementById('log').style.visibility= 'visible';
        document.getElementById('txt').value = '';
        // document.getElementById('cardDead').style.visibility = 'visible';
        // document.getElementById('cardDead').className = 'cardanimation';
        addPic(text.data.results[0].thumbnail.path,text.data.results[0].name);
        //document.getElementById('coverpic').src = text.data.results[0].thumbnail.path + '/portrait_uncanny.jpg';
        document.getElementById('shower').innerHTML = '';
        //document.getElementById('charname').innerHTML = text.data.results[0].name;
    };

    xhr.send(null);
    
    //document.getElementById('cardDead').className = 'card'
}
*/

