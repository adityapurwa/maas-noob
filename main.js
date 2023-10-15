"use strict";

const PAIDOS = {
  diet: [
    "Gus, bebek slamet gus!",
    "Gus, diet gus",
    "Open BO bebek slamet!",
    "Ayo ngegym doel!",
    "Lhoh nakam maneh?",
  ],
  kawin: [
    "Pasang slambu terosss!!",
    "Mbak mawar melati, semua dipoligami!",
    "Pak fuda jodohnya di blitar",
    "Wayahe... wayahe... wayahe...!!!",
    "ODMK Orang Dalam Masalah Kesepian.",
  ],
  module: [
    "Gus, module gus.",
    "Pak fuad module piye pak?",
    "LHO RILUT KOK RESIGN!",
    "Pak fuad, zaun error!!!",
    "Module sopo seng ngerjani?",
  ],
  emje: [
    "GRESIK GAMBAR TEROSSSS",
    "Endas e kok miring pak?",
    "Kok warnane emas itu kuning?",
    "Mulehan...",
    "Seng tukang maido iku samenaide, kok aku teross!!!",
  ],
  fe: [
    "Geist, Zaun down",
    "REACT TEROSSSSSS",
    "Amanda: Kok ga bisa diclick ya mz buttonnya",
    "Standup him, ngegame thok!!!",
    "Fahim noob ngegame thok",
  ],
  reviewnesia: [
    "Mas Akbar, CIMB mateq",
    "Accenture minta platform diupdate ke versi 1.0",
    "Kubernetesnya kok netes?",
    "Sesurpris...!!!",
    "Udah beli aja mas, gaji 30 juta juga!!!",
  ],
  golang: [
    "Pak go jomblo ya?",
    "Therezia tanzil itu bukan bu meivi",
    "STIKI besok ujian pak",
    "Pak go kok gak pulang?",
    "Pak Go kapan nikah?",
  ],
  pes: [
    "Penalti ra usah",
    "Kayaah...",
    "Sudah siap kalah pak Reza?",
    "Pak Reza sudah gak bisa berkata-kata",
    "Fahim maen thok",
  ],
  bunul: [
    "Ayoo bunul pak fuda.",
    "Ndasku telu pak",
    "Bunul opo sate pronorogo gaes?",
    "Nakam ora nakam seng penting bunul",
    "Mending tuku bunul timbang tuku weduse.",
  ],
  mie: [
    "Mie fahmi aku suka makan emie...",
    "Fahmi bendino nakam mie",
    "Pak edi, mie ne dientekno Fahim",
    "Mie sedap is better than Indomie :noob:",
    "Esok awan sore mangan mie, ben koyok Fahmi.",
    "Senior Engineer kok mangan e pop mie!",
  ],
  ctlyst: [
    "Revamp terosss",
    "Pak fuda, ctylst piye pak?",
    "Gimana kabar bepejees gaes?",
    "Revamp kok nggae react noob",
    "Gimana pak fuad sebagai payment developer?",
  ],
};
const TUKANG_PAIDOS = [
  {
    username: "santosoide",
    value: "Samenaide",
  },
  {
    username: "neveraemje",
    value: "Emje",
  },
  {
    username: "rohmadsasmito",
    value: "Rohim",
  },
  {
    username: "rizkifuad7",
    value: "Cak Fuad",
  },
  {
    username: "nurcahyopujo",
    value: "Sam Pujo",
  },
  {
    username: "f_idriz",
    value: "Fahim",
  },
  {
    username: "dioxyde",
    value: "Dio",
  },
];
function getPaido(id) {
  if (!id) return "BOCIL NOOB!!!";
  const paidoan = PAIDOS[id];
  const funRandom = Math.floor(Math.random() * paidoan.length);
  return paidoan[funRandom];
}
function getTukangPaido() {
  const funRandom = Math.floor(Math.random() * TUKANG_PAIDOS.length);
  return TUKANG_PAIDOS[funRandom];
}

const tukangPaido = getTukangPaido();
const query = new URLSearchParams(window.location.search);
const foor = query.get("for");
const from = tukangPaido;
const quote = getPaido(foor);

document.querySelector("#content").innerHTML = quote;
document.querySelector("#tukang").innerHTML = from.value;
document.querySelector("#username").innerHTML = `@${from.username}`;
