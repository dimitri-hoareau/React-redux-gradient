import { connect } from 'react-redux';
import NbColors from '../components/NbColors';
/*
Props
- nbreColors: (number)
*/

// Mon composant attend de recevoir par les props
// possiblement 2 types de choses:
// Soit une / des donnée(s) qui viennent du state
// Soit une / des fonction(s) pour dispatcher des actions

// Je veux faire correspondre une propriété de mon state
// à un prop de mon composant
// dans le state: state.nbColors
// au prop: nombreColors
// mapStatetoProps

// Si je n'ai pas beson de relier des bouts de state aux props
// alors je dois donner null
// const mapStateToProps = null;

const mapStateToProps = (state) => ({
  nombreColors: state.nbColors,
});

// Si je veux faire correspondre une fonction qui dispatch une action
// a un prop de mon composant
// mapDispatchToProps
// Si jen'ai pas besoin de mapDispatchToProps, je dois dans ce cas
// donner "null"

const mapDispatchToProps = null;

const linkPropsToComponent = connect(mapStateToProps, mapDispatchToProps);

// Comment je dis à react-redux que les props que je viens de
// fabriquer je veux les donner à tel ou tel composant
// connect me return une fonction (que j'ai appelé "linkPropsToComponent")
// et cette fonction attend que je lui donne en paramètre
// le composant à qui donner les props

export default linkPropsToComponent(NbColors);

// export default connect(mapStateToProps, mapDispatchToProps)(NbColors);
