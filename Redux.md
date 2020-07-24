# Redux

Le job de Redux, c'est de nous fournir un store

## Store

Un objet avec des méthodes pour travailler avec un state. Il est composé de 3 méthodes pour interagir avec le state:

- getState -> obtenir une copie du state
- dispatch -> modifier le state avec des actions
- subscribe -> être informé d'un changement d'état du state

Pour fabriquer mon store, j'utilise la méthode `createStore` fournie par redux. Cette méthode attend un paramètre OBLIGATOIRE: un reducer.

## Reducer

Une fonction. Sa responsabilité est de nous dire à quoi doit ressembler le state. Lorsque redux executera notre reducer (et il le fera plusieurs fois) la fonction devra TOUT LE TEMPS renvoyer un state.

Elle doit renvoyer le state initial.

Pour chaque action qui aura lieu dans mon application, cette fonction devra renvoyer le nouvel état de mon state.
