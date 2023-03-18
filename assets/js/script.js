import { initGame } from "./module/start.js";
import { insertThemas } from "./module/thema.js";
import {initCheck} from './module/checkAlternatives.js'
import initHelp from './module/help-modal.js'

initGame();
insertThemas()
initCheck();
initHelp();


