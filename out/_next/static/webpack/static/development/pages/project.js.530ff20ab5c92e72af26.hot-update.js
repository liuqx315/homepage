webpackHotUpdate("static/development/pages/project.js",{

/***/ "./content/output/projects/dynablock.json":
/*!************************************************!*\
  !*** ./content/output/projects/dynablock.json ***!
  \************************************************/
/*! exports provided: id, name, description, title, authors, year, booktitle, publisher, pages, doi, image, conference, pdf, video, embed, short-video, slide, acm-dl, talk, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"id":"dynablock","name":"Dynablock","description":"Dynamic 3D Printing for Instant and Reconstructable Shape Formation","title":"Dynablock: Dynamic 3D Printing for Instant and Reconstructable Shape Formation","authors":["Ryo Suzuki","Junichi Yamaoka","Daniel Leithinger","Tom Yeh","Mark D. Gross","Yoshihiro Kawahara","Yasuaki Kakehi"],"year":2018,"booktitle":"In Proceedings of the 31st Annual ACM Symposium on User Interface Software and Technology (UIST '18)","publisher":"ACM, New York, NY, USA","pages":"99-111","doi":"https://doi.org/10.1145/3242587.3242659","image":"dynablock.jpg","conference":{"name":"UIST 2018","fullname":"The ACM Symposium on User Interface Software and Technology (UIST 2018)","url":"http://uist.acm.org/uist2018"},"pdf":"uist-2018-dynablock.pdf","video":"https://www.youtube.com/watch?v=7nPlr3O9xu8","embed":"https://www.youtube.com/embed/7nPlr3O9xu8","short-video":"https://www.youtube.com/watch?v=92eGI-gYYc4","slide":"uist-2018-dynablock-slide.pdf","acm-dl":"https://dl.acm.org/citation.cfm?id=3242659","talk":"https://www.youtube.com/watch?v=R3FRUtOIiCQ","bodyContent":"Links:\n[**[PDF](http://ryosuzuki.org/publications/uist-2018-dynablock.pdf)**]\n[**[ACM DL](https://dl.acm.org/citation.cfm?id=3242659)**]\n[**[Video](https://www.youtube.com/watch?v=7nPlr3O9xu8)**]\n[**[Slide](http://ryosuzuki.org/publications/uist-2018-dynablock-slide.pdf)**]\n[**[Talk](https://www.youtube.com/watch?v=R3FRUtOIiCQ)**]\n\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/dynablock/top.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n# Abstract\n\nThis paper introduces Dynamic 3D Printing, a fast and re- constructable shape formation system. Dynamic 3D Printing assembles an arbitrary three-dimensional shape from a large number of small physical elements. It can also disassemble the shape back to elements and reconstruct a new shape. Dynamic 3D Printing combines the capabilities of 3D printers and shape displays: Like conventional 3D printing, it can generate arbi- trary and graspable three-dimensional shapes, while allowing shapes to be rapidly formed and reformed as in a shape display. To demonstrate the idea, we describe the design and imple- mentation of Dynablock, a working prototype of a dynamic 3D printer. Dynablock can form a three-dimensional shape in seconds by assembling 3,000 9 mm blocks, leveraging a 24 x 16 pin-based shape display as a parallel assembler. Dynamic 3D printing is a step toward achieving our long term vision in which 3D printing becomes an interactive medium, rather than the means for fabrication that it is today. In this paper we explore possibilities for this vision by illustrating application scenarios that are difficult to achieve with conventional 3D printing or shape display systems.\n\n<div class=\"figures ui two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-1-1.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-1-1.jpg\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-1-2.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-1-2.jpg\" /></a>\n  </div>\n</div>\n\n<div class=\"figures ui three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-2-1.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-2-1.jpg\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-2-2.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-2-2.jpg\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-2-3.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-2-3.jpg\" /></a>\n  </div>\n</div>\n\n# Dynamic 3D Printing\n\nWhat if 3D printers could form a physical object in seconds? What if the object, once it is no longer needed, could quickly and easily be disassembled and reconstructed as a new object? Today’s 3D printers take hours to print objects, and output a single static object. However, we envision a future in which 3D printing could instantly create objects from reusable and reconstructable materials.\n\nThis paper develops this vision by proposing Dynamic 3D Printing, a class of systems for rapid and reconstructable shape formation. Dynamic 3D Printing assembles digital material elements to form recon- structable physical objects. Each element can be connected with and disconnected from neighboring elements, and ele- ments can be formed into an arbitrary three-dimensional phys- ical object. Dynamic 3D printing differs from existing 3D printing in speed and reconstructability: Dynamic 3D printing forms shapes in seconds, rather than minutes. In addition, because individual elements can be disconnected, the shape can be easily disassembled into its basic building blocks once the object is no longer needed.\n\nWe define Dynamic 3D Printing as a class of systems that have the following properties:\n\n- Immediate: The system can form a physical shape in sec- onds.\n\n- Reconstructable: Rendered shapes can be disassembled and reconstructed by hand or with the system, and the blocks are reusable.\n\n- Arbitrary Shapes: It can create arbitrary three dimensional shapes.\n\n- Graspable: The output shapes and structure are graspable and solid.\n\n# Parallel Assembler\n\n<div class=\"figures ui one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-3-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-3-1.png\" /></a>\n  </div>\n</div>\n\nDynamic 3D printing deploys a large number of small dis- crete material elements, which are assembled to form arbitrary shaped macro-scale objects. Individual elements are passive, which requires an external actuator to perform the assembly. As illustrated in the above Figure, the assembler consists of an N x N grid of motorized pins and linear actuators. The elements, which are the same size as the pins, are stacked on top of the pins (Figure 3 A). When stacked, the elements are connected in vertical direction, while discon- nected with nearby elements in horizontal direction. Similar to existing pin-based shape displays, the assembler can incrementally generate 2.5D shapes by individually moving pins to push elements to the surface.\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/dynablock/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n\n\n<div class=\"figures ui two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-4-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-4-1.png\" /></a>\n  </div>\n  <p class=\"column\">\n    This paper develops this vision by proposing Dynamic 3D Printing, a class of systems for rapid and reconstructable shape formation. Dynamic 3D Printing assembles digital material elements to form recon- structable physical objects. Each element can be connected with and disconnected from neighboring elements, and ele- ments can be formed into an arbitrary three-dimensional phys- ical object. Dynamic 3D printing differs from existing 3D printing in speed and reconstructability: Dynamic 3D printing forms shapes in seconds, rather than minutes. In addition, because individual elements can be disconnected, the shape can be easily disassembled into its basic building blocks once the object is no longer needed.\n  </p>\n</div>\n\n\n# Implementation\n\nThe assembler consists of a 24 x 16 array of motor-driven pins. Each pin moves up and down, driven by a small DC motor (TTMotors TGPP06-D700) and a 3D printed lead screw (2 mm pitch, 4 starts, 120 mm in length). TGPP06-D700 is 6 mm in diameter and 29 mm in length and can rotate 47 rpm with 1:700 gear ratio. The 2 mm 4 starts lead screw can travel 12 mm per second without load, and each motor consumes approximately 60 mA. The pins are 3D printed with a nut at the bottom to travel along the lead screw. Each pin is 120 mm long and has a 7mm square cross section with a 5 mm diameter hole from top to bottom, and an N45 disk magnet (φ 3mm x 2.4 mm thickness) is attached at the top. Guide grids at the top prevent pins from rotating and ensure that pins travel vertically. The 24 x 16 guide grids have 7.5 mm square holes with 10.16 mm pitch and are cut from a 5 mm acrylic plate. We fabricated the pins, the lead screws, and blocks with an inkjet 3D printer (Keyence Agilista 3200) with water soluble support material. In total, we fabricated 384 (= 24 x 16) pins and lead screws, and 3,072 (= 24 x 16 x 8 layers) blocks. To create the magnetic blocks, we embedded spherical magnets in each block by hand and inserted disk magnets using a bench vice.\n\n\n<div class=\"figures ui three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-5-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-5-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-5-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-5-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-5-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-5-3.png\" /></a>\n  </div>\n</div>\n\n<div class=\"figures ui three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-7-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-7-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-7-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-7-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-7-3.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-7-3.jpg\" /></a>\n  </div>\n</div>\n\n\n# Future Vision\n\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/dynablock/claytronics.mp4\" type=\"video/mp4\"></source>\n</video>\n[Video Credit: Carnegie Mellon University, Claytronics Vision]\n\n<br/>\n\nWith these capabilities, a 3D printer would become an inter- active medium, rather than merely a fabrication device. For example, such a 3D printer could be used in a Virtual Real- ity or Augmented Reality application to dynamically form a tangible object or controller to provide haptic feedback and engage users physically. For children, it could dynamically form a physical educational manipulative, such as a molec- ular or architectural model, to learn and explore topics, for example in a science museum. Designers could use it to ren- der a physical product to present to clients and interactively change the product’s design through direct manipulation. In this vision, Dynamic 3D printing is an environment in which the user thinks, designs, explores, and communicates through dynamic and interactive physical representation.\n\n<div class=\"figures ui one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-8-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-8-1.png\" /></a>\n  </div>\n</div>\n\nDynamic 3D printing would enable a new design workflow for digital fabrication. One notable advantage of dynamic 3D printing is the capability of connecting and disconnecting building blocks through direct manipulation. The user can also define variables or abstract attributes for parametric design through direct and gestural interaction. By leveraging this capability, the user could interactively design and fabri- cate in a physical space, similar to the man-machine dialogue proposed by Frazer et al. and later tangible CAD interfaces.\n\n\n# Publication\n\n<div class=\"ui placeholder segment\">\n<p>\nRyo Suzuki, Junichi Yamaoka, Daniel Leithinger, Tom Yeh, Mark D. Gross, Yoshihiro Kawahara, and Yasuaki Kakehi. 2018. <b>Dynablock: Dynamic 3D Printing for Instant and Reconstructable Shape Formation</b>. <i>In Proceedings of the 31st Annual ACM Symposium on User Interface Software and Technology (UIST '18)</i>. ACM, New York, NY, USA, 99-111.\n<br/>\nDOI: <a href=\"https://doi.org/10.1145/3242587.3242659\" target=\"_blank\">https://doi.org/10.1145/3242587.3242659</a>\n</p>\n</div>\n\n<div>\n  <a class=\"paper-thumbnail\" href=\"http://ryosuzuki.org/publications/uist-2018-dynablock.pdf\" target=\"_blank\">\n    <div class=\"figures ui six column grid\">\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-1.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-2.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-3.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-4.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-5.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-6.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-7.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-8.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-9.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-10.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-11.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-12.png\" />\n    </div>\n  </a>\n</div>\n\n\n\n# Slide\n\n\n<div class=\"figures ui six column grid\">\n  <a class=\"paper column\" href=\"/static/projects/dynablock/slide-1.png\" data-lightbox=\"lightbox\">\n    <img src=\"/static/projects/dynablock/slide-1.png\" />\n  </a>\n</div>","bodyHtml":"<p>Links:\n[<strong><a href=\"http://ryosuzuki.org/publications/uist-2018-dynablock.pdf\">PDF</a></strong>]\n[<strong><a href=\"https://dl.acm.org/citation.cfm?id=3242659\">ACM DL</a></strong>]\n[<strong><a href=\"https://www.youtube.com/watch?v=7nPlr3O9xu8\">Video</a></strong>]\n[<strong><a href=\"http://ryosuzuki.org/publications/uist-2018-dynablock-slide.pdf\">Slide</a></strong>]\n[<strong><a href=\"https://www.youtube.com/watch?v=R3FRUtOIiCQ\">Talk</a></strong>]</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/dynablock/top.mp4\" type=\"video/mp4\"></source>\n</video>\n<h1>Abstract</h1>\n<p>This paper introduces Dynamic 3D Printing, a fast and re- constructable shape formation system. Dynamic 3D Printing assembles an arbitrary three-dimensional shape from a large number of small physical elements. It can also disassemble the shape back to elements and reconstruct a new shape. Dynamic 3D Printing combines the capabilities of 3D printers and shape displays: Like conventional 3D printing, it can generate arbi- trary and graspable three-dimensional shapes, while allowing shapes to be rapidly formed and reformed as in a shape display. To demonstrate the idea, we describe the design and imple- mentation of Dynablock, a working prototype of a dynamic 3D printer. Dynablock can form a three-dimensional shape in seconds by assembling 3,000 9 mm blocks, leveraging a 24 x 16 pin-based shape display as a parallel assembler. Dynamic 3D printing is a step toward achieving our long term vision in which 3D printing becomes an interactive medium, rather than the means for fabrication that it is today. In this paper we explore possibilities for this vision by illustrating application scenarios that are difficult to achieve with conventional 3D printing or shape display systems.</p>\n<div class=\"figures ui two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-1-1.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-1-1.jpg\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-1-2.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-1-2.jpg\" /></a>\n  </div>\n</div>\n<div class=\"figures ui three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-2-1.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-2-1.jpg\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-2-2.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-2-2.jpg\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-2-3.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-2-3.jpg\" /></a>\n  </div>\n</div>\n<h1>Dynamic 3D Printing</h1>\n<p>What if 3D printers could form a physical object in seconds? What if the object, once it is no longer needed, could quickly and easily be disassembled and reconstructed as a new object? Today’s 3D printers take hours to print objects, and output a single static object. However, we envision a future in which 3D printing could instantly create objects from reusable and reconstructable materials.</p>\n<p>This paper develops this vision by proposing Dynamic 3D Printing, a class of systems for rapid and reconstructable shape formation. Dynamic 3D Printing assembles digital material elements to form recon- structable physical objects. Each element can be connected with and disconnected from neighboring elements, and ele- ments can be formed into an arbitrary three-dimensional phys- ical object. Dynamic 3D printing differs from existing 3D printing in speed and reconstructability: Dynamic 3D printing forms shapes in seconds, rather than minutes. In addition, because individual elements can be disconnected, the shape can be easily disassembled into its basic building blocks once the object is no longer needed.</p>\n<p>We define Dynamic 3D Printing as a class of systems that have the following properties:</p>\n<ul>\n<li>\n<p>Immediate: The system can form a physical shape in sec- onds.</p>\n</li>\n<li>\n<p>Reconstructable: Rendered shapes can be disassembled and reconstructed by hand or with the system, and the blocks are reusable.</p>\n</li>\n<li>\n<p>Arbitrary Shapes: It can create arbitrary three dimensional shapes.</p>\n</li>\n<li>\n<p>Graspable: The output shapes and structure are graspable and solid.</p>\n</li>\n</ul>\n<h1>Parallel Assembler</h1>\n<div class=\"figures ui one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-3-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-3-1.png\" /></a>\n  </div>\n</div>\n<p>Dynamic 3D printing deploys a large number of small dis- crete material elements, which are assembled to form arbitrary shaped macro-scale objects. Individual elements are passive, which requires an external actuator to perform the assembly. As illustrated in the above Figure, the assembler consists of an N x N grid of motorized pins and linear actuators. The elements, which are the same size as the pins, are stacked on top of the pins (Figure 3 A). When stacked, the elements are connected in vertical direction, while discon- nected with nearby elements in horizontal direction. Similar to existing pin-based shape displays, the assembler can incrementally generate 2.5D shapes by individually moving pins to push elements to the surface.</p>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/dynablock/mechanism.mp4\" type=\"video/mp4\"></source>\n</video>\n<div class=\"figures ui two column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-4-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-4-1.png\" /></a>\n  </div>\n  <p class=\"column\">\n    This paper develops this vision by proposing Dynamic 3D Printing, a class of systems for rapid and reconstructable shape formation. Dynamic 3D Printing assembles digital material elements to form recon- structable physical objects. Each element can be connected with and disconnected from neighboring elements, and ele- ments can be formed into an arbitrary three-dimensional phys- ical object. Dynamic 3D printing differs from existing 3D printing in speed and reconstructability: Dynamic 3D printing forms shapes in seconds, rather than minutes. In addition, because individual elements can be disconnected, the shape can be easily disassembled into its basic building blocks once the object is no longer needed.\n  </p>\n</div>\n<h1>Implementation</h1>\n<p>The assembler consists of a 24 x 16 array of motor-driven pins. Each pin moves up and down, driven by a small DC motor (TTMotors TGPP06-D700) and a 3D printed lead screw (2 mm pitch, 4 starts, 120 mm in length). TGPP06-D700 is 6 mm in diameter and 29 mm in length and can rotate 47 rpm with 1:700 gear ratio. The 2 mm 4 starts lead screw can travel 12 mm per second without load, and each motor consumes approximately 60 mA. The pins are 3D printed with a nut at the bottom to travel along the lead screw. Each pin is 120 mm long and has a 7mm square cross section with a 5 mm diameter hole from top to bottom, and an N45 disk magnet (φ 3mm x 2.4 mm thickness) is attached at the top. Guide grids at the top prevent pins from rotating and ensure that pins travel vertically. The 24 x 16 guide grids have 7.5 mm square holes with 10.16 mm pitch and are cut from a 5 mm acrylic plate. We fabricated the pins, the lead screws, and blocks with an inkjet 3D printer (Keyence Agilista 3200) with water soluble support material. In total, we fabricated 384 (= 24 x 16) pins and lead screws, and 3,072 (= 24 x 16 x 8 layers) blocks. To create the magnetic blocks, we embedded spherical magnets in each block by hand and inserted disk magnets using a bench vice.</p>\n<div class=\"figures ui three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-5-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-5-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-5-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-5-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-5-3.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-5-3.png\" /></a>\n  </div>\n</div>\n<div class=\"figures ui three column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-7-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-7-1.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-7-2.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-7-2.png\" /></a>\n  </div>\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-7-3.jpg\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-7-3.jpg\" /></a>\n  </div>\n</div>\n<h1>Future Vision</h1>\n<video preload=\"metadata\" autoPlay loop muted playsInline webkit-playsinline=\"\">\n  <source src=\"/static/projects/dynablock/claytronics.mp4\" type=\"video/mp4\"></source>\n</video>\n[Video Credit: Carnegie Mellon University, Claytronics Vision]\n<br/>\n<p>With these capabilities, a 3D printer would become an inter- active medium, rather than merely a fabrication device. For example, such a 3D printer could be used in a Virtual Real- ity or Augmented Reality application to dynamically form a tangible object or controller to provide haptic feedback and engage users physically. For children, it could dynamically form a physical educational manipulative, such as a molec- ular or architectural model, to learn and explore topics, for example in a science museum. Designers could use it to ren- der a physical product to present to clients and interactively change the product’s design through direct manipulation. In this vision, Dynamic 3D printing is an environment in which the user thinks, designs, explores, and communicates through dynamic and interactive physical representation.</p>\n<div class=\"figures ui one column grid\">\n  <div class=\"figure column\">\n    <a href=\"/static/projects/dynablock/figure-8-1.png\" data-lightbox=\"lightbox\"><img src=\"/static/projects/dynablock/figure-8-1.png\" /></a>\n  </div>\n</div>\n<p>Dynamic 3D printing would enable a new design workflow for digital fabrication. One notable advantage of dynamic 3D printing is the capability of connecting and disconnecting building blocks through direct manipulation. The user can also define variables or abstract attributes for parametric design through direct and gestural interaction. By leveraging this capability, the user could interactively design and fabri- cate in a physical space, similar to the man-machine dialogue proposed by Frazer et al. and later tangible CAD interfaces.</p>\n<h1>Publication</h1>\n<div class=\"ui placeholder segment\">\n<p>\nRyo Suzuki, Junichi Yamaoka, Daniel Leithinger, Tom Yeh, Mark D. Gross, Yoshihiro Kawahara, and Yasuaki Kakehi. 2018. <b>Dynablock: Dynamic 3D Printing for Instant and Reconstructable Shape Formation</b>. <i>In Proceedings of the 31st Annual ACM Symposium on User Interface Software and Technology (UIST '18)</i>. ACM, New York, NY, USA, 99-111.\n<br/>\nDOI: <a href=\"https://doi.org/10.1145/3242587.3242659\" target=\"_blank\">https://doi.org/10.1145/3242587.3242659</a>\n</p>\n</div>\n<div>\n  <a class=\"paper-thumbnail\" href=\"http://ryosuzuki.org/publications/uist-2018-dynablock.pdf\" target=\"_blank\">\n    <div class=\"figures ui six column grid\">\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-1.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-2.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-3.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-4.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-5.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-6.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-7.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-8.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-9.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-10.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-11.png\" />\n      <img class=\"paper column\" src=\"/static/projects/dynablock/paper-12.png\" />\n    </div>\n  </a>\n</div>\n<h1>Slide</h1>\n<div class=\"figures ui six column grid\">\n  <a class=\"paper column\" href=\"/static/projects/dynablock/slide-1.png\" data-lightbox=\"lightbox\">\n    <img src=\"/static/projects/dynablock/slide-1.png\" />\n  </a>\n</div>","dir":"content/output/projects","base":"dynablock.json","ext":".json","sourceBase":"dynablock.md","sourceExt":".md"};

/***/ })

})
//# sourceMappingURL=project.js.530ff20ab5c92e72af26.hot-update.js.map