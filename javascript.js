const anagrammes = (stringA, stringB) => {
  /**
   * stringA est égale à stringB si et seulement s'ils partagent les mêmes
   * caractères alphabétiques dans la même quantité.
   * La case n'est pas pris en compte
   *
   * Exemples :
   *
   * anagrams('rail safety', 'fairy tales') === true
   * anagrams('RAIL! SAFETY!', 'fairy tales') === true
   * anagrams('Hi there', 'Bye there') === false
   */
   
   //Instanciation des tableaux pour contenir les lettres des mots
	let tab1 = [];
	let tab2 = [];
	
	//Ecriture en minuscule des mots
	stringA = stringA.toLowerCase();
	stringB = stringB.toLowerCase();
	
	//Supprime les espaces
	stringA = stringA.replace(/ /g,"");
	stringB = stringB.replace(/ /g, "");
	
	//supprime les !
	stringA = stringA.replace(/!/g,"");
	stringB = stringB.replace(/!/g, "");
	
	//Sépare les lettres des mots et affectation d'une cellule du tableau à une lettre
	tab1 = stringA.split("");
	tab2 = stringB.split("");
	
	//Une fois les lettres ordonnées par ordre alphabétique dans les tableaux, nous vérifions s'il sont identiques
	if(JSON.stringify(tab1.sort()) === JSON.stringify(tab2.sort())){
		console.log("Les mots sont des anagrammes");
		return true;
	}
	else {
		console.log("Les mots ne sont pas des anagrammes")
		return false;
	}
};


class Stack {
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */ 
	//Constructeur de la classe Slack
	constructor(){
		this.tab = [];
	}
	
	//Ajout du nombre à la fin du tableau
	push(nb){
		this.tab.push(nb);
		console.log(this.tab);
	}
	
	//Suppression du dernier élément
	pop(){
		let last = this.tab[this.tab.length - 1];
		this.tab.pop();
		console.log("L'élément supprimé est : " + last);
		return last;
	}
	
	//Affichage du premier élément
	peek(){
		let first = this.tab[0];
		console.log("Le premier élément " + first)
		return first;
	}
};


const fizzBuzz = (n) => {
/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */
	//Pour chaque nombre allant de 1 au nombre envoyé
	for(let i = 1; i<= n; i++){
		let res = i;
		//Si le modulo du nombre avec 3 et avec 5 est égal à 0
		if((res%3) === 0 && (res%5) === 0){
			res = ("fizzbuzz");
		}
		//Si le modulo du nombre avec 3 est égal à 0
		else if((res%3) === 0){
			res = ("fizz");
		}
		//Si le modulo du nombre avec 5 est égal à 0
		else if((res%5) === 0){
			res = ("buzz");
		}
		console.log(res);
	}
};

const spirale = (n) => {
/**
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */
 let monTab = [];
  for (let i = 1; i <= n; i++) {
    let tabTmp = [];
    for (let j = 1; j <= n; j++) {
      tabTmp.push(j);
    }
    monTab.push(tabTmp);
  }
  return monTab;
};


const puissance4 = (grid) => {
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */
	let colonnes = grid[0].length;
	let lignes = grid.length;
	console.log(grid[0][4]);
	
	for(let i = 0; i< lignes; i++){
		for(let j = 0; j < colonnes; j++){
			
		}
	}
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}

