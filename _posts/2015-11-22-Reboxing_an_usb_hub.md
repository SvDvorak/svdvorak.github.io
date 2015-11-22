---
layout: post
title: Reboxing an usb hub
---

Is reboxing a word? It should be. While I was buying the previously mentioned [USB game pad]({{ site.url }}/2015/08/20/_Creating_a_game_controller.html) I also stumbled upon a small but terribly ugly USB hub. It was cheap so I got the idea to simply make a new case out of wood. Should be simple enough.

[![image]({{ site.url }}/images/usb_hub/original_case.jpg)]({{ site.url }}/images/usb_hub/original_case.jpg)
<p class="imageText">The original ugly USB hub</p>

I gutted the case and pulled out the PCB. The idea I had in my head for the new case would to have all four USB connections pointing upwards which required me to desolder the connectors since they were soldered directly onto the PCB, a thing easier said than done. Desoldering works great if you can do one connection at a time but here I had to do it with 6 connections at a time; lets just say it took a while.

[![image]({{ site.url }}/images/usb_hub/pcb_hack.jpg)]({{ site.url }}/images/usb_hub/pcb_hack.jpg)
<p class="imageText">PCB and the sneaky hack to fix a USB port</p>

And I managed to ruin one of the soldering joints in the process, rendering one port useless. It felt like such a waste, only having three USB ports. There was another way to fix it if I could find wherever that soldering joint connected to. After a lot of searching I found it, it was on the integrated circuit with all the other tightly packed connections. I was able to get it soldered without touching any other connection but it took about two hours worth of tries. Another thing that broke while desoldering was the LED but that was easy to swap for a red one I had handy.

[![image]({{ site.url }}/images/usb_hub/box_and_connectors.jpg)]({{ site.url }}/images/usb_hub/box_and_connectors.jpg)
<p class="imageText">All case pieces cut out and USB connections soldered</p>

Making the actual box was a breeze compared to the previous stuff, I just needed to measure the space requirements of the PCB and USB connectors and saw out plywood-pieces accordingly. I shamelessly have to plug my [contour saw](http://www.dremel.com/en-us/Tools/Pages/ToolDetail.aspx?pid=MS20), with smaller pieces it makes it so much easier to cut than using a large jigsaw.

[![image]({{ site.url }}/images/usb_hub/finished.jpg)]({{ site.url }}/images/usb_hub/finished.jpg)
<p class="imageText">The finished hub with pen for scale</p>

For color I decided to go with a dark brown stain I have; I love that color. To make sure that the connectors would stay put as you plugged them in and out I used a whole lot of glue from my glue gun. With the wooden pieces glued together as well it was finished and it works perfectly! As you may have noticed, I haven't made it easy to repair the thing if it breaks; it's because I just couldn't figure out an easy way to make it reopenable. So lets just hope it keeps on working!