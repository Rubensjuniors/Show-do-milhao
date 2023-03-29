

import { initGame } from "./module/start.js";
import { insertThemas } from "./module/thema.js";
import {initCheck} from './module/checkAlternatives.js'


initGame();
insertThemas()
initCheck();


