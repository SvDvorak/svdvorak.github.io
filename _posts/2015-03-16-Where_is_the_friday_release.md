---
layout: post
title: Where is the friday release?
---

As I mentioned last week I said I would be releasing weekly builds of the game for play. So where is it you might ask. Well, I was hoping to have the current feature I'm working on done and usable by friday but that obviously didn't happen. The feature I'm talking about is city generation.

[![image](/images/city_generation_screenshot.png)](/images/city_generation_screenshot.png)

For the second part of the game where you're stomping around with your transformed machine you need a city. So I have been hard at work at implementing a system that can build up a city without making it look like it's repeating. I do this by creating tiles that have the same width and height, that way it's possible to just put tiles one next to eachother. Sadly I can't just randomly place tiles and make it look good because then roads won't connect properly to eachother so instead I've worked out a system where you mark connections on a tile and the system makes sure all connections are satisfied when placing out new tiles.

[![image](/images/city_tile.png)](/images/city_tile.png)

> Tile made by Jeremi Stadler
{: .imageText }

I was able to finally get it working today (Sunday) and with an amazing tile made by Jeremi Stadler I could make the image above. I did have to cheat with the tile connections since the system can't make a full city with only one tile. So until next week, when I should have something playable again, enjoy the screenshot and have a good week!