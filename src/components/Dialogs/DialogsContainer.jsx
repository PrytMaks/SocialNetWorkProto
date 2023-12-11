import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import { compose } from "redux";


// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
        
//         let state = store.getState().dialogsPage;

//         let onNewMessageChange = (body) => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         };

//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         return (
//           <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}


//Вместо вызова HOC, и connect можно поместить все в Compose;

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,  
)(Dialogs);