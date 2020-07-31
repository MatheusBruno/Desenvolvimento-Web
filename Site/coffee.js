var boximg = document.getElementsByClassName('conteiner');
var tituloimg = document.getElementsByClassName('conteiner-titulo');
var paragrafoimg = document.getElementsByClassName('conteiner-paragrafo');
var botaoimg = document.getElementsByClassName('botao-class');

boximg[0].addEventListener('mousemove', entrar1);
boximg[1].addEventListener('mousemove', entrar2);
boximg[2].addEventListener('mousemove', entrar3);
boximg[3].addEventListener('mousemove', entrar4);
boximg[4].addEventListener('mousemove', entrar5);
boximg[5].addEventListener('mousemove', entrar6);

boximg[0].addEventListener('mouseout', sair1);
boximg[1].addEventListener('mouseout', sair2);
boximg[2].addEventListener('mouseout', sair3);
boximg[3].addEventListener('mouseout', sair4);
boximg[4].addEventListener('mouseout', sair5);
boximg[5].addEventListener('mouseout', sair6);


                            
function entrar1(){
    boximg[0].style.transitionDuration = '1s';
    boximg[0].style.backgroundImage = "url('imagens/conteines/natureza.jpg')";
    tituloimg[0].innerText = 'Natureza Divina';
    paragrafoimg[0].innerHTML = 'Natureza com seus doms de frutas';
    botaoimg[0].style.display = 'block';
    
}

function entrar2(){
    boximg[1].style.transitionDuration = '1s';
    boximg[1].style.backgroundImage = "url('imagens/conteines/roupas.jpg')";
    tituloimg[1].innerText = 'Estilo De Vida';
    paragrafoimg[1].innerHTML = 'Seja Vocês mesmo e curta a vida';
    botaoimg[1].style.display = 'block';
}

function entrar3(){
    boximg[2].style.transitionDuration = '1s';
    boximg[2].style.backgroundImage = "url('imagens/conteines/viajem.jpg')";
    tituloimg[2].innerText = 'Conheça o Mundo';
    paragrafoimg[2].innerHTML = 'Existe um mundo fora de casa';
    botaoimg[2].style.display = 'block';
}

function entrar4(){
    boximg[3].style.transitionDuration = '1s';
    boximg[3].style.backgroundImage = "url('imagens/conteines/amizade2.jpg')";
    tituloimg[3].innerText = 'Faça Amizade';
    paragrafoimg[3].innerHTML = 'A existencia se vai muito rapido, faça amigos';
    botaoimg[3].style.display = 'block';
}

function entrar5(){
    boximg[4].style.transitionDuration = '1s';
    boximg[4].style.backgroundImage = "url('imagens/conteines/trabalho2.jpg')";
    tituloimg[4].innerText = 'Tranforme seu hobby em Trabalho';
    paragrafoimg[4].innerHTML = 'trabalhe com aquilo que você ama';
    botaoimg[4].style.display = 'block';
}

function entrar6(){
    boximg[5].style.transitionDuration = '1s';
    boximg[5].style.backgroundImage = "url('imagens/conteines/praia2.jpg')";
    tituloimg[5].innerText = 'Curta a Vista do Mar';
    paragrafoimg[5].innerHTML = 'pegue sol, sua vida sera melhor';
    botaoimg[5].style.display = 'block';
}



function sair1(){
    boximg[0].style.backgroundImage = "url('imagens/conteines/florest.jpg')";
    tituloimg[0].innerText = '';
    paragrafoimg[0].innerHTML = '';
    botaoimg[0].style.display = 'none';
}

function sair2(){
    boximg[1].style.backgroundImage = "url('imagens/conteines/pessoa.jpg')";
    tituloimg[1].innerText = '';
    paragrafoimg[1].innerHTML = '';
    botaoimg[1].style.display = 'none';
}

function sair3(){
    boximg[2].style.backgroundImage = "url('imagens/conteines/fotos.jpg')";
    tituloimg[2].innerText = '';
    paragrafoimg[2].innerHTML = '';
    botaoimg[2].style.display = 'none';
}

function sair4(){
    boximg[3].style.backgroundImage = "url('imagens/conteines/amizade.jpg')";
    tituloimg[3].innerText = '';
    paragrafoimg[3].innerHTML = '';
    botaoimg[3].style.display = 'none';
}

function sair5(){
    boximg[4].style.backgroundImage = "url('imagens/conteines/trabalho.jpg')";
    tituloimg[4].innerText = '';
    paragrafoimg[4].innerHTML = '';
    botaoimg[4].style.display = 'none';
}

function sair6(){
    boximg[5].style.backgroundImage = "url('imagens/conteines/praia.jpg')";
    tituloimg[5].innerText = '';
    paragrafoimg[5].innerHTML = '';
    botaoimg[5].style.display = 'none';
}

function proximapagina(){
    window.location.href = 'paginas/natureza.html'; /* C/Historico */
    /* window.location.replace('paginas/natureza.html'); S/Historico */
    /* window.open('paginas/natureza.html', 'pagina'); Abre uma nova pagina e mantem a antiga */
}
