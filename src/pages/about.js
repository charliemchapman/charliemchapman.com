import React from "react";
import Img from "gatsby-image";
import styles from '../styles/about.module.css';

export default ({data}) => (
  <div>
    <div className={styles.textAndImage}>
      <div className={styles.image} >
        <Img resolutions={data.file.childImageSharp.resolutions}/>
      </div>
      <div>
        <p>Hi, I'm Charlie Chapman.  I'm a software developer by trade and amateur podcaster, video editor, motion graphics designer.</p>
        <p>I'm not particular good at any one thing, but I love the process of trying to get better.  Hopefully this blog will reflect that desire to always learn (and erratic swings in interests 😏)</p>
        <p>I'm also a cohost of the podcasts <a href="https://atownfm.com">A-Town FM</a> and <a href="https://atownmovies.com">A-Town at the Movies</a> with my good friend Dan Litz.</p>
        <p>You can find me on <b>Twitter</b> at <a href="https://twitter.com/chuckyc17">@chuckyc17</a> or on <b>Mastodon</b> <a href="https://mastodon.social/@charliemchapman">here</a>.</p>
      </div>
    </div>
  </div>
);

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "images/charlie_and_jack.JPG" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        resolutions(width: 195, height: 195) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;