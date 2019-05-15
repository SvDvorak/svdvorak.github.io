---
title: Editor-ial
cover: /images/AMazeBoss_release_2_editor.png
tags:
- A Maze Boss
- Game dev
- Playable
aside: false
---

[![image](/images/AMazeBoss_release_2_editor.png)](/images/AMazeBoss_release_2_editor.png)

> [Click here to try out the latest version](https://dl.dropboxusercontent.com/u/107494599/AMazeBoss/BuildWeb/index.html)
{: .imageText }

I mentioned in the last post that I created an editor to make it easier for me and Oscar to build levels for the game. Well, today I'm releasing a build that allows you to play around with it! It's still a bit rough but it works. Just select Editor from the currently very basic main menu and you're good to go (Escape returns to previous view). Otherwise you might enjoy the 8 new levels in play mode.

<p class="gfycontainer"><img class="gfyitem" data-id="CautiousDearChihuahua" /></p>

The editor works on the concept of tiles & items. A tile is something that has a ground piece and is static, for example normal ground or walls count as tiles. An item is something that can be above a tile if the tile allows it (walls cant hold items of course). Examples of items is the player, boss, spikes, boxes, etc. Only one item can be on a tile at a time. You place either tiles or items by using your mouse.

* Left-click - Place/replace object
* Right-click - Remove object
* Number keys 1-5 - Select object to place, press same number again to cycle
	1. Ground tile
	2. Walls, pillars
	3. Trap- and trigger-tiles
	4. Dynamic items such as spikes, boxes
	5. Hero & boss

<p class="gfycontainer"><img class="gfyitem" data-id="AdolescentSevereHeron" /></p>

Each time you place the same object you rotate it by 90 degrees so if you want the hero or boss to face a specific direction, just press several times. Saving and loading is done locally on your computer, put in a level name and it'll show up in the load dialog. Load a level by pressing the down-arrow on a level and click the X to delete it.

To create a playable level you need to have a hero & boss, press the Play button or Enter on your keyboard to try it out. Pressing Escape returns from play mode to editor. Currently you can't change health on boss or player because when we're developing we use the Unity editor to change those values. Sharing of levels is something that we're hoping to do later on but will probably take a little while.

Just noticed a bug if you play a level in the editor and then go back to the main menu and start a new game, reload page and play directly in that case. Also seems to be somewhat weird when entering editor and editor loads last used level, clear and load level again.