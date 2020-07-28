import { createStore } from 'redux';
import reducer from './reducer';
// Pour créer mon store, je dois lui donner une
// fonction. Cette fonction servira à dire à redux
// à quoi doit ressembler le state. Une fonction dont le job
// est de décrire l'état du state (initial ou après une action)
// est appelé un "reducer"
const store = createStore(reducer);

export default store;
