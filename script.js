document.getElementById("formSenha").addEventListener("submit", function(event) {
  event.preventDefault();
  const nomeCompleto = document.getElementById("nomeCompleto").value;
  const senha = gerarSenha(nomeCompleto);
  document.getElementById("resultado").textContent = "Senha inicial do aluno: " + senha;
});

function validarNome(nome) {
  // Verifica se o nome contém pelo menos um espaço (indicando nome e sobrenome)
  return nome.trim().includes(' ');
}

function obterSobrenome(nome) {
  // Divide o nome em partes e retorna o último nome em minúsculas
  let partes = nome.split(' ');
  return partes[partes.length - 1].toLowerCase();
}

function contarVogais(nome) {
  // Conta o número de vogais no nome
  let vogais = 'aeiouAEIOU';
  let contador = 0;
  for (let char of nome) {
      if (vogais.includes(char)) {
          contador++;
      }
  }
  return contador.toString().padStart(2, '0'); // Retorna com dois dígitos
}

function gerarSenha(nome) {
  // Gera a senha inicial
  if (validarNome(nome)) {
      let sobrenome = obterSobrenome(nome);
      let numVogais = contarVogais(nome);
      let senha = sobrenome + numVogais;
      return senha;
  } else {
      return 'Nome incompleto';
  }
}
