import React from "react";
import Img from "gatsby-image";
import Layout from '../components/layout'
import styles from '../styles/about.module.css';

export default ({data}) => (
  <Layout>
    <div className={styles.textAndImage}>
      <div className={styles.image} >
        <Img resolutions={data.file.childImageSharp.resolutions}/>
      </div>
      <div>
        <p>Hi, I'm Charlie Chapman.  I'm an app developer, podcaster, designer, and wannabe motion graphics artist.  I built an iOS app called <a href="https://darknoise.app">Dark Noise</a> and run an interview podcast called <a href="https://launchedfm.com">Launched</a>.</p>
        <p>You can find me on <b>Twitter</b> at <a href="https://twitter.com/_chuckyc">@_chuckyc</a> or shoot me an email at <a href="mailto:charliemchapman@gmail.com">charliemchapman@gmail.com</a></p>
      </div>
      <br></br>
      <div>
        <p>Here's a list of all of my podcast guest appearances:</p>
        <ul>
          <li><a href="http://cupof.tech/episode/d96644b693f24472/107-dark-noise-with-charlie-chapman">Cup of Tech - Dark Noise with Charlie Chapman</a> - <i>August 20, 2020</i></li>
          <li><a href="https://www.youtube.com/watch?v=_YkzEbJ2nos">Swiftly Built - WWDC Debrief Day 4</a> - <i>June 26, 2020</i></li>
          <li><a href="https://ipadpros.net/2020/06/24/episode-85-wwdc-2020-and-dark-noise-with-charlie-chapman/">iPad Pros - WWDC 2020 and Dark Noise with Charlie Chapman</a> - <i>June 24, 2020</i></li>
          <li><a href="https://everydayrobots.tech/posts/ep45/">Everyday Robots - WWDC 2020</a> - <i>June 23, 2020</i></li>
          <li><a href="https://www.relay.fm/automators/46">Automators - Automating Dark Noise with Charlie Chapman</a> - <i>March 27, 2020</i></li>
          <li><a href="https://podcasts.apple.com/us/podcast/charlie-chapman/id1445347880?i=1000467283227">and you are? - Charlie Chapman</a> - <i>March 2, 2020</i></li>
          <li><a href="https://everydayrobots.tech/2019/11/25/13-interview-behind-dark-noise-with-charlie-chapman/">Everyday Robots - Behind Dark Noise with Charlie Chapman</a> - <i>November 25, 2019</i></li>
          <li><a href="https://www.waitingforreview.com/143">Waiting for Review - The 16" Macbook Pro Episode With Charlie Chapman</a> - <i>November 17, 2019</i></li>
          <li><a href="https://appleinsider.com/articles/19/09/20/ios-13-is-out-and-exactly-how-good-these-iphone-cameras-are-on-the-appleinsider-podcast">AppleInsider - iOS 13 is here, iPhones are upon us</a> - <i>September 20, 2019</i></li>
          <li><a href="https://www.icongardenshow.com/home/2019/9/18/episode-21-indie-apps-then-and-now-with-charlie-chapman">The Icon Garden - Indie Apps Then And Now with Charlie Chapman</a> - <i>September 18, 2019</i></li>
          <li><a href="https://productivityintech.transistor.fm/s1/36">Productivity in Tech - Launching your "Learning Tool" App with Dark Noise Creator Charlie Chapman</a> - <i>September 10, 2019</i></li>
          <li><a href="https://www.waitingforreview.com/132">Waiting for Review - Charlie Chapman and Dark Noise</a> - <i>September 5, 2019</i></li>
          <li><a href="https://project-update.com/10">Project Update - Special Guest Charlie Chapman</a> - <i>September 3rd, 2019</i></li>
          <li><a href="https://podcasts.apple.com/us/podcast/3-2-hot-dog-stand-with-charlie-chapman/id1133056888?i=1000447807116">The Outpost - 'Hot Dog Stand' with Charlie Chapman</a> - <i>August 26, 2019</i></li>
        </ul>
      </div>
    </div>
  </Layout>
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