import Typography from "typography";
import oceanBeachTheme from "typography-theme-ocean-beach";

oceanBeachTheme.headerFontFamily = ['Roboto Condensed', 'sans-serif'];
oceanBeachTheme.overrideStyles = ({ adjustFontSizeTo, rythm}, options, styles) => ({
    a: {
        color: "#738AA7",
        textDecoration: "none",
        'border-bottom': "1px solid transparent",
        transition: 'border-bottom .25s'
    },
    'a:hover': {
        'border-bottom': "1px solid #738AA7"
    },
    body: {
        backgroundColor: '#FBFDFF',
        color: '#00050A'
    },
    'h1,h2,h3,h4,h5,h6': {
        color: '#071F3D'
    }
})

const typography = new Typography(oceanBeachTheme);

export default typography;