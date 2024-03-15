const textArea = document.querySelector('textarea');
const cript = document.getElementById('cript');
const descript = document.getElementById('descript');
const conteudoInicial = document.getElementById('containerInicial');
const containerResposta = document.getElementById('containerResposta')
const resposta = document.getElementById('resposta');
const copiar = document.getElementById('copiar');

function removerConteudoInicial() {
    conteudoInicial.classList.remove('containerInicial');
    conteudoInicial.classList.add('ocultar');
    containerResposta.classList.remove('ocultar');
    containerResposta.classList.add('containerResposta');
}

function mostrarConteudoInicial() {
    conteudoInicial.classList.remove('ocultar');
    conteudoInicial.classList.add('containerInicial');
    containerResposta.classList.remove('containerResposta');
    containerResposta.classList.add('ocultar');
}

function verificarTexto(texto) {
    const temMaiusculoOuAcentos = (str) => /[A-ZáàâãéèêíïóôõöúñÁÀÂÃÉÈÍÏÓÔÕÖÚÑ]/.test(str);
    return temMaiusculoOuAcentos(texto);
}

cript.addEventListener('click', () => {
    let texto = (textArea.value === '')
        ? mostrarConteudoInicial()
        : textArea.value;

    if (verificarTexto(texto)) {
        alert('O texto contém letras maiúsculas ou acentuadas.');
    } else {
        texto = texto.replace(/e/g, 'enter');
        texto = texto.replace(/i/g, 'imes');
        texto = texto.replace(/a/g, 'ai');
        texto = texto.replace(/o/g, 'ober');
        texto = texto.replace(/u/g, 'ufat');
        removerConteudoInicial();
        resposta.textContent = texto;
    }
});

descript.addEventListener('click', () => {
    let texto = (textArea.value === '')
        ? mostrarConteudoInicial()
        : textArea.value;

    if (verificarTexto(texto)) {
        alert('O texto contém letras maiúsculas ou acentuadas.');
    } else {
        texto = texto.replace(/enter/g, 'e');
        texto = texto.replace(/imes/g, 'i');
        texto = texto.replace(/ai/g, 'a');
        texto = texto.replace(/ober/g, 'o');
        texto = texto.replace(/ufat/g, 'u');
        removerConteudoInicial();
        resposta.textContent = texto;
    }
});

copiar.addEventListener('click', () => {
    const text = resposta.textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert('Texto copiado com sucesso!');
    }, function (err) {
        alert('Erro ao copiar o texto!')
    });
});