---
title: The current project
cover: /images/The_Little_Power_Plant.png
tags:
- TLPP
- Game dev
aside: false
---

I think it's high time I start talking a bit more about the project I'm working to get into the game making workflow. As I mentioned in my first post this was planned to be a shorter project, spanning two weeks or so but has already taken longer. The idea of the game came to me when I was walking past the power plant Åbyverket here in Örebro about making a game where one has to produce power to supply a city. The player has to keep up with the constantly expanding city while at the same time make sure to not overload the power plant.

[![image](/images/The_Little_Power_Plant.png)](/images/The_Little_Power_Plant.png)

The image above shows a typical scenario. There are three machines running in the power plant, one of each machine type available in the game. These generate the power output for the power plant, the total output is shown as the green bar on the wall. The dark yellow color beneath the green bar represents the required output for the city which is also shown numerically above as Min output. What you need to do as the player is to constantly expand and build new machines while maintaining optimal output on the ones you have. I have tried to make the machines work similarly to how the real ones do but I've sacrificed some realism for the sake of gameplay. Also note that all these values are completely temporary, there is a lot of adjustments to be done mostly for balance but also accuracy.

<p class="gfycontainer"><img class="gfyitem" data-id="BiodegradableMellowHorseshoecrab" /></p>

> Coal machine
{: .imageText }

The coal machine is the simplest and cheapest of the three but probably not the most powerful one, you shovel coal in and get energy out. The amount of energy you get is based on the temperature of the machine but it gets to a point of diminishing returns when you reach a certain temperature.

<p class="gfycontainer"><img class="gfyitem" data-id="PlushPessimisticCorydorascatfish" /></p>

> Hydro machine
{: .imageText }

The hydroelectric machine is a step up in most ways. Here you control the flow of water going through the turbine where a faster flow means more power but also faster wear. The durability of the machine is shown as a percentage, the lower that number gets the higher the likelyhood that the machine will break, shutting the machine down and forcing you to wait until it repairs. So you need to balance the hydro-machines you have so that several of them are likely to break at the same time.

<p class="gfycontainer"><img class="gfyitem" data-id="CalmLeafyAcornweevil" /></p>

> Nuclear machine
{: .imageText }

The final and most complex machine is the nuclear one. Here you must keep the rod temperature low enough to not overheat but high enough to not lose the chain reaction. You can affect the temperature by moving the control rods (slider on the right) or by how you handle the fuel rods. As the fuel rods degrade their output gets smaller so you need to swap them out to keep the power at an optimal level.

So you may be wondering what that switch on the wall does. It's an emergency override because when it is switched on all safety mechanisms on your machines are turned off and they are forced to run on maximum output. This is what happens when your output is below the required output and you don't have income to pay for the missing electricity. The big wigs up in the board room don't like losing money, especially from their own pockets, so they use this short sighted approach to "fix" the problem. This of course will overload the entire power plant. And that is bad... because when the power plant is overloading, the electricity transformer gets mad (the big red machine in the back). What that means, I'll go into in the next post.