export const themes = {
  data: {
    white: {
      isWhite: true,
      h1: {
        fontSize: '5rem',
        color: 'black'
      },
      h2: {
        fontSize: '3.5rem',
        color: 'black'
      },
      h3: {
        fontSize: '2.5rem',
        color: '#2F80ED'
      },
      palette: {
        background: {
          default: '#F7F7F7'//white
        },
        primary: {
          main: '#2F80ED',//blue
        },
        secondary: {
          main: '#1C1F47',//dark blue
        },
        text: {
          primary: '#2F80ED',//blue
          secondary: 'black',//black
        },
      },
    },
    black: {
      isWhite: false,
      h1: {
        fontSize: '5rem',
        color: 'white'
      },
      h2: {
        fontSize: '3.5rem',
        color: 'white'
      },
      h3: {
        fontSize: '2.5rem',
        color: '#2F80ED'
      },
      palette: {
        background: {
          default: '#000000'//black
        },
        primary: {
          main: '#FFFFFF',//white
        },
        secondary: {
          main: '#2F80ED',// blue
        },
        text: {
          primary: '#FFFFFF',//blue
          secondary: '2F80ED',//black
        },
      },
    }
  }
}