const modPudge = document.querySelector(".modal-pudge");
const modBristle = document.querySelector(".modal-bristle");
const modDk = document.querySelector(".modal-dk");
const modShaker = document.querySelector(".modal-shaker");
const modLc = document.querySelector(".modal-lc");
const modSlardar = document.querySelector(".modal-slardar");
const modTiny = document.querySelector(".modal-tiny");
const modZombie = document.querySelector(".modal-zombie");
const modAm = document.querySelector(".modal-am");
const modDrow = document.querySelector(".modal-drow");
const modJugger = document.querySelector(".modal-jugger");
const modMedusa = document.querySelector(".modal-medusa");
const modMorf = document.querySelector(".modal-morf");
const modNaga = document.querySelector(".modal-naga");
const modPa = document.querySelector(".modal-pa");
const modSlark = document.querySelector(".modal-slark");
const modWeaver = document.querySelector(".modal-weaver");
const modDp = document.querySelector(".modal-dp");
const modFurion = document.querySelector(".modal-furion");
const modDisruptor = document.querySelector(".modal-disruptor");
const modLion = document.querySelector(".modal-lion");
const modMuerta = document.querySelector(".modal-muerta");
const modWd = document.querySelector(".modal-wd");
const modDazzle = document.querySelector(".modal-dazzle");
const modLd = document.querySelector(".modal-ld");
const modVenga = document.querySelector(".modal-venga");

const telo = document.querySelector(".telo");

const modals = [
  {
    PudgeModal: modPudge,
  },
];

// Открытие модального окна
document.querySelector(".open-modal").addEventListener("click", () => {
  modPudge.classList.add("active");
  telo.classList.add("modal-owerlay"); // Добавляем класс к "telo"
});

// Закрытие модального окна
document.querySelector(".close-modal").addEventListener("click", () => {
  modPudge.classList.remove("active");
  telo.classList.remove("modal-owerlay"); // Удаляем класс из "telo"
});

// bristle
document.querySelector(".open-modal-bristle").addEventListener("click", () => {
  modBristle.classList.add("active");
  telo.classList.add("modal-owerlay"); // Добавляем класс к "telo"
});

// Закрытие модального окна
document.querySelector(".close-modal-bristle").addEventListener("click", () => {
  modBristle.classList.remove("active");
  telo.classList.remove("modal-owerlay"); // Удаляем класс из "telo"
});

// dk
document.querySelector(".open-modal-dk").addEventListener("click", () => {
  modDk.classList.add("active");
  telo.classList.add("modal-owerlay"); // Добавляем класс к "telo"
});

// Закрытие модального окна
document.querySelector(".close-modal-dk").addEventListener("click", () => {
  modDk.classList.remove("active");
  telo.classList.remove("modal-owerlay"); // Удаляем класс из "telo"
});

// shaker////
document.querySelector(".open-modal-shaker").addEventListener("click", () => {
  modShaker.classList.add("active");
  telo.classList.add("modal-owerlay"); // Добавляем класс к "telo"
});

// Закрытие модального окна
document.querySelector(".close-modal-shaker").addEventListener("click", () => {
  modShaker.classList.remove("active");
  telo.classList.remove("modal-owerlay"); // Удаляем класс из "telo"
});

// Lc////
document.querySelector(".open-modal-lc").addEventListener("click", () => {
  modLc.classList.add("active");
  telo.classList.add("modal-owerlay"); // Добавляем класс к "telo"
});

// Закрытие модального окна
document.querySelector(".close-modal-lc").addEventListener("click", () => {
  modLc.classList.remove("active");
  telo.classList.remove("modal-owerlay"); // Удаляем класс из "telo"
});

// slardar

document.querySelector(".open-modal-slardar").addEventListener("click", () => {
  modSlardar.classList.add("active");
  telo.classList.add("modal-owerlay"); // Добавляем класс к "telo"
});

