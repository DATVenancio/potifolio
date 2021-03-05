function botaoCurriculo(){
    document.getElementById("curriculo-texto").style.display="block";
    document.getElementById("contato-texto").style.display="none";
}
function botaoContato(){
    document.getElementById("curriculo-texto").style.display="none";
    document.getElementById("contato-texto").style.display="block";
}

function botaoJogos(){
    document.getElementById("div-jogos").style.display="block";
    document.getElementById("div-web").style.display="none";
    document.getElementById("div-desktop").style.display="none";
}
function botaoWeb(){
    document.getElementById("div-jogos").style.display="none";
    document.getElementById("div-web").style.display="block";
    document.getElementById("div-desktop").style.display="none";
}
function botaoDesktop(){
    document.getElementById("div-jogos").style.display="none";
    document.getElementById("div-web").style.display="none";
    document.getElementById("div-desktop").style.display="block";
}