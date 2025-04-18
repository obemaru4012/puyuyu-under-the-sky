import React from "react";
import ReactDOM from "react-dom";

// MUI5
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

// icons
import AddIcon from "@mui/icons-material/Add";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// hoooks
import useAuth from "@puts/hooks/useAuth";
import useProfile from "@puts/hooks/useProfile";
import useFeed from "@puts/hooks/useFeed";
import useBlueSkyApi from "@puts/hooks/useBlueSkyApi";

// theme
import CustomTheme from "@puts/themes/CustomTheme";
import { CountertopsRounded } from "@mui/icons-material";

// contents

const Index = () => {
  const propsContainer = document.getElementById("index");
  const props = Object.assign({}, propsContainer.dataset);

  // hooks
  const auth = useAuth();
  const proFile = useProfile();
  const feed = useFeed();
  const blueSkyApi = useBlueSkyApi({
    props: props,
    auth: auth,
    proFile: proFile,
    feed: feed,
  });

  // テーマ読み込み
  const customTheme = CustomTheme();

  // 画面幅が "lg"（1280px以上）なら true、それ未満なら false
  const isLargeUp = useMediaQuery(customTheme.breakpoints.up("lg"));
  // 画面幅が "md"（800px以上）なら true、それ未満なら false
  const isMediumUp = useMediaQuery(customTheme.breakpoints.up("md"));
  // 画面幅が "sm"（800px未満）なら true
  const isSmallUp = useMediaQuery(customTheme.breakpoints.up("sm"));
  // 画面幅が "xs"（375px未満）なら true
  const isXtraSmallUp = useMediaQuery(customTheme.breakpoints.up("xs"));

  // Timelines Index
  const [timelineSelectedIndex, setTimelineSelectedIndex] = React.useState(1);
  const changeTimelineSelectedIndex = (event, index) => {
    setTimelineSelectedIndex(index);
  };

  // Timelines open
  const [timelineOpen, setTimelineOpen] = React.useState(true);
  const changeTimelineOpen = () => {
    setTimelineOpen(!timelineOpen);
  };

  // Account Index
  const [accountSelectedIndex, setAccountSelectedIndex] = React.useState(1);
  const changeAccountSelectedIndex = (event, index) => {
    setAccountSelectedIndex(index);
  };

  // Accounts open
  const [accountOpen, setAccountOpen] = React.useState(true);
  const changeAccountOpen = () => {
    setAccountOpen(!accountOpen);
  };

  // Tab
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters={true}>
          <Box sx={{ padding: 4, backgroundColor: "#1F2326", height: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Stack direction={"column"} spacing={2}>
                  <Stack direction={"column"}>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      {proFile.avatar != "" ? (
                        <Avatar variant="circle" src={proFile.avatar}></Avatar>
                      ) : (
                        <Avatar variant="circle">
                          <PersonIcon />
                        </Avatar>
                      )}

                      <Stack direction={"column"}>
                        <Typography variant={"h6"} color={"whitesmoke"}>
                          {proFile.displayName != "" ? proFile.displayName : ""}
                        </Typography>
                        <Typography variant={"caption"} color={"whitesmoke"}>
                          {`@${proFile.handle}`}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>

                  <Stack direction={"column"}>
                    <Box
                      sx={{
                        borderRadius: timelineOpen
                          ? "8px 8px 0px 0px"
                          : "8px 8px 8px 8px",
                        padding: 2,
                        backgroundColor: "#333A40",
                      }}
                    >
                      <ListItemButton onClick={changeTimelineOpen}>
                        <ListItemText
                          primary={
                            <Typography variant={"h6"} color={"whitesmoke"}>
                              Timelines
                            </Typography>
                          }
                        ></ListItemText>
                        {timelineOpen ? (
                          <ExpandLess sx={{ color: "whitesmoke" }} />
                        ) : (
                          <ExpandMore sx={{ color: "whitesmoke" }} />
                        )}
                      </ListItemButton>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "0px 0px 8px 8px",
                      }}
                    >
                      <Collapse in={timelineOpen} timeout="auto" unmountOnExit>
                        <List
                          sx={{
                            borderRadius: "0px 0px 8px 8px",
                            width: "100%",

                            backgroundColor: "#383F45",
                          }}
                        >
                          <ListItemButton
                            selected={timelineSelectedIndex === 0}
                            onClick={(event) =>
                              changeTimelineSelectedIndex(event, 0)
                            }
                          >
                            <ListItemAvatar>
                              <Avatar
                                variant="rounded"
                                sx={{ bgcolor: "transparent" }}
                              >
                                <GroupIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="h6">
                                  {"Follows & Followers"}
                                </Typography>
                              }
                              secondary={
                                <Typography variant="body1">
                                  {`${proFile.followsCount} & ${proFile.followersCount}`}
                                </Typography>
                              }
                              sx={{
                                color: "whitesmoke",
                              }}
                            />
                          </ListItemButton>
                          <ListItemButton
                            selected={timelineSelectedIndex === 1}
                            onClick={blueSkyApi.getSession}
                          >
                            <ListItemAvatar>
                              <Avatar
                                variant="rounded"
                                sx={{ bgcolor: "transparent" }}
                              >
                                <HistoryIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="h6">
                                  Get Session
                                </Typography>
                              }
                              sx={{
                                color: "whitesmoke",
                              }}
                            />
                          </ListItemButton>
                          <ListItemButton
                            selected={timelineSelectedIndex === 2}
                            onClick={blueSkyApi.getTimeLine}
                          >
                            <ListItemAvatar>
                              <Avatar
                                variant="rounded"
                                sx={{ bgcolor: "transparent" }}
                              >
                                <HistoryIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="h6">
                                  Get Timeline
                                </Typography>
                              }
                              sx={{
                                color: "whitesmoke",
                              }}
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </Box>
                  </Stack>
                  <Stack direction={"column"}>
                    <Box
                      sx={{
                        borderRadius: accountOpen
                          ? "8px 8px 0px 0px"
                          : "8px 8px 8px 8px",
                        padding: 2,
                        backgroundColor: "#333A40",
                      }}
                    >
                      <ListItemButton onClick={changeAccountOpen}>
                        <ListItemText
                          primary={
                            <Typography variant={"h6"} color={"whitesmoke"}>
                              Accounts
                            </Typography>
                          }
                        ></ListItemText>
                        {accountOpen ? (
                          <ExpandLess sx={{ color: "whitesmoke" }} />
                        ) : (
                          <ExpandMore sx={{ color: "whitesmoke" }} />
                        )}
                      </ListItemButton>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "0px 0px 8px 8px",
                      }}
                    >
                      <Collapse in={accountOpen} timeout="auto" unmountOnExit>
                        <List
                          sx={{
                            borderRadius: "0px 0px 8px 8px",
                            width: "100%",
                            backgroundColor: "#383F45",
                          }}
                        >
                          <ListItemButton
                            selected={accountSelectedIndex === 0}
                            onClick={(event) =>
                              changeAccountSelectedIndex(event, 0)
                            }
                          >
                            <ListItemAvatar>
                              <Avatar variant="circle">
                                <PersonIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="body1">
                                  Bigなさけ
                                </Typography>
                              }
                              sx={{
                                color: "whitesmoke",
                              }}
                            />
                          </ListItemButton>
                          <ListItemButton
                            selected={accountSelectedIndex === 1}
                            onClick={(event) =>
                              changeAccountSelectedIndex(event, 1)
                            }
                          >
                            <ListItemAvatar>
                              <Avatar variant="circle">
                                <PersonIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography variant="body1">
                                  Longゆめちゃん
                                </Typography>
                              }
                              sx={{
                                color: "whitesmoke",
                              }}
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9}>
                <Box
                  sx={{
                    backgroundColor: "#333A40",
                    borderRadius: 2,
                    padding: 2,
                    paddingTop: 1,
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{ backgroundColor: "#333A40" }}
                  >
                    <Tab label="@all" id={"all"} sx={{ color: "whitesmoke" }} />
                    <Tab
                      label="@mention"
                      id={"mention"}
                      sx={{ color: "whitesmoke" }}
                    />
                  </Tabs>

                  <Stack spacing={2} sx={{ marginTop: 2 }}>
                    {feed.timeLine.map((timeLine) => {
                      return (
                        <React.Fragment>
                          <Stack direction={"column"} spacing={1}>
                            <Stack
                              direction={"row"}
                              spacing={2}
                              alignItems={"center"}
                            >
                              {timeLine.avatar != "" ? (
                                <Avatar
                                  variant="circle"
                                  src={timeLine.avatar}
                                ></Avatar>
                              ) : (
                                <Avatar variant="circle">
                                  <PersonIcon />
                                </Avatar>
                              )}

                              <Stack direction={"column"}>
                                <Typography variant={"h6"} color={"whitesmoke"}>
                                  {timeLine.displayName}
                                </Typography>
                                <Stack direction={"row"} spacing={1}>
                                  <Typography
                                    variant={"caption"}
                                    color={"whitesmoke"}
                                  >
                                    {`@${timeLine.handle}`}
                                  </Typography>
                                  <Typography
                                    variant={"caption"}
                                    color={"whitesmoke"}
                                  >
                                    {timeLine.createdAt}
                                  </Typography>
                                </Stack>
                              </Stack>
                            </Stack>
                            <Stack direction={"column"} spacing={0.5}>
                              <Typography
                                variant={"body2"}
                                color={"whitesmoke"}
                                sx={{ whiteSpace: "pre-line" }}
                              >
                                {timeLine.text}
                              </Typography>
                            </Stack>
                          </Stack>

                          <Divider variant="middle" />
                        </React.Fragment>
                      );
                    })}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
            <Fab
              color="primary"
              size={"large"}
              sx={{
                position: "fixed",
                bottom: "4%",
                right: "4%",
                zIndex: 9999,
              }}
              onClick={blueSkyApi.getProfile}
            >
              <AddIcon />
            </Fab>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

if (document.getElementById("index")) {
  const root = ReactDOM.createRoot(document.getElementById("index"));
  root.render(<Index />);
}
