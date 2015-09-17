---
layout: post
title: Making a textured model
---

So these last couple of weeks (sorry for no posts) I've been getting into the workflow of making textured 3D models. So far I've used flat-shaded models as seen in The Little Power Plant and MicroTactics which means I've used single colored textures for the models. So of course, the simplest texture you can have is a diffuse one which is just putting a 2D image on a 3D model. So below is the house I've been working on with only a diffuse texture.

[![image]({{ site.url }}/images/house_model/house_diffuse.png)]({{ site.url }}/images/house/house_diffuse.png)
<p class="imageText">House with only diffuse</p>

It's not as simple as that sadly, to get a 2D image to "wrap" correctly onto a 3D model one has to define an UV map for the 3D model. An UV map essentially defines where different parts of a 2D image should be placed on the 3D model; this can sometimes be a bit tricky. For example, how can you easily wrap a 2D image onto a 3D sphere?

[![image]({{ site.url }}/images/house_model/house_uv.png)]({{ site.url }}/images/house/house_uv.png)
<p class="imageText">Diffuse texture with UV edges</p>

With only the diffuse things might look a bit flat and dull. That's where a bump or a normal map comes in. A bump or normal map work a bit differently but both have the same effect: give the illusion of depth on a flat plane using incoming light. Usually you can make a bump map from the diffuse image by only doing some color correction and tweaking but for the rock base I went a step further.

I made a high detail version of the house with actual 3D rocks and then precomputed (called baking) a normal map from the 3D model to the 2D model (and also baked in the previous bump map). I won't go into detail on how it does this but the effect is that the flat 2D model surface looks like it's uneven and with a lot more depth, even though it's only a flat 2D plane.

[![image]({{ site.url }}/images/house_model/house_normal.png)]({{ site.url }}/images/house/house_normal.png)
<p class="imageText">House with diffuse and normal map</p>

We're still not done yet. There's one nice effect we can add called ambient occlusion. You may not have noticed previously but because of how light reflects onto objects usually corners, crevices and tight areas are a bit darker in color. This is generally a pretty heavy calculation to do but once again we can bake a map for it. And with that, we have our final house.

[![image]({{ site.url }}/images/house_model/house_occlusion.png)]({{ site.url }}/images/house/house_occlusion.png)
<p class="imageText">House with diffuse, normal map and ambient occlusion</p>

There are even more things you can add like metallic/specular map, emission map, detail mask, height map or secondary diffuse and normal maps (for higher detail); but I'll leave those for you to check out yourself.

<p class="gfycontainer"><img class="gfyitem" data-id="BreakablePleasedBetafish" /></p>