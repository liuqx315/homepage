webpackHotUpdate("static/development/pages/project.js",{

/***/ "./content/output/projects/morphio.json":
/*!**********************************************!*\
  !*** ./content/output/projects/morphio.json ***!
  \**********************************************/
/*! exports provided: id, name, description, title, authors, image, conference, pdf, acm-dl, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"id":"morphio","name":"MorphIO","description":"Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction","title":"MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction","authors":"Ryosuke Nakayama*, Ryo Suzuki*, Satoshi Nakamaru, Ryuma Niiyama, Yoshihiro Kawahara, Yasuaki Kakehi (* equally contributed)","image":"morphio.png","conference":{"name":"DIS 2019","url":"https://dis2019.com/"},"pdf":"dis-2019-morphio.pdf","acm-dl":"https://dl.acm.org/citation.cfm?id=3322337","bodyContent":"# MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction\n\nRyosuke Nakayama\\*, **Ryo Suzuki\\* **, Satoshi Nakamaru, Ryuma Niiyama, Yoshihiro Kawahara, Yasuaki Kakehi\n<br/>\n(the first two authors equally contributed)\n\n**Best Paper Award**\n\n[**The ACM conference on Designing Interactive Systems (DIS 2019)**](https://dis2019.com/)\n\nLinks:\n[**[PDF](http://ryosuzuki.org/publications/dis-2019-morphio.pdf)**]\n[**[ACM DL](https://dl.acm.org/citation.cfm?id=3322337)**]\n[**[Video](https://www.youtube.com/watch?v=7nPlr3O9xu8)**]\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/top.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n# Abstract\n\nWe introduce MorphIO, entirely soft sensing and actuation modules for programming by demonstration of soft robots and shape-changing interfaces. MorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows both input and output of three-dimensional defor- mation of a soft material. Leveraging this capability, MorphIO enables a user to record and later playback physical motion of programmable shape-changing materials. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection. We demonstrate several application scenarios, including tangi- ble character animation, locomotion experiment of a soft robot, and prototyping tools for animated soft objects. Our user study with six participants confirms the benefits of MorphIO, as compared to the existing programming paradigm.\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-3.png\" /></a>\n  </div>\n</div>\n\n\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-2.png\" /></a>\n  </div>\n</div>\n\n# Motivation\n\n**Programmable soft materials** have a great impact in many application fields, such as soft robots, material interfaces, and haptics.\n**However, programming of such materials is hard.**\nThe dominant programming paradigm of soft robots and material interfaces is largely confined within a digital screen, leaving little room for users to interactively explore physical motion through tangible interaction. In such a workflow—compiling code on a digital screen then trans- ferring it into the physical object—users need to repeatedly switch between the digital and physical worlds. This leaves a large gulf of execution in their programming experiences.\nThus, the traditional programming paradigm significantly limits the user’s ability to experiment with the design of expressive motion. Moreover, due to this barrier, such an opportunity is largely limited to highly skilled programmers and researchers who are proficient in hardware programming.\n\n\n# MorphIO\n\nThis paper introduces **MorphIO, entirely soft sensing and actuation modules** for programming by demonstration of soft robots and shape-changing interfaces.\nMorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows for integrated and entirely soft shape-changing modules that can both sense and actuate a variety of three-dimensional deformations. Leveraging this capability, MorphIO enables the user to program behaviors by recording and later playing back physical motions through tangible interaction. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection, then synthesize multiple recorded motions to achieve more complex behaviors, such as bending, gripping, and walking.\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/module.mp4\" type=\"video/mp4\"></source>\n</video>\n\n<br/>\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/bear.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n\n# Entirely Soft Sensing and Actuation Modules\n\nIn our hardware contribution, we describe a design and fabrication method for a conductive sponge sensor that can be embedded into an air chamber in the pneumatic actuator. The conductive sponge sensor leverages the porous structure to sense the three-dimensional deformation by measuring the internal resistance value; when contracted, the resistance value be- tween the top and bottom surfaces drops, and when extended, it increases. In contrast to existing sensing techniques, an elastic sponge allows for a higher degree of freedom in sensing capability (e.g., stretching, bending, and compression) without sacrificing the softness of the interface.\n\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-2.png\" /></a>\n  </div>\n</div>\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n<br />\n\nMoreover, our modular design and graphical interface allows for easy experiments involving multiple units. For example, the system can visualize multiple recorded sensor values, so that the user can see, customize, and synthesize recorded motion to construct more complex behaviors. These hardware and software designs were informed by our formative study, wherein we interviewed five experienced researchers from the robotics and HCI communities.\n\n\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-2.png\" /></a>\n  </div>\n</div>\n\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-3.png\" /></a>\n  </div>\n</div>\n\n\n\n\n# Fabrication Process\n\nThe fabrication process follows three steps: 1) Fabricate an elastic sponge, 2) impregnate into conductive ink, and 3) attach electrodes and wires.\nTo fabricate an elastic sponge, we first prepare 6.0 g of elastomer prepolymer solution and 29.1 g of sodium-chloride, then mix them together by using a planetary centrifugal mixer. The mixed solution is injected into a 3D printed cylindrical mold (16mm diameter, 40mm height). Then we dry the material with an oven at 100 C degrees for one hour. Once dried, we immerse the sponge in water, so that the sodium chloride can melt, leaving a porous structure within the elastomer sponge.\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/fabrication.mp4\" type=\"video/mp4\"></source>\n</video>\n\n<div class=\"figures ui stackable four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-6-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-6-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-6-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-6-4.png\" /></a>\n  </div>\n</div>\n\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-8-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-8-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-8-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-8-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-8-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-8-3.png\" /></a>\n  </div>\n</div>\n\n\n# System\n\n\n\n\n\n\n# Applications\n\nWe demonstrate several possible applications scenarios with MorphIO.\n\n- Tangible character animation\n\n- Animating existing soft objects\n\n- Remote manipulation of soft grippers\n\n- Locomotion experimentation with soft robots.\n\n<div class=\"figures ui stackable four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-4.png\" /></a>\n  </div>\n</div>\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-3.png\" /></a>\n  </div>\n</div>\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/locomotion.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n# Evaluation\n\nWe conducted a user evaluation study to understand the bene- fits and limitations of MorphIO. In this study, we focused on answering the following research questions:\n\n- **RQ1:** Does MorphIO save time and reduce the number of iterations to program the target behavior, compared to the existing approach?\n\n- **RQ2:** Does MorphIO increase the expressiveness of the physical motion?\n\nTo answer these questions, we conducted a controlled experiment where we compared MorphIO (left) with the current programming approach. We chose Arduino IDE (right) as a base condition for the comparison, as this is the most common programming approach identified through our formative study. We provide three basic tasks to construct a program. For each task, the participants were asked to program three differ- ent emotions—happiness, anger, and sadness—of an animated character. We chose these emotions based on Ekman’s basic emotions for communication\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-3.png\" /></a>\n  </div>\n</div>\n\nThe average time of task completion time of MorphIO was 2m 19s, compared to 5m 21s with the control condition. The average number of iterations of MorphIO was 4.4 times, compared to 6.4 with the control condition. The study results validate that MorphIO is significantly efficient in terms of task completion time (p < 0.05, Z = -2.98) and the number of iterations (p < 0.10, Z = -1.75) with an Wilcoxon signed-rank test. When asked about\nFigure 26. The user study results.\nthe achievement of the expressions using a 9-point Likert scale, the average score with MorphIO was 6.5 (happiness: 6.2, anger: 6.8, sadness: 6.2), compared to 6.3 with the control condition (happiness: 6.2, anger: 6.3, sadness: 6.5). We did not find differences between the two conditions (p > 0.5, Z = -0.69) using a Wilcoxon signed-rank test. Thus, we conclude the result of our study as follows: **RQ1: Yes, RQ2: No**.\n\n\n# Future Vision\n\n\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-14.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-14.png\" /></a>\n  </div>\n</div>\n\n\n# Video Preview\n\n<div class=\"video-container\">\n  <iframe class=\"embed\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/[id]?autoplay=1&mute=1&rel=0&loop=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>","bodyHtml":"<h1>MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction</h1>\n<p>Ryosuke Nakayama*, **Ryo Suzuki* **, Satoshi Nakamaru, Ryuma Niiyama, Yoshihiro Kawahara, Yasuaki Kakehi\n<br/>\n(the first two authors equally contributed)</p>\n<p><strong>Best Paper Award</strong></p>\n<p><a href=\"https://dis2019.com/\"><strong>The ACM conference on Designing Interactive Systems (DIS 2019)</strong></a></p>\n<p>Links:\n[<strong><a href=\"http://ryosuzuki.org/publications/dis-2019-morphio.pdf\">PDF</a></strong>]\n[<strong><a href=\"https://dl.acm.org/citation.cfm?id=3322337\">ACM DL</a></strong>]\n[<strong><a href=\"https://www.youtube.com/watch?v=7nPlr3O9xu8\">Video</a></strong>]</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/top.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Abstract</h1>\n<p>We introduce MorphIO, entirely soft sensing and actuation modules for programming by demonstration of soft robots and shape-changing interfaces. MorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows both input and output of three-dimensional defor- mation of a soft material. Leveraging this capability, MorphIO enables a user to record and later playback physical motion of programmable shape-changing materials. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection. We demonstrate several application scenarios, including tangi- ble character animation, locomotion experiment of a soft robot, and prototyping tools for animated soft objects. Our user study with six participants confirms the benefits of MorphIO, as compared to the existing programming paradigm.</p>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-3.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-2.png\" /></a>\n  </div>\n</div>\n<h1>Motivation</h1>\n<p><strong>Programmable soft materials</strong> have a great impact in many application fields, such as soft robots, material interfaces, and haptics.\n<strong>However, programming of such materials is hard.</strong>\nThe dominant programming paradigm of soft robots and material interfaces is largely confined within a digital screen, leaving little room for users to interactively explore physical motion through tangible interaction. In such a workflow—compiling code on a digital screen then trans- ferring it into the physical object—users need to repeatedly switch between the digital and physical worlds. This leaves a large gulf of execution in their programming experiences.\nThus, the traditional programming paradigm significantly limits the user’s ability to experiment with the design of expressive motion. Moreover, due to this barrier, such an opportunity is largely limited to highly skilled programmers and researchers who are proficient in hardware programming.</p>\n<h1>MorphIO</h1>\n<p>This paper introduces <strong>MorphIO, entirely soft sensing and actuation modules</strong> for programming by demonstration of soft robots and shape-changing interfaces.\nMorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows for integrated and entirely soft shape-changing modules that can both sense and actuate a variety of three-dimensional deformations. Leveraging this capability, MorphIO enables the user to program behaviors by recording and later playing back physical motions through tangible interaction. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection, then synthesize multiple recorded motions to achieve more complex behaviors, such as bending, gripping, and walking.</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/module.mp4\" type=\"video/mp4\"></source>\n</video>\n<br/>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/bear.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Entirely Soft Sensing and Actuation Modules</h1>\n<p>In our hardware contribution, we describe a design and fabrication method for a conductive sponge sensor that can be embedded into an air chamber in the pneumatic actuator. The conductive sponge sensor leverages the porous structure to sense the three-dimensional deformation by measuring the internal resistance value; when contracted, the resistance value be- tween the top and bottom surfaces drops, and when extended, it increases. In contrast to existing sensing techniques, an elastic sponge allows for a higher degree of freedom in sensing capability (e.g., stretching, bending, and compression) without sacrificing the softness of the interface.</p>\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-2.png\" /></a>\n  </div>\n</div>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n<br />\n<p>Moreover, our modular design and graphical interface allows for easy experiments involving multiple units. For example, the system can visualize multiple recorded sensor values, so that the user can see, customize, and synthesize recorded motion to construct more complex behaviors. These hardware and software designs were informed by our formative study, wherein we interviewed five experienced researchers from the robotics and HCI communities.</p>\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-2.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-3.png\" /></a>\n  </div>\n</div>\n<h1>Fabrication Process</h1>\n<p>The fabrication process follows three steps: 1) Fabricate an elastic sponge, 2) impregnate into conductive ink, and 3) attach electrodes and wires.\nTo fabricate an elastic sponge, we first prepare 6.0 g of elastomer prepolymer solution and 29.1 g of sodium-chloride, then mix them together by using a planetary centrifugal mixer. The mixed solution is injected into a 3D printed cylindrical mold (16mm diameter, 40mm height). Then we dry the material with an oven at 100 C degrees for one hour. Once dried, we immerse the sponge in water, so that the sodium chloride can melt, leaving a porous structure within the elastomer sponge.</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/fabrication.mp4\" type=\"video/mp4\"></source>\n</video>\n<div class=\"figures ui stackable four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-6-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-6-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-6-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-6-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-6-4.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-8-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-8-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-8-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-8-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-8-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-8-3.png\" /></a>\n  </div>\n</div>\n<h1>System</h1>\n<h1>Applications</h1>\n<p>We demonstrate several possible applications scenarios with MorphIO.</p>\n<ul>\n<li>\n<p>Tangible character animation</p>\n</li>\n<li>\n<p>Animating existing soft objects</p>\n</li>\n<li>\n<p>Remote manipulation of soft grippers</p>\n</li>\n<li>\n<p>Locomotion experimentation with soft robots.</p>\n</li>\n</ul>\n<div class=\"figures ui stackable four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-4.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-3.png\" /></a>\n  </div>\n</div>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/locomotion.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Evaluation</h1>\n<p>We conducted a user evaluation study to understand the bene- fits and limitations of MorphIO. In this study, we focused on answering the following research questions:</p>\n<ul>\n<li>\n<p><strong>RQ1:</strong> Does MorphIO save time and reduce the number of iterations to program the target behavior, compared to the existing approach?</p>\n</li>\n<li>\n<p><strong>RQ2:</strong> Does MorphIO increase the expressiveness of the physical motion?</p>\n</li>\n</ul>\n<p>To answer these questions, we conducted a controlled experiment where we compared MorphIO (left) with the current programming approach. We chose Arduino IDE (right) as a base condition for the comparison, as this is the most common programming approach identified through our formative study. We provide three basic tasks to construct a program. For each task, the participants were asked to program three differ- ent emotions—happiness, anger, and sadness—of an animated character. We chose these emotions based on Ekman’s basic emotions for communication</p>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-3.png\" /></a>\n  </div>\n</div>\n<p>The average time of task completion time of MorphIO was 2m 19s, compared to 5m 21s with the control condition. The average number of iterations of MorphIO was 4.4 times, compared to 6.4 with the control condition. The study results validate that MorphIO is significantly efficient in terms of task completion time (p &lt; 0.05, Z = -2.98) and the number of iterations (p &lt; 0.10, Z = -1.75) with an Wilcoxon signed-rank test. When asked about\nFigure 26. The user study results.\nthe achievement of the expressions using a 9-point Likert scale, the average score with MorphIO was 6.5 (happiness: 6.2, anger: 6.8, sadness: 6.2), compared to 6.3 with the control condition (happiness: 6.2, anger: 6.3, sadness: 6.5). We did not find differences between the two conditions (p &gt; 0.5, Z = -0.69) using a Wilcoxon signed-rank test. Thus, we conclude the result of our study as follows: <strong>RQ1: Yes, RQ2: No</strong>.</p>\n<h1>Future Vision</h1>\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-14.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-14.png\" /></a>\n  </div>\n</div>\n<h1>Video Preview</h1>\n<div class=\"video-container\">\n  <iframe class=\"embed\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/[id]?autoplay=1&mute=1&rel=0&loop=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>","dir":"content/output/projects","base":"morphio.json","ext":".json","sourceBase":"morphio.md","sourceExt":".md"};

/***/ })

})
//# sourceMappingURL=project.js.4638112c3222521712c9.hot-update.js.map