"use strict";
let galleryArray = [
  {
    heading: "Resume",
    title: "Novo Resume",
    content: "Create a fast, professional-looking resume",
    link: "https://novoresume.com",
    tags: "resume, professional, fast",
  },
  {
    heading: "Resume",
    title: "Flow CV",
    content: "Create a modern, interactive resume",
    link: "https://www.flowcv.io/",
    tags: "resume, modern, interactive",
  },
  {
    heading: "Resume",
    title: "Resume Worded",
    content: "Improve your resume and LinkedIn profile with expert feedback.",
    link: "https://resumeworded.com/",
    tags: "resume, LinkedIn, expert feedback",
  },
  {
    heading: "Resume",
    title: "Kick Resume",
    content:
      "Assemble your resume with pre-written phrases for over 3,200 positions.",
    link: "https://www.kickresume.com/en/",
    tags: "resume, pre-written phrases, positions",
  },
  {
    heading: "Resume",
    title: "I/A for Placement Resume",
    content: "AI-powered CV assistance platform in India.",
    link: "https://ilaforplacements.com/",
    tags: "AI, CV, assistance, platform, India",
  },
  {
    heading: "Resume",
    title: "Resume.io",
    content:
      "Free online resume maker to create professional resumes and cover letters.",
    link: "https://resume.io/",
    tags: "resume, online, maker, professional, cover letter",
  },
  {
    heading: "Routine Tools",
    title: "Tin Wow",
    content: "Create a stunning resume and cover letter",
    link: "https://www.tinywow.com/",
    tags: "resume, cover letter, stunning",
  },
  {
    heading: "Routine Tools",
    title: "Altranativeto.net",
    content: "Altranetive for all websites and softwares",
    link: "https://www.alternativeto.net",
    tags: "altranetive, software, website, games, free",
  },
  {
    heading: "Routine Tools",
    title: "Video Glancer",
    content: "Create a video resume",
    link: "https://videoglancer.com/",
    tags: "resume, video",
  },
  {
    heading: "Routine Tools",
    title: "I Love Pdf",
    content: "A huge Pdf tools For free",
    link: "https://www.ilovepdf.com/",
    tags: "pdf, edit",
  },
  {
    heading: "Routine Tools",
    title: "Image Resizer",
    content: "Easily Resize Images Online for free",
    link: "https://www.imageresizer.com/",
    tags: "Image, resizer",
  },
  {
    heading: "Routine Tools",
    title: "123 Apps",
    content: "Variety of online tools and resources",
    link: "https://123apps.com/",
    tags: "online tools, resources",
  },
  {
    heading: "Routine Tools",
    title: "Slides Go",
    content: "Take your presentations to the next level with SlidesGo.",
    link: "https://slidesgo.com/",
    tags: "presentations, oral expositions",
  },
  {
    heading: "Routine Tools",
    title: "Temp Mail",
    content: "Create a temporary email address",
    link: "https://temp-mail.org/",
    tags: "email, temporary",
  },
  {
    heading: "Routine Tools",
    title: "Download Any File From Any Site",
    content:
      "Free tool to download videos, audio, and images from any platform.",
    link: "https://downloaders.beatsnoop.com/",
    tags: "download, video, audio, images, platform, Mega Downloader",
  },
  {
    heading: "Routine Tools",
    title: "I Love Image",
    content: "Image tools for free",
    link: "https://www.iloveimg.com/",
    tags: "image, editor",
  },
  {
    heading: "Technical Tools",
    title: "Tine Eye",
    content:
      "Computer vision and image recognition products for reverse image search.",
    link: "https://tineye.com/",
    tags: "computer vision, image recognition, reverse image search",
  },
  {
    heading: "Technical Tools",
    title: "Screen Shot Guru",
    content: "Capture and edit screenshots",
    link: "https://screenshotguru.com/",
    tags: "screenshots, capture, edit",
  },
  {
    heading: "Technical Tools",
    title: "Name Checkr",
    content:
      "Social and domain name availability search for brand professionals.",
    link: "https://www.namecheckr.com/",
    tags: "social, domain, name, availability, search, brand, professionals",
  },
  {
    heading: "Technical Tools",
    title: "Wayback Machine",
    content: "Capture, manage, and search digital content with Archive-It.",
    link: "https://archive.org/web",
    tags: "digital content, Archive-It",
  },
  {
    heading: "Students Sections",
    title: "Kashipara",
    content:
      "A website that offers free project ideas and resources for students",
    link: "https://kashipara.com/",
    tags: "project ideas, resources, students",
  },
  {
    heading: "Students Sections",
    title: "Teleport HQ",
    content: "A tool that helps you schedule and join online meetings",
    link: "https://teleporthq.com/",
    tags: "online meetings, scheduling, collaboration",
  },
  {
    heading: "Students Sections",
    title: "Netlify",
    content:
      "A platform that allows you to easily host your website and apps for free",
    link: "https://www.netlify.com",
    tags: "website hosting, app hosting, free",
  },
  {
    heading: "Students Sections",
    title: "Google Scholar",
    content:
      "Search for scholarly literature across disciplines and sources with Google Scholar.",
    link: "https://scholar.google.com/",
    tags: "scholarly literature, search",
  },
  {
    heading: "Students Sections",
    title: "Uizard",
    content: "A website that provides drag and drop templates for projects",
    link: "https://uizard.io",
    tags: "templates, projects, drag and drop",
  },
  {
    heading: "Students Sections",
    title: "Neon Projects",
    content: "A website that offers project work",
    link: "https://nevonpprojects.com",
    tags: "project work, resources",
  },
  {
    heading: "Students Sections",
    title: "Free for Students",
    content:
      "A community that provides free resources for students, including certificates",
    link: "https://freeforstudents.org",
    tags: "resources, students, certificates",
  },
  {
    heading: "Students Sections",
    title: "Google certificate",
    content: "Free online courses from Google",
    link: "https://grow.google/certificates/",
    tags: "Google, certificates, online courses, skills, careers",
  },
  {
    heading: "Instagram Tools",
    title: "Insta Video Save",
    content: "A tool that allows you to save Instagram videos",
    link: "https://instavideosave.net",
    tags: "Instagram, videos, save, reel, story, post",
  },
  {
    heading: "Instagram Tools",
    title: "yellowduck tv",
    content: "Streaming service for Instagram",
    link: "https://yellowduck.tv/",
    tags: "streaming, service, live, Instagram, computer, OBS, RTMP, software",
  },
  {
    heading: "Instagram Tools",
    title: "New Profile Pic",
    content: "A website that allows you to edit your profile picture",
    link: "https://newprofilepic.com",
    tags: "Instagram, profile picture, edit",
  },
  {
    heading: "Instagram Tools",
    title: "Story saver",
    content: "A tool that allows you to save insta story",
    link: "https://storysaver.net",
    tags: "Instagram, story ",
  },
  {
    heading: "Instagram Tools",
    title: "Magic Eraser",
    content: "A tool that helps you remove unwanted elements from images",
    link: "https://magiceraser.io",
    tags: "Instagram, images, edit",
  },
  {
    heading: "Logo Maker",
    title: "Hatchful Shopify",
    content: "A website that helps you create amazing logos",
    link: "https://hatchful.shopify.com",
    tags: "logo maker, logos, create",
  },
  {
    heading: "Logo Maker",
    title: "Tailor Brands",
    content: "A website that allows you to create logos",
    link: "https://www.tailorbrands.com",
    tags: "logo maker, logos, create",
  },
  {
    heading: "Logo Maker",
    title: "Looka",
    content: "A website that offers a range of customizable logos",
    link: "https://looka.com",
    tags: "logo maker, logos, customize",
  },
  {
    heading: "Free Cloud Storage",
    title: "Tera Box",
    content: "A website that provides 1 TB of free storage",
    link: "https://www.terabox.com",
    tags: "cloud storage, free storage, terabyte",
  },
  {
    heading: "File Sharing",
    title: "Toffeeshare",
    content: "A tool that allows you to share large files quickly",
    link: "https://toffeeshare.com",
    tags: "file sharing, large files, fast",
  },
  {
    heading: "File Sharing",
    title: "private data sharing",
    content: "Secure file sharing with encryption",
    link: "https://send.zcyph.cc/",
    tags: "file sharing, secure, encryption, data",
  },
  {
    heading: "Photo Editors",
    title: "Hotpot AI",
    content: "Design assistant for photos",
    link: "https://hotpot.ai",
    tags: "photo design, AI, assistant",
  },
  {
    heading: "Photo Editors",
    title: "Img.upscaller",
    content:
      "Enlarges images without losing quality using deep learning neural networks.",
    link: "https://imageupscaler.com/",
    tags: "images, enlarge, quality, deep learning, neural networks",
  },
  {
    heading: "Photo Editors",
    title: "Watermark Remover",
    content: "Remove watermarks from images",
    link: "https://www.watermarkremover.io/",
    tags: "watermark, images, remove",
  },
  {
    heading: "Photo Editors",
    title: "Deep Image",
    content: "Upscale images",
    link: "https://deep-image.ai/",
    tags: "Upscale, images",
  },
  {
    heading: "Photo Editors",
    title: "Deepart",
    content: "Create non-fungible tokens (NFTs)",
    link: "https://deepart.io/",
    tags: "NFTs, tokens, art",
  },
  {
    heading: "Photo Editors",
    title: "CleanPNG",
    content: "Discover transparent background images and illustrations.",
    link: "https://www.cleanpng.com/",
    tags: "transparent, background, images, illustrations",
  },
  {
    heading: "Photo Editors",
    title: "Colorise",
    content: "Photo editing and restoration services",
    link: "https://colorize.cc/",
    tags: "photo editing, restoration, colorization",
  },
  {
    heading: "Photo Editors",
    title: "123 Passport",
    content: "Create passport photos",
    link: "https://www.123passportphoto.com",
    tags: "passport photos, passport, photos",
  },
  {
    heading: "Photo Editors",
    title: "erase.bg",
    content: "Background removal service for images",
    link: "https://www.erase.bg/",
    tags: "background, removal, service, images",
  },
  {
    heading: "Photo Editors",
    title: "The Inpaint",
    content: "A tool that helps you remove unwanted elements from images",
    link: "https://theinpaint.com",
    tags: "image editing, removal, inpaint",
  },
  {
    heading: "Photo Editors",
    title: "Media IO",
    content: "A website that offers photo and video editing services",
    link: "https://www.media.io/",
    tags: "photo editing, video editing, services",
  },
  {
    heading: "Photo Creator",
    title: "Canva",
    content: "A popular photo editor for social media",
    link: "https://www.canva.com",
    tags: "Instagram, photo editor, social media",
  },
  {
    heading: "Photo Creator",
    title: "VistaCreate",
    content:
      "Free graphic design software with powerful features and 100K+ templates.",
    link: "https://create.vista.com/",
    tags: "graphic design, software, templates, canva",
  },
  {
    heading: "Video Editors + Creations",
    title: "animoto",
    content: "Video creation platform",
    link: "https://animoto.com/",
    tags: "video, creation, platform, professional, quality",
  },
  {
    heading: "Video Editors + Creations",
    title: "tyle.io",
    content: "Free photo slideshow video maker",
    link: "https://tyle.io/",
    tags: "slideshow, videos, photos, free, online",
  },
  {
    heading: "Video Editors + Creations",
    title: "Renderforest",
    content:
      "Create stunning videos, animations, graphics, and websites for your business.",
    link: "https://www.renderforest.com/",
    tags: "videos, animations, branding, mockups, presentations, graphics, websites, business",
  },
  {
    heading: "Colors Tools",
    title: "Colors.co",
    content:
      "Generate and explore color palettes, extract from images, and more.",
    link: "https://coolors.co/",
    tags: "color palettes, generate, explore, extract, images",
  },
  {
    heading: "Designing Tools",
    title: "Sweet Home 3D",
    content:
      "Free interior design tool to draw plans, arrange furniture, and view results in 3D.",
    link: "https://www.sweethome3d.com/",
    tags: "interior design, plans, furniture, 3D",
  },
  {
    heading: "Designing Tools",
    title: "linktree",
    content: "Customizable landing page with links",
    link: "https://linktr.ee/",
    tags: "landing page, customizable, social media, profiles, online platforms",
  },
  {
    heading: "Colors Tools",
    title: "0 to 255",
    content: "Website that allows you to pick colors",
    link: "https://0to255.com/",
    tags: "CSS, colors",
  },
  {
    heading: "Colors Tools",
    title: "My Color Space",
    content: "Website that helps you create gradient colors",
    link: "https://mycolor.space/",
    tags: "CSS, gradient colors",
  },
  {
    heading: "Designing Tools",
    title: "Spline Design",
    content: "Design and collaborate in 3D with Spline.",
    link: "https://spline.design/",
    tags: "3D, design, collaboration",
  },
  {
    heading: "Designing Tools",
    title: "FlutterFlow",
    content:
      "Create beautiful UI and deploy to app stores or web with FlutterFlow.",
    link: "https://flutterflow.io/",
    tags: "UI, deployment, app stores, web",
  },
  {
    heading: "Designing Tools",
    title: "Drawkit",
    content: "Free vector SVG illustrations with no attribution required.",
    link: "https://www.drawkit.com/",
    tags: "vector, SVG, illustrations, icons, 3D",
  },
  {
    heading: "Designing Tools",
    title: "Womp",
    content: "Collaborate in real time on 3D projects with any web browser.",
    link: "https://www.womp.com/",
    tags: "3D, collaboration, real time, web browser",
  },
  {
    heading: "Designing Tools",
    title: "Pexels",
    content: "Free stock photos and videos for personal and commercial use.",
    link: "https://www.pexels.com/",
    tags: "stock photos, videos, personal, commercial, use, royalty free, high-quality",
  },
  {
    heading: "Designing Tools",
    title: "Pika Style",
    content: "Create website and device mockups from screenshots.",
    link: "https://pika.style/",
    tags: "website, device, mockups, screenshots",
  },
  {
    heading: "Designing Tools",
    title: "rotato app",
    content: "Drag-and-drop mockup studio",
    link: "https://rotato.app/",
    tags: "mockup, studio, professional, quality, projects",
  },
  {
    heading: "BackGround remove",
    title: "Unscreen",
    content: "A tool that helps you remove the background from videos",
    link: "https://www.unscreen.com",
    tags: "background removal, video editing",
  },
  {
    heading: "BackGround remove",
    title: "Remove BG",
    content: "A tool that helps you remove the background from photos",
    link: "https://www.remove.bg",
    tags: "background removal, photo editing",
  },
  {
    heading: "CSS Tools",
    title: "Get Waves",
    content: "A website that provides CSS source code",
    link: "https://getwaves.io",
    tags: "CSS, source code",
  },
  {
    heading: "CSS Tools",
    title: "Keyframes",
    content: "A website that offers for amazing source code",
    link: "https://keyframes.app/",
    tags: "CSS, source code",
  },
  {
    heading: "CSS Tools",
    title: "custom shape dividers",
    content: "Generator for custom shape dividers",
    link: "https://www.shapedivider.app/",
    tags: "shape dividers, custom, responsive, website, project",
  },
  {
    heading: "CSS Tools",
    title: "UIverse",
    content: "A website that provides CSS source code",
    link: "https://uiverse.io/",
    tags: "CSS, source code",
  },
  {
    heading: "CSS Tools",
    title: "Bg Jar",
    content: "Website that offers background images",
    link: "https://bgjar.com/",
    tags: "CSS, background images",
  },
  {
    heading: "CSS Tools",
    title: "Neumorphism CSS",
    content: "Website that provides CSS boxes",
    link: "https://hype4.academy/tools/neumorphism-generator",
    tags: "CSS, boxes",
  },
  {
    heading: "Icons",
    title: "Craftwork Design",
    content: "Website that helps you design better websites",
    link: "https://craftwork.design/",
    tags: "website design, icons",
  },
  {
    heading: "Icons",
    title: "Khushmeen",
    content: "Website that offers free illustrations and doodle icons",
    link: "https://khushmeen.com/",
    tags: "illustrations, icons, free",
  },
  {
    heading: "Icons",
    title: "Lord icon",
    content: "Live icon libraries",
    link: "https://lordicon.com/",
    tags: "icon, libraries, projects",
  },
  {
    heading: "Icons",
    title: "Icon Bay",
    content: "Website that offers a variety of cool icons",
    link: "https://iconbay.io/",
    tags: "icons, cool",
  },
  {
    heading: "Typing Practice",
    title: "10 Fast Fingers",
    content: "Website that offers typing games",
    link: "https://10fastfingers.com/",
    tags: "typing, games",
  },
  {
    heading: "Typing Practice",
    title: "Keybr",
    content: "A website that helps you improve your typing skills",
    link: "https://www.keybr.com/",
    tags: "typing, skills",
  },
  {
    heading: "Typing Practice",
    title: " Typing Club",
    content: " A website that provides typing lessons and practice exercises",
    link: "https://www.typingclub.com/",
    tags: "typing, lessons, practice",
  },
  {
    heading: "Programming Practice",
    title: "Codeforces",
    content: "A website that offers coding challenges and contests",
    link: "https://codeforces.com/",
    tags: "coding, challenges, contests",
  },
  {
    heading: "Programming Practice",
    title: "Code Wars",
    content: "A website that offers coding challenges and exercises",
    link: "https://www.codewars.com/",
    tags: "coding, challenges, exercises",
  },
  {
    heading: "Programming Practice",
    title: "LeetCode",
    content: "A website that offers coding challenges and exercises",
    link: "https://leetcode.com/",
    tags: "coding, challenges, exercises",
  },
  {
    heading: "Programming Practice",
    title: "HackerRank",
    content: "A website that offers coding challenges and exercises",
    link: "https://www.hackerrank.com/",
    tags: "coding, challenges, exercises",
  },
  {
    heading: "Programming Practice",
    title: "Coderbyte",
    content: "A website that offers coding challenges and exercises",
    link: "https://coderbyte.com/",
    tags: "coding, challenges, exercises",
  },
  {
    heading: "Programming Practice",
    title: "Project Euler",
    content: "A website that offers math and computer science challenges",
    link: "https://projecteuler.net/",
    tags: "math, computer science, challenges",
  },
  {
    heading: "Programming Practice",
    title: "Kaggle",
    content:
      "A website that offers data science and machine learning challenges",
    link: "https://www.kaggle.com/",
    tags: "data science, machine learning, challenges",
  },
  {
    heading: "AI Tools",
    title: "rytr.me",
    content: "AI-powered content writing tool",
    link: "https://rytr.me/",
    tags: "AI, content, writing, articles, blog, posts",
  },
  {
    heading: "AI Tools",
    title: "Dall e 2",
    content: "AI platform for text-to-image generation",
    link: "https://openai.com/dall-e-2/",
    tags: "AI, platform, text, images",
  },
  {
    heading: "AI Tools",
    title: "Chat GPT",
    content: "AI platform for text-to-image generation",
    link: "https://chat.openai.com/chat",
    tags: "AI, platform, text",
  },
  {
    heading: "AI Tools",
    title: "Content Edge",
    content: "Copywriting generator tool using AI to write human-like pieces.",
    link: "https://www.contentedge.com/",
    tags: "copywriting, generator, AI, writing",
  },
  {
    heading: "AI Tools",
    title: "AutoEnhance AI",
    content: "Instant photo edits with AI for faster property listing.",
    link: "https://www.autoenhance.ai/",
    tags: "photo editing, AI, property listing",
  },
  {
    heading: "Free Cources",
    title: "NPTEL Ethical Hacking",
    content: "Learn ethical hacking from IIT with online courses from NPTEL.",
    link: "https://archive.nptel.ac.in/courses/106/105/106105217/",
    tags: "ethical hacking, IIT, online courses, NPTEL",
  },
  {
    heading: "Free Cources",
    title: "CodeDam for Java",
    content:
      "Learn Java with online courses from CodeDam, including basics and practice time.",
    link: "https://codedamn.com/learn/java-course",
    tags: "Java, online courses, CodeDam, basics, practice",
  },
  {
    heading: "Free Cources",
    title: "Infinity Careers",
    content: "Streamline tech career exploration and training with ∞edu.",
    link: "https://infinity.careers/",
    tags: "tech career, exploration, training, ∞edu",
  },
  {
    heading: "Goverment Websites",
    title: "Service.gov.in",
    content:
      "Online services provided by various government entities in India.",
    link: "https://services.india.gov.in/",
    tags: "government, online services, India",
  },
  {
    heading: "Goverment Websites",
    title: "Swayam.gov.in",
    content: "Quality educational content from NPTEL in India.",
    link: "https://swayam.gov.in/",
    tags: "education, content, NPTEL, India",
  },
  {
    heading: "Interview",
    title: "Freshersnow.com",
    content:
      "Job portal for updates on freshers, IT, government, and more in India.",
    link: "https://www.freshersnow.com/",
    tags: "job portal, freshers, IT, government, India",
  },
  {
    heading: "Interview",
    title: "My Interview Practice/Industries",
    content: "Mock interviews for over 120 job titles in various industries.",
    link: "https://myinterviewpractice.com/industries/",
    tags: "interviews, job titles, industries",
  },
];


