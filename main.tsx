/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Hyperion Foundation Blog",
  description: "Tutorials, News, etc",
  favicon: "./src/img/hyperion-favicon.png",
  lang: "en",
  dateFormat: (date) => 
    new Intl.DateTimeFormat("en-GB", { dataStyle: "long" }).format(date),
  footer: <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
    <p class="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
      <span>
      &copy; 2023 Hyperion Foundation. Powered by <a class="inline-flex items-center gap-1 underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-sm" href="https://deno.land/x/blog">Deno Blog</a>.
      </span></p></footer>,
  avatar: "./src/img/hyperion-logo-512.png",
  avatarClass: "rounded-full",
  author: "Hyperion Foundation Staff",
  links: [
    { title: "Website", url: "https://www.hyperfoundation.xyz"},
    { title: "GitHub", url: "https://github.com/hyperion-foundation"},
    { title: "Discord", url: "https://discord.gg/4U4k6bW" }
  ],
  middlewares: [
    ga("G-JRZG4MQ08M"),
    redirects({
     "/welcome.html": "/welcome",
     "/domain-update.html": "/domain-update"
    }),
  ]
});
