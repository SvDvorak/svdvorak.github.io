---
layout: post
title: Completely reworked prototype
---

<p class="gfycontainer"><img class="gfyitem" data-id="SpitefulBlaringBustard" /></p>

I mentioned in a previous post that I was busy rewriting the code for MicroTactics. At the time the code was a mess, barely holding itself together so when tasked with adding basic AI it would just be to hard without a complete rewrite.  It sure took a lot longer than I initially estimated and it didn't help that I had to learn Entity system architecture at the same time. But now I've gotten far enough to match the prototype-functionality while also adding some basic AI behaviour visible in the above animation.

For programming-interested people I'd like to add that during the rewrite I wrote tests first to ensure system functionality. Anything touching Unity is hard to test so those systems are isolated and untested but everything else is fully tested with a running total of 103 tests. And I'm currently investigating on trying to implement integration tests using state machines so I can test that all systems run correctly together. I'll probably return to that topic with a more indepth post later on if it pans out, until then you can see a basic example below.

[![image]({{ site.url }}/images/Node_based_integration_test.png)]({{ site.url }}/images/Node_based_integration_test.png)

I did some sketching last friday as well while in the park, trying to learn [hatching](https://en.wikipedia.org/wiki/Hatching).

[![image]({{ site.url }}/images/20150925_plant.png)]({{ site.url }}/images/20150925_plant.png)

A bit of everything in this post, just wanted to give a status update on how things were running along.