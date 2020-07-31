var boximg1 = document.getElementById('box-imagem1');
var boximg2 = document.getElementById('box-imagem2');
var boximg3 = document.getElementById('box-imagem3');
var boximg4 = document.getElementById('box-imagem4');
var boximg5 = document.getElementById('box-imagem5');
var boximg6 = document.getElementById('box-imagem6');

var tituloimg1 = document.getElementById('titulo-img1');
var tituloimg2 = document.getElementById('titulo-img2');
var tituloimg3 = document.getElementById('titulo-img3');
var tituloimg4 = document.getElementById('titulo-img4');
var tituloimg5 = document.getElementById('titulo-img5');
var tituloimg6 = document.getElementById('titulo-img6');

var paragrafoimg1 = document.getElementById('paragrafo-img1');
var paragrafoimg2 = document.getElementById('paragrafo-img2');
var paragrafoimg3 = document.getElementById('paragrafo-img3');
var paragrafoimg4 = document.getElementById('paragrafo-img4');
var paragrafoimg5 = document.getElementById('paragrafo-img5');
var paragrafoimg6 = document.getElementById('paragrafo-img6');

var botaoimg1 = document.getElementById('botao-imag1');
var botaoimg2 = document.getElementById('botao-imag2');
var botaoimg3 = document.getElementById('botao-imag3');
var botaoimg4 = document.getElementById('botao-imag4');
var botaoimg5 = document.getElementById('botao-imag5');
var botaoimg6 = document.getElementById('botao-imag6');

boximg1.addEventListener('mousemove', entrar1);
boximg2.addEventListener('mousemove', entrar2);
boximg3.addEventListener('mousemove', entrar3);
boximg4.addEventListener('mousemove', entrar4);
boximg5.addEventListener('mousemove', entrar5);
boximg6.addEventListener('mousemove', entrar6);

boximg1.addEventListener('mouseout', sair1);
boximg2.addEventListener('mouseout', sair2);
boximg3.addEventListener('mouseout', sair3);
boximg4.addEventListener('mouseout', sair4);
boximg5.addEventListener('mouseout', sair5);
boximg6.addEventListener('mouseout', sair6);


/*                         Função Entrada                                */
function entrar1(){
    boximg1.style.transitionDuration = '1s';
    boximg1.style.backgroundImage = "url('imagens/conteines/natureza.jpg')";
    tituloimg1.innerText = 'Natureza Divina';
    paragrafoimg1.innerHTML = 'Natureza com seus doms de frutas';
    botaoimg1.style.display = 'block';
    
}

function entrar2(){
    boximg2.style.transitionDuration = '1s';
    boximg2.style.backgroundImage = "url('imagens/conteines/roupas.jpg')";
    tituloimg2.innerText = 'Estilo De Vida';
    paragrafoimg2.innerHTML = 'Seja Vocês mesmo e curta a vida';
    botaoimg2.style.display = 'block';
}

function entrar3(){
    boximg3.style.transitionDuration = '1s';
    boximg3.style.backgroundImage = "url('imagens/conteines/viajem.jpg')";
    tituloimg3.innerText = 'Conheça o Mundo';
    paragrafoimg3.innerHTML = 'Existe um mundo fora de casa';
    botaoimg3.style.display = 'block';
}

function entrar4(){
    boximg4.style.transitionDuration = '1s';
    boximg4.style.backgroundImage = "url('imagens/conteines/amizade2.jpg')";
    tituloimg4.innerText = 'Faça Amizade';
    paragrafoimg4.innerHTML = 'A existencia se vai muito rapido, faça amigos';
    botaoimg4.style.display = 'block';
}

function entrar5(){
    boximg5.style.transitionDuration = '1s';
    boximg5.style.backgroundImage = "url('imagens/conteines/trabalho2.jpg')";
    tituloimg5.innerText = 'Tranforme seu hobby em Trabalho';
    paragrafoimg5.innerHTML = 'trabalhe com aquilo que você ama';
    botaoimg5.style.display = 'block';
}

function entrar6(){
    boximg6.style.transitionDuration = '1s';
    boximg6.style.backgroundImage = "url('imagens/conteines/praia2.jpg')";
    tituloimg6.innerText = 'Curta a Vista do Mar';
    paragrafoimg6.innerHTML = 'pegue sol, sua vida sera melhor';
    botaoimg6.style.display = 'block';
}


/*                         Função Saida                                  */
function sair1(){
    boximg1.style.backgroundImage = "url('imagens/conteines/florest.jpg')";
    tituloimg1.innerText = '';
    paragrafoimg1.innerHTML = '';
    botaoimg1.style.display = 'none';
}

function sair2(){
    boximg2.style.backgroundImage = "url('imagens/conteines/pessoa.jpg')";
    tituloimg2.innerText = '';
    paragrafoimg2.innerHTML = '';
    botaoimg2.style.display = 'none';
}

function sair3(){
    boximg3.style.backgroundImage = "url('imagens/conteines/fotos.jpg')";
    tituloimg3.innerText = '';
    paragrafoimg3.innerHTML = '';
    botaoimg3.style.display = 'none';
}

function sair4(){
    boximg4.style.backgroundImage = "url('imagens/conteines/amizade.jpg')";
    tituloimg4.innerText = '';
    paragrafoimg4.innerHTML = '';
    botaoimg4.style.display = 'none';
}

function sair5(){
    boximg5.style.backgroundImage = "url('imagens/conteines/trabalho.jpg')";
    tituloimg5.innerText = '';
    paragrafoimg5.innerHTML = '';
    botaoimg5.style.display = 'none';
}

function sair6(){
    boximg6.style.backgroundImage = "url('imagens/conteines/praia.jpg')";
    tituloimg6.innerText = '';
    paragrafoimg6.innerHTML = '';
    botaoimg6.style.display = 'none';
}

function proximapagina(){
    window.location.href = 'paginas/natureza.html'; /* C/Historico */
    /* window.location.replace('paginas/natureza.html'); S/Historico */
    /* window.open('paginas/natureza.html', 'pagina'); Abre uma nova pagina e mantem a antiga */
}
