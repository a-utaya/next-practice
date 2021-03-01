import { createMuiTheme } from '@material-ui/core/styles'

// Material UIのテーマ上書き
export const theme = createMuiTheme({
    // カラーパレット追加
    palette: {
        type: 'light',
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    // レスポンシブのブレイクポイント
    'breakpoints': {
        'keys': [
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
        ],
        'values': {
            'xs': 360, // スマホ用
            'sm': 768, // タブレット用
            'md': 992, // PC用
            'lg': 1400,
            'xl': 1800,
        },
    },
    typography: {
        fontFamily: [
            'Mulish',
        ].join(','),
        useNextVariants: true, // Migration to typography v2
        htmlFontSize: 10,
        fontSize: 13,
    },
    // classのstyleを上書き
    overrides: {
        MuiButton: {
            root: {
                // ボタン内アルファベット文字を大文字変換しない
                textTransform: 'none',
            },
        },
    },
});

export default theme;