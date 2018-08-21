# TodoList

## La base

- Au click du button "Ajouter" rajouter un li (en début de liste) avec le contenu de l'input et vider l'input
- A chaque "li" il faut rajouter 3 buttons
  - button "valided"
    > Color le li en vert
  - button "edit"
    > - Remplace ce button par un button confirme
    > - Remplace le texte du li par un input contenant ce texte
    > - Au clique du button confirme,remet le nouveau texte dans le li et fait disparaitre le input pour faire réapparaitre le texte du li
  - button "delete"
    > - Cache le li

## Le filtre

- Ajouter 3 boutons de filtres pour n'afficher que certains li suivant leur état (lorsqu'on clique sur un des boutons). Voilà les états :
  > - ToDo
  > - Done
  > - Deleted
- Ajouter un quatrième bouton (All) qui affichera tous les
  li quel que soit leur état.

## Datas

- Ajouter un fichier Json et récupérer les li en fonction des éléments que vous aurez entré dans le Json sous le format suivant :

```json
{
  0: {
    "text": "voici ma tache",
    "etat": "todo"
  }
}
```
