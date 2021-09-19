var listaFilmes = [
  "Adoráveis Mulheres",
  "O Fabuloso Destino de Amélie Poulain",
  "Orgulho e Preconceito"
];

listaFilmes.push("Top Gun - Ases Indomáveis");
listaFilmes.push("O Jogo da Imitação");

console.log(listaFilmes.length);

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}
