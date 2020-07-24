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

## Dispatch

Une méthode du store qui permet d'envoyer au reducer une action.

## Action

Un objet javascript qui sera utilisé par le reducer pour savoir comment modifier le state. Une action est TOUJOURS composée d'au moins une propriété: "type"

```javascript
{
  type: 'ALLUMER_LUMIERE'
}

{
  type: 'ETEINDRE_TV'
}

{
  type: 'CHANGER_COULEUR_LAMPE_SALON',
  couleur: '#f0f'
}

```
