---
title: Back-end Service Update
publish_date: 2024-03-01
---

> **DISCLAIMER**
>
> *This blog post will be a bit technical, so, if you don't like this post, we don't recommend you read this post further. And if you are interested in reading, please continue.*

Hello! 👋

In this post, we want to give you an update about our website back-end service.

Some of our websites will no longer use [CloudFlare](https://www.cloudflare.com)'s CDN service. We have learned something about Netlify's CDN behavior, and we cannot use [Netlify](https://www.netlify.com)'s CDN in front of CloudFlare CDN. This may cause several problems to our websites such as performance degradation.

> If you want to know why we were doing this, please read this [forum](https://answers.netlify.com/t/support-guide-what-problems-could-occur-when-using-cloudflare-in-front-of-netlify/138).

So, some of our websites that are hosted from Netlify will always be served under Netlify's CDN to improve load speed performance and prevent other issues. For this blog website, we still use CloudFlare's CDN service to serve this website.

That is the end of this update/post. Thanks for reading and have a nice day!