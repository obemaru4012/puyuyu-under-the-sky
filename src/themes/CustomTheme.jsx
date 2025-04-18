// MUI5
import { createTheme } from "@mui/material/styles";

/**
 * Puts!用のテーマを生成
 *
 * @param {*} param0
 * @returns themeCustom
 */
const CustomTheme = () => {
  const themeCustom = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#81C784",
      },
      secondary: {
        main: "#59b9c6 ",
      },
      background: {
        default: "#FFFFFF",
      },
      color: { main: "#whitesmoke" },
    },
    breakpoints: {
      values: {
        xs: 0, // これ以上はxtra Small
        sm: 376, // これ以上はSmall
        md: 800, // これ以上はMedium
        lg: 1280, // これ以上はLarge
        xl: 1280,
      },
    },
    typography: {
      fontFamily: [
        '"Noto Sans JP"',
        "Zen Maru Gothic",
        "Roboto",
        '"Source Code Pro"',
        '"Helvetica"',
        "Arial",
        "sans-serif",
      ].join(","),

      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 700,
      h1: { fontSize: 36, color: "#whitesmoke" },
      h2: { fontSize: 30, color: "#whitesmoke" },
      h3: { fontSize: 20, color: "#whitesmoke" },
      h4: { fontSize: 18, color: "#whitesmoke" },
      h5: { fontSize: 16, color: "#whitesmoke" },
      h6: { fontSize: 14, color: "#whitesmoke" },
      subtitle1: { fontSize: 20, color: "#whitesmoke" },
      subtitle2: { fontSize: 18, color: "#whitesmoke" },
      body1: { fontSize: 16, color: "#whitesmoke" },
      body2: { fontSize: 14, color: "#whitesmoke" },
      caption: { fontSize: 12, color: "#whitesmoke" },
      button: { textTransform: "none", color: "#whitesmoke" },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          position: "static",
          sx: { backgroundColor: "#FFFFFF", boxShadow: "none" },
        },
      },
      MuiButton: {
        defaultProps: {},
      },
      MuiCheckbox: {
        defaultProps: {},
      },
      MuiCollapse: {
        defaultProps: { timeout: 400 },
      },
      MuiDialogTitle: {
        defaultProps: {},
      },
      MuiDialogContentText: {
        defaultProps: {},
      },
      MuiDrawer: {
        defaultProps: {
          PaperProps: {
            sx: {
              backgroundColor: "#FFFFFF",
              width: "280px",
              flexShrink: 0,
              "& .MuiDrawer-paper": { width: "280px" },
            },
          },
          variant: "permanent",
          sx: {
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "280px" },
          },
        },
      },
      MuiFormControl: {
        defaultProps: {},
      },
      MuiFormControlLabel: {
        defaultProps: {},
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            // フォーム下部のテキスト、エラーメッセージ
            // お好みで左余白を無くしています。
            marginLeft: 0,
          },
        },
      },
      MuiDivider: {
        defaultProps: {},
      },
      MuiIconButton: { defaultProps: { sx: { color: "#whitesmoke" } } },
      MenuItem: {
        defaultProps: {},
      },
      MuiInputLabel: {
        styleOverrides: {
          formControl: {
            // 移動をクリック時に動かないように固定
            position: "static",
            transform: "none",
            transition: "none",
            // クリックを可能に
            pointerEvents: "auto",
            cursor: "pointer",
            // 幅いっぱいを解除
            display: "inline",
            alignSelf: "start",
            // タイポグラフィを指定
            fontSize: "14px",
            // テーマの Composition を使えば以下のようにも書ける
            // base.typography.subtitle2
          },
          asterisk: {
            color: "#f56267", // 必須マークの色を設定
            fontSize: "16px", // ラベルと同じサイズにする
            marginLeft: "4px", // ラベルとの間隔を設定
            fontWeight: "800",
          },
        },
      },
      MuiListItem: {
        defaultProps: {},
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            // デフォルトだとラベルをはみ出させるための小さなmarginがある
            marginTop: 0,
          },
          input: {
            paddingTop: "10px",
            paddingBottom: "8px",
            height: "auto",
          },
          notchedOutline: {
            // デフォルトだとposition が absolute、ラベルをはみ出させるため上に少しの余白がある
            top: 0,
            legend: {
              // 内包された legend 要素によって、四角の左側の切り欠きが実現されているので、表示されないようにする。
              display: "none",
            },
          },
        },
      },
      MuiRadio: {
        defaultProps: {},
      },
      MuiRating: {
        defaultProps: {},
      },
      MuiSelect: {
        defaultProps: {
          sx: {
            "& .MuiOutlinedInput-root": {
              // 単純にフォーカスした場合
              "&:hover fieldset": {
                border: "1px solid #EFEFEF",
              },
              // フォーカスがある状態でホバーを外した場合
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderWidth: 0,
              },
            },
            "& .Mui-focused": {
              border: "1px solid #7D329E",
            },
            "& .MuiSvgIcon-root": {
              color: "rgba(0, 0, 0, 0.87)",
            },
            backgroundColor: "#FFFFFF",
          },
        },
      },
      MuiSlider: {
        defaultProps: {},
      },
      MuiSwitch: {
        defaultProps: {},
      },
      MuiTextField: {
        defaultProps: {},
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: "whitesmoke", // 非選択時の文字色
            "&.Mui-selected": {
              color: "#81C784", // 選択時の文字色
            },
          },
        },
      },
      MuiTableBody: {
        defaultProps: {},
      },
      MuiTableCell: {
        defaultProps: {},
      },
      MuiTableSortLabel: {
        defaultProps: {},
      },
    },
  });

  return themeCustom;
};

export default CustomTheme;
