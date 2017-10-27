---
layout: post
title: Tagging along
---

[![originalSizeImage](/images/bandcamp_tag_search_large_icon.png)](/images/bandcamp_tag_search_large_icon.png)

I've been a pretty avid fan of Bandcamp for the last couple of years. It's free to listen online and if I really like something I can buy it and get it DRM-free. And there's a lot of mostly unknown but great stuff just waiting to be found but I've found it hard to sort it all out at times. Sure, it's been possible to search for individual tags such as rock, soundtrack, down-tempo, etc; but what if you've wanted to search for albums with two or more specific tags?

Well, now I've kinda solved that problem. I created a Chrome plugin where you just add the tags you're interested in and it'll search for you; though it takes a little while.

[![originalSizeImage](/images/bandcamp_tag_search.png)](/images/bandcamp_tag_search.png)

The implementation is pretty naive since it does individual searches for the tags and then filters out any album that does not exist in all individual tag search. Doing all those individual page requests takes a while so that's why the search is somewhat slow. And it only runs when the popup is open so closing and reopening it forces it to search again if the previous search never finished. Yet another limitation is the number of results per tag, namely 400 because of how tag searches work on Bandcamp.

But good enough for a weekend, it works and I'm getting use out of it. I hope you can find it useful too!

[Install from Chrome Web Store](https://chrome.google.com/webstore/detail/bandcamp-tag-search/fkkbhcpcpapcgcfjmllgibbnalmpbjcm)

[Source code](https://github.com/SvDvorak/BandcampMultitagSearch)

Quick note: I actually found [a website](http://www.influenza-records.com/find/) that does a similar thing... after I finished my plugin. The more options the merrier right?