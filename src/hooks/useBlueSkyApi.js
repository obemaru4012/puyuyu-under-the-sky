import axios from "axios";

/**
 * BlueSkyAPI
 * @returns
 */
const useBlueSkyApi = ({ auth, proFile, feed }) => {
  // 認証
  const getSession = async ({}) => {
    try {
      // default json web token
      let accessJwt = [];
      // vite開発環境
      if (import.meta.env.MODE == "development") {
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
        accessJwt = response["data"]["accessJwt"];
      }

      // electron本番環境
      if (import.meta.env.MODE == "production") {
        const response = await window.api.getSession();
        accessJwt = response["accessJwt"];
      }

      console.log(accessJwt);
      auth.changeAccessJwt({ accessJwt: accessJwt });
    } catch (error) {}
  };
  // プロファイル取得
  const getProfile = async ({}) => {
    try {
      // default profile
      let profile = {
        displayName: "",
        avatar: "",
        handle: "",
        description: "",
        followersCount: 0,
        followsCount: 0,
        postsCount: 0,
      };
      // vite開発環境
      if (import.meta.env.MODE == "development") {
        const response = await axios.get(
          "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile",
          {
            params: { actor: "puupuu-nasake.bsky.social" },
          }
        );

        profile = {
          displayName: response["data"]["displayName"],
          avatar: response["data"]["avatar"],
          handle: response["data"]["handle"],
          description: response["data"]["description"],
          followersCount: parseInt(response["data"]["followersCount"]),
          followsCount: parseInt(response["data"]["followsCount"]),
          postsCount: parseInt(response["data"]["postsCount"]),
        };
      }
      // electron本番環境
      if (import.meta.env.MODE == "production") {
        const response = await window.api.getProfile();
        profile = {
          displayName: response["displayName"],
          avatar: response["avatar"],
          handle: response["handle"],
          description: response["description"],
          followersCount: parseInt(response["followersCount"]),
          followsCount: parseInt(response["followsCount"]),
          postsCount: parseInt(response["postsCount"]),
        };
      }

      proFile.changeProfile({ ...profile });
    } catch (error) {
      console.log(error);
      proFile.changeProfile({ ...profile });
    }
  };
  // タイムライン取得取得
  const getTimeLine = async ({}) => {
    try {
      // default time line
      let timeLine = [];
      // vite開発環境
      if (import.meta.env.MODE == "development") {
        const response = await axios.get(
          "https://bsky.social/xrpc/app.bsky.feed.getTimeline",
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "localhost",
              Authorization: `Bearer `,
            },
          }
        );
        const feeds = response["data"]["feed"] ?? [];
        for (var i = 0; feeds.length > i; i++) {
          const feed = feeds[i].post;
          timeLine.push({
            avatar: feed.author.avatar,
            displayName: feed.author.displayName,
            handle: feed.author.handle,
            text: feed.record.text,
            createdAt: new Date(feed.record.createdAt).toLocaleString() ?? "",
          });
        }
      }

      // electron本番環境
      if (import.meta.env.MODE == "production") {
        timeLine = await window.api.getTimeline();
      }
      feed.changeTimeLine({ timeLine: timeLine });
    } catch (error) {
      feed.changeTimeLine({ timeLine: [] });
    }
  };

  return {
    getSession,
    getProfile,
    getTimeLine,
  };
};

export default useBlueSkyApi;
