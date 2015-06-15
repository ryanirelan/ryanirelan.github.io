---
layout: post
title: "Merchant Account vs. Stripe"
date: 2014-07-17 21:55:48 -0500
comments: false
categories: ecommerce, payments, stripe, authorize.net
---

The history of selling at [Mijingo](http://mijingo.com) has been a progression toward bringing it all closer to home. I started selling training materials with a [publisher](http://pragprog.com). Two years later, I switched to a hosted selling platform that handled the cart, and all aspects of order management. Two more years later, I moved to running the store right inside of my website CMS, and created a merchant account with my bank using Authorize.net as my gateway.

Over the course of six years I've removed some middle people and a lot of the cost. I gained more control over all aspects of selling (including checkout funnel tracking), money from sales hit my business account faster, and fees decreased significantly. 

But I keep thinking about [Stripe](http://stripe.com), its modern API, and its wide support among so many e-commerce tools. Authorize.net is an old hog of a service; their website and tools are sorely in need of an update (I dread having to log in and process a refund) and my bank's tools for the merchant account are equally as awful (I once spent 2 months trying to get access to reporting).

The web professional in me wants something better. Stripe is that something. But the small, indie business owner in me wants to keep everything as close to home as possible and with the fewest fees.

So I did the simple math using some fake numbers to see if Stripe makes sense for me.

### Fees and Costs

[Stripe costs 2.9% plus 30¢ per transaction](https://stripe.com/us/pricing). If you do $10,000/month in net sales over 500 transactions (averaging $20 per transaction), Stripe takes $440 ($290 in commission + $150 in transaction fees). If you do the same revenue with fewer sales, Stripe will be even cheaper.

In my situation (and I can only speak to my merchant account terms), the same transactions could cost me more depending on how my customers pay. American Express is an expensive payment method to process (which is why some retailers refuse to accept it). The Visa/Mastercard network charges you based on _attempted_ transaction. If your site is used as the testing grounds for fraudsters then you could see your account dinged for every attemtped fraudulent charge. And then there's the monthly fee.

Additionally, about 40% of my customers pay through PayPal instead of with a credit card. This is almost always the case for non-US customers. [PayPal charges the same as Stripe](https://www.paypal.com/webapps/mpp/merchant-fees) so I am saving on the expensive network charges. 

Like PayPal, Stripe hides the variable network credit card fees and simply charges you a flat per transaction fee. They probably do pay a variable per transaction fee to porcess your payments depending on the type of card used but you don't see it. They can offset those costs by mixing larger transactions with smaller ones, and presumably by negotiating better rates directly with the card networks.

My guess is that Stripe is using the 25¢ per transaction to cover the network fees and most of the 2.9% is for their operating expenses (staff, servers, security, PCI compliance). But I have no insight into their business so that's just a _wild, simplistic, uninformed guess_.

But because Stripe's customer base varies in amount processed and number of transactions, they can set a flat rate and come out profitable after AMEX and Visa/MC are paid. 

As a small business owner who has spent thousands per year on fees, Stripe is appealing just for the fee arrangement.

### Access to the Cash

A major benefit of going with a merchant account is that you get faster access to your money. Revenue from my sales today will be in my business account tomorrow morning when I wake up. It doesn't get much faster than that.

When I used a hosted e-commerce platform a couple years back, they only paid twice per month. It was nice to have the lump payments come in but that can be tough if you're in need of the cash. It also wasn't so nice that a company is holding _and earning_ off my money even though I'm paying a hefty fee to use the service! 

Stripe offers two day rolling deposits, which is nice and doable for cashflow. I could do just fine with that if the trade-off was reduced fees.

### Chargebacks

Finally, there's the chargeback situation. I haven't had many chargebacks since setting off on my own with a merchant account. But there have been some and they are _expensive_. A payment gateway like Authorize.net will typically charge you a hefty fee per chargeback that can be more than the total transaction. That means I lose the sale _plus_ the fee that was more than the sale. They subtract the fee and sale amount from your nightly settlement so you don't have time to dispute it. They have direct access to your bank account (and automatically debit fees and chargebacks).

Stripe doesn't entirely protect you from chargebacks. They charge $15 per chargeback but refund that if the dispute is resolved in your favor. That's more than half what other gateways charge.

### So am I going to switch?

The decision is centered around the variable fees for different card services, the high chargeback rate, and some future changes for how Mijingo charges for courses. 

Changing payment gateways is easy enough for me within my e-commerce tool, so it's worth a month or two trial to see how the fees and experience shake out. I'll keep you updated.