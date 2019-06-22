webpackHotUpdate("static/development/pages/project.js",{

/***/ "./content/output/projects/morphio.json":
/*!**********************************************!*\
  !*** ./content/output/projects/morphio.json ***!
  \**********************************************/
/*! exports provided: id, name, description, title, authors, image, conference, pdf, acm-dl, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"id":"morphio","name":"MorphIO","description":"Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction","title":"MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction","authors":"Ryosuke Nakayama*, Ryo Suzuki*, Satoshi Nakamaru, Ryuma Niiyama, Yoshihiro Kawahara, Yasuaki Kakehi (* equally contributed)","image":"morphio.png","conference":{"name":"DIS 2019","url":"https://dis2019.com/"},"pdf":"dis-2019-morphio.pdf","acm-dl":"https://dl.acm.org/citation.cfm?id=3322337","bodyContent":"# MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction\n\nRyosuke Nakayama\\*, **Ryo Suzuki\\* **, Satoshi Nakamaru, Ryuma Niiyama, Yoshihiro Kawahara, Yasuaki Kakehi\n<br/>\n(the first two authors equally contributed)\n\n[**The ACM conference on Designing Interactive Systems (DIS 2019)**](https://dis2019.com/)\n\nLinks:\n[**[PDF](http://ryosuzuki.org/publications/dis-2019-morphio.pdf)**]\n[**[ACM DL](https://dl.acm.org/citation.cfm?id=3322337)**]\n[**[Video](https://www.youtube.com/watch?v=7nPlr3O9xu8)**]\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/top.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n# Abstract\n\nWe introduce MorphIO, entirely soft sensing and actuation modules for programming by demonstration of soft robots and shape-changing interfaces. MorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows both input and output of three-dimensional defor- mation of a soft material. Leveraging this capability, MorphIO enables a user to record and later playback physical motion of programmable shape-changing materials. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection. We demonstrate several application scenarios, including tangi- ble character animation, locomotion experiment of a soft robot, and prototyping tools for animated soft objects. Our user study with six participants confirms the benefits of MorphIO, as compared to the existing programming paradigm.\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-3.png\" /></a>\n  </div>\n</div>\n\n# Motivation\n\n**Programmable soft materials** have a great impact in many application fields, such as soft robots, material interfaces, and haptics.\n**However, programming of such materials is hard.**\nThe dominant programming paradigm of soft robots and material interfaces is largely confined within a digital screen, leaving little room for users to interactively explore physical motion through tangible interaction. In such a workflow—compiling code on a digital screen then trans- ferring it into the physical object—users need to repeatedly switch between the digital and physical worlds. This leaves a large gulf of execution in their programming experiences.\nThus, the traditional programming paradigm significantly limits the user’s ability to experiment with the design of expressive motion. Moreover, due to this barrier, such an opportunity is largely limited to highly skilled programmers and researchers who are proficient in hardware programming.\n\n\n# MorphIO\n\nThis paper introduces **MorphIO, entirely soft sensing and actuation modules** for programming by demonstration of soft robots and shape-changing interfaces.\nMorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows for integrated and en- tirely soft shape-changing modules that can both sense and actuate a variety of three-dimensional deformations.\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/module.mp4\" type=\"video/mp4\"></source>\n</video>\n\n<br/>\n\nLeveraging this capability, MorphIO enables the user to program behaviors by recording and later playing back physical mo- tions through tangible interaction. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection, then syn- thesize multiple recorded motions to achieve more complex behaviors, such as bending, gripping, and walking.\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/bear.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n\n# Entirely Soft Sensing and Actuation Units\n\n\nIn addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection, then syn- thesize multiple recorded motions to achieve more complex behaviors, such as bending, gripping, and walking.\n\n\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-2.png\" /></a>\n  </div>\n</div>\n\nThe MorphIO system consists of the following components: A sensor and actuation unit, a sensing and actuation control unit, a microcontroller, software to control these units, and a visual interface for users to control behaviors.\n\nTo enable this workflow, MorphIO has three key components:\n1. Entirely Soft Sensing and Actuation Units\n2. Modular and Reconfigurable Design\n3. Graphical User Interface to Record and Playback\n\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n# Fabrication Process\n\n\n\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/fabrication.mp4\" type=\"video/mp4\"></source>\n</video>\n\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-1.png\" data-lightbox=\"lightbox\">Image</a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-2.png\" /></a>\n  </div>\n</div>\n\n\n\n\n# Applications\n\n\n\n# Future Vision","bodyHtml":"<h1>MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction</h1>\n<p>Ryosuke Nakayama*, **Ryo Suzuki* **, Satoshi Nakamaru, Ryuma Niiyama, Yoshihiro Kawahara, Yasuaki Kakehi\n<br/>\n(the first two authors equally contributed)</p>\n<p><a href=\"https://dis2019.com/\"><strong>The ACM conference on Designing Interactive Systems (DIS 2019)</strong></a></p>\n<p>Links:\n[<strong><a href=\"http://ryosuzuki.org/publications/dis-2019-morphio.pdf\">PDF</a></strong>]\n[<strong><a href=\"https://dl.acm.org/citation.cfm?id=3322337\">ACM DL</a></strong>]\n[<strong><a href=\"https://www.youtube.com/watch?v=7nPlr3O9xu8\">Video</a></strong>]</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/top.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Abstract</h1>\n<p>We introduce MorphIO, entirely soft sensing and actuation modules for programming by demonstration of soft robots and shape-changing interfaces. MorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows both input and output of three-dimensional defor- mation of a soft material. Leveraging this capability, MorphIO enables a user to record and later playback physical motion of programmable shape-changing materials. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection. We demonstrate several application scenarios, including tangi- ble character animation, locomotion experiment of a soft robot, and prototyping tools for animated soft objects. Our user study with six participants confirms the benefits of MorphIO, as compared to the existing programming paradigm.</p>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-3.png\" /></a>\n  </div>\n</div>\n<h1>Motivation</h1>\n<p><strong>Programmable soft materials</strong> have a great impact in many application fields, such as soft robots, material interfaces, and haptics.\n<strong>However, programming of such materials is hard.</strong>\nThe dominant programming paradigm of soft robots and material interfaces is largely confined within a digital screen, leaving little room for users to interactively explore physical motion through tangible interaction. In such a workflow—compiling code on a digital screen then trans- ferring it into the physical object—users need to repeatedly switch between the digital and physical worlds. This leaves a large gulf of execution in their programming experiences.\nThus, the traditional programming paradigm significantly limits the user’s ability to experiment with the design of expressive motion. Moreover, due to this barrier, such an opportunity is largely limited to highly skilled programmers and researchers who are proficient in hardware programming.</p>\n<h1>MorphIO</h1>\n<p>This paper introduces <strong>MorphIO, entirely soft sensing and actuation modules</strong> for programming by demonstration of soft robots and shape-changing interfaces.\nMorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows for integrated and en- tirely soft shape-changing modules that can both sense and actuate a variety of three-dimensional deformations.</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/module.mp4\" type=\"video/mp4\"></source>\n</video>\n<br/>\n<p>Leveraging this capability, MorphIO enables the user to program behaviors by recording and later playing back physical mo- tions through tangible interaction. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection, then syn- thesize multiple recorded motions to achieve more complex behaviors, such as bending, gripping, and walking.</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/bear.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Entirely Soft Sensing and Actuation Units</h1>\n<p>In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection, then syn- thesize multiple recorded motions to achieve more complex behaviors, such as bending, gripping, and walking.</p>\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-2.png\" /></a>\n  </div>\n</div>\n<p>The MorphIO system consists of the following components: A sensor and actuation unit, a sensing and actuation control unit, a microcontroller, software to control these units, and a visual interface for users to control behaviors.</p>\n<p>To enable this workflow, MorphIO has three key components:</p>\n<ol>\n<li>Entirely Soft Sensing and Actuation Units</li>\n<li>Modular and Reconfigurable Design</li>\n<li>Graphical User Interface to Record and Playback</li>\n</ol>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Fabrication Process</h1>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/fabrication.mp4\" type=\"video/mp4\"></source>\n</video>\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-1.png\" data-lightbox=\"lightbox\">Image</a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-2.png\" /></a>\n  </div>\n</div>\n<h1>Applications</h1>\n<h1>Future Vision</h1>\n","dir":"content/output/projects","base":"morphio.json","ext":".json","sourceBase":"morphio.md","sourceExt":".md"};

/***/ })

})
//# sourceMappingURL=project.js.68eaa9cafc264a683af2.hot-update.js.map