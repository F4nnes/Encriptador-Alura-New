
//Matriz de funcionamiento
const matrizCode = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];

//Variables de elementos a utilizar

const areaEncriptar = document.getElementById("area-encriptar");
const areaDesencriptar = document.getElementById("area-desencriptar");
const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById('copiar');
const indicación = document.getElementById('anuncio');
const respuesta = document.getElementById('sección-anuncio');


//Función para encriptar
function encriptar(fraseEncriptada) {
    for (let i = 0; i < matrizCode.length; i++) {
        if (fraseEncriptada.includes(matrizCode[i][0])) {
            fraseEncriptada = fraseEncriptada.replace(
                new RegExp(matrizCode[i][0], "g"),
                matrizCode[i][1]
            )
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

//Funcion de anuncio
areaEncriptar.addEventListener("focus", () => {
    indicación.style.display = "none";
});

areaEncriptar.addEventListener("blur", () => {
    if (areaEncriptar.value === "") {
        indicación.style.display = "block";
    }
});


//Seccion de funcionamiento para botones
btnEncriptar.addEventListener("click", () => {
    const textoEncriptado = encriptar(areaEncriptar.value);
    areaDesencriptar.value = textoEncriptado;
});


btnDesencriptar.addEventListener("click", ()=>{
    const textoDesencriptado = desencriptar(areaDesencriptar.value);
    areaDesencriptar.value = textoDesencriptado;
})