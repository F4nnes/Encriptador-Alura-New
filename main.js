
//Matriz de funcionamiento
const matrizCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

//Variables de elementos a utilizar

const areaEncriptar = document.getElementById("area-encriptar");
const areaDesencriptar = document.getElementById("area-desencriptar");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById('copiar');
const respuesta = document.getElementById('sección-anuncio');



//Función para encriptar
function encriptar(fraseEncriptada) {
    for (let i = 0; i < matrizCode.length; i++) {
        if (fraseEncriptada.includes(matrizCode[i][0])) {
            fraseEncriptada = fraseEncriptada.replace(
                new RegExp(matrizCode[i][0], "g"),
                matrizCode[i][1]
            );
        }
    }

    return fraseEncriptada.replace(/[^a-z ñ]/, '');
};

//Función para desencriptar
function desencriptar(fraseEncriptada) {
    for (let i = matrizCode.length - 1; i >= 0; i--) {
        if (fraseEncriptada.includes(matrizCode[i][1])) {
            fraseEncriptada = fraseEncriptada.replace(
                new RegExp(matrizCode[i][1], "g"),
                matrizCode[i][0]
            );
        }
    }
    return fraseEncriptada.replace(/[^a-z ñ]/, '');
};

//Función de restricción de caracteres
const restriccion = (event) => {
    setTimeout(() => {
        event.target.value = event.target.value.toLowerCase().replace(/[^a-z ñ]/, '');
    }, 200);

};

areaEncriptar.addEventListener("input", restriccion);


//Seccion de funcionamiento para botones
//encriptar
btnEncriptar.addEventListener("click", () => {
    const textoEncriptado = encriptar(areaEncriptar.value);
    areaDesencriptar.value = textoEncriptado;
    // Muestra el boton "copiar" solo si hay texto en areaDesencriptar
    if (areaDesencriptar.value !== "") {
        btnCopiar.style.display = "block";
        respuesta.style.display = "none";
    }
});

//desencriptar
btnDesencriptar.addEventListener("click", () => {
    const textoDesencriptado = desencriptar(areaEncriptar.value);
    areaDesencriptar.value = textoDesencriptado;
    // Muestra el boton "copiar" solo si hay texto en areaDesencriptar
  if (areaDesencriptar.value !== "") {
    btnCopiar.style.display = "block";
    respuesta.style.display = "none";
  }
});

//Inicia con el boton "copiar" oculto
btnCopiar.style.display = "none";

//copiar
function copiarAlPortapapeles() {
    navigator.clipboard.writeText(areaDesencriptar.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
            // areaEncriptar.value = "";
            areaDesencriptar.value = "";
        })
        .catch((err) => {
            alert("Error al copiar al portapapeles:", err);
        });
};

btnCopiar.addEventListener("click", copiarAlPortapapeles);


//seccion de anuncio-muñeco
respuesta.style.display= "block"