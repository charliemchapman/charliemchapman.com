import React from "react";
import Helmet from 'react-helmet';

export default ({title, description, image}) => { 
    title = title || "Charlie Chapman";
    description = description || "The personal blog of Charlie Chapman";
    image = image || "http://media.charliemchapman.com/charlie_and_jack.JPG";

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