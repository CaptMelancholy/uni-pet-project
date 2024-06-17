import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      red: string;
      orange: string;
      green: string;
      yellow: string;
      purple: string;
      cyan: string;
      blue: string;
      grey: string;
      text: string;
      deadline_background: string;
      red_text_deadline: string;
      in_progress_background: string;
      in_progress_text: string;
      comp_text: string;
      comp_background: string;
    };
  }
}