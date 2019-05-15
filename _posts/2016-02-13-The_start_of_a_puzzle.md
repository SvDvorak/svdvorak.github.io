---
title: The start of a puzzle
cover: /images/AMazeBoss_release_1.png
tags:
- A Maze Boss
- Game dev
- Playable
aside: false
---

Working alone does take its toll, it can be somewhat demotivating to chug away at the project without much discussion or interaction with other people. So at the end of the last year I was given the opportunity to take in an intern for 10 weeks. More specifically Oskar Engholm, who's studying technical illustrator (teknikillustratör) in Arvika. It felt like a good change and two people (almost) always get more stuff done than one. Oskar would be with me for 10 weeks which felt like a good amount of time to do a prototype since I didn't want to throw him into MicroTactics and not have something finished after his time was over.

[![image](/images/lara_croft_go_titan_souls.png)](/images/lara_croft_go_titan_souls.png)

> Lara Croft Go and Titan Souls
{: .imageText }

So we met at the end of November and discussed the project. Oskar had a game idea in the vein of Titan Souls but I wanted to figure out a different angle. I had recently started playing and not surprisingly, become fasacinated by Lara Croft Go so I had an idea of making our game turnbased. A suggestion of having one boss-variation where only the boss or the player could move at a time was floated and I couldn't let go of the thought. So the more we discussed it as work started the more it turned into a puzzle game in which the player had to figure out the pathing of the boss and set up traps in that path.

The first week was a blur of cranking out work. I got simple movement working the first day but noticed immediately that it was going to be an issue to create levels in Unity alone. A level editor was needed. Luckily it turned out to be surprisingly easy to get one started and it was so much fun creating one! By the end of the week you could build a map, run it, move around the player and switch to have the boss move and attack the player. Over the christmas break I decided to clean up the code and use [Entitas](https://github.com/sschmid/Entitas-CSharp) which took a few days.

[![image](/images/AMazeBoss_level_editor.gif)](/images/AMazeBoss_level_editor.gif)

> First week level editor
{: .imageText }

The next three weeks went past with us incrementally adding features, art, animations and in general just improving the code. At the end of week 4 the game was definitely playable but what we noticed was that we just couldn't build a fun level, the player didn't have many options for interactivity and the problem space was too small. This because all you could do was place your character and switch so that the boss would move towards you. Having reusable traps was also a bad idea since the player could just make the boss walk over the same traps over and over again, eliminating all challenge. After a longer lunch discussion we came to the conclusion that the player had to have some way of altering the level more than just placing spikes in traps. Which meant movable boxes.

So at the beginning of week 5 I decided to do something I should have done the first week... a paper prototype. This type of game is an incredibly good fit for a paper prototype. Armed with two new stacks of Post-its I started to create levels. It was tricky at first and the early ones were pretty simple, but with a few small tweaks to the game rules I was creating semi-complex puzzles. One of the main advantages of a paper prototype is that it's incredibly easy to alter the rules since they're all in your head anyway. Two rule changes that altered quite a bit was that the player could also get hurt by activating traps and every trap was single use.

[![image](/images/AMazeBoss_release_1.png)](https://dl.dropboxusercontent.com/u/107494599/AMazeBoss/BuildWeb/index.html)

> First test release
{: .imageText }

For week 6 we decided to make a release of the game on Facebook, so that we could get friends testing and giving feedback. People seemed to like it though it had a high difficulty curve which combined with very basic instructions made it a tough challenge. To entice people I decided that I would buy lunch for anyone that could complete the 6 levels of the game, a feat that only two people did. I don't think the puzzles themselves are unfairly hard (though the last one is a bit tedious), it's just that they throw a lot of concepts at the player quickly which makes it difficult. A gentler curve would definitely help. Still, a good moral boost for me and Oskar while also giving us some good feedback. Next release will probably be next week but until then you can still play the [previous one here](https://dl.dropboxusercontent.com/u/107494599/AMazeBoss/BuildWeb/index.html). A quick note, the controls don't work great on Mac; Ctrl is Cmd on Mac which has some very specific functions when used with the arrow-keys.