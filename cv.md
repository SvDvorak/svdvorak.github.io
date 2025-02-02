---
layout: page
title: CV
show_title: false
description: Andreas Wilcox CV
---
{%- assign _author = site.author -%}

## Hi, I'm Andreas Wilcox
<div class="split">
  <div class="intro_text">
    <div class="photo_text">
      <img src="/images/cv/me.jpg">
      <p>I'm a programmer and enthusiast of all things tech. I may be mainly focused on game programming but I also create 3D models, 3D prints, electronics projects, small websites; essentially if I get to be creative I take on most challenges.</p>
    </div>
    <p>I like learning new things; getting a deeper understanding or finding a different way of thinking is something I find exciting. That often includes trying out new programming languages, game engines, frameworks or tools.</p>
    <p>I'm also meticulous in whatever I do, I push for quality at all times. Though I know from experience that there is a balance you must find between making something great and getting it out the door.</p>
    <div class="author-links">
      <ul class="menu menu--nowrap menu--inline contacts">
        <li class="author_link">
          <a class="button button--circle mail-button" itemprop="sameAs" href="https://www.google.com/maps/place/%C3%96rebro" target="_blank">
            <i class="fas fa-map-marker"></i>
          </a>
          <p>Örebro, Sweden</p>
        </li>
        <li class="author_link">
          <a class="button button--circle mail-button" itemprop="sameAs" href="tel:+46739128853" target="_blank">
            <i class="fas fa-phone"></i>
          </a>
          <p>+46(0)739128853</p>
        </li>
      </ul>
    </div>
    <div class="author-links">
      <ul class="menu menu--nowrap menu--inline links">
        <li class="author_link">
          <a class="button button--circle mail-button" itemprop="sameAs" href="https://anwilc.com" target="_blank">
            <i class="fas fa-globe"></i>
          </a>
        </li>
        <li class="author_link">
          <a class="button button--circle mail-button" itemprop="email" href="mailto:{{ _author.email }}" target="_blank">
            <i class="fas fa-envelope"></i>
          </a>
        </li>
        <li class="author_link">
          <a class="button button--circle mail-button" itemprop="sameAs" href="https://github.com/{{ _author.github }}" target="_blank">
            <div class="icon">{%- include svg/icon/social/github.svg -%}</div>
          </a>
        </li>
        <li class="author_link">
          <a class="button button--circle mail-button" itemprop="sameAs" href="https://{{ _author.itch }}.itch.io" target="_blank">
            <div class="icon">{%- include svg/itch.svg -%}</div>
          </a>
        </li>
        <li class="author_link">
          <a class="button button--circle mail-button" itemprop="sameAs" href="https://www.linkedin.com/in/{{ _author.linkedin }}" target="_blank">
            <div class="icon">{%- include svg/icon/social/linkedin.svg -%}</div>
          </a>
        </li>
        <!--<li class="author_link">
          <a class="button button--circle twitter-button" itemprop="sameAs" href="https://twitter.com/{{ _author.twitter }}" target="_blank">
            <div class="icon">{%- include svg/icon/social/twitter.svg -%}</div>
          </a>
        </li>-->
      </ul>
    </div>
  </div>
  <div class="skills">
    <div>
      <h3>Proficient</h3>
      <ul>
          <li>C#</li>
          <li>Unity</li>
          <li>Adventure Creator</li>
          <li>Blender</li>
          <li>ATDD</li>
      </ul>
    </div>
    <div>
      <h3>Knowledgeable</h3>
      <ul>
          <li>Git</li>
          <li>Perforce</li>
          <li>HLSL</li>
          <li>Docker</li>
          <li>HTML & CSS</li>
          <li>Angular</li>
          <li>Typescript</li>
      </ul>
    </div>
  </div>
</div>
<br />

## Clifftop Games
Principal programmer
<br />
May 2020 - Now
<br />

### Kathy Rain 2
I've been continuing as principal programmer for Clifftop's next project, [Kathy Rain 2: Soothsayer](https://store.steampowered.com/app/1466390/Kathy_Rain_2_Soothsayer/). My tasks are similar to the ones I had during KRDC and we used the same tech but for KR2 I greatly improved our toolchain; including easier to use asset importers, better search tools, easier content management and more. For KR2 I've also focused on VFX such as dynamic lighting, reflections and palette swapping.
<br />

### Kathy Rain: Director's Cut
I was the principal programmer for [Kathy Rain: Director's Cut](https://store.steampowered.com/app/1395030/Kathy_Rain_Directors_Cut/), a classical pixel art point & click adventure game made in Unity together with Adventure Creator. I came to the project a few months into development and worked on pretty much everything coding related; UI, tools, gamepad support, Adventure Creator improvements, etc. But as we're a small team I also did scripting, art asset tweaks, audio implementation and game design.
<br />
Skills: C#, Unity, Adventure Creator, HLSL, Perforce, Jetbrains Rider, Aseprite, Photoshop.
<br />
<br />

## Anwilc
In July 2016 I founded my own company for doing consulting work and developing my own games. These are some of the contracts I've had.
<br />

### PubQ
December 2017 - October 2019

Developed new features and helped improve their PubQ platform, a system for restaurants to get digital ordering and their own custom app. I developed a new orderflow for new customers, implemented a table booking algorithm, redesigned the back office UI, improved receipt printing and a whole slew of small fixes.
Skills: Typescript, Angular, Ionic, Firebase, Git.
<br />

### Mjukvarufabriken
August 2018 - January 2019

Subcontracted for a company that sells custom renderings of new building constructions. My job was maintaining their Wordpress website and order system, including writing custom PHP. I helped them update existing services and implement new ones to offer to their customers.
Skills: PHP, Javascript, Angular, SVN
<br />

### CAB Group AB
September 2016 - October 2017

Worked on CABAS, a desktop application for insurance companies and workshops to calculate and plan vehicle reparations. A longlived application with a lot of legacy code which was clearly reflected in the number of bugs reported. On top of general feature implementation I also spearheaded an effort in implementing an easier workflow for Acceptance Test Driven Development and promoted the new workflow within the team.
Skills: C#, WPF, Microsoft SQL Server, TFS, ATDD, xUnit.
<br />
<br />

Older employment/contract history available upon request.

<br />

## Education
### Örebro University
September 2008 - June 2011

I studied the now defunct program Simulation and Computer Games Technology for three years and received a Bachelor of Computer Science.
<br />
<br />

## Other notable projects
### [Camp Explorer](http://campexplorer.io)
My solution to the problem of finding new and exciting music on the Bandcamp website. I created my own search service that caches Bandcamps music and quickly returns back results on whatever genres the user searches for.
Skills: Javascript, Node, Jasmine, Elasticsearch, Docker, Nginx, Git.

<br />
<br />

## Languages
<ul>
<li>Swedish - Native
<li>English - Fluent
</ul>