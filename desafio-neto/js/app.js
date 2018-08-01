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


document.getElementById("btn").onclick = () => {
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
}
