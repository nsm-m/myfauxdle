import "./scss/styles.scss";

import {randomWord} from "./jsmodules/wordGenerator.js";
import { dictionaryCheck}  from "./jsmodules/dictionary"; 
import { isWordGuessed } from "./jsmodules/wordCheck";
randomWord();
dictionaryCheck();
isWordGuessed();
// $(document).ready(function () {
//   
// });
