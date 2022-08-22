Regras:
/*A letra "E" é convertida para "ENTER" A letra "I" é convertida para "IMES" A letra "A" é convertida para "AI" A letra "O" é convertida para "OBER" A letra "U" é convertida para "UFAT"
Por exemplo: "Gato" => "Gaitober" Gaitober" => "Gato"
"Digite somente texto em minúsculo e sem acento. Tente novamente!"

Elemento é uma referência a um objeto Element, ou null se um elemento com o ID especificado não       estiver contido neste documento.
id é uma string que diferência maiúsculas e minúsculas representando o ID único do elemento sendo procurado.*/

// Função criptografar
function criptografar() {
var mensagem = document.getElementById("texto-principal").value.toLowerCase();
var criptografada = mensagem.replace(/e/igm,"enter");
var criptografada = criptografada.replace(/o/igm,"ober");
var criptografada = criptografada.replace(/i/igm,"imes");
var criptografada = criptografada.replace(/a/igm,"ai");
var criptografada = criptografada.replace(/u/igm,"ufat");
document.getElementById("imagem-direita").style.display = "none";
document.getElementById("texto-primario").style.display = "none";
document.getElementById("copiar").style.display = "show";
document.getElementById("texto-secundario").innerHTML = criptografada;
document.getElementById("texto-principal").innerHTML = " ";
document.getElementById("copiar").style.display = "inherit";
}
// Função descriptografar
function descriptografar() {
var mensagem = document.getElementById("texto-principal").value.toLowerCase();
var criptografada = mensagem.replace(/enter/igm,"e");
var criptografada = criptografada.replace(/ober/igm,"o");
var criptografada = criptografada.replace(/imes/igm,"i");
var criptografada = criptografada.replace(/ai/igm,"a");
var criptografada = criptografada.replace(/ufat/igm,"u");
document.getElementById("imagem-direita").style.display = "none";
document.getElementById("texto-primario").style.display = "none";
document.getElementById("copiar").style.display = "show";
document.getElementById("texto-secundario").innerHTML = criptografada;
document.getElementById("texto-principal").innerHTML = " ";
document.getElementById("copiar").style.display = "inherit";
}

// Função copiar
function copiar() {
//Capturamos por ID o input 
var textoCopiado = document.getElementById("texto-secundario");
//Selecionamos o texto
textoCopiado.select();
textoCopiado.setSelectionRange(0, 99999); //Para dispositivos móveis
//Copia o texto que está selecionado
document.execCommand("copy");
//Alerta que a msg foi copiada
alert("Mensagem copiada: " + textoCopiado.value + "✅");
}

// Função limpar
function limpar() {
//Retorna o elemento do DOM que é identificado por um ID específico. Nesse caso textosecundario
document.getElementById("texto-secundario").value='';
//Retorna o elemento do DOM que é identificado por um ID específico. Nesse caso textoprincipal
document.getElementById("texto-principal").value='';
//Alerta que a msg foi apagada
alert("Mensagem apagada! 🗑");
//Recarrega a página
location.reload();
//Define o foco no campo input novamente
document.getElementById("texto-principal").focus();
}
 

