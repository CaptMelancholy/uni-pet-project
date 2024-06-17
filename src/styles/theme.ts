import { DefaultTheme } from 'styled-components';

const lightTheme : DefaultTheme = {
    colors: {
        primary: '#EDEDED',
        secondary: '#979797',
        red: '#FF3838',
        orange: '#FFA500',
        green: '#1AD698',
        yellow: '#F8BD1C',
        purple: '#891BE8',
        cyan: '#0AAAF4',
        blue: '#4339F2',
        grey: '#D6D6D6',
        text: '#000000',
        deadline_background: '#EFB4B4',
        red_text_deadline: '#CC0707',
        in_progress_background: '#B1B3C5',
        in_progress_text: '#646570',
        comp_text: '#4BCE97',
        comp_background: '#93E1C0'
    },
};

const darkTheme : DefaultTheme = {
    colors: {
        primary: '#1e1e1e',
        secondary: '#353535',
        red: '#FF3838',
        orange: '#FFA500',
        green: '#1AD698',
        yellow: '#F8BD1C',
        purple: '#891BE8',
        cyan: '#0AAAF4',
        blue: '#4339F2',
        grey: '#D6D6D6',
        text: '#FFFFFF',
        deadline_background: '#FFE7E7',
        red_text_deadline: '#CC0707',
        in_progress_background: '#B1B3C5',
        in_progress_text: '#646570',
        comp_text: '#4BCE97',
        comp_background: '#93E1C0'
    },
};


export { lightTheme, darkTheme }