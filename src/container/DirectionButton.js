import { connect } from 'react-redux';
import DirectionButton from '../components/DirectionButton';
import { toDirection } from '../store/actions';
// est-ce que mon composant a besoin de consulter le state ?
// est-ce que mon composant doit dispatcher une action ?

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, ownProps) => ({
  toDirection: () => {
    // Je dispatch une action qui dit de combien de degrés
    // doit changer mon state
    const action = toDirection(`${ownProps.direction}deg`);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectionButton);
