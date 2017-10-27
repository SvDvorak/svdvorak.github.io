---
layout: post
title: Creating a game controller
---

Considering how technical that last post got I thought I should add something more easily digestable. Like the current side project I have where I'm creating my own game controller! Why would one ever want to do that you might ask.

Well, I have always been fascinated by game developers who've created special controllers for their games, it adds something to the experience. Here I'm creating a controller but I don't have a game for it though but it would be awesome to have as a game jam theme. That and I was itching to do a soldering and woodworking project.

[![image](/images/custom_controller/original_gamepad.jpg)](/images/custom_controller/original_gamepad.jpg)

I didn't want to have to fiddle with creating my own circuitry so instead I found a used old gamepad at a second hand store for about 6 dollars and I butchered it to get at the circuitry inside. It didn't have to be an especially good controller, the circuit is digital so it either works or it doesn't and I was going to swap out the cheap buttons anyway. I opted for a controller with only digital switches so as you can see, the gamepad only has buttons and a directional pad (which are buttons in disguise really).

[![image](/images/custom_controller/soldering_switch.jpg)](/images/custom_controller/soldering_switch.jpg)

> Front of PCB
{: .imageText }

[![image](/images/custom_controller/pcb_back.jpg)](/images/custom_controller/pcb_back.jpg)

> Back of PCB
{: .imageText }

I've always been a big fan of nice, physical switches that have a distinct trigger point so the idea was to swap most buttons for switches and maybe have two normal buttons. And the board supports 8 normal buttons and 4 directional, turns out the direction pad is exclusive so you can't activate both left and right or up and down and hope to get individual outputs. So discounting two directional buttons I have 10 inputs. I had to make sure it would work though so I made a small test board where I could mount the switches and it worked perfectly (except for previously mentioned directional problem).

[![image](/images/custom_controller/test_board_front.jpg)](/images/custom_controller/test_board_front.jpg)

> All the switches in their glory
{: .imageText }

[![image](/images/custom_controller/test_board_back.jpg)](/images/custom_controller/test_board_back.jpg)

> The tangle of wires behind it all
{: .imageText }

I got a nice discount on [the switches](http://www.kjell.com/sortiment/el/elektronik/elektromekanik/strombrytare/vippomkopplare/miniatyromkopplare-p36016) but I also ordered a couple of nice [arcade buttons](http://www.electrokit.com/tryckknapp-arkad-konkav-o35mm-gron.46831) and LEDs that I'm going to use. I'll go into more detail on the final design of the controller next time. It's not going to look like a normal gamepad though, believe me.