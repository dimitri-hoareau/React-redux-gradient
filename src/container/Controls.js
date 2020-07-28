import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { randomHexColor } from '../utils';
import { randFirst, randLast } from '../store/actions';
// Mon composant Controls attend:
// [ ] - des choses qui viennent du state
// [x] - des fonctions pour dispatcher une action

// Si pas besoin de mapState -> null
// Si pas besoin de mapDisptatch -> null
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  randFirst: () => {
    const color = randomHexColor();
    const action = randFirst(color);
    dispatch(action);
    // dispatch(randFirst(randomHexColor()))
  },
  randLast: () => {
    dispatch(randLast(randomHexColor()));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
