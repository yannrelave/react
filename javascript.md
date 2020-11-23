# TP JavaScript

- Copier le [fichier d'exercices](../assets/javascript.js) et le [fichier de tests](../assets/javascript.test.js) dans votre répertoire git.

- Remplir le fichier d'exercices.

- Les [tests automatisés](../assets/javascript.test.js) doivent passer en lançant la commande :

```js
npm test javascript.test.js
```

## Questions sur les tests 
Répondre aux questions en modifiant directement ce fichier.

**1. A quoi correspond la première ligne ? Connaissez-vous (ou sinon cherchez sur Internet !) une autre manière d'importer des dépendances.**

La première ligne permet de récupérer les dépendances, envoyées par le fichier javascript.js, dans des variables pour le fichier javascript.js.
Il y a une autre manière d'importer les dépendances, c'est d'utiliser import : 
```js
import javascript.js;
```

**2. Expliquez le rôle de la fonction `expect`.**

Il permet de faire tout type de vérification sur les composants de notre code.

**3. A quoi sert `toEqual` ? Trouvez 5 autres fonctions similaires.**

Il permet de vérifier l'égalité entre deux variables. Mais nous pouvons aussi utiliser aussi :
- ```if(val1 === val2){}```
- ```.toMatch()```
- ```.toStrictEqual()```
- ```.toContainEqual()```
- ```.toMatchObject()```

**4. Trouver le rôle des fonctions `beforeEach` et `afterEach`. En déduire le rôle de la fonction `describe`.**

`beforeEach` permet de faire une action avant chaque appel de la fonction. `afterEach` permet de faire une action après chaque appel de la fonction.
`describe` permet de décrire les tests.

**5. La fonction `console.log` est "mocké". Expliquez ce que cela signifie et comment peut-on utiliser des mocks ?**

Cela permet de voir ce que la fonction va faire avant d'être exécutée. 

**6. Imaginez d'autres cas ou il s'avère utile de mocker une fonction.**

Les "mocks" sont utiles pour vérifier la bonne utilisation des dépendances externes, ainsi que s'assurer que la fonction peut gérer différentes réponses des dépendances externes.
