import React, { useState } from "react";
import Btn from "./btn";

export default function MetamaskLogin(props) {

  const isInstalled = typeof window.ethereum !== 'undefined';

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentAccount, setAccount] = useState( {} );

  async function isLogin() {
    if (! isInstalled ) {
      window.open(
        'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
        '_blank'
      );
    }

    const accounts = await getAccount();
    const account = accounts[0];
    if ( account ) {
      setLoggedIn(true);
      setAccount(account);
    }
  }
  
  async function getAccount() {
    return await ethereum.request({ method: 'eth_requestAccounts' });
  }
  
  return (
    <div style={{ textAlign: "center", marginBottom: '40px' }}>
    { ! isLoggedIn && (
      <Btn onClick={ isLogin } >{ isInstalled ? "Login with MetaMask" : "Install MetaMask" }</Btn>
    ) }

    { isLoggedIn && (
      <>
        <h2>Logged In!</h2>
        <h3>Current account: {currentAccount}</h3>
        <p style={{ textAlign: "center" }}>Temka pitushka</p>
      </>
    ) }
    </div>
  )
  
}