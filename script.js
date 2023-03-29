import { tablazatbanMegjelenit } from "./admin.js";
import { OBJEKTUMLISTA, kulcsLista } from "./adatok.js";

const tablazat = document.querySelectorAll(".tablazat");
tablazatbanMegjelenit(OBJEKTUMLISTA, tablazat, kulcsLista)