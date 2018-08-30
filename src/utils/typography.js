import Typography from "typography";
import oceanBeachTheme from "typography-theme-ocean-beach";

oceanBeachTheme.headerFontFamily = ['Montserrat', 'sans-serif'];
oceanBeachTheme.overrideStyles = ({ adjustFontSizeTo, rythm}, options, styles) => ({
    a: {
        color: "#1B998B",
        textDecoration: "none",
        'border-bottom': "1px solid transparent",
        transition: 'border-bottom .25s'
    },
    'a:hover': {
        'border-bottom': "1px solid #1B998B"
    },
    body: {
        backgroundColor: '#FFFFFF',
        color: '#1D201F'
    },
    'h1,h2,h3,h4,h5,h6': {
        color: '#2D517F'
    }
})

const typography = new Typography(oceanBeachTheme);

export default typography;