import React from "react";

import { connect } from "react-redux";
import { selectUserInfo, regenerateToken } from "../../rdx/user";

class ResetToken extends React.Component {
  regenerateToken = () => {
    this.props.regenerateToken(this.props.token);
  };

  render() {
    return (
      <>
        <h1>Here you can reset your token</h1>
        <div>
          <textarea disabled>{this.props.token}</textarea>
        </div>
        <div>
          <button onClick={this.regenerateToken}>
            {this.props.token ? "Create token" : "Regenerate token"}
          </button>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({ token: selectUserInfo(state)?.token || "No token yet" }),
  {
    regenerateToken,
  }
)(ResetToken);
