import React from "react";

/**
 * プロフィール
 * @returns
 */
const useProfile = () => {
  // アバター画像
  const [avatar, setAvatar] = React.useState("");
  const changeAvatar = ({ avatar }) => {
    setAvatar(avatar);
  };
  const [displayName, setDisplayName] = React.useState("");
  const changeDisplayName = ({ displayName }) => {
    setDisplayName(displayName);
  };
  const [handle, setHandle] = React.useState("");
  const changeHandle = ({ handle }) => {
    setHandle(handle);
  };
  const [description, setDescription] = React.useState("");
  const changeDescription = ({ description }) => {
    setDescription(description);
  };
  const [followersCount, setFollowersCount] = React.useState(0);
  const changeFollowersCount = ({ followersCount }) => {
    setFollowersCount(followersCount);
  };
  const [followsCount, setFollowsCount] = React.useState(0);
  const changeFollowsCount = ({ followsCount }) => {
    setFollowsCount(followsCount);
  };
  const [postsCount, setPostsCount] = React.useState(0);
  const changePostsCount = ({ postsCount }) => {
    setPostsCount(postsCount);
  };

  return {
    avatar,
    changeAvatar,
    displayName,
    changeDisplayName,
    handle,
    changeHandle,
    description,
    changeDescription,
    followersCount,
    changeFollowersCount,
    followsCount,
    changeFollowsCount,
    postsCount,
    changePostsCount,
  };
};

export default useProfile;
