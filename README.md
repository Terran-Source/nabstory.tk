# nabstory-tk-website-static

[![Netlify Status](https://api.netlify.com/api/v1/badges/76f2ff6a-ccf3-4031-a6ad-08ac9c4bb405/deploy-status)](https://app.netlify.com/sites/nabstory/deploys)

Static story-board website for www.nabstory.tk

I was looking to setup a static website for *FREE* to write stories. Let me know how you'll like/dislike it.

### <u>What:</u>

This is a static website powered by [Hexo](https://hexo.io/). My choice for the theme is [Cactus](https://github.com/probberechts/hexo-theme-cactus) with it's [Dark varient](https://probberechts.github.io/hexo-theme-cactus/cactus-dark/public).

If you want to create one of your own. Checkout the blog "[How This Site is Made (Free means Freedom)](https://www.techtipbites.tk/en/2019/ow-This-Site-is-Made-Free-means-Freedom/)" with template source at [git:hexo-static-blog](https://github.com/Terran-Source/hexo-static-blog.git)

### <u>Developer Friendly Details:</u>

##### <u>How To:</u>

As already described in the blog "[How This Site is Made (Free means Freedom)](https://www.techtipbites.tk/en/2019/ow-This-Site-is-Made-Free-means-Freedom/)" with template source at [git:hexo-static-blog](https://github.com/turn-a-round/hexo-static-blog.git)

##### <u>Branch Details:</u>

###### master

> [***Warning***]This branch contains the actual live site.  Never directly add/edit here (The Admin has already put measures in GitHub settings to discourage that)

The steps to add a new page/post/article are:

1. Always create a *post/<title>* or *page/<title>* or *article/<title>* or *topic/<topic-name>*  branch from ***master***
2. Put your page/post/article(s)/topic-post(s) in that branch ([How-To](https://hexo.io/docs/writing))
3. Check thoroughly by running `npm run server` or `npm run draft-server` (<u>for draft posts</u>) in your local system
4. Create a Pull Request (<u>PR</u>) towards ***preview*** branch and let the administrator know about your intentions.
5. Please don't try to serve the whole platter at once. As the name suggests, we're here to take a *<u>tip</u>* and/or a *<u>bite</u>* at a time.
6. It's the Admin's job to create a platter (i.e. create a PR from ***preview*** to ***master***), when they seem fit & take it towards live phase.

###### preview

This branch is the last checkpoint before new pages/posts/structures/themes goes live for the whole world.

###### develop

If any new feature/theme/structural change, that looks feasible and lucrative enough to add to the website, then, this is the place, where you should start. It's the place where both saints & devils can mess around. New changes, will be merged to ***develop*** & then will start its journey towards ***preview***. Create a new *feature* branch from here.
