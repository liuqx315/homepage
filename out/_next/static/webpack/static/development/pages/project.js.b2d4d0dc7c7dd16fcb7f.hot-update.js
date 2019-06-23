webpackHotUpdate("static/development/pages/project.js",{

/***/ "./content/output/projects/reactile.json":
/*!***********************************************!*\
  !*** ./content/output/projects/reactile.json ***!
  \***********************************************/
/*! exports provided: id, name, description, title, authors, image, conference, pdf, video, short-video, slide, acm-dl, github, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"id":"reactile","name":"Reactile","description":"Programming Swarm User Interfaces through Direct Physical Manipulation","title":"Reactile: Programming Swarm User Interfaces through Direct Physical Manipulation","authors":"Ryo Suzuki, Jun Kato, Mark D. Gross, Tom Yeh","image":"reactile.jpg","conference":{"name":"CHI 2018","url":"https://chi2018.acm.org/"},"pdf":"chi-2018-reactile.pdf","video":"https://www.youtube.com/watch?v=Gb7brajKCVE","short-video":"https://www.youtube.com/watch?v=YT7vMJZjohU","slide":"chi-2018-reactile-slide.pdf","acm-dl":"https://dl.acm.org/citation.cfm?id=3173773","github":"https://github.com/ryosuzuki/reactile","bodyContent":"# Reactile: Programming Swarm User Interfaces through Direct Physical Manipulation\n\n**Ryo Suzuki**, Jun Kato, Mark D. Gross, Tom Yeh\n\n[**The ACM CHI Conference on Human Factors in Computing Systems (CHI 2018)**](https://chi2018.acm.org/)\n\nLinks:\n[**[PDF](http://ryosuzuki.org/publications/chi-2018-reactile.pdf)**]\n[**[ACM DL](https://dl.acm.org/citation.cfm?id=3173773)**]\n[**[Video](https://www.youtube.com/watch?v=Gb7brajKCVE)**]\n[**[Slide](http://ryosuzuki.org/publications/chi-2018-reactile-slide.pdf)**]\n[**[GitHub](https://github.com/ryosuzuki/reactile)**]\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/reactile/top.mp4\" type=\"video/mp4\"></source>\n</video>\n\n## Abstract\n\nWe explore a new approach to programming swarm user interfaces (Swarm UI) by leveraging direct physical manipulation. Existing Swarm UI applications are written using a robot programming framework: users work on a computer screen and think in terms of low-level controls. In contrast, our approach allows programmers to work in physical space by directly manipulating objects and think in terms of high- level interface design. Inspired by current UI programming practices, we introduce a four-step workflow—create elements, abstract attributes, specify behaviors, and propagate changes—for Swarm UI programming. We propose a set of direct physi- cal manipulation techniques to support each step in this work- flow. To demonstrate these concepts, we developed Reac- tile, a Swarm UI programming environment that actuates a swarm of small magnets and displays spatial information of program states using a DLP projector. Two user studies—an in-class survey with 148 students and a lab interview with eight participants—confirm that our approach is intuitive and understandable for programming Swarm UIs.\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-3.png\" /></a>\n  </div>\n</div>\n\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-3.png\" /></a>\n  </div>\n</div>\n\n\n# Introduction\n\nIn recent years, **Swarm User Interfaces** have emerged as a new paradigm of human-computer interaction. While the idea of coordinated miniature robots was originally proposed in the literature of swarm and micro-robotic systems, HCI researchers have explored the use of these robots as a user interface.\nHowever, this opportunity is currently limited to highly skilled programmers who are proficient in robot programming. For typical programmers inexperienced in robot programming who wish to build a Swarm UI application, it is unclear if the robot programming approach is the most appropriate for UI programming. To design interactive UI applications, pro- grammers often must think in terms of higher-level design for user interaction, whereas robot programming tends to focus on low-level controls of sensors and actuators. Historically, a novel UI platform is adopted only after the advent of an effective programming tool that empowers a larger developer community, and even end-users, to create many applications for the platform; for example, HyperCard for interactive hyper- media, Phidgets for physical interfaces, and Interface Builder for GUI applications. We stipulate that current approaches to programming Swarm UI are too robot-centric to be effec- tive for building rich and interactive applications. Then, what would be a better alternative?\n\n\n# Reactile\n\nThis paper introduces Reactile, a programming environment for Swarm UI applications.\nexplores a new approach to programming Swarm UI applications. To design an appropriate workflow for Swarm UI programming, we look into existing UI programming paradigm for inspiration. The common workflow of UI programming can be decomposed into four basic steps: create elements, abstract attributes, specify behaviors, and propagate changes. Based on these insights, we propose the following four-step workflow for Swarm UI programming: 1) creates shapes, 2) abstracts shape attributes as variables, 3) specifies data-bindings be- tween dynamic attributes, and 4) the system changes shapes in response to user inputs (See Figure 2). With this work- flow, a programmer can think in terms of high-level interface and interaction design to build interactive Swarm UI appli- cations, compared to existing, low-level, robot programming approaches.\n\n\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-3.png\" /></a>\n  </div>\n</div>\n\n\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-4.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-5.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-6.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-6.png\" /></a>\n  </div>\n</div>\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-4.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-5.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-6.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-6.png\" /></a>\n  </div>\n</div>\n\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/reactile/coil.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/reactile/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n\n\n# Video Preview\n\n<div class=\"video-container\">\n  <iframe class=\"embed\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Gb7brajKCVE?autoplay=1&mute=1&rel=0&loop=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>","bodyHtml":"<h1>Reactile: Programming Swarm User Interfaces through Direct Physical Manipulation</h1>\n<p><strong>Ryo Suzuki</strong>, Jun Kato, Mark D. Gross, Tom Yeh</p>\n<p><a href=\"https://chi2018.acm.org/\"><strong>The ACM CHI Conference on Human Factors in Computing Systems (CHI 2018)</strong></a></p>\n<p>Links:\n[<strong><a href=\"http://ryosuzuki.org/publications/chi-2018-reactile.pdf\">PDF</a></strong>]\n[<strong><a href=\"https://dl.acm.org/citation.cfm?id=3173773\">ACM DL</a></strong>]\n[<strong><a href=\"https://www.youtube.com/watch?v=Gb7brajKCVE\">Video</a></strong>]\n[<strong><a href=\"http://ryosuzuki.org/publications/chi-2018-reactile-slide.pdf\">Slide</a></strong>]\n[<strong><a href=\"https://github.com/ryosuzuki/reactile\">GitHub</a></strong>]</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/reactile/top.mp4\" type=\"video/mp4\"></source>\n</video>\n<h2>Abstract</h2>\n<p>We explore a new approach to programming swarm user interfaces (Swarm UI) by leveraging direct physical manipulation. Existing Swarm UI applications are written using a robot programming framework: users work on a computer screen and think in terms of low-level controls. In contrast, our approach allows programmers to work in physical space by directly manipulating objects and think in terms of high- level interface design. Inspired by current UI programming practices, we introduce a four-step workflow—create elements, abstract attributes, specify behaviors, and propagate changes—for Swarm UI programming. We propose a set of direct physi- cal manipulation techniques to support each step in this work- flow. To demonstrate these concepts, we developed Reac- tile, a Swarm UI programming environment that actuates a swarm of small magnets and displays spatial information of program states using a DLP projector. Two user studies—an in-class survey with 148 students and a lab interview with eight participants—confirm that our approach is intuitive and understandable for programming Swarm UIs.</p>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-3.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-3.png\" /></a>\n  </div>\n</div>\n<h1>Introduction</h1>\n<p>In recent years, <strong>Swarm User Interfaces</strong> have emerged as a new paradigm of human-computer interaction. While the idea of coordinated miniature robots was originally proposed in the literature of swarm and micro-robotic systems, HCI researchers have explored the use of these robots as a user interface.\nHowever, this opportunity is currently limited to highly skilled programmers who are proficient in robot programming. For typical programmers inexperienced in robot programming who wish to build a Swarm UI application, it is unclear if the robot programming approach is the most appropriate for UI programming. To design interactive UI applications, pro- grammers often must think in terms of higher-level design for user interaction, whereas robot programming tends to focus on low-level controls of sensors and actuators. Historically, a novel UI platform is adopted only after the advent of an effective programming tool that empowers a larger developer community, and even end-users, to create many applications for the platform; for example, HyperCard for interactive hyper- media, Phidgets for physical interfaces, and Interface Builder for GUI applications. We stipulate that current approaches to programming Swarm UI are too robot-centric to be effec- tive for building rich and interactive applications. Then, what would be a better alternative?</p>\n<h1>Reactile</h1>\n<p>This paper introduces Reactile, a programming environment for Swarm UI applications.\nexplores a new approach to programming Swarm UI applications. To design an appropriate workflow for Swarm UI programming, we look into existing UI programming paradigm for inspiration. The common workflow of UI programming can be decomposed into four basic steps: create elements, abstract attributes, specify behaviors, and propagate changes. Based on these insights, we propose the following four-step workflow for Swarm UI programming: 1) creates shapes, 2) abstracts shape attributes as variables, 3) specifies data-bindings be- tween dynamic attributes, and 4) the system changes shapes in response to user inputs (See Figure 2). With this work- flow, a programmer can think in terms of high-level interface and interaction design to build interactive Swarm UI appli- cations, compared to existing, low-level, robot programming approaches.</p>\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-3.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-4.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-5.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-2-6.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-2-6.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-4.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-5.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/reactile/figure-1-6.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/reactile/figure-1-6.png\" /></a>\n  </div>\n</div>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/reactile/coil.mp4\" type=\"video/mp4\"></source>\n</video>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/reactile/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Video Preview</h1>\n<div class=\"video-container\">\n  <iframe class=\"embed\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/Gb7brajKCVE?autoplay=1&mute=1&rel=0&loop=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>","dir":"content/output/projects","base":"reactile.json","ext":".json","sourceBase":"reactile.md","sourceExt":".md"};

/***/ })

})
//# sourceMappingURL=project.js.b2d4d0dc7c7dd16fcb7f.hot-update.js.map