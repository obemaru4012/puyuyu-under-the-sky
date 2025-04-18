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
  // プロフィール一括更新
  const changeProfile = ({
    avatar: avatar,
    displayName: displayName,
    handle: handle,
    description: description,
    followersCount: followersCount,
    followsCount: followsCount,
    postsCount: postsCount,
  }) => {
    changeAvatar({ avatar: avatar });
    changeDisplayName({ displayName: displayName });
    changeHandle({ handle: handle });
    changeDescription({ description: description });
    changeFollowersCount({ followersCount: followersCount });
    changeFollowsCount({ followsCount: followsCount });
    changePostsCount({ postsCount: postsCount });
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
    changeProfile,
  };
};

export default useProfile;
