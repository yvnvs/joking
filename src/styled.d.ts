// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      brandColor: string;
      darkestColor: string;
      darkColor: string;
      midColor: string;
      lightColor: string;
      lightestColor: string;
    };
  }
}