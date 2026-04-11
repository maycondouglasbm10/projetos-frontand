function generatePassword() { // Função para gerar a senha
  const length = document.getElementById("length").value;
  const uppercase = document.getElementById("uppercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;
  if (!length) {
    alert("Digite o tamanho da senha");
    return;
  }
  let chars = "abcdefghijklmnopqrstuvwxyz";

  if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) chars += "0123456789";
  if (symbols) chars += "!@#$%&*";

  let password = "";

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("password").value = password;
}

function copyPassword() { // Função para copiar a senha para a área de transferência
  const passwordField = document.getElementById("password");
  passwordField.select();
  navigator.clipboard.writeText(passwordField.value);
  alert("Senha copiada!");
}