webpackJsonp([0x81b8806e4260],{348:function(e,t){e.exports={pathContext:{group:[{node:{id:"/Users/CharlieMacbook/code/charliemchapman.com/src/posts/2018/11/27/google-home-christmas-time.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Control Your Christmas Tree Lights with Google Home",date:"27 November, 2018"},fields:{slug:"/posts/2018/11/27/google-home-christmas-time/"},html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/google-home-hero-01-5029c3ba407be6be298a83671f8b1d50-882d9.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 750px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 52.5390625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB3lmES4mR/8QAGBABAAMBAAAAAAAAAAAAAAAAAQAQESP/2gAIAQEAAQUCZpqNJ1n/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAYEAACAwAAAAAAAAAAAAAAAAAAEAEhMf/aAAgBAQAGPwI0pQv/xAAaEAEAAgMBAAAAAAAAAAAAAAABABEQIUEx/9oACAEBAAE/IUHsNaly3tHsJTuP/9oADAMBAAIAAwAAABBDP//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EFf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxBH/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARITFxUZGh/9oACAEBAAE/EDWwZNCC4L2MFoVt+Zo6R5jg4U+RO/c//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Google Home"\n        title=""\n        src="/static/google-home-hero-01-5029c3ba407be6be298a83671f8b1d50-5520a.jpg"\n        srcset="/static/google-home-hero-01-5029c3ba407be6be298a83671f8b1d50-52dbb.jpg 188w,\n/static/google-home-hero-01-5029c3ba407be6be298a83671f8b1d50-b4884.jpg 375w,\n/static/google-home-hero-01-5029c3ba407be6be298a83671f8b1d50-5520a.jpg 750w,\n/static/google-home-hero-01-5029c3ba407be6be298a83671f8b1d50-882d9.jpg 1024w"\n        sizes="(max-width: 750px) 100vw, 750px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>A couple of years ago when we set up our Christmas tree, we bought a cheap little <a href="https://www.amazon.com/Westek-RFK1600LC-Indoor-Wireless-Switch-x/dp/B000HJBE68/ref=sr_1_10?s=lamps-light&#x26;ie=UTF8&#x26;qid=1543371600&#x26;sr=1-10&#x26;keywords=remote+light+switch">RF light switch</a> to plug our tree into so we didn\'t have to climb underneath the tree to turn on and off the lights.  In the last year, we acquired a Google Home Mini, and I decided we could try to make our Christmas tree experience a little smarter.</p>\n<p>After a bit of experimentation, I can now say "Hey Google, It\'s Christmas Time" and my tree lights up, Christmas music starts playing, and my TV turns on and starts playing a fireplace.  Check it out!</p>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">&quot;Hey Google, It&#39;s Christmas Time&quot; 🧙‍♂️✨🎄🎶🔥<a href="https://twitter.com/hashtag/GoogleHome?src=hash&amp;ref_src=twsrc%5Etfw">#GoogleHome</a> <a href="https://twitter.com/hashtag/Automation?src=hash&amp;ref_src=twsrc%5Etfw">#Automation</a> <a href="https://twitter.com/hashtag/GoogleAssistant?src=hash&amp;ref_src=twsrc%5Etfw">#GoogleAssistant</a> <a href="https://t.co/G1X0c5d06o">pic.twitter.com/G1X0c5d06o</a></p>&mdash; Charlie Chapman (@chuckyc17) <a href="https://twitter.com/chuckyc17/status/1066803500686946309?ref_src=twsrc%5Etfw">November 25, 2018</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n<p>So, let\'s talk about how I set this up.</p>\n<h2>Control the Lights</h2>\n<p>To start, I want to control the lights through my Google Home, and to do that, I need something that will connect my dumb tree lights to my WiFi, and ultimately Google Assistant.  There are hundreds of smart plugs on Amazon, but you want to make sure you get one that\'s compatible with Google Assistant.  I got <a href="https://www.amazon.com/gp/product/B072ZX8RTZ/ref=oh_aui_detailpage_o05_s00?ie=UTF8&#x26;psc=1">this one from Gosuna</a>, but I think the same instructions will apply with any smart plug.</p>\n<p>To set it up, I just plugged my tree lights into the smart plug, and the smart plug into the wall.  I followed the instructions that came with my plug to get it hooked up to Google Home (which included downloading their app) but ultimately you need your smart plug to show up in the Google Home app page like below (I\'ve nicknamed mine "Decoration Lights").</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/google-home-app-a76d498e2aa87f4921585073bca93a78-f687c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 506px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 197.62845849802372%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,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\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Google Home App Screenshot"\n        title=""\n        src="/static/google-home-app-a76d498e2aa87f4921585073bca93a78-f687c.png"\n        srcset="/static/google-home-app-a76d498e2aa87f4921585073bca93a78-1dfac.png 188w,\n/static/google-home-app-a76d498e2aa87f4921585073bca93a78-fdf3e.png 375w,\n/static/google-home-app-a76d498e2aa87f4921585073bca93a78-f687c.png 506w"\n        sizes="(max-width: 506px) 100vw, 506px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Now you should be able to tap the "On" / "Off" buttons in the Google Home app and see that your Christmas tree lights turn on and off correctly.  You should also be able to say "Ok Google, Turn on the Decoration Lights" and it should control the lights as well.</p>\n<h2>Set Up a Routine</h2>\n<p>So you can now control the tree with your voice, but "Turn on the Decoration Lights" is pretty boring and hard to remember.  So let\'s make this a bit easier using something Google calls <a href="https://support.google.com/assistant/answer/7672035?co=GENIE.Platform%3DAndroid&#x26;hl=en">Routines</a>.</p>\n<p>Fair warning, Google has frequently moved things around the Google Home app, and I\'m using an iPhone, so these directions might not be exactly the same for your app (let me know if not and I\'ll try to update this post).</p>\n<ol>\n<li>From the Google Home main page, tap on the avatar icon on the bottom right of the screen</li>\n<li>In the "Google Assistant" section, tap on "... More Settings"</li>\n<li>Tap on the "Assistant" Tab</li>\n<li>Tap "Routines"</li>\n</ol>\n<p>Phew, ok, so hopefully you\'re now on a screen that looks something like this.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/google-home-routines-blank-2f581bf17e237ca07a5067a21c90c0dc-f687c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 506px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 197.62845849802372%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFiElEQVRIx51X3U8UVxQfS/rqH9EXrU2EFfrAIsrOwgJdQEsj4EMf+mZM30x8aLRqMOmLxCpQjRJ0BappY9omTSrysazK9rWJ2GjDxy67y+eyuzPsFzuzc3p+d3dWWRHBIb/cYe6ZM/d3zu/cc1eS+Pq8vOLT0oMH+6yVVk/14erJJqfT297W7m070cZjm7ctD3F/4oSYa21t9VZVVXmtVuszS1nZQ0uZxQlf0rHmlk8+O3Bg9fTp09R/p58ePHhAFRUVxFMFlJSUCEh7PqI9JR+LZ3v37qVbt2/RXdddunDxAh2yWKjKam2X7Da58+zZs6TpWnJxaVEnIv3R8COdv6zLsqzbZJteW1srYLfb9TqHQ6+srNQ7L3cK2/BaWPf5felbt2+TbJOfSXbZ7rp58ybPkZZMJY2NzIZBO7wyWsZIpVOwz056J4l9PZdqamx3e3/qJYMMLb2RNhg0Pz9PoYUQhUIhikQj4uWskd0EPasXnGLa88RD7GtKamlu/q27+zrmdF4h8QpJURVSVZXW19cpkUggHKRpRcg/S6fT4ntut5s4LFPSyY6TT69cuUI6X5FIhGKxGCmKIkYT0WiU1tbWCPMA/jdt8RwOHz9+TLV2dljvcAxdu3YNK9JmZmYEXQD3Pp+PAoEA+f1+8T/Gubk58QxzsJudncVisqNjY+zQPiUda2n5/cerV0FPx0t4AYZ4YXp6WrxsfghzgPkB2CwtLVE2m9VHR0eJVfBc6mjvcHd1dVEmk9FXVlYICIfDAub/5rPV1VVxj3F5eVnQRZxBeXh4mBoaGmYlroYxUEZSkABkGclBsDdlNrvFPY+wh8Ox8TFqamoKSY0Njb/29PaQuq5qr/57RSzSXBwD8yKTLCfxsvGOP9iILE+4yel0BqWvvmwdvp6XzVqEKcTXC8It1t5WYB0K03H3ODU5eYUd7e1ukzKrXhhAtMBuHEKHXzQ2BqTW/ApjSkx/8e8LkUE4ex/VYsqoFDtk46irc6H0UMvIXDQWfe3M2N4ZbN5yyMJ29fT0CIeYfCuz74FJ2eMprNBxr7e3lxLJhDY9M01zvjmBQDCwoxhuQTnnECvEDsOxFHR2mpQtHUKHJmUzNh9EWUYM4ZBjyM40iBm1ikoxdbirpMi5LN8zsxwMBsXWVExrx7KRi2KYn3zr2i6eBcpvOkQMucg1ZBYAdW5YYutaWl7atgyxa29JGTGcnZsVvQT1HE/EBVCOu6ZsZhnLh9E7Ke8ky6ZDrHBhcYFMoOMFQ0HRtDZJ6f0xzFHmCQ1bOiij60HgoG5uFLui3N3TbTZ600BsDKbOtoO5Y09MTOSF7XDcw37IW74GmgsLC0KL8Xh8R0DLhcORkZHCbiMcJpNJDS0RQPNBf/kgh4586YEy7zhkbmGF00Exip6n0hs5yp6JN5LClcJ9Vnv56qVIyO4uPZ+UJ+xQfu0QsvHP+0Xf5Q5IK6u5/iv6M9+jgWFEY4cConyICodX6B8fhE9Z76SHbLacQ9eNGzeEbNA+oT2UHl5CCABUDBSAEVJKJFO8qDT9MqnQ4Ysx+v4P7stuD9XVMmX26sp3PXE+hAxSqVz3Q7yKR3Hi2oCYNXJNrFP5d1Hj20HK/vnXCB84a6YkPjG5urtzOuQTlcFZA0T2kEVkuxiKopLK82uRKD18umj4V7XsU8842cSB82jND2fOnCHBgUQhFwDn+AjrchO4ho0i20x//x06Ul39tyQfte3fv29f/NSpUzQ4OCgwNDQkxs7OTjp37hydP39+E/r6+uj+/fs0MDBAA4M/08VLl8jCh/Zyy6FvxC8BvqkoKy1180E9cuTIUYXDoNTV1ql8tFD5uKfyz4jlkx0di8ePH481Nzer9fX1Kmz4PKgwQ4V/AbwoKy37Gr7+B5LtdBIPNNOPAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Google Home Routines"\n        title=""\n        src="/static/google-home-routines-blank-2f581bf17e237ca07a5067a21c90c0dc-f687c.png"\n        srcset="/static/google-home-routines-blank-2f581bf17e237ca07a5067a21c90c0dc-1dfac.png 188w,\n/static/google-home-routines-blank-2f581bf17e237ca07a5067a21c90c0dc-fdf3e.png 375w,\n/static/google-home-routines-blank-2f581bf17e237ca07a5067a21c90c0dc-f687c.png 506w"\n        sizes="(max-width: 506px) 100vw, 506px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Now, let\'s create a new custom routine.</p>\n<ol>\n<li>Tap the blue "+" floating action button on the bottom right</li>\n<li>Tap the "Add commands" button</li>\n</ol>\n<p>This is where you pick the command you want to say to your Google Home to trigger this routine.  So here you can type "It\'s Christmas Time" and tap save.</p>\n<p><em>NOTE: You can add multiple phrases to trigger the same routine.  Simply tap the "Add commands" button again and tap the blue "+" floating action button to create another phrase.</em></p>\n<p>Now, to tell your Google Home what to do when you say this command:</p>\n<ol>\n<li>Tap ADD ACTION</li>\n<li>Tap popular actions</li>\n<li>Check the box next to "Adjust lights, plugs, and more"</li>\n<li>\n<p>Tap the settings gear next to "Adjust lights, plugs, and more"</p>\n<ul>\n<li>Your smart plug should show here</li>\n</ul>\n</li>\n<li>Tap on your smart plug</li>\n<li>Select "Turn on" from the popup menu</li>\n<li>Tap back</li>\n<li>Tap "ADD" in the top right corner (I constantly forget this one)</li>\n<li>Now tap "Save" in the top right corner</li>\n</ol>\n<p>You should now be back on the Routines page, but with your new Routine at the top of the list.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/google-home-routines-new-3dcef1ee9d8bce2e67180e63fb9b4ee3-f687c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 506px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 197.62845849802372%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFiElEQVRIx6VXS1MUVxhtQ2Xrj8gmxlQpg2TBEJR5ozBosARcsMjWRTbGLFI+i1Rl44N3LMUAEtSqVMq4A4UaUCHZZJGCxCrlPQ/e837348t37tDtgKNg7K5T3dP33tPf+b5zb9+RJD6+OFT62cEDB7rNZWVjFV9WjNdUV0801DdM1J+q52v9RP0mxP2pU6Ktrq5uory8fMJsNj83FRf/Zio2VYNLOu6u/eTz/fvXzpw5Qz29PfTgwQMqLS0lbjJQVFQkIO35iPYUfSye7d27l27dvkW9fb106fIlKjGZqNxsbpBsVmvzue/OkaqpyfX1dYWIlMGhQcVcblasVqtisVoUu90uYLPZFIfTqZSVlSnNPzSLvusb68r8wnz61u3bZLVYnzOhre/mzZvcRnIyldQy2YxGuzyyclZLpVPor45PjBNzTUqVlZbezq5O0kiT05m0xqDFxUXyB/zk9/spGAqKwaxgCxRVMUjRPPZ0jJhrSqp1ux+2t7ehTeEIiSOkSDRC0WiUYrEYJRIJkhWZZHkbNp+l02nxPo/HQ5yWKel04+lnV69eJYWPYDBI4XCYIpGIuOoIhUK0sbFBaAfwW++L5yB8/Pgx2W1M6HI6B1pbWxGRPDMzI+QCuJ+fnyev10sLCwviN65zc3PiGdrQb3Z2FsGowyMjTGibko7X1v5+48YNyFMwCAPQEQOmp6fFYP1FaAP0F6DP8vIyqaqqDA8PE7tgUmpsaPBcv36dMpmMsrKyQsDq6uobYEvR2tqacY9+kIs8Q/LQ0BBVVVXNSuz6kWvXromioBAoQjKZ3DUwBoSDg4PkrqnxS9XHjv3a0tKCBMsv/n0hJMTjcfFmHfgtENtE/PUVBdQJa6prfNLJupNDIESEiWQCvkJOxDWbzRrWgD8LAWNA+OTJE6pBhMghqsy+Urw+b65yc7PC1DA3T62csfnUCpzwo/Dh6CgdO3rUK9V9VTfU3tEuIgQZZgZPJ2FwESVDe8epE2Km8NSbkpwOZ197uyCUudLGlMqfHZD+NuDl+kyxwYdVLlcfcsgJlhHh0tISBQKB18nfAXpRkENhbJfTdRc5ZAsYhKh0KpUSFtoJum0MQpZ8t6OjQ6iMJ+KEBQJvjsaiQv5OQK5BODo2mpMMQixfMZb88tVLMdUCSwEhG3nUdji3FMUg7OwUEYYjYd1XBdfAQkDRtld5i2RI0OXshhC2EoRjeYSIMBQOyZOTk8LUutS3mXknHxqSN4LG6pEj/FDJmJuQoM9TzGkxUH1PyR2dHbCLPD0zLSSj0vCjtovznZKxaKIweucPlmwUYxdEb0jeTsh2kXkHQK+mXxlexID/Idlxt6urS0SINRDf5PeJsmAOdclitd6Mavsuwah2PgpX2SGKwuuakAwsLC6IKi96efVZXnqrfDzLyAUkY3HgRtnn89Hq2qrhQ33VflcKWNjmapNHCB/qkjE4/8BvITlPqqLqZCr9PZ/CCHX8+Ri2c2Ir0gfJvPzLPr+PAHysIBuSEeX2CGVVFa969FeaKq5E6OIjUkc8o+Swc4SWSksfigLJTKIhZ7CNDkRnEG6esppT0f80QYe+D2nf3OPv8rCHI6ycEhvOrp9ytonFYxp/gzVIR2R6hXkztAW5HKd4UU7Qw/FVLRAm9c+JZ2SxWHnDeaTyx2/PnsUUSvNKo/E2TeN7hKDxbkLj/Yt4lg8mFe15yN658zMdrqj4Q7Icqdy379N98aamJmpra6PW1hbq6emhgYEBam5upvPnz9OFCxe2oLu7m+7fv0/9/f3U/8s9unzlCpl4037IVPK1+CfAN6UlphLP4YrDQavVFnHYHQx7lPcqUd7uRXlDtXK6sXHpxIkTYbfbHXW5XFHeXEb4KxdhhRH+B/BP8cHiJnD9B1s2c+fwKPTOAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Google Home Routines With New"\n        title=""\n        src="/static/google-home-routines-new-3dcef1ee9d8bce2e67180e63fb9b4ee3-f687c.png"\n        srcset="/static/google-home-routines-new-3dcef1ee9d8bce2e67180e63fb9b4ee3-1dfac.png 188w,\n/static/google-home-routines-new-3dcef1ee9d8bce2e67180e63fb9b4ee3-fdf3e.png 375w,\n/static/google-home-routines-new-3dcef1ee9d8bce2e67180e63fb9b4ee3-f687c.png 506w"\n        sizes="(max-width: 506px) 100vw, 506px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You should be able to use this on your Google Home now.  Just say "Ok Google, It\'s Christmas Time" and your lights should turn on.</p>\n<h2>Add Some Music</h2>\n<p>Alright, now you have a custom routine, but it\'s only doing one action.  Let\'s make things more interesting by playing some Christmas music as well as turning on the lights.</p>\n<ol>\n<li>Tap on your custom routine</li>\n<li>Tap "ADD MEDIA"</li>\n<li>Check the "Music" radio button</li>\n<li>Tap the gear icon next to "Music"</li>\n<li>\n<p>And type into the text box "<code class="language-text">Christmas Radio</code>" (or whatever command you would use to trigger a custom playlist or album)</p>\n<ul>\n<li>This will use whatever music service you\'ve set up as the default.</li>\n</ul>\n</li>\n</ol>\n<p>Give it a shot.  Say "Ok Google, It\'s Christmas Time" and your lights should turn on, and Christmas music should start playing out of your speaker.</p>\n<h2>Put a Fire on the TV</h2>\n<p>Ok, this is probably the trickiest one, and may not work for many of you.  Let\'s start by explaining how I have my TV setup.</p>\n<p>I have a Chromecast (1st generation) plugged in to an HDMI port on my TV, but powered by plugging into the wall, not the TV\'s usb port (this is important).  My TV supports <a href="https://en.wikipedia.org/wiki/Consumer_Electronics_Control">HDMI-CEC</a>, which is a spec that allows devices like BluRay players, video game consoles, and Chromecasts control your TV over HDMI.</p>\n<p>In my case, my TV will allow my Chromecast to turn on the TV and switch to the input my Chromecast is connected too.  But it will not allow my Chromecast to turn off my TV for reasons unknown.</p>\n<p>If your TV does not support HDMI-CEC then you will have to manually turn on your TV and switch it to the Chromecast\'s input.</p>\n<p>Alright, with that aside, here\'s how I set up the fireplace within my new Routine.</p>\n<ol>\n<li>Open your custom routine</li>\n<li>Tap "ADD ACTION"</li>\n<li>Type into the text field "<code class="language-text">Play https://www.youtube.com/watch?v=L_LUpnjgPso on TV</code>"</li>\n<li>Tap "ADD" on the top right</li>\n<li>Tap "Save" on the top right</li>\n</ol>\n<p>Typing into that text box let\'s you arbitrarily type any command you can say to your Google Home.  So you could type "Play Fireplace on TV" here and Google will search Youtube and find a fireplace to put on your TV.</p>\n<p>But what if you want to play a specific video?  Since we\'re typing into this command instead of talking out loud to our Google Home, we can actually clarify a specific Youtube video URL to play instead of just doing a search.  </p>\n<p>To do that you first need to get the URL for that video by tapping "share" in the Youtube app or just copying the url from the browser.  Then you can just paste that URL into the command "<code class="language-text">Play [insert-url-here] on TV</code>". </p>\n<p><em>If you have multiple TVs in the house, you might also have to specify which TV such as "Play Fireplace on living room TV".</em></p>\n<p>Now when you say "Ok Google, It\'s Christmas Time", your tree lights should turn on, music should start playing from your speaker, and your TV should turn into a fireplace!</p>\n<h2>Keep Tinkering</h2>\n<p>So now that you have the basic building blocks, you should be able to expand on this idea quiet a bit.</p>\n<p>You could create a new routine called "Cancel Christmas" that turns off the lights, fireplace, and music.  Or you could add an action to ask Google Home to tell you how many days till Christmas.</p>\n<p>Routines are a bit confusing, and the current Google Home app certainly doesn\'t make that process easier, but it can be really powerful.  Even with just a couple pieces of smart hardware you can build up some impressive workflows pretty quickly.</p>\n<p>Hopefully this was helpful!  Please let me know if any of these directions don\'t work or you have any other ideas.  Best place to reach me is on Twitter at <a href="https://twitter.com/chuckyc17">@chuckyc17</a>.</p>'}},{node:{id:"/Users/CharlieMacbook/code/charliemchapman.com/src/posts/2018/11/21/apple_vs_apple.md absPath of file >>> MarkdownRemark",frontmatter:{title:"Apple vs Apple: The New OS War",date:"21 November, 2018"},fields:{slug:"/posts/2018/11/21/apple_vs_apple/"},html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/apple-vs-apple-d09257bd6ecf6c7f5ecf028372bdc7f4-9fd1e.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 750px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABrTWnOnGw/8QAGBABAQEBAQAAAAAAAAAAAAAAAQIAEhH/2gAIAQEAAQUCpRu+dD1DI6pOg83/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAACAwEAAAAAAAAAAAAAAAAAAREhMVL/2gAIAQEABj8C0VtzyJmCoo//xAAbEAADAAIDAAAAAAAAAAAAAAAAAREhMUFxgf/aAAgBAQABPyHEE6mh+dWuCJhfTZIx1cQQkwR//9oADAMBAAIAAwAAABCMP//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxBNn//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxAcn//EAB4QAQEAAgEFAQAAAAAAAAAAAAERACFxMUFRgcHw/9oACAEBAAE/EI0wyqvx+Y/dEUjzb0wNWJy95sWPKY49RYE3cBlDsZ//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Apple vs Apple"\n        title=""\n        src="/static/apple-vs-apple-d09257bd6ecf6c7f5ecf028372bdc7f4-5520a.jpg"\n        srcset="/static/apple-vs-apple-d09257bd6ecf6c7f5ecf028372bdc7f4-52dbb.jpg 188w,\n/static/apple-vs-apple-d09257bd6ecf6c7f5ecf028372bdc7f4-b4884.jpg 375w,\n/static/apple-vs-apple-d09257bd6ecf6c7f5ecf028372bdc7f4-5520a.jpg 750w,\n/static/apple-vs-apple-d09257bd6ecf6c7f5ecf028372bdc7f4-916c9.jpg 1125w,\n/static/apple-vs-apple-d09257bd6ecf6c7f5ecf028372bdc7f4-8dad4.jpg 1500w,\n/static/apple-vs-apple-d09257bd6ecf6c7f5ecf028372bdc7f4-9fd1e.jpg 1920w"\n        sizes="(max-width: 750px) 100vw, 750px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>In the last couple years, I\'ve heard iPad users frequently bemoan the professional community not "taking them seriously".  This reached a fever pitch with the release of the new (and pretty great looking) <a href="https://www.apple.com/ipad-pro/">iPad Pros</a> and the onslaught of reviews deeming the new device amazing but "still an iPad".</p>\n<p>As someone deep in the Mac ecosystem but definitely interested in iOS, I\'ve always regarded these complaints as people being overly sensitive.  When people say they can\'t do "real work" on an iPad, I\'ve always translated that to mean they can\'t do "their work" on an iPad.  I assumed nobody outside of internet trolls were actually saying that people who use iPads aren\'t "real" professionals..</p>\n<p>Then I read <a href="https://twitter.com/tomwarren/status/1063216386573504512">this tweet</a> from senior editor at <a href="https://www.theverge.com">The Verge</a>, Tom Warren</p>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Nilay made this point on Vergecast, but the people who have replaced their laptops with an iPad are people who do fuck all work. The rest of us hard working people use a laptop, because we have real stuff to do other than send emails and fart around. Don’t @ me ¯\\_(ツ)_/¯</p>&mdash; Tom Warren (@tomwarren) <a href="https://twitter.com/tomwarren/status/1063216386573504512?ref_src=twsrc%5Etfw">November 15, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> \n<p>Granted, Tom\'s primary focus is Windows news, but I think this goes to show that this sentiment of the iPad as a toy is not relegated to comment section flame wars, but actual influential members of the prominent tech press.</p>\n<p>It feels like we\'re entering a bizarre OS war reminiscent of the Windows vs Mac or Android vs iOS days, complete with passionate angry "fans" attacking the each other as being "stuck in the past" or "using toys to try to do real work".  Only this time both platforms, iOS and MacOS, are owned by the same company.</p>\n<p>It\'s weird because I don\'t really see them as competing platforms as much as complementing platforms.  A Mac, an iPad, and an iPhone make an incredible combination.  It\'s more like an iMac vs a MacBook. People with desktop computers don\'t usually make fun of laptops being underpowered.  And laptop users don\'t usually make fun of desktop\'s lack of portability. And many people have both!</p>\n<p>Admittedly none of this matters.  It\'s probably just typical Twitter / Tech Blog drama.  But on behalf of non-iPad users everywhere, I\'m sorry for the jerks out there.  iOS is not ready to replace my Mac (I don\'t think<sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>), but that doesn\'t mean it\'s not ready for anybody.  Personally, I\'m hoping <a href="https://www.cultofmac.com/546401/ios-13-will-boast-great-updates-for-ipad-users/">iOS 13</a> and <a href="https://www.imore.com/marzipan">Marzipan</a> lead to a glorious future where iOS and MacOS can frolic together, hand in hand, into the glorious computing future.</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>While there are definitely some things I simply cannot do in iOS yet, I bet I can do more of my computing on an iPad than I currently think.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>'}},{node:{id:"/Users/CharlieMacbook/code/charliemchapman.com/src/posts/2018/09/02/first_post.md absPath of file >>> MarkdownRemark",frontmatter:{title:"First Post",date:"02 September, 2018"},fields:{slug:"/posts/2018/09/02/first_post/"},html:'<p>It\'s been a while since I wrote a blog.  A quick look at my old Blogger account shows my last post was August 5, 2012.  That was 2 jobs, 2 kids, and 1 house ago!</p>\n<p>I\'m not sure why I stopped, but over the last couple of months I\'ve found myself wanting to write again. Unfortunately the task of getting a blog up an running again has always stopped me.  Last week I finally decided to jump in and build a new site.</p>\n<p>I had really good experience with <a href="https://www.gatsbyjs.org/">Gatsby</a> building the website for my podcast <a href="https://atownfm.com/">A-Town FM</a> so I decided to use it again, and boy I\'m glad I did.  I\'ve had so much fun putting the site together over the last week that I\'ve completely forgotten what the article I wanted to write was that sparked me to build this in the first place.</p>\n<p>For some reason I\'ve always had an easy time starting projects, and putting the time in to truly build them out.  But when it comes time to actually release them to the world, the need to get it <em>just right</em> freezes me up to the point that I often don\'t release at all.</p>\n<p>I\'m hoping by releasing this post with this (probably buggy<sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>) version of the site to the world, I\'ll get over that hump and just enjoy adding to it over time.</p>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>Seriously, I haven\'t even opened the page on a Windows computer, much less Edge.  So something is bound to be broken.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>'}}],pathPrefix:"",first:!0,last:!0,index:1,pageCount:1,additionalContext:{}}}}});
//# sourceMappingURL=path---index-d380c0744992b35d915d.js.map