---
layout: post
title: "Moving to OctoPress"
date: 2014-05-30 21:53:59 -0500
comments: true
categories: cms, internals, octopress, jekyll
---

I moved this site to a more sophisticated version of [Jekyll](http://jekyllrb.com) (the static site publishing engine). I'm now generateing the site with [OctoPress](http://octopress.org), a theme framework for Jekyll that will make it easier for me to write on the site and, if I decide to, expand it with some more pages.

In a recent issue of my [weekly newsletter of content mangement](http://us2.campaign-archive1.com/home/?u=a6bdb5e1690471814d869215e&id=426cdc1197), I complained about the friction created by theme-based content management systems. I wrote:

> Jekyll is a hacking delight when it comes to putting together a static file website. Write in Markdown, use Liquid templates, generate your site.

> Octopress is also Jekylll but more formalized with a theme framework and a few extra tidbits and doodads. It's simple to get started publishing and quite nice.

> But the theming makes me want to run away. I have a three template website that now requires a chop and paste effort just to get it running.

> Theme-based systems are great if you stick to a pre-made theme or are willing to create your own. If you just want to get a site up and running with some custom templates, you better up your iron intake because bruising will occur. Ouch.

I still feel that way but I was able to just wedge my existing site design ("design") into OctoPress. I still need to go back and properly carve up the templates into the theme parts but for now it works.

OctoPress comes with some nice Rake tasks 

The best part about the move to OctoPress is that my content migration was just a matter of copying my Markdown post files from one directory to another. A dream content migraton if I've ever experienced one.

I don't see myself going back to a database-driven CMS for my personal writing here, but I may decide to give as many static site generators as possible a fair shake.