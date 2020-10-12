import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions';

function GoogleAuth({ signOut, isSignedIn }) {
  const onSignIn = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return (
        <div id="gSignInWrapper" onClick={() => onSignIn()}>
          <div id="customBtn" class="customGPlusSignIn">
            <i className="fa fa-google"></i>
            <span class="buttonText">Google</span>
          </div>
        </div>
      );
    } else if (isSignedIn) {
      return;
    } else {
      return (
        <div id="gSignInWrapper" onClick={() => onSignIn()}>
          <div id="customBtn" class="customGPlusSignIn">
            <i className="fa fa-google"></i>
            <span class="buttonText">Google</span>
          </div>
        </div>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signOut })(GoogleAuth);
