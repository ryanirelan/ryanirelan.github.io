---
layout: post
title: Auto-Quit DEVONthink (or any other app)
date: January 27, 2013
--- 

A quick, simple tip I mentioned last week when I was on the [Non-Breaking Space Show podcast](http://nonbreakingspace.tv/) (not yet out, but soon!).

In the past I've run into problems where my [DEVONthink Pro Office](http://www.devontechnologies.com/products/devonthink/devonthink-pro-office.html) database would get corrupt and then I'd be left with a little clean-up or, worse, some missing data. 

The corruption happens because I use Dropbox to sync my databases between my laptop I use for work and my Mac Pro at home. I use my Mac Pro a lot in the evevnings for personal stuff (scanning papers, paying bills, editing video) and DEVONthink is one of my most used apps.

DEVONthink doesn't like it if you try to open a database again before it was properly closed. It displays a dialog box that the databases are open (it knows because of the Dropbox sync) but still allows me to move forward and open them again on a second machine. This can result in database corruption or data loss. I experienced it while working on my talk for [EECI](http://eeciconf.com) last year. It wasn't catastrophic but I lost a few hours worth of research. That sucks.

To keep from getting the warning and to prevent any database issues, I have a [Keyboard Maestro](http://www.keyboardmaestro.com/main/) macro that runs every night at 2:30 AM called "Nightly Quit DevonThink." It's dead-simple: quit the app at 2:30 AM every day of the week.

![Keyboard Maestro macro to quit DEVONthink Pro Office at certain time](/img/devonthink-quit-keyboard-maestro.png)

No more database issues or warning messages.