// Закрытие модального окна
document.querySelector(".close-modal-slardar").addEventListener("click", () => {
  modSlardar.classList.remove("active");
  telo.classList.remove("modal-owerlay"); // Удаляем класс из "telo"
});
// tiny
document.querySelector(".open-modal-tiny").addEventListener("click", () => {
  modTiny.classList.add("active");
  telo.classList.add("modal-owerlay"); // Добавляем класс к "telo"
});

// Закрытие модального окна
document.querySelector(".close-modal-tiny").addEventListener("click", () => {
  modTiny.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// zombie
document.querySelector(".open-modal-zombie").addEventListener("click", () => {
  modZombie.classList.add("active");
  telo.classList.add("modal-owerlay"); // Добавляем класс к "telo"
});

// Закрытие модального окна
document.querySelector(".close-modal-zombie").addEventListener("click", () => {
  modZombie.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// am
document.querySelector(".open-modal-am").addEventListener("click", () => {
  modAm.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-am").addEventListener("click", () => {
  modAm.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// drow
document.querySelector(".open-modal-drow").addEventListener("click", () => {
  modDrow.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-drow").addEventListener("click", () => {
  modDrow.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
//jugger
document.querySelector(".open-modal-jugger").addEventListener("click", () => {
  modJugger.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-jugger").addEventListener("click", () => {
  modJugger.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// medusa
document.querySelector(".open-modal-medusa").addEventListener("click", () => {
  modMedusa.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-medusa").addEventListener("click", () => {
  modMedusa.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// morf
document.querySelector(".open-modal-morf").addEventListener("click", () => {
  modMorf.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-morf").addEventListener("click", () => {
  modMorf.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// naga
document.querySelector(".open-modal-naga").addEventListener("click", () => {
  modNaga.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-naga").addEventListener("click", () => {
  modNaga.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// pa
document.querySelector(".open-modal-pa").addEventListener("click", () => {
  modPa.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-pa").addEventListener("click", () => {
  modPa.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// slark
document.querySelector(".open-modal-slark").addEventListener("click", () => {
  modSlark.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-slark").addEventListener("click", () => {
  modSlark.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
//weaver
document.querySelector(".open-modal-weaver").addEventListener("click", () => {
  modWeaver.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-weaver").addEventListener("click", () => {
  modWeaver.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// dp
document.querySelector(".open-modal-dp").addEventListener("click", () => {
  modDp.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-dp").addEventListener("click", () => {
  modDp.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// furion
document.querySelector(".open-modal-furion").addEventListener("click", () => {
  modFurion.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-furion").addEventListener("click", () => {
  modFurion.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// disroptor
document
  .querySelector(".open-modal-disruptor")
  .addEventListener("click", () => {
    modDisruptor.classList.add("active");
    telo.classList.add("modal-owerlay");
  });

document
  .querySelector(".close-modal-disruptor")
  .addEventListener("click", () => {
    modDisruptor.classList.remove("active");
    telo.classList.remove("modal-owerlay");
  });

// lion
document.querySelector(".open-modal-lion").addEventListener("click", () => {
  modLion.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-lion").addEventListener("click", () => {
  modLion.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// muerta
document.querySelector(".open-modal-muerta").addEventListener("click", () => {
  modMuerta.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-muerta").addEventListener("click", () => {
  modMuerta.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// wd
document.querySelector(".open-modal-wd").addEventListener("click", () => {
  modWd.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-wd").addEventListener("click", () => {
  modWd.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// dazzle
document.querySelector(".open-modal-dazzle").addEventListener("click", () => {
  modDazzle.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-dazzle").addEventListener("click", () => {
  modDazzle.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// ld
document.querySelector(".open-modal-ld").addEventListener("click", () => {
  modLd.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-ld").addEventListener("click", () => {
  modLd.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
// venga
document.querySelector(".open-modal-venga").addEventListener("click", () => {
  modVenga.classList.add("active");
  telo.classList.add("modal-owerlay");
});

document.querySelector(".close-modal-venga").addEventListener("click", () => {
  modVenga.classList.remove("active");
  telo.classList.remove("modal-owerlay");
});
