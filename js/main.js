// Recuperation éléments DOM

const tabTouches =  [ ... document.querySelectorAll('.bouton')]; // Select All elems de classe 'bouton'

const listeKeyCode = tabTouches.map(touche => touche.dataset.key ); //Recuprére les keycode de chaque touche 

const ecran = document.querySelector('#ecran');

document.addEventListener('keydown', (e) => {
    const valeurTouche = e.keyCode.toString(); // On cast en string pour faire match avec les valeurs dans le html
    calculer(valeurTouche);
} ); 

document.addEventListener('click', (e) => {
    const valeurClick = e.target.dataset.key; // On récupère l'elem html sur lequel on click puis extrait son keycode écris dans l'html
    calculer(valeurClick);
});

const calculer = (valeurParam) => {
    if( listeKeyCode.includes(valeurParam)){
        switch (valeurParam) {
            case '8' :
                ecran.textContent = ""; // On supprime le contenu d'écran quand on appuis sur la touche supprimer
                break;


            case '13' : 

                const calcul = eval(ecran.textContent); //Calcule automatiquement à partir du contenu
                ecran.textContent = calcul;
                break;
        
            default : // Par défault on concatène le nouveau char 
            const indexKeyCodeTab = listeKeyCode.indexOf(valeurParam); 
            const touche = tabTouches[indexKeyCodeTab];
            ecran.textContent = ecran.textContent + touche.innerHTML;
            }

    }
};

window.addEventListener('error', (e) => {
    alert('Erreur de saisie, veuillez vérifier votre syntaxe');
} );