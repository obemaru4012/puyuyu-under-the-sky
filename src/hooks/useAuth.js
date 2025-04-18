import React from "react";

/**
 * 認証関係
 * @returns
 */
const useAuth = () => {
  // ユーザーID
  const [identifier, setIdentifier] = React.useState("");
  const changeIdentifier = ({ identifier }) => {
    setIdentifier(identifier);
  };
  // パスワード
  const [password, setPassword] = React.useState("");
  const changePassword = ({ password }) => {
    setPassword(password);
  };
  // アクセストークン
  const [accessJwt, setAccessJwt] = React.useState("");
  const changeAccessJwt = ({ accessJwt }) => {
    setAccessJwt(accessJwt);
  };

  return {
    identifier,
    changeIdentifier,
    password,
    changePassword,
    accessJwt,
    changeAccessJwt,
  };
};

export default useAuth;
