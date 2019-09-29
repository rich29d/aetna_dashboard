import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleNotification } from "../actions";

const notificate = (prop) => {
  console.log(prop)
  /*notification.show = true;    
  toggleNotification(this.props.notification);*/
};

const mapStateToProps = store => ({
  notification: store.rootReducer.notification
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleNotification }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(notificate);
