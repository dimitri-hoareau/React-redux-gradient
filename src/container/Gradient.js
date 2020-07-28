import { connect } from 'react-redux';
import Gradient from '../components/Gradient';

const mapStateToProps = (state) => ({
  firstColor: state.firstColor,
  lastColor: state.lastColor,
  direction: state.direction,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Gradient);
