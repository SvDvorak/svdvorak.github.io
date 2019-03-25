---
title: Switching architecture
tags:
- Game dev
- Coding
---

As I mentioned in the last post I've been rewriting the code in MicroTactics because well... it was pretty terrible. It started as a prototype which meant I just crammed functionality in as I went along so when I wanted to add AI squads the player input code was so tangled with the squad code that it would require quite a rewrite anyway. And I've become a big proponent of [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) in my previous job so I was hoping to do that in Unity now that I was rewriting anyway.

Sadly, TDD isn't super easy straight out of the box but as I was looking around for an easy way to do Dependency Injection in Unity (sadly, I've not found one) I stumbled upon the following presentation which I highly recommend if you have an hour. And yes, we're gonna get technical now.

<div class="youtubecontainer"><iframe class="youtube" src="https://www.youtube.com/embed/1wvMXur19M4" frameborder="0" allowfullscreen></iframe></div>

I've read about Entity Component Systems previously and even dabbled a few hours in making my own but I never really got started with it. But boy did that presentation sell me on it, I got the feeling that you easily could separate your concerns which would enable me to do TDD (which was my initial goal). But it really is a different way of thinking, most programming patterns just go straight out the window. So how does it work?

Unity already has the entity part implemented, each game object could be seen as an entity but built up of behaviors. But with Unity-behaviors you mix state, configuration and behavior in the same place which muddles the code. In ECS an entity is completely behavior-less, it's only a container of data components. Separate from these entities are systems which operate on the entities and their components, implementing the behavior of your game.

The systems explicitly specify what kind of entities they work with by defining what components they listen to; for example a move system might listen to all entities with a position and move component to update the position with the movement each frame. And for me I can do that without involving Unity in anyway, letting me more easily test that the system does what it's supposed to. Worth emphasizing is that these systems react to combinations of components, not a single type (essentially [duck typing](https://en.wikipedia.org/wiki/Duck_typing)), so if you want an entity to have a specific behavior you just add the components needed.

This has allowed me to separate concerns more easily and something I've noticed is that instead of having deeper class diagrams you instead get a wider one because systems don't have as many dependencies but instead you have multiple systems that operate on different levels of abstraction. For example, I have a system that handles squad AI which creates move orders but it has no actual implementation of forwarding the orders to the units. Instead a different system reacts when an order is added to a squad and then performs the duty of giving individual unit orders.

It's taken some time to get used to and I still don't feel completely comfortable yet but I'm liking it so far. And I'm really happy to be TDD'ing again. You can find the [ECS framework here](https://github.com/sschmid/Entitas-CSharp), the devs in the presentation are quite active in the gitter-chat.