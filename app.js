const textInput = document.querySelector(".txt-input");
const textOutput = document.getElementById("output");
const containerOutPut = document.getElementById("container-txt-output");

const encrypt = document.querySelector(".btn-encrypt");
const decrypt = document.querySelector(".btn-decrypt");
const imgFind = document.querySelector(".container-find");
const btnCopy = document.querySelector(".btn-copy");

textInput.addEventListener("input", function () {
  // Guardar la posición actual del cursor
  let cursorPosition = this.selectionStart;

  // Convertir todo a minúsculas
  let lowercaseText = this.value.toLowerCase();
  this.value = lowercaseText;

  // Filtrar solo letras minúsculas y saltos de línea
  let filteredText = lowercaseText.replace(/[^a-z\s\n\r]/g, "");
  filteredText = filteredText.replace(/[\n\r]+/g, " ");

  if (filteredText !== lowercaseText) {
    // Actualizar el valor del textarea solo si se han eliminado caracteres no deseados
    this.value = filteredText;
  }

  // Restaurar la posición del cursor después de la actualización
  this.setSelectionRange(cursorPosition, cursorPosition);
});

function encriptar() {
  let input = textInput.value;
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
      output += "ai";
    } else if (input[i] === "e") {
      output += "enter";
    } else if (input[i] === "i") {
      output += "imes";
    } else if (input[i] === "o") {
      output += "ober";
    } else if (input[i] === "u") {
      output += "ufat";
    } else {
      output += input[i];
    }
  }
  return output;
}

encrypt.addEventListener("click", () => {
  textOutput.innerText = encriptar();
  if (textInput.value !== "") {
    imgFind.classList.add("hidden");
    containerOutPut.classList.remove("hidden");
  }
});

function desencriptar() {
  let input = textInput.value;
  let output = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
      output += "a";
      i = i + 1;
    } else if (input[i] === "e") {
      output += "e";
      i = i + 4;
    } else if (input[i] === "i") {
      output += "i";
      i = i + 3;
    } else if (input[i] === "o") {
      output += "o";
      i = i + 3;
    } else if (input[i] === "u") {
      output += "u";
      i = i + 3;
    } else {
      output += input[i];
    }
  }
  return output;
}

decrypt.addEventListener("click", () => {
  textOutput.innerText = desencriptar();
  if (textInput.value !== "") {
    imgFind.classList.add("hidden");
    containerOutPut.classList.remove("hidden");
  }
});

btnCopy.addEventListener("click", function () {
  var textarea = document.getElementById("output");
  textarea.removeAttribute("disabled");
  textarea.select();
  document.execCommand("copy");
  textarea.setAttribute("disabled", "true");
  textInput.value = "";
  alert("El texto fue copiado exitosamente");
});
