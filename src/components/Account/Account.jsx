import React from "react";
import "./Account.scss";

const Account = (props) => {
  const { accountTitle } = props;
  const { accountAmount } = props;
  const { accountBalance } = props;
  return (
    <div className="account">
      <div className="account-wrapper">
        <h3 className="account-title">{accountTitle}</h3>
        <p className="account-amount">{accountAmount}</p>
        <p className="account-balance">{accountBalance}</p>
      </div>
      <button className="account-cta">View transactions</button>
    </div>
  );
};

export default Account;
