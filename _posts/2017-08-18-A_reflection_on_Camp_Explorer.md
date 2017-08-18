---
layout: post
title: A reflection on Camp Explorer
---

In the last post I went into detail on how Camp Explorer is implemented and why. I figured I'll write the last post as a reflection on what worked and what I've learned. Starting with the latter:

- Frameworks. A whole bunch of frameworks. There were quite a few firsts in this project, for example Node.js, Jasmine, Docker and Elasticsearch. I didn't start out with all of them but the demands of the project made it beneficial to use them, even if it was yet another framework to learn.

- Javascript kinda sucks. You do have complete freedom without type-safety but that freedom easily creates solutions that turn into monsters. And it almost did so I had to refactor mercilessly. [And I haven't even mentioned all the weirdness in Javascript](https://www.destroyallsoftware.com/talks/wat). Next time I'm going to try Typescript instead.

- Don't skip testing. When adding the Elasticsearch database I decided to not create tests for the database since it was a bit slow to start and run. That was a mistake, it was much more painful and took much longer to get everything correct when testing stuff manually compared to if I just would have TDD'ed the implementation.

- Caching is tricky. I mean, I knew this already. My caching strategy isn't very complex but handling the synchronous caching queue and making sure to re-cache old tags wasn't trivial.

So I learned a bunch during this project but I feel like I nailed a few things:

- TDD almost everything. Except for the database (which I mentioned previously) I coded everything tests first and it made it easier to do one thing at a time. And most likely saved me time in the long run, telling me when my code broke something. 

- YAGNI. You Aint Gonna Need It. As I mentioned in a previous post I only added frameworks when I absolutely felt that they were necessary. At the start I didn't even have a database! Instead I used an in-memory representation, this way I could get the core functionality working without having to muck around with databases.

- Docker for easy deployment. I know from previous experience how quickly projects turn into complex beasts to run and update. Where you have a 14-step document to update to a new version (was the case on a project I was on). I decided to try out Docker to solve this and I'm happy I did. Now it's only a oneliner to stop, update and restart the server. And anyone with Docker can just check out the project and start their own instance just as easily.

So that about wraps it up for this project. I'm not sure what the future has in store for Camp Explorer. The Chrome app does need updating to use the new backend as well as some other small tweaks but other than that I'm not going to add any new features for a while. I have other projects I want to get some work done on.

I hope you enjoyed this three-part write up. And I hope you will continue to enjoy [Camp Explorer](http://campexplorer.io)!
