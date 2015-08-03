---
layout: post
title: Old school low resolution
---

[![image]({{ site.url }}/images/low_res_look_shader.png)]({{ site.url }}/images/low_res_look_shader.png)

I've been busy rewriting a lot of code and functionality recently so I haven't had much to show for the last week but I have fiddled with shaders in Unity. I've recently become pretty fond of the low resolution style of graphics found in Playstation 1 games, especially after trying out the short game [Bernband](http://gamejolt.com/games/bernband/34864) shown below.

[![image]({{ site.url }}/images/bernband.jpg)]({{ site.url }}/images/bernband.jpg)

So a while ago me and my friend Chris Jansson created a shader in ShaderToy that would create a similar effect by sampling every x'th pixel and skipping the ones in between. I decided to recreate the shader for Unity, mostly to learn how shaders are handled there, and figured I'd make the code available. The result is the image you see at the top of this post, just a basic static scene with the shader. 

* [Source](https://github.com/SvDvorak/UnityShaders)
* [ShaderToy implementation](https://www.shadertoy.com/view/MsjSD1)
* [Unity example with physics](https://dl.dropboxusercontent.com/u/107494599/LowResLook/LowResLook.html)