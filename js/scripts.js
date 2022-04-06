function load(){
    var req= new XMLHttpRequest()

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var msg = this.responseText
            alert("User logged in " + msg)
            window.location.href = "./homepage.html";
        }
    }
    req.open('GET', 'data.txt', true)
    req.send()
}

function store() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert("User registered!!");
}

function check() {

    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;
    if(userName == storedName && userPw == storedPw) {
        load();
    }else {
        alert('ERROR.');
    }
}

