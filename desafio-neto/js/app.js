const xhr = new XMLHttpRequest();
const PRIV_KEY = 'YOUR_PRIV_KEY';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
const url = 'https://gateway.marvel.com:443/v1/public/characters?name=';

document.getElementById("btn").onclick = () => {
    document.getElementById('shower').innerHTML = 'Loading...'
    const name = document.getElementById('txt').value;
    xhr.open('GET', url+name+'&ts='+ts+'&apikey='+PUBLIC_KEY+'&hash='+hash, true);

    xhr.onload = function () {
        const text = JSON.parse(xhr.response);
        console.log(text);
        document.getElementById('txt').value = '';
        document.getElementById('cardDead').style.visibility = 'visible';
        document.getElementById('cardDead').className = 'cardanimation'
        document.getElementById('coverpic').src = text.data.results[0].thumbnail.path + '/portrait_uncanny.jpg';
        document.getElementById('shower').innerHTML = '';
        document.getElementById('charname').innerHTML = text.data.results[0].name;
    };
    
    xhr.send(null);
    document.getElementById('cardDead').className = 'card'
}

