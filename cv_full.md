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
    <p>I'm an enthusiast of all things tech and I love to do anything creative. I may be mainly focused on game programming but I also create 3D models, 3D prints, electronic projects, small websites; essentially if I get to create something I take on most challenges.</p>
    <p>I like to learn new things as well, understanding a new tool or a different way of thinking is something I find exciting. That often includes trying out new programming languages, frameworks or tools.</p>
    <p>And I would say that I am meticulous in whatever I do, I push for quality at all times. Though I know from experience that there is a balance you must find between making something great and getting it out the door.</p>
    <div class="contacts_text">
      <p><b>Mail</b>: {{ _author.email }}</p>
      <p><b>Github</b>: https://github.com/{{ _author.github }}</p>
      <p><b>Itch</b>: https://{{ _author.itch }}.itch.io</p>
      <p><b>LinkedIn</b>: https://www.linkedin.com/in/{{ _author.linkedin }}</p>
      <p><b>Twitter</b>: https://twitter.com/{{ _author.twitter }}</p>
    </div>
    <br />
    <div class="author-links d-print-none">
      <ul class="menu menu--nowrap menu--inline">
        <li class="author_link" title="{{ _locale_string_email }}">
          <a class="button button--circle mail-button" itemprop="email" href="mailto:{{ _author.email }}" target="_blank">
            <i class="fas fa-envelope"></i>
          </a>
        </li>
        <li class="author_link" title="{{ _locale_string_follow | replace: '[NAME]', 'Github' }}">
          <a class="button button--circle github-button" itemprop="sameAs" href="https://github.com/{{ _author.github }}" target="_blank">
            <div class="icon">{%- include svg/icon/social/github.svg -%}</div>
          </a>
        </li>
        <li class="author_link" title="{{ _locale_string_follow | replace: '[NAME]', 'Itch' }}">
          <a class="button button--circle mail-button" itemprop="sameAs" href="https://{{ _author.itch }}.itch.io" target="_blank">
            <div class="icon">{%- include svg/itch.svg -%}</div>
          </a>
        </li>
        <li class="author_link" title="{{ _locale_string_follow | replace: '[NAME]', 'Linkedin' }}">
          <a class="button button--circle linkedin-button" itemprop="sameAs" href="https://www.linkedin.com/in/{{ _author.linkedin }}" target="_blank">
            <div class="icon">{%- include svg/icon/social/linkedin.svg -%}</div>
          </a>
        </li>
        <li class="author_link" title="{{ _locale_string_follow | replace: '[NAME]', 'Twitter' }}">
          <a class="button button--circle twitter-button" itemprop="sameAs" href="https://twitter.com/{{ _author.twitter }}" target="_blank">
            <div class="icon">{%- include svg/icon/social/twitter.svg -%}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="skills">
    <div>
      <h3>Proficient</h3>
      <ul>
          <li>C#</li>
          <li>Unity</li>
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
<br />

### Kathy Rain 2
I've been continuing as principal programmer for Clifftop's next project, Kathy Rain 2. We're still using Unity together with Adventure Creator and my tasks are similar but since KRDC I've greatly improved our toolchain. For KR2 I've also worked more on visual effects such as dynamic lighting and reflections.
<br />
<br />

### Kathy Rain: Director's Cut
I was the principal programmer for Kathy Rain: Director's Cut, a classical pixel art point & click adventure game made in Unity together with Adventure Creator. I came to the project a few months into development and worked on pretty much everything coding related; UI, tools, gamepad support, AC improvements, etc.
<br />
<br />

<br />

## Anwilc
In July 2016 I founded my own company for doing consulting work. These are some of the contracts I've had.
<br />
<br />

### Emberlink
December 2017 - October 2019

Developed new features and helped improve their PubQ application, a template restaurant app to enable customers to get their own custom app. My main task was to create a new orderflow for a new customer but within that budget I was also able to redesign the back office UI, improve receipt printing and a whole slew of small fixes. The app is written in Typescript using Ionic with a Firebase backend.
<br />
<br />

### Mjukvarufabriken
August 2018 - January 2019

Subcontracted and worked with a company that sells custom renderings for new building construction. My job was maintaining their Wordpress website and ordersystem, including writing some custom PHP. They also had several different services on offer that I helped update and also one new one I created in Javascript with Leaflet. 
<br />
<br />

### Suzuki Wire
November 2018

Suzuki Wire has had issues with some plastic parts quickly becoming worn out in their machines. New ones were expensive so I was contracted to see if I was able to 3D print new ones with either a higher durability or a lower price. In conjuction with Suzuki I figured out what plastic and settings would be optimal and printed a small run of parts.
<br />
<br />

### CAB Group AB
September 2016 - October 2017

Worked on CABAS, a WPF desktop application for insurance companies and garages to calculate and plan vehicle reparations. This storied application had quite a bit of legacy code grown over the years, easily reflected in the number of bugs that could arise after a release.

The whole team worked on improving the code quality but I decided to also spearhead a focus on both promoting and implementing an easier workflow for Acceptance Test Driven Development using the xUnit framework.
<br />
<br />

<br />
<br />

## Employment
### IT-Gymnasiet
March 2016 - May 2016

Substituting for a teacher on sick leave for two design courses for year 1 and year 2 students. In class I would teach both 3D modelling in Cinema4D and game design.
<br />
<br />

### Sogeti
June 2011 - December 2014

My first job programming where I did consulting work at Atlas Copco. There I worked on several of their desktop applications designed for planning, evaluation and management of drilling operations both above and below ground. All of them were desktop applications written in C# with mostly WPF but with some legacy Winforms as well.

My time there was the first foray into MVVM, TDD, SOLID practices, agile methodologies and so many more skills that I've continued developing over the years.
<br />
<br />

<br />
<br />

## Education

### Bachelor of Computer Science - Örebro University
September 2008 - June 2011

Studied the now defunct program Simulation and Computer Games Technology for three years. The program was based on the Computer Engineering program which meant that in addition to the programming, math and AI from Computer Engineering it also added several courses with more AI, game design and interaction design.
<br />
<br />

<br />
<br />

## Notable projects
A few of my own projects that have been especially fun and educational to work on.
<br />
<br />

### Camp Explorer
My solution to the problem of finding new and exciting music on the Bandcamp website. Usually the music I'm in the mood to listen to can be a combination of genres, like instrumental electronic music.

Without a way of searching for several genres I created my own search service which keeps it's own database cache of Bandcamps music and quickly returns back results on whatever genres the user searches for. It was also a good exercise for me to learn Javascript, Node, Jasmine, Elasticsearch, Docker and Nginx.

[Camp Explorer](http://campexplorer.io)
<br />
<br />

### Puzzle Kids
A game made during an intense game jam over 72 hours with three friends. In the game you and three others must cooperate and put together jigsaw puzzles before the fire goes out in the room. It was one of the most well planned and well executed short projects I've done with continous game testing and feedback to make sure no time went to waste. First project I've done with FNA as well.

[Puzzle Kids](https://anwilc.itch.io/puzzle-kids)