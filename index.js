const boutonPierreJ1 = document.getElementById("pierreJ1");
const boutonFeuilleJ1 = document.getElementById("feuilleJ1");
const boutonCiseauxJ1 = document.getElementById("ciseauxJ1");

const boutonPierreJ2 = document.getElementById("pierreJ2");
const boutonFeuilleJ2 = document.getElementById("feuilleJ2");
const boutonCiseauxJ2 = document.getElementById("ciseauxJ2");

const resultDiv = document.getElementById("result");


boutonPierreJ1.addEventListener("click", () => {
    choix_joueur_1 = "Pierre";
});
boutonFeuilleJ1.addEventListener("click", () => {
    choix_joueur_1 = "Feuille";
});
boutonCiseauxJ1.addEventListener("click", () => {
    choix_joueur_1 = "Ciseaux";
});

boutonPierreJ2.addEventListener("click", () => {
    choix_joueur_2 = "Pierre";
    jouer();
});
boutonFeuilleJ2.addEventListener("click", () => {
    choix_joueur_2 = "Feuille";
    jouer();
});
boutonCiseauxJ2.addEventListener("click", () => {
    choix_joueur_2 = "Ciseaux";
    jouer();
});

var choix_joueur_1 = 0;
var choix_joueur_2 = 0;

function quigagne(joueur1, joueur2) {
    if (joueur1 === joueur2) {
        return "Égalité !";
    } else if (
        (joueur1 === "Pierre" && joueur2 === "Ciseaux") || (joueur1 === "Feuille" && joueur2 === "Pierre") || (joueur1 === "Ciseaux" && joueur2 === "Feuille")
    ) {
        return "Joueur 1 a gagné !";
    } else {
        return "Joueur 2 a gagné !";
    }
}

function jouer() {
    if (choix_joueur_1 && choix_joueur_2) {
        const resultat = quigagne(choix_joueur_1, choix_joueur_2);
        resultDiv.textContent = "Joueur 1 : " + choix_joueur_1 + " | Joueur 2 : " + choix_joueur_2 + " → " + resultat;
    }
}



