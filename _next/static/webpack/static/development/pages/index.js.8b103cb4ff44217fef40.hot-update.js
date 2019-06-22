webpackHotUpdate("static/development/pages/index.js",{

/***/ "./content/output/projects/morphio.json":
/*!**********************************************!*\
  !*** ./content/output/projects/morphio.json ***!
  \**********************************************/
/*! exports provided: id, name, description, title, authors, image, conference, pdf, acm-dl, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"id":"morphio","name":"MorphIO","description":"Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction","title":"MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction","authors":"Ryosuke Nakayama*, Ryo Suzuki*, Satoshi Nakamaru, Ryuma Niiyama, Yoshihiro Kawahara, Yasuaki Kakehi (* equally contributed)","image":"morphio.png","conference":{"name":"DIS 2019","url":"https://dis2019.com/"},"pdf":"dis-2019-morphio.pdf","acm-dl":"https://dl.acm.org/citation.cfm?id=3322337","bodyContent":"# MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction\n\nRyosuke Nakayama\\*, **Ryo Suzuki\\* **, Satoshi Nakamaru, Ryuma Niiyama, Yoshihiro Kawahara, Yasuaki Kakehi\n<br/>\n(the first two authors equally contributed)\n\n[**The ACM conference on Designing Interactive Systems (DIS 2019)**](https://dis2019.com/)\n--- **Best Paper Award**\n\nLinks:\n[**[PDF](http://ryosuzuki.org/publications/dis-2019-morphio.pdf)**]\n[**[ACM DL](https://dl.acm.org/citation.cfm?id=3322337)**]\n[**[Video](https://www.youtube.com/watch?v=7nPlr3O9xu8)**]\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/top.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n# Abstract\n\nWe introduce MorphIO, entirely soft sensing and actuation modules for programming by demonstration of soft robots and shape-changing interfaces. MorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows both input and output of three-dimensional defor- mation of a soft material. Leveraging this capability, MorphIO enables a user to record and later playback physical motion of programmable shape-changing materials. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection. We demonstrate several application scenarios, including tangi- ble character animation, locomotion experiment of a soft robot, and prototyping tools for animated soft objects. Our user study with six participants confirms the benefits of MorphIO, as compared to the existing programming paradigm.\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-3.png\" /></a>\n  </div>\n</div>\n\n\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-4.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-5.png\" /></a>\n  </div>\n</div>\n\n# Motivation\n\n**Programmable soft materials** have a great impact in many application fields, such as soft robots, material interfaces, and haptics.\n**However, programming of such materials is hard.**\nThe dominant programming paradigm of soft robots and material interfaces is largely confined within a digital screen, leaving little room for users to interactively explore physical motion through tangible interaction. In such a workflow—compiling code on a digital screen then trans- ferring it into the physical object—users need to repeatedly switch between the digital and physical worlds. This leaves a large gulf of execution in their programming experiences.\nThus, the traditional programming paradigm significantly limits the user’s ability to experiment with the design of expressive motion. Moreover, due to this barrier, such an opportunity is largely limited to highly skilled programmers and researchers who are proficient in hardware programming.\n\n\n# MorphIO\n\nThis paper introduces **MorphIO, entirely soft sensing and actuation modules** for programming by demonstration of soft robots and shape-changing interfaces.\nMorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows for integrated and entirely soft shape-changing modules that can both sense and actuate a variety of three-dimensional deformations. Leveraging this capability, MorphIO enables the user to program behaviors by recording and later playing back physical motions through tangible interaction. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection, then synthesize multiple recorded motions to achieve more complex behaviors, such as bending, gripping, and walking.\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/module.mp4\" type=\"video/mp4\"></source>\n</video>\n\n<br/>\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/bear.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n\n# Entirely Soft Sensing and Actuation Modules\n\nIn our hardware contribution, we describe a design and fabrication method for a conductive sponge sensor that can be embedded into an air chamber in the pneumatic actuator. The conductive sponge sensor leverages the porous structure to sense the three-dimensional deformation by measuring the internal resistance value; when contracted, the resistance value be- tween the top and bottom surfaces drops, and when extended, it increases. In contrast to existing sensing techniques, an elastic sponge allows for a higher degree of freedom in sensing capability (e.g., stretching, bending, and compression) without sacrificing the softness of the interface.\n\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-2.png\" /></a>\n  </div>\n</div>\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n<br />\n\nMoreover, our modular design and graphical interface allows for easy experiments involving multiple units. For example, the system can visualize multiple recorded sensor values, so that the user can see, customize, and synthesize recorded motion to construct more complex behaviors. These hardware and software designs were informed by our formative study, wherein we interviewed five experienced researchers from the robotics and HCI communities.\n\n\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-2.png\" /></a>\n  </div>\n</div>\n\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-3.png\" /></a>\n  </div>\n</div>\n\n\n\n\n# Fabrication Process\n\nThe fabrication process follows three steps: 1) Fabricate an elastic sponge, 2) impregnate into conductive ink, and 3) attach electrodes and wires.\nTo fabricate an elastic sponge, we first prepare 6.0 g of elastomer prepolymer solution and 29.1 g of sodium-chloride, then mix them together by using a planetary centrifugal mixer. The mixed solution is injected into a 3D printed cylindrical mold (16mm diameter, 40mm height). Then we dry the material with an oven at 100 C degrees for one hour. Once dried, we immerse the sponge in water, so that the sodium chloride can melt, leaving a porous structure within the elastomer sponge.\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/fabrication.mp4\" type=\"video/mp4\"></source>\n</video>\n\n<div class=\"figures ui stackable four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-4.png\" /></a>\n  </div>\n</div>\n\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-5.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-6.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-6.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-7.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-7.png\" /></a>\n  </div>\n</div>\n\n\n# Software System\n\nThe programming workflow with MorphIO is the following:\n\n- **Step 1:** A user starts manipulating the MorphIO unit.\n\n- **Step 2:** The demonstrated motion is detected and recorded through internal sensors, and the recorded sensor values are stored in the software.\n\n- **Step 3:** Once the user clicks play in the graphical user interface, the pneumatic pump starts supplying air.\n\n- **Step 4:** By controlling the air flow through switching on and off the solenoid valves, the system can control the behavior of the pneumatic actuator as it plays back the recorded motion.\n\nTo enable the playback of the recorded deformation, we need feedback control for each actuation module. To do so, we use the following feedback control algorithm: 1) Compare the current and target deformation value, 2) if there is a pos- itive/negative difference, we set the expansion/contraction mode, 3) if there is no or less difference than the threshold value, we set the closed mode. The system runs this procedure per every one frame (60 fps). Our feedback control software and the graphical user interface were written with C++ and the OpenFrameworks library and communicate with Arduino using the Firmata library.\n\n\n\n\n\n\n# Applications\n\nWe demonstrate several possible applications scenarios with MorphIO. 1) Tangible character animation, 2) Animating existing soft objects, 3) Remote manipulation of soft grippers, 4) Locomotion experimentation with soft robots.\n\n<div class=\"figures ui stackable four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-4.png\" /></a>\n  </div>\n</div>\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-3.png\" /></a>\n  </div>\n</div>\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/locomotion.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n# Evaluation\n\nWe conducted a user evaluation study to understand the bene- fits and limitations of MorphIO. In this study, we focused on answering the following research questions:\n\n- **RQ1:** Does MorphIO save time and reduce the number of iterations to program the target behavior, compared to the existing approach?\n\n- **RQ2:** Does MorphIO increase the expressiveness of the physical motion?\n\nTo answer these questions, we conducted a controlled experiment where we compared MorphIO (left) with the current programming approach. We chose Arduino IDE (right) as a base condition for the comparison, as this is the most common programming approach identified through our formative study. We provide three basic tasks to construct a program. For each task, the participants were asked to program three differ- ent emotions—happiness, anger, and sadness—of an animated character. We chose these emotions based on Ekman’s basic emotions for communication.\n\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-3.png\" /></a>\n  </div>\n</div>\n\nThe average time of task completion time of MorphIO was 2m 19s, compared to 5m 21s with the control condition. The average number of iterations of MorphIO was 4.4 times, compared to 6.4 with the control condition, which confirms that MorphIO is significantly efficient in terms of task completion time and the number of iterations. When asked about the achievement of the expressions using a 9-point Likert scale, the average score with MorphIO was 6.5, compared to 6.3 with the control condition. We did not find differences between the two conditions. Thus, we conclude the result of our study as follows: **RQ1: Yes, RQ2: No**.\n\nBased on our post interviews, we discuss the benefits and limitations of our approach: **1) tangible interactions are suitable for sculpting rough motion**, **2) programming allows for fine-tuning more precise adjustments**. Thus, for future research, systems might allow users to quickly make a rough motion, which can automatically be converted into digital parameters so that the user can also precisely control and adjust the motion. The same human- computer cooperation approach can be applied to other design domains: For example, when designing an object, the user can quickly make rough shapes with clay, while letting a machine finish the details. We believe this insight can lead the HCI community to further explore design approaches wherein users and machines cooperate for enhanced interaction design.\n\n\n# Future Vision\nWe believe this approach’s potential for lowering the barrier and opening new opportunities for a larger community to begin designing, prototyping, and exploring soft material motion—not by coding on a screen, but by sculpting behaviors in the physical world.\nWe envision the future where people can interactively explore various behaviors through tangible interactions, **just like sculpting behaviors with clay**.\n\n\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-14.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-14.png\" /></a>\n  </div>\n</div>\n\n\n# Video Preview\n\n<div class=\"video-container\">\n  <iframe class=\"embed\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/[id]?autoplay=1&mute=1&rel=0&loop=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>","bodyHtml":"<h1>MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction</h1>\n<p>Ryosuke Nakayama*, **Ryo Suzuki* **, Satoshi Nakamaru, Ryuma Niiyama, Yoshihiro Kawahara, Yasuaki Kakehi\n<br/>\n(the first two authors equally contributed)</p>\n<p><a href=\"https://dis2019.com/\"><strong>The ACM conference on Designing Interactive Systems (DIS 2019)</strong></a>\n--- <strong>Best Paper Award</strong></p>\n<p>Links:\n[<strong><a href=\"http://ryosuzuki.org/publications/dis-2019-morphio.pdf\">PDF</a></strong>]\n[<strong><a href=\"https://dl.acm.org/citation.cfm?id=3322337\">ACM DL</a></strong>]\n[<strong><a href=\"https://www.youtube.com/watch?v=7nPlr3O9xu8\">Video</a></strong>]</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/top.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Abstract</h1>\n<p>We introduce MorphIO, entirely soft sensing and actuation modules for programming by demonstration of soft robots and shape-changing interfaces. MorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows both input and output of three-dimensional defor- mation of a soft material. Leveraging this capability, MorphIO enables a user to record and later playback physical motion of programmable shape-changing materials. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection. We demonstrate several application scenarios, including tangi- ble character animation, locomotion experiment of a soft robot, and prototyping tools for animated soft objects. Our user study with six participants confirms the benefits of MorphIO, as compared to the existing programming paradigm.</p>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-3.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-4.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-1-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-1-5.png\" /></a>\n  </div>\n</div>\n<h1>Motivation</h1>\n<p><strong>Programmable soft materials</strong> have a great impact in many application fields, such as soft robots, material interfaces, and haptics.\n<strong>However, programming of such materials is hard.</strong>\nThe dominant programming paradigm of soft robots and material interfaces is largely confined within a digital screen, leaving little room for users to interactively explore physical motion through tangible interaction. In such a workflow—compiling code on a digital screen then trans- ferring it into the physical object—users need to repeatedly switch between the digital and physical worlds. This leaves a large gulf of execution in their programming experiences.\nThus, the traditional programming paradigm significantly limits the user’s ability to experiment with the design of expressive motion. Moreover, due to this barrier, such an opportunity is largely limited to highly skilled programmers and researchers who are proficient in hardware programming.</p>\n<h1>MorphIO</h1>\n<p>This paper introduces <strong>MorphIO, entirely soft sensing and actuation modules</strong> for programming by demonstration of soft robots and shape-changing interfaces.\nMorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows for integrated and entirely soft shape-changing modules that can both sense and actuate a variety of three-dimensional deformations. Leveraging this capability, MorphIO enables the user to program behaviors by recording and later playing back physical motions through tangible interaction. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection, then synthesize multiple recorded motions to achieve more complex behaviors, such as bending, gripping, and walking.</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/module.mp4\" type=\"video/mp4\"></source>\n</video>\n<br/>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/bear.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Entirely Soft Sensing and Actuation Modules</h1>\n<p>In our hardware contribution, we describe a design and fabrication method for a conductive sponge sensor that can be embedded into an air chamber in the pneumatic actuator. The conductive sponge sensor leverages the porous structure to sense the three-dimensional deformation by measuring the internal resistance value; when contracted, the resistance value be- tween the top and bottom surfaces drops, and when extended, it increases. In contrast to existing sensing techniques, an elastic sponge allows for a higher degree of freedom in sensing capability (e.g., stretching, bending, and compression) without sacrificing the softness of the interface.</p>\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-2-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-2-2.png\" /></a>\n  </div>\n</div>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n<br />\n<p>Moreover, our modular design and graphical interface allows for easy experiments involving multiple units. For example, the system can visualize multiple recorded sensor values, so that the user can see, customize, and synthesize recorded motion to construct more complex behaviors. These hardware and software designs were informed by our formative study, wherein we interviewed five experienced researchers from the robotics and HCI communities.</p>\n<div class=\"figures ui stackable two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-3-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-3-2.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-4-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-4-3.png\" /></a>\n  </div>\n</div>\n<h1>Fabrication Process</h1>\n<p>The fabrication process follows three steps: 1) Fabricate an elastic sponge, 2) impregnate into conductive ink, and 3) attach electrodes and wires.\nTo fabricate an elastic sponge, we first prepare 6.0 g of elastomer prepolymer solution and 29.1 g of sodium-chloride, then mix them together by using a planetary centrifugal mixer. The mixed solution is injected into a 3D printed cylindrical mold (16mm diameter, 40mm height). Then we dry the material with an oven at 100 C degrees for one hour. Once dried, we immerse the sponge in water, so that the sodium chloride can melt, leaving a porous structure within the elastomer sponge.</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/fabrication.mp4\" type=\"video/mp4\"></source>\n</video>\n<div class=\"figures ui stackable four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-4.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-5.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-5.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-6.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-6.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-5-7.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-5-7.png\" /></a>\n  </div>\n</div>\n<h1>Software System</h1>\n<p>The programming workflow with MorphIO is the following:</p>\n<ul>\n<li>\n<p><strong>Step 1:</strong> A user starts manipulating the MorphIO unit.</p>\n</li>\n<li>\n<p><strong>Step 2:</strong> The demonstrated motion is detected and recorded through internal sensors, and the recorded sensor values are stored in the software.</p>\n</li>\n<li>\n<p><strong>Step 3:</strong> Once the user clicks play in the graphical user interface, the pneumatic pump starts supplying air.</p>\n</li>\n<li>\n<p><strong>Step 4:</strong> By controlling the air flow through switching on and off the solenoid valves, the system can control the behavior of the pneumatic actuator as it plays back the recorded motion.</p>\n</li>\n</ul>\n<p>To enable the playback of the recorded deformation, we need feedback control for each actuation module. To do so, we use the following feedback control algorithm: 1) Compare the current and target deformation value, 2) if there is a pos- itive/negative difference, we set the expansion/contraction mode, 3) if there is no or less difference than the threshold value, we set the closed mode. The system runs this procedure per every one frame (60 fps). Our feedback control software and the graphical user interface were written with C++ and the OpenFrameworks library and communicate with Arduino using the Firmata library.</p>\n<h1>Applications</h1>\n<p>We demonstrate several possible applications scenarios with MorphIO. 1) Tangible character animation, 2) Animating existing soft objects, 3) Remote manipulation of soft grippers, 4) Locomotion experimentation with soft robots.</p>\n<div class=\"figures ui stackable four column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-3.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-10-4.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-10-4.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-11-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-11-3.png\" /></a>\n  </div>\n</div>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/morphio/locomotion.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Evaluation</h1>\n<p>We conducted a user evaluation study to understand the bene- fits and limitations of MorphIO. In this study, we focused on answering the following research questions:</p>\n<ul>\n<li>\n<p><strong>RQ1:</strong> Does MorphIO save time and reduce the number of iterations to program the target behavior, compared to the existing approach?</p>\n</li>\n<li>\n<p><strong>RQ2:</strong> Does MorphIO increase the expressiveness of the physical motion?</p>\n</li>\n</ul>\n<p>To answer these questions, we conducted a controlled experiment where we compared MorphIO (left) with the current programming approach. We chose Arduino IDE (right) as a base condition for the comparison, as this is the most common programming approach identified through our formative study. We provide three basic tasks to construct a program. For each task, the participants were asked to program three differ- ent emotions—happiness, anger, and sadness—of an animated character. We chose these emotions based on Ekman’s basic emotions for communication.</p>\n<div class=\"figures ui stackable three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-12-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-12-3.png\" /></a>\n  </div>\n</div>\n<p>The average time of task completion time of MorphIO was 2m 19s, compared to 5m 21s with the control condition. The average number of iterations of MorphIO was 4.4 times, compared to 6.4 with the control condition, which confirms that MorphIO is significantly efficient in terms of task completion time and the number of iterations. When asked about the achievement of the expressions using a 9-point Likert scale, the average score with MorphIO was 6.5, compared to 6.3 with the control condition. We did not find differences between the two conditions. Thus, we conclude the result of our study as follows: <strong>RQ1: Yes, RQ2: No</strong>.</p>\n<p>Based on our post interviews, we discuss the benefits and limitations of our approach: <strong>1) tangible interactions are suitable for sculpting rough motion</strong>, <strong>2) programming allows for fine-tuning more precise adjustments</strong>. Thus, for future research, systems might allow users to quickly make a rough motion, which can automatically be converted into digital parameters so that the user can also precisely control and adjust the motion. The same human- computer cooperation approach can be applied to other design domains: For example, when designing an object, the user can quickly make rough shapes with clay, while letting a machine finish the details. We believe this insight can lead the HCI community to further explore design approaches wherein users and machines cooperate for enhanced interaction design.</p>\n<h1>Future Vision</h1>\n<p>We believe this approach’s potential for lowering the barrier and opening new opportunities for a larger community to begin designing, prototyping, and exploring soft material motion—not by coding on a screen, but by sculpting behaviors in the physical world.\nWe envision the future where people can interactively explore various behaviors through tangible interactions, <strong>just like sculpting behaviors with clay</strong>.</p>\n<div class=\"figures ui stackable one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/morphio/figure-14.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/morphio/figure-14.png\" /></a>\n  </div>\n</div>\n<h1>Video Preview</h1>\n<div class=\"video-container\">\n  <iframe class=\"embed\" width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/[id]?autoplay=1&mute=1&rel=0&loop=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>","dir":"content/output/projects","base":"morphio.json","ext":".json","sourceBase":"morphio.md","sourceExt":".md"};

/***/ })

})
//# sourceMappingURL=index.js.8b103cb4ff44217fef40.hot-update.js.map