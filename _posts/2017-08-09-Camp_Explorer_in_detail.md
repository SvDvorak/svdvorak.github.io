---
title: Camp Explorer in detail
tags:
- Camp Explorer
- Bandcamp
- Coding
---


So in the last post I gave a quick overview of my improved Bandcamp search tool and I mentioned I would get into more detail in the next post. This is that post. Give the [last one a quick read](/2017/08/02/Camp_Explorer.html) if you haven't already.

Before I go into the details of the new implementation I'm going to go over how the old one worked, so you know where I started out from.

Bandcamp has no open API for retrieving albums so the old version relied on scraping the webpage. It would use the basic search function on Bandcamp to search for each individual tag the user had typed in. It would then go through each search result and find albums that existed in all of them (ie, an album had all requested tags).

But the Bandcamp search function was limited to 40 results per page with a total of 10 pages, ie 400 albums per searched tag. That's why the number of results were lacking while also taking quite a while to retrieve. For example, to search for three tags the scraper would have to do 30 requests (tags multiplied by pages). So even if the solution worked it was limited and slow.

So how does Camp Explorer return so many more albums and so much faster? Well, for the first point I was able to figure out the endpoint they use for their mobile app to retrieve albums. If anyone at Bandcamp is reading this... I really, really hope you can forgive my usage of your closed API. From a positive side, this solution is much more lenient on your servers than the old web-scraping version! And I'll explain how.

Using the mobile api I had gone from retrieving 10 pages per request up to 70-100! Thats a tenfold increase and using the previous example would be a total of 200-300 requests for three tags. Running that client side would take minutes!

Instead I decided to create what is essentially be a cache server. A user requests a number of tags from the server and if all of them are already cached it responds with the matching results immediately. If a tag is not cached it puts it in a caching queue. The server then continously caches one tag at a time and saves the results to an Elasticsearch database. With some delay it also continously re-caches the oldest tag.

This way there is only one client to the mobile API, namely the server. So even though it's continually sending requests to Bandcamp there is still only one connection.

This obviously means that if a user asks for a tag that has not been cached he/she would have to wait until the queue catches up and finishes that tag. Both the Chrome-/web-client listens for updates by polling to see if it has finished caching but as mentioned before, it could take a minute or two depending on the queue and number of results for the tag. But for the next user to request the same tag the results would be instant.

There was one problem though. When starting the server from an clean state then it would have no tags cached, meaning that pretty much every requested tag would first need to be cached. That would turn into a big caching-queue. And that just would not do.

So I made it possible to start the server with a seed tag which would at server start retrieve all albums for that tag and then for each album put its tags into a large list. With that list cached it would have most popular tags pre-cached at server start. It does take a few hours to do though. Since all results are saved to the database you don't have to do this every time the server restarts.

While working on the project I felt the need for more transparency on what the server is doing at any time so I created a small statistics-page with information such as number of tags and albums cached, size of caching queue and currently caching tag as well as some requests statistics. Also, because it's fun checking it out, I can mention that currently the server has 892346 albums cached from 2683 tags.

So that is the project in a nutshell. It took longer than initially planned but I'm very happy with the results. If you're curious about the code then checkout the [github page](https://github.com/SvDvorak/CampExplorer). In the next post I'll talk through what I feel I got right as well as what I learned along the way.
