let catchphrase = document.getElementById('catchphrase');
let intro = document.getElementById('intro');
let aboutme = document.getElementById('aboutme');
let pastexperiences = document.getElementById('pastexperiences');
let qualification = document.getElementById('qualification');
let skillsGET = document.getElementById('skillsGET');
let hobby = document.getElementById('hobby');


let experiencetitle = document.getElementById('experiencetitle');
let webdevjunior = document.getElementById('webdevjunior');
let renaultexperience = document.getElementById('renaultexperience');
let renaultdate = document.getElementById('renaultdate');
let qualificationGET = document.getElementById('qualificationGET');


let firstqualificationtitle = document.getElementById('firstqualificationtitle');
let firstplaceGET = document.getElementById('firstplaceGET');
let firstqualification = document.getElementById('firstqualification');
let firsttimespan = document.getElementById('firsttimespan');

let secondqualificationtitle = document.getElementById('secondqualificationtitle');
let secondplaceGET = document.getElementById('secondplaceGET');
let secondqualification = document.getElementById('secondqualification');
let secondtimespan = document.getElementById('secondtimespan');

let skilltitle = document.getElementById('skilltitle');
let knowledge = document.getElementById('knowledge');
let workflowtitle = document.getElementById('workflowtitle');
let firstflow = document.getElementById('firstflow');
let secondflow = document.getElementById('secondflow');
let thirdflow = document.getElementById('thirdflow');
let fourthflow = document.getElementById('fourthflow');

let interesttitle = document.getElementById('interesttitle');
let firstinterest = document.getElementById('firstinterest');
let secondinterest = document.getElementById('secondinterest');

function swapToEnglish(){
    catchphrase.innerHTML = 'Lost deep in Normandy.';
    intro.innerHTML = "I am good at copying other people's site. I am able to copy in most existing languages."
    aboutme.innerHTML = 'About me';
    pastexperiences.innerHTML = 'Previous experiences';
    qualification.innerHTML = 'Degrees';
    skillsGET.innerHTML = 'Skills';
    hobby.innerHTML = 'Interests';

    experiencetitle.innerHTML = 'Previous experiences';
    webdevjunior.innerHTML = 'Junior web developer';
    renaultexperience.innerHTML = 'I had the opportunity to integrate the FAST-IT team to expand my knowledge with Angular and Symfony. For one year, I followed daily agile meetings and created numerous projects by myself for Renault France and factories abroad, most notably Cordoba.' ;
    renaultdate.innerHTML = 'October 2020 - October 2021';

    qualificationGET.innerHTML = 'Degrees';
    firstqualificationtitle.innerHTML = 'Professional title "Web and mobile web developer" - RNCP 31114 BAC+2, Level 5';
    firstplaceGET.innerHTML = 'La Manu - Le Havre';
    firstqualification.innerHTML = 'Web development degree corresponding to a two-year course made in 6 months.';
    firsttimespan.innerHTML = '23th March 2020 - 23th September 2020';

    secondqualificationtitle.innerHTML = "LLCER - English Bachelor's degree with Japanese studies";
    secondplaceGET.innerHTML = 'University of Le Havre';
    secondqualification.innerHTML = 'Studies about the english language and the anglo-saxon culture. Also followed japanese classes for three years.';
    secondtimespan.innerHTML = 'September 2016 - June 2019';

    skilltitle.innerHTML = 'Skills';
    knowledge.innerHTML = 'Languages and tools used';
    workflowtitle.innerHTML = 'Workflow :';
    firstflow.innerHTML = 'Priority given to responsive design';
    secondflow.innerHTML = 'Debugging and cross-server testing';
    thirdflow.innerHTML = 'Possibilities to use AGILE methods';
    fourthflow.innerHTML = 'Greatly integrates any teams';

    interesttitle.innerHTML = 'Interests';
    firstinterest.innerHTML = 'Outside my love for web development, what I love the most is continuously learning new things. The human capacity to always expand their knowledge is fascinating to me';
    secondinterest.innerHTML = 'Otherwise, I am particularly fond of music, coffe and video games';
    
}

function swapToFrench(){
    console.log('connect??')
    catchphrase.innerHTML = 'Perdu au fin fond de la Normandie.';
    intro.innerHTML = "Je suis tr??s fort pour copier les sites des autres. Je serais capable de copier dans toute langues disponibles."
    
    aboutme.innerHTML = 'A propos de moi';
    pastexperiences.innerHTML = 'Exp??rience';
    qualification.innerHTML = 'Dipl??mes';
    skillsGET.innerHTML = 'Comp??tences';
    hobby.innerHTML = 'Inter??ts';

    experiencetitle.innerHTML = 'Experience';
    webdevjunior.innerHTML = 'Junior en d??veloppement web';
    renaultexperience.innerHTML = "J'ai eu l'occasion d'int??grer l'??quipe FAST-IT de Renault et de compl??ter mes connaissances de d??veloppeur avec de l'angular et du symfony. Pendant un an, j'ai suivi quotidiennement les m??l??es matinales et ait men?? plusieurs projets seul pour Renault France ou d'autres usines externes (Cordoba)";
    renaultdate.innerHTML = 'Octobre 2020 - Octobre 2021';

    qualificationGET.innerHTML = 'Dipl??mes';
    firstqualificationtitle.innerHTML = 'Titre Professionnel ?? D??veloppeur web et web mobile ?? RNCP 31114 BAC+2, Niveau 5';
    firstplaceGET.innerHTML = 'La Manu - Le Havre';
    firstqualification.innerHTML = 'D??veloppement web';
    firsttimespan.innerHTML = '23 Mars 2020 - 23 Septembre 2020';

    secondqualificationtitle.innerHTML = 'LLCER - Licence Anglais - Option Japonais';
    secondplaceGET.innerHTML = 'Universit?? du Havre';
    secondqualification.innerHTML = "Apprentissage de l'anglais avanc?? et de la culture anglosaxonne";
    secondtimespan.innerHTML = 'Septembre 2016 - Juin 2019';

    skilltitle.innerHTML = 'Comp??tences';
    knowledge.innerHTML = 'Langages et outils utilis??s';
    workflowtitle.innerHTML = 'Pratiques de travail : ';
    firstflow.innerHTML = 'Priorit?? au responsive design';
    secondflow.innerHTML = 'Test inter-navigateur & debug';
    thirdflow.innerHTML = "Capable d'utiliser les m??thodes agiles";
    fourthflow.innerHTML = "S'int??gre parfaitement aux ??quipes";

    interesttitle.innerHTML = 'Inter??ts';
    firstinterest.innerHTML = "Autre que mon attrait particulier pour le d??veloppement web, ce que j'aime par dessus tout est apprendre. La capacit?? de l'humain d'??tendre en permanence ses connaissances est fascinante pour moi";
    secondinterest.innerHTML = "Au del?? de cela, j'appr??cie particuli??rement la musique, le caf?? et les jeu vid??os";
}
