let vitoria = 100;
let derrota = 80;
let saldo = vitoria - derrota;

function rank(vitoria, derrota) {
  let saldo = vitoria - derrota;

  if (saldo < 10) {
    return "Ferro";
  } else if (saldo > 10 && saldo <= 20) {
    return "bronze";
  } else if (saldo > 20 && saldo <= 50) {
    return "prata";
  } else if (saldo > 50 && saldo <= 80) {
    return "ouro";
  } else if (saldo > 80 && saldo <= 90) {
    return "diamante";
  } else if (saldo > 90 && saldo <= 100) {
    return "lendário";
  } else if (saldo > 100) {
    return "imortal";
  }
}

let nivel = rank(vitoria, derrota);
console.log(`O Herói tem um saldo de ${saldo} e está no nível de ${nivel}`);
