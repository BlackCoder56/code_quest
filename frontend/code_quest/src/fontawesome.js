// src/fontawesome.js

import { library } from '@fortawesome/fontawesome-svg-core';
import {  faTwitter, faGithub, faDiscord, faPython, faFigma, faJava, faVuejs, faYoutube, faAws, faReact,  faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTwitter, faGithub, faDiscord, faPython, faJava, faFigma, faAws, faReact, faVuejs, faYoutube, faLinkedin );

export default FontAwesomeIcon;
