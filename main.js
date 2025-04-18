const { app, BrowserWindow, ipcMain } = require("electron");
const axios = require("axios");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Puts!",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // ← これ超重要！
    },
  });

  mainWindow.loadFile("index.html");
};

ipcMain.handle("get-session", async (event) => {
  try {
    const response = await axios.post(
      "https://bsky.social/xrpc/com.atproto.server.createSession",
      {
        identifier: "puupuu-nasake.bsky.social",
        password: "",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "localhost",
        },
      }
    );
    return response;
  } catch (error) {}
});

ipcMain.handle("get-profile", async (event) => {
  try {
    const response = await axios.get(
      "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile",
      {
        params: { actor: "puupuu-nasake.bsky.social" },
      }
    );
    const displayName = response["data"]["displayName"];
    const avatar = response["data"]["avatar"];
    const handle = response["data"]["handle"];
    const description = response["data"]["description"];
    const followersCount = parseInt(response["data"]["followersCount"]);
    const followsCount = parseInt(response["data"]["followsCount"]);
    const postsCount = parseInt(response["data"]["postsCount"]);

    return {
      displayName: displayName,
      avatar: avatar,
      handle: handle,
      description: description,
      followersCount: followersCount,
      followsCount: followsCount,
      postsCount: postsCount,
    };
  } catch (err) {
    return { error: err.toString() };
  }
});

ipcMain.handle("get-timeline", async (event) => {
  try {
    console.log("called get-timeline");
    const response = await axios.get(
      "https://bsky.social/xrpc/app.bsky.feed.getTimeline",
      {
        headers: {
          Authorization: `Bearer `,
        },
      }
    );
    const feeds = response["data"]["feed"] ?? [];
    const timeLine = [];
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
    return timeLine;
  } catch (err) {
    return { error: err.toString() };
  }
});

app.once("ready", () => {
  createWindow();
});

app.once("window-all-closed", () => app.quit());
