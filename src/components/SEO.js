import React from "react";
import Helmet from 'react-helmet';

export default ({title, description, image}) => { 
    title = title || "Charlie Chapman";
    description = description || "The personal blog of Charlie Chapman";
    image = image || "https://lh3.googleusercontent.com/IDmOWorBztQenxzFdqJst-wVtBOqdHx6HSuWybrBqbE44TmZ_TDe5-eydGFJppyx8iyCQdTqbIdIi_zqpUD6izNzHK9TSG1N0fz1iF_JRDFkjgoIqFCH1culkXxB7OAZvpFzYyzo02Ulvdhdo60NTqMlqADomAJqj6iEcS2lAvf8K31e5EkUdvcxveAy42PApuyDXATDZfAn2fD5K0eEuppmlKJsSqrx7_YoYsY9ACB9E0mA6C6UyVJRl8xzskk-aR04FqkeKShUiLXuhqWvk-DbqCvNcOCSyZbU1qtX44nvXbLUlDIQxAxPrdz_bsU2dCBAtuNSUVKuSDaWQ_fi7GAYnCtD1p3Sfu21U_29TzdMQRXRQi3YD0ntNSQ-RlqBsnxE_EUsNZLS1KG7Dq26vt0Wx8NB5EzDJGS1llw71tDx2H0Eu98IIA7npe9Vw27XUnz2grEvv1NdrSk0yv4i6To8WWCcWt_7MtNaD7450GqfmVCDycVnhK2cvLzPQQmzQd-S1Uq9-zWz_zHq1ugq6h1XBVsZ54fC6H2smjHf-UcySsOR9GehNZNad43vc4DoaWM7MTFDwZjYGJ1jjrGz6SZ43OifvHVhMuKwblf-968w3E0lzzHopnTtsW8z5eMi=s1658-no";

    return (
        <Helmet
            title= { title }
            meta={[
            { name: "description", content: description },
            { name: "keywords", content: "charlie chapman, charlie, chapman, charliemchapman, blog, Arnold, Missouri, software, developer, podcaster" },
            { property: "og:type", content: "website" },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:image", content: image },
            { property: "og:image:url", content: image },
            ]}
        />
)};