webpackJsonp([0x808138a85686],{364:function(e,A){e.exports={data:{markdownRemark:{frontmatter:{title:"Designing Dark Noise",date:"02 September, 2019",image:"http://media.charliemchapman.com/charlie_and_jack.JPG"},fields:{slug:"/posts/2019/9/2/designing-dark-noise/"},html:'<p>Today I want to talk about the process I used for designing my new app <a href="https://apps.apple.com/us/app/dark-noise/id1465439395">Dark Noise</a>.  It\'s an app for playing different ambient noises to help with sleep or focus.  I\'m not a designer by trade, and this is the first app I\'ve made for iOS, so this is more of a brain dump of everything I did and less of a proposal on how design should be done.</p>\n<p>Before I placed a pixel in any design tool, I first figured out what the guiding principles for the app were, and what features I wanted to include.  I detailed this step in a <a href="https://charliemchapman.com/posts/2019/8/23/principles-of-dark-noise/">separate post</a>, but the end result was:</p>\n<ul>\n<li>\n<p><strong>Configurability</strong></p>\n<ul>\n<li>Targeting pro users who want as many options and hooks to work the app into their workflow as possible</li>\n</ul>\n</li>\n<li>\n<p><strong>Speed</strong></p>\n<ul>\n<li>Opening app to playing sound should be as fast as possible with no compromise since this is the 99% use case</li>\n</ul>\n</li>\n<li>\n<p><strong>Keep it dark</strong> (expect fat fingers)</p>\n<ul>\n<li>Most users will probably be using this in a dark environment, possibly without their glasses on or half asleep.  Keep that in mind.</li>\n</ul>\n</li>\n</ul>\n<p>I have a little bit of experience playing around with <a href="https://www.adobe.com/products/xd.html">Adobe XD</a>, so I decided to use that to build out my mockups.  I ended up loving XD so I\'d highly recommend it.  It\'s even free! <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup></p>\n<h1>Round 1</h1>\n<p>The first thing I built was a player page based on the 3rd principle: <strong>Keep it dark</strong> (expect fat fingers)</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/dark-noise-design-v01-a91e11db8fb036ca77dc0465dfc57870-cd3d2.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 750px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 64.8341232227488%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGbTmXpS//EABwQAQACAQUAAAAAAAAAAAAAAAIBAxMABBEhI//aAAgBAQABBQKprLtZVk4mdVj1oHBA6//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AUr/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAhEAABAgQHAAAAAAAAAAAAAAABAAIDITFBEBIiMkJRkf/aAAgBAQAGPwI6jQ3T25zTtb3eozsVEnxw/8QAHBABAAICAwEAAAAAAAAAAAAAAQARIWExUXGR/9oACAEBAAE/IU3ucPhioynxkgpLs4uK1+HTNsdNkO3Dmf/aAAwDAQACAAMAAAAQkN//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QsQMv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAhEf/aAAgBAgEBPxB0yXt//8QAHBABAQACAgMAAAAAAAAAAAAAAREAYSExQVGB/9oACAEBAAE/ECi5aSEhkC8A3fKF6cVZFKrxiNWRm2zFaWiDwn2wd6PdH0bz/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Dark Noise design version 01"\n        title=""\n        src="/static/dark-noise-design-v01-a91e11db8fb036ca77dc0465dfc57870-5520a.jpg"\n        srcset="/static/dark-noise-design-v01-a91e11db8fb036ca77dc0465dfc57870-52dbb.jpg 188w,\n/static/dark-noise-design-v01-a91e11db8fb036ca77dc0465dfc57870-b4884.jpg 375w,\n/static/dark-noise-design-v01-a91e11db8fb036ca77dc0465dfc57870-5520a.jpg 750w,\n/static/dark-noise-design-v01-a91e11db8fb036ca77dc0465dfc57870-916c9.jpg 1125w,\n/static/dark-noise-design-v01-a91e11db8fb036ca77dc0465dfc57870-8dad4.jpg 1500w,\n/static/dark-noise-design-v01-a91e11db8fb036ca77dc0465dfc57870-cd3d2.jpg 2110w"\n        sizes="(max-width: 750px) 100vw, 750px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p class="postCaption">In case you doubted my lack of design pedigree, this was full design, not a wireframe 😅</p>\n<p>Once you get passed the blandness, you can pretty much see the bones of the app from the beginning.  An easy to hit play button, a name, and a way to get to the other sounds.</p>\n<p>The "Create Noise" page was based on my original idea of generating the different color noises on the fly, and building a little color picker style control to let you mix your own noise.  For technical/scope reasons I ended up not going this direction at all, but I do anticipate implementing a "Create Noise" feature at some point in the future.</p>\n<p>I also had the main swiping gesture for minimizing the player there from the beginning.  One cool thing about Adobe XD is that you can quickly setup prototypes with swiping gestures for animations, and then demo them interactively on the phone.  So I could quickly play around with different ideas and get a sense of how they <em>felt</em>.</p>\n<p><img src="https://s3.us-east-2.amazonaws.com/media.charliemchapman.com/blog/dark-noise-design-prototyping.gif" alt="Dark Noise design version 01"></p>\n<p class="postCaption">Recorded on my iPhone previewing the XD prototype. I toyed around with having the player minimize to the top, but the rapid prototyping with XD quickly showed me that didn\'t feel right</p>\n<p>The "Charcoal Dreams" name has an interesting back story.  From the beginning I knew I wanted to add some sort of fun whimsical feel to the app.  I thought it might be fun to give each noise an obnoxiously whimsical name, and if you 3D touched the name you\'d get a silly description along the lines of "earthy notes with a hint of cinnamon" or something.  </p>\n<p>Since I switched strategies to using audio recordings, this didn\'t make as much sense, but I didn\'t give up on that goal of having something fun.</p>\n<div class="postVideoContainer">\n    <video class="postVideo"  controls loop>\n    <source src="https://s3.us-east-2.amazonaws.com/media.charliemchapman.com/blog/dark-noise-1st-video.mp4" type="video/mp4">\n    Your browser does not support the video tag.\n    </video>\n</div>\n<p class="postCaption">First video I could find of a working version of the app.  This was in May, so about 4-5 months in.</p>\n<p>This first design wasn\'t pretty, but the structural bones were pretty good.  It gave me a direction to go on as I built out the first version of the app.</p>\n<h1>Round 2</h1>\n<p>At this stage I actually had a functional app that had a lot of the features I wanted, but it just looked... bleh.  I am not a designer by trade, so I didn\'t really know what to do to make this look better.  A designer friend at work pointed me to <a href="https://mobbin.design">Mobbin</a>.  It\'s a simple website that allows you to view screenshots of hundreds of different well designed apps, with a pretty good search functionality.</p>\n<p> \n  <a\n    class="gatsby-resp-image-link"\n    href="/static/mobbin-screenshot-fa7fed86986111f74f1a7a487156b6f2-49587.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 750px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 63.56026785714285%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAaSlqKxkP//EABoQAAIDAQEAAAAAAAAAAAAAAAIDARIUABH/2gAIAQEAAQUCY2APWPDNhem7Mo+riof/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAABAwUAAAAAAAAAAAAAAAAAARFRAjEyQWH/2gAIAQEABj8CbhiJVI76LiJB/8QAHRAAAgICAwEAAAAAAAAAAAAAAAERITFhUXGh8P/aAAgBAQABPyGV9j3NZFplCSRUzitbOgv7Ja9JCP/aAAwDAQACAAMAAAAQpw//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAEAAwEBAQAAAAAAAAAAAAABABExIUFh/9oACAEBAAE/EBXZp2lb9iCnjgPkoxGS8ucXDNF06JFruySntkKBcPDAJ//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Mobbin"\n        title=""\n        src="/static/mobbin-screenshot-fa7fed86986111f74f1a7a487156b6f2-5520a.jpg"\n        srcset="/static/mobbin-screenshot-fa7fed86986111f74f1a7a487156b6f2-52dbb.jpg 188w,\n/static/mobbin-screenshot-fa7fed86986111f74f1a7a487156b6f2-b4884.jpg 375w,\n/static/mobbin-screenshot-fa7fed86986111f74f1a7a487156b6f2-5520a.jpg 750w,\n/static/mobbin-screenshot-fa7fed86986111f74f1a7a487156b6f2-916c9.jpg 1125w,\n/static/mobbin-screenshot-fa7fed86986111f74f1a7a487156b6f2-8dad4.jpg 1500w,\n/static/mobbin-screenshot-fa7fed86986111f74f1a7a487156b6f2-17c71.jpg 2250w,\n/static/mobbin-screenshot-fa7fed86986111f74f1a7a487156b6f2-49587.jpg 3584w"\n        sizes="(max-width: 750px) 100vw, 750px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p class="postCaption">Here I\'m searching for "Audio Playback" patterns in apps under the "Music" category on <a href="https://mobbin.design">Mobbin</a></p>\n<p>Mobbin helped point me at what elements make up a good looking mobile app, and after iterating on a couple ideas in XD, I landed on a design that will start to look familiar if you\'ve used the app.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/dark-noise-design-v02-4a70bcdbc4dd335221208ee9f635cc3c-d1702.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 750px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 67.58974358974359%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHISttEn//EABkQAAMBAQEAAAAAAAAAAAAAAAECAwASE//aAAgBAQABBQKdKZaPxB2Kzm2Ej5xmQv8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BZ//EAB4QAAIBAwUAAAAAAAAAAAAAAAABAhExQSEiMnKB/9oACAEBAAY/ApVlLi8k97xk1k7j6sn4O1z/xAAbEAACAwADAAAAAAAAAAAAAAAAAREhMVFhwf/aAAgBAQABPyG01SkTt00tyNsvsxa7WWiKZUv0Ixh//9oADAMBAAIAAwAAABDI3//EABYRAQEBAAAAAAAAAAAAAAAAACEBEP/aAAgBAwEBPxCrn//EABcRAQADAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8QN6R//8QAHBABAAMAAgMAAAAAAAAAAAAAAQARIUFRYYGh/9oACAEBAAE/EECIbIqzki8x6ZXqm4tqiBV4JTHiTTV+panx618R202cXo8T/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Dark Noise design version 02"\n        title=""\n        src="/static/dark-noise-design-v02-4a70bcdbc4dd335221208ee9f635cc3c-5520a.jpg"\n        srcset="/static/dark-noise-design-v02-4a70bcdbc4dd335221208ee9f635cc3c-52dbb.jpg 188w,\n/static/dark-noise-design-v02-4a70bcdbc4dd335221208ee9f635cc3c-b4884.jpg 375w,\n/static/dark-noise-design-v02-4a70bcdbc4dd335221208ee9f635cc3c-5520a.jpg 750w,\n/static/dark-noise-design-v02-4a70bcdbc4dd335221208ee9f635cc3c-916c9.jpg 1125w,\n/static/dark-noise-design-v02-4a70bcdbc4dd335221208ee9f635cc3c-8dad4.jpg 1500w,\n/static/dark-noise-design-v02-4a70bcdbc4dd335221208ee9f635cc3c-d1702.jpg 1950w"\n        sizes="(max-width: 750px) 100vw, 750px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p class="postCaption">This should look familiar.</p>\n<p>There are two interesting design details I\'d like to call out.  </p>\n<h4>Select Noise Arrow</h4>\n<p>I really liked the idea of the initial view you see of the app being a super simple page with a big play button, but that meant I had to hide the other sound options behind the second screen.  I ended up with a slightly unusual design that treated the first page you see as a maximized player that you have to swipe down to reveal the rest of the app.  </p>\n<p>I was worried it wouldn\'t be immediately clear <em>how</em> you\'re supposed to proceed from that page if you wanted to change your noise, so I borrowed a design element from my first MacBook Pro and gave the down arrow a little "breathing" animation.  I\'m hoping the gentle bounce and opacity change will draw a new users eye enough to guide them through the app, but also not be an annoying distraction in the future.</p>\n<h4>Icon Animations</h4>\n<p>One thing I really like about some other audio apps is when it\'s visually clear when audio is playing so if your speakers are muted you have an indication that sound <em>should</em> be coming out.  For example, in <a href="https://overcast.fm">Overcast</a>, a darker tint color bounces on the pause button along with the audio that\'s playing to let you know that there is sound being played.</p>\n<p>I came up with a few ideas in After Effects, but I either couldn\'t figure out how to implement it properly, or it just didn\'t feel right once I implemented it into the app.</p>\n<div class="postVideoContainer">\n    <video class="postVideo"  controls loop>\n    <source src="https://s3.us-east-2.amazonaws.com/media.charliemchapman.com/blog/dark-noise-play-pause-ideas.mp4" type="video/mp4">\n    Your browser does not support the video tag.\n    </video>\n</div>\n<p class="postCaption">A couple play / pause ideas I tried out.</p>\n<p>One idea I had pretty early on was to make a looping animation for each of the static noise icons I was already building.  This sounded fun for me, but I was afraid it would take a long time and not really be worth the time it would take me.</p>\n<p>At one point I finally decided to try it out and see how it felt.  I made the animation for the White Noise icon and added it to the app, and it just felt awesome.</p>\n<div class="postVideoContainer">\n    <video class="postVideo"  controls loop>\n    <source src="https://s3.us-east-2.amazonaws.com/media.charliemchapman.com/blog/dark-noise-icons-sample.mp4" type="video/mp4">\n    Your browser does not support the video tag.\n    </video>\n</div>\n<p class="postCaption">Some of the icons I created for Dark Noise</p>\n<p>This solved my "playing indicator" problem, but even more importantly I found the <em>fun</em> I was looking for that I could use to stamp the app with my personality.</p>\n<h1>Last Thoughts</h1>\n<p>There are other small touches throughout the app, but I think this touches on the biggest ones.  Like I said, I\'m not a designer by trade, this is just to outline my thought process while I still remember it.  Hopefully this is helpful to somebody out there.</p>\n<p>If you have any other questions about my process or design choices, definitely reach out to me <a href="https://twitter.com/chuckyc17">on Twitter</a> I love talking about this stuff.</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>I actually do have a Creative Cloud subscription, but I believe all that gets you with XD is more storage space and access to their fonts.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',excerpt:"Today I want to talk about the process I used for designing my new app  Dark Noise .  It's an app for playing different ambient noises to…"}},pathContext:{slug:"/posts/2019/9/2/designing-dark-noise/"}}}});
//# sourceMappingURL=path---posts-2019-9-2-designing-dark-noise-edc6e82adbbbf200779f.js.map