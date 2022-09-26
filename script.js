window.addEventListener("load", main);

function main() {
    getCuadrado(6)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
}

function getCuadrado(entero) {
  return new Promise((resolve, reject) => {
    if(entero >= 0){
        resolve(Math.pow(entero, 2));
    }
    else {
        reject("ERROR: Has pasado un entero negativo");
    }
  });
}
