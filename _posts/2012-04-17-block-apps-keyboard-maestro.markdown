---
layout: post
title: Block Apps on OS X with Keyboard Maestro
date: April 17, 2012
--- 

Previously, I shared how I [block some political sites by editing my hosts file](http://ryanirelan.com/articles/block-political-sites-with-hosts-file/) on OS X. About six months ago I also stopped reading RSS feeds, instead relying on a dozen bookmarks in Safari that I would read when I had time. 

It's hard to break the habit of opening [Reeder](http://reederapp.com/) every time I have a free moment, so I forced myself to not have access. Sure, I could have deleted the app entirely but instead I just used [Keyboard Maestro](http://www.keyboardmaestro.com/main/) to automatically quit the app every time I opened it and give me a reminder why.

Here's the macro I used:

![Keyboard Maestro macro to quit app](/img/keyboard_maestro_block_app.png)

The trigger for the macro is when the Reeder application launches. After that the macro executes two actions: quit Reeder and then pop up an alert reminding me that I no longer read RSS feeds. 

I used this macro for about 6 months and I launched Reeder less and less. I recently went back to using Reeder for tracking Twitter searches and other feeds to help me find links and information to post to my [EE Insider](http://eeinsider.com) website. But I no longer launch Reeder out of habit like before.