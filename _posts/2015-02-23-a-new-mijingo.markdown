---
layout: post
title: "A New Mijingo"
date: 2015-02-23 22:27:43 -0600
comments: true
categories: 
---

Over the last several months I've been working with [AJ Lohman](http://www.andrewlohman.com) to modernize the [Mijingo website's](https://mijingo.com) design and code.

Last weekend I deployed the new site to the production server. Here's a video I made to cover what Mijingo is all about and highlight some features of the new site:

<iframe src="//fast.wistia.net/embed/iframe/zopphyp3au" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="900" height="506"></iframe><script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

First and foremost, AJ and I worked on modernizing the look of Mijingo. I didn't want it to be too trendy (although the full bleed image is something I ended up asking for) and lose the ability to effectively server my customers. 

I had two specific (perhaps obvious) goals in mind: 

* make a better impression on new visitors when they came to check out the [course library at Mijingo](http://mijingo.com/products) and 
* improve the experience for customers _after_ they make a purchase.

The previous site did the best it could but it was old. The design was outdated--hastily retrofitted to be responsive--and the code well beyond its prime.

We settled on a simple look. The focus was on the new course covers that AJ created using the [Whitney typeface from Hoefler & Co](http://www.typography.com/fonts/whitney/overview/) and some custom shapes and color palate he worked up.

![Course Library on Mijingo](/img/mijingo-course-library.png)

You can see that on the [Course Library](https:/mijingo.com/products) with its "cover mode" listing of the products. The courses are color coded based on track: Design is red, Development is green, and CMS/Publishing is a purple.

The images are also large and beautiful. Why? Because we used [SVG (Scalable Vector Graphics](https://mijingo.com/products/screencasts/svg-tutorial) to display all of the cover art. No large bitmap images to load and the covers look gorgeous on all displays: big, small, retina or standard.

The second improvement--the logged-in experience for customers--was addressed by redoing how customers access their purchased courses.

The previous version of Mijingo.com provided the customer with a simple table that listed all of their courses, the videos in those courses, and links to stream the video on the site or download it to their computer.

Most customers chose the download option because the streaming option wasn't ideal. For the new Mijingo site I really wanted to improve how customers can watch purchased courses right on the site.

I turned the table listing of purchased courses into a simple, elegant grid of covers. There's no copy or information about the course other than what is contained in the cover art. Why repeat what's already there. Plus, the customer has already purchased the course so they're probably familiar with what they have.

![Mijingo's My Course Library](/img/mijingo-my-course-library.png)

Clicking on a cover brings you to a one of the following pages, depending on the course:

* A table listing the course videos, with links to stream or download
* The course video, ready to play (if there was only one video in the course)
* A table listing the courses and their videos (for a bundle of courses)

This design is a first pass and definitely not final. I want to keep how customers access their courses as simple as possible so I started with an table approach that gets right to the point.

One change from before is that I broke out the downloadable course materials into a sidebar so they'd sit alongside the videos, even while watching the course. The course materials should be accessible at all times while watching the course not just when you are choosing which video to stream or download.

![Watching the SVG Course](/img/mijingo-svg-course-logged-in.png)

These aren't final implementations but small steps (or giant compared to the old site) in improving the experience of watching a course.

I still have some more work to do--we have dozens of fixes and tweaks we're tracking for the next deployment--including creating guide pages (pulling blog posts, tutorials, and videos into one page) for each major technology, and improving the performance of the site.

I'm proud of the update and it's a solid foundation on which I can build. I hope you'll check it out and [learn something new with Mijingo](https://mijingo.com).




