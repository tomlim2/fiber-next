import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    @font-face {
        font-family: 'SourceCodePro';
        src: url('/assets/fonts/SourceCodePro-Regular.ttf') format('truetype');
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'SourceCodePro';
        src: url('/assets/fonts/SourceCodePro-Italic.ttf') format('truetype');
        font-style: italic;
        font-weight: 400;
    }
    @font-face {
        font-family: 'SourceCodePro';
        src: url('/assets/fonts/SourceCodePro-Light.ttf') format('truetype');
        font-style: normal;
        font-weight: 200;
    }

    @font-face {
        font-family: 'SourceCodePro';
        src: url('/assets/fonts/SourceCodePro-LightItalic.ttf') format('truetype');
        font-style: italic;
        font-weight: 200;
    }

    @font-face {
        font-family: 'SourceCodePro';
        src: url('/assets/fonts/SourceCodePro-Bold.ttf') format('truetype');
        font-style: normal;
        font-weight: 600;
    }

    @font-face {
        font-family: 'SourceCodePro';
        src: url('/assets/fonts/SourceCodePro-BoldItalic.ttf') format('truetype');
        font-style: italic;
        font-weight: 600;
    }

    body {
        font-family: "SourceCodePro", monospace;
        font-weight: 400;
        font-style: normal;
    }
`;

export default GlobalStyle;
