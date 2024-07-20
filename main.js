
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
const btnPegar = document.getElementById('pegar');
const respuesta = document.getElementById('sección-anuncio');
const reinicio = document.getElementById('limpiar');


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
    ajustarAlturaAreaDesencriptar();
    // Muestra el boton "copiar" solo si hay texto en areaDesencriptar
    if (areaDesencriptar.value !== "") {
        btnCopiar.style.display = "block";
        respuesta.style.display = "none";
        reinicio.style.display = "block";
    }
});

//desencriptar
btnDesencriptar.addEventListener("click", () => {
    const textoDesencriptado = desencriptar(areaEncriptar.value);
    areaDesencriptar.value = textoDesencriptado;
    ajustarAlturaAreaDesencriptar();
    // Muestra el boton "copiar" solo si hay texto en areaDesencriptar
    if (areaDesencriptar.value !== "") {
        btnCopiar.style.display = "block";
        respuesta.style.display = "none";
        reinicio.style.display = "block";
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
            // Mostrar botón "Pegar" después de copiar
            btnPegar.style.display = "block";
        })
        .catch((err) => {
            alert("Error al copiar al portapapeles:", err);
        });
};

btnCopiar.addEventListener("click", copiarAlPortapapeles);

//Inicia boton "pegar" oculto
btnPegar.style.display = "none"

//Función de pegar del portapapeles
function pegarDelPortapapeles() {
    navigator.clipboard.readText().then((text) => {
        areaEncriptar.value = text;
        // areaDesencriptar.value = text;
    })
        .catch((err) => {
            alert("Error al pegar del portapapeles:", err);
        });

};

btnPegar.addEventListener("click", pegarDelPortapapeles);


//Sección de anuncio-muñeco
respuesta.style.display = "block"

//cambio de tamaño area texto
function ajustarAlturaAreaDesencriptar() {
    areaDesencriptar.style.height = "auto";
    areaDesencriptar.style.height = areaDesencriptar.scrollHeight + "px";
}

//boton limpiar (reset)
reinicio.style.display = "none"

//Función de reinicio
function reiniciarEncriptador() {
    areaEncriptar.value = "";
    areaDesencriptar.value = "";
    btnCopiar.style.display = "none";
    btnPegar.style.display = "none";
    respuesta.style.display = "block";
    reinicio.style.display = "none";
}

reinicio.addEventListener("click", reiniciarEncriptador);