import axios from "axios";

/**
 * BlueSkyAPI
 * @returns
 */
const useBlueSkyApi = ({ auth, proFile, feed }) => {
  // 認証
  const getSession = async ({
    identifier = "puupuu-nasake.bsky.social",
    password = "",
  }) => {
    try {
      const response = await axios.post(
        "https://bsky.social/xrpc/com.atproto.server.createSession",
        {
          identifier: identifier,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "localhost",
          },
        }
      );
      const accessJwt = response["data"]["accessJwt"];
      auth.changeAccessJwt({ accessJwt: accessJwt });
      console.log(accessJwt);
    } catch (error) {}
  };

  // プロファイル取得
  const getProfile = async ({}) => {
    try {
      // const response = await axios.get(
      //   "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile",
      //   {
      //     params: { actor: actor },
      //   }
      // );
      const response = await window.api.getProfile();
      const displayName = response["displayName"];
      const avatar = response["avatar"];
      const handle = response["handle"];
      const description = response["description"];
      const followersCount = parseInt(response["followersCount"]);
      const followsCount = parseInt(response["followsCount"]);
      const postsCount = parseInt(response["postsCount"]);

      proFile.changeAvatar({ avatar: avatar });
      proFile.changeDisplayName({ displayName: displayName });
      proFile.changeHandle({ handle: handle });
      proFile.changeDescription({ description: description });
      proFile.changeFollowersCount({ followersCount: followersCount });
      proFile.changeFollowsCount({ followsCount: followsCount });
      proFile.changePostsCount({ postsCount: postsCount });
    } catch (error) {}
  };

  // タイムライン取得取得
  const getTimeLine = async ({}) => {
    try {
      // const jwt =
      //   "";
      // const response = await axios.get(
      //   "https://bsky.social/xrpc/app.bsky.feed.getTimeline",
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Origin": "localhost",
      //       Authorization: `Bearer ${jwt}`,
      //     },
      //   }
      // );
      const response = await window.api.getTimeline();
      // const feeds = response["data"]["feed"] ?? [];
      // const timeLine = [];
      // for (var i = 0; feeds.length > i; i++) {
      //   const feed = feeds[i].post;
      //
      //   timeLine.push({
      //     avatar: feed.author.avatar,
      //     displayName: feed.author.displayName,
      //     handle: feed.author.handle,
      //     text: feed.record.text,
      //     createdAt: new Date(feed.record.createdAt).toLocaleString() ?? "",
      //   });
      // }
      feed.changeTimeLine({ timeLine: response });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getSession,
    getProfile,
    getTimeLine,
  };
};

export default useBlueSkyApi;
