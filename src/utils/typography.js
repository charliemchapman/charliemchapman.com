import Typography from "typography";
import oceanBeachTheme from "typography-theme-ocean-beach";

oceanBeachTheme.headerFontFamily = ['Roboto', 'sans-serif'];
oceanBeachTheme.overrideStyles = ({ adjustFontSizeTo, rythm}, options, styles) => ({
    a: {
        color: "#EA7AF4",
        textDecoration: "none",
        'border-bottom': "1px solid transparent",
        transition: 'border-bottom .25s'
    },
    'a:hover': {
        'border-bottom': "1px solid #EA7AF4"
    },
    body: {
        backgroundColor: '#FBFEF9',
        color: '#131B23'
    },
    'h1,h2,h3,h4,h5,h6': {
        color: '#094D72'
    },
    "blockquote": {
        marginLeft: "0",
        paddingLeft: "1.58rem",
        borderLeft: "8px solid #EA7AF4"
    }
})

const typography = new Typography(oceanBeachTheme);

export default typography;