import "regenerator-runtime";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

import "./script/components/jumbo-tron.js";
import "./script/components/list-users.js";
import "./script/components/modal-detail.js";

import main from "./script/view/main";

document.addEventListener("DOMContentLoaded", main);