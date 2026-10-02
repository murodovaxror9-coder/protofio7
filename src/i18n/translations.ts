export type Lang = 'uz' | 'en'

export const translations = {
  uz: {
    nav: {
      about: 'Men haqimda',
      tech: 'Texnologiyalar',
      experience: 'Tajriba',
      projects: 'Loyihalar',
      ai: 'AI vositalar',
      contact: 'Aloqa',
      hireMe: 'Ish taklif qiling',
    },
    hero: {
      badge: 'Ish uchun ochiqman',
      greeting: 'Salom, men',
      role: 'Frontend Developer',
      typingRoles: ['Frontend Developer', 'React Developer', 'UI Muhandisi'],
      description:
        "Zamonaviy, tez va chiroyli veb-ilovalar yarataman. React, TypeScript va Tailwind CSS — mening kundalik qurollarim.",
      ctaPrimary: 'Loyihalarni ko’rish',
      ctaSecondary: 'Bog’lanish',
      ctaResume: 'Rezyume',
      stats: {
        projects: 'Loyihalar',
        stack: 'Texnologiyalar',
        coffee: 'Chashka qahva',
      },
      terminal: {
        title: 'terminal — zsh',
        whoamiCmd: '$ whoami',
        whoamiResult: 'axror_murodov — Frontend Developer',
        catCmd: '$ cat stack.json',
      },
    },
    about: {
      title: 'Men haqimda',
      subtitle: 'Meni tanishtiraman',
      paragraph1:
        'Salom! Men Axror Murodov — Toshkentda (O‘zbekiston) joylashgan Frontend dasturchiman. Foydalanuvchi tajribasi yaxshi bo‘lgan, tez va barqaror interfeyslar yaratishga qiziqaman.',
      paragraph2:
        'Hozirda Mars IT School bilan hamkorlikda bilim va tajribamni oshirib bormoqdaman. React va TypeScript ekotizimida loyihalar ustida ishlash, real muammolarni interfeys darajasida hal qilishni yoqtiraman.',
      paragraph3:
        'Kod yozishdan tashqari, AI vositalaridan (Claude, ChatGPT, Cursor) unumli foydalanib, ish jarayonimni tezlashtiraman.',
      locationLabel: 'Manzil',
      affiliationLabel: 'Ta’lim / Hamkorlik',
      emailLabel: 'Email',
      githubTitle: 'GitHub',
    },
    tech: {
      title: 'Texnologiyalar',
      subtitle: 'Ish qurollarim',
      groups: {
        frontend: 'Frontend',
        data: 'Ma’lumot / API',
        backend: 'Backend (asosiy)',
        tools: 'Vositalar',
        ai: 'Sun’iy intellekt',
      },
    },
    experience: {
      title: 'Tajriba',
      subtitle: 'Yo‘lim',
      marsIt: {
        title: 'Frontend Dasturchi (o‘quvchi)',
        period: 'Hozirgacha',
        description:
          'Mars IT School dasturida React, TypeScript va zamonaviy frontend arxitekturasini chuqur o‘rganmoqdaman, amaliy loyihalar ustida ishlayapman.',
      },
      freelance: {
        title: 'Freelance Frontend Dasturchi',
        period: 'Hozirgacha',
        description:
          'Mustaqil tartibda kichik biznes va shaxsiy loyihalar uchun veb-saytlar hamda veb-ilovalar ishlab chiqaman.',
      },
    },
    projects: {
      title: 'Loyihalar',
      subtitle: 'Nima yaratdim',
      liveButton: 'Live',
      codeButton: 'Kod',
      detailsButton: 'Batafsil',
      closeButton: 'Yopish',
      illustration: 'Loyiha illyustratsiyasi',
      screenshot: 'Loyihadan skrinshot',
      openProject: 'Loyiha tafsilotlarini ochish',
      problem: 'Qanday muammoni yechadi?',
      highlights: 'Asosiy imkoniyatlar',
      contribution: 'Loyihadagi hissam',
      contributionPending: 'Bu loyihadagi vazifalarim haqida batafsil bilmoqchimisiz?',
      askContribution: 'Bog‘lanish',
      featured: 'Tanlangan loyiha',
      linksPending: 'Demo va kod havolalari tez orada',
      intro: 'Har bir loyiha ortidagi vazifa, texnologiya va yechim bilan tanishing.',
      feedbackLink: 'Tavsiyalarni ko‘rish',
      caseStudyButton: 'To‘liq tahlil',
      backToProjects: 'Loyihalarga qaytish',
      overview: 'Umumiy ma’lumot',
      statusLabel: 'Holati',
      statusLive: 'Live',
      statusCompleted: 'Yakunlangan',
      statusInDevelopment: 'Ishlab chiqilmoqda',
      challenges: 'Qiyinchiliklar',
      challengesPending: 'Bu loyihadagi qiyinchiliklar haqida batafsil bilmoqchimisiz?',
      whatILearned: 'Nimalarni o‘rgandim',
      learnedPending: 'Bu loyihadan nima o‘rganganim haqida batafsil bilmoqchimisiz?',
      devlabLms: {
        description:
          'IT ta’lim markazi uchun ko‘p rolli boshqaruv paneli (admin, o‘quvchi, ota-ona, o‘qituvchi, tyutor, stajyor) va ro‘yxatdan o‘tish → kurs tanlash oqimi.',
        details:
          'DevLab LMS — IT ta’lim markazlari uchun to‘liq funksional o‘quv boshqaruv tizimi. Tizimda 6 xil rol uchun alohida dashboard mavjud: admin, o‘quvchi, ota-ona, o‘qituvchi, tyutor va stajyor. Foydalanuvchi ro‘yxatdan o‘tgach kurs tanlash oqimidan o‘tadi. Frontend React + Vite, backend Express.js, autentifikatsiya JWT asosida qurilgan.',
      },
      islamicCompanion: {
        description:
          'Qur’on, kundalik duolar, namoz vaqtlari, tasbeh va qibla ko‘rinishlarini birlashtirgan desktop demo ilova.',
        details:
          'Islamic Companion — React, Vite va Tailwind CSS asosidagi desktop demo. Unda Qur’on, kundalik duolar, namoz vaqtlari, tasbeh, qibla va suhbat sahifalari bor. Namoz vaqtlari va suhbat javoblari hozircha namunaviy ma’lumotlardan foydalanadi. Qorong‘i rejim va sahifalararo navigatsiya mavjud.',
      },
      soch: {
        description:
          'O‘zbekistondagi sartaroshxona egalari uchun B2B SaaS bron qilish platformasi.',
        details:
          'soch. — O‘zbekistondagi sartaroshxona (barbershop) biznes egalari uchun mo‘ljallangan B2B SaaS bron qilish platformasi. Xizmat egalari o‘z jadvalini, xodimlarini va mijozlar bronlarini boshqarishi mumkin. Frontend React va TypeScript asosida qurilgan.',
      },
      shopvibe: {
        description: 'Swiper.js va Tailwind CSS asosidagi bir sahifali (SPA) internet-do‘kon.',
        details:
          'ShopVibe — zamonaviy bir sahifali internet-do‘kon (SPA). Mahsulotlar galereyasi Swiper.js orqali silliq slayder ko‘rinishida taqdim etiladi, dizayn Tailwind CSS bilan ishlab chiqilgan.',
      },
      smarthub: {
        description: 'REST Countries API va Axios asosida dunyo davlatlarini kashf qiluvchi ilova.',
        details:
          'SmartHub — REST Countries API dan foydalangan holda dunyo davlatlari haqida ma’lumot beruvchi ilova. Qidiruv, filtrlash va davlat tafsilotlari sahifalari mavjud. Ma’lumotlar Axios orqali olinadi.',
      },
      adminDashboard: {
        description:
          'To‘q ko‘k-kulrang dizaynli boshqaruv paneli, FakeStore API mahsulotlari va ichma-ich routing.',
        details:
          'Admin Dashboard — to‘q siyan-kulrang rangdagi zamonaviy boshqaruv paneli. FakeStore API orqali mahsulotlar ro‘yxati, kategoriyalari va tafsilotlari ko‘rsatiladi. Ichma-ich (nested) routing yordamida navigatsiya tashkil etilgan.',
      },
      tgVideoBot: {
        description: 'Node.js va yt-dlp asosida ishlaydigan Telegram video yuklab olish boti.',
        details:
          'Telegram Video Downloader Bot — foydalanuvchi yuborgan havola orqali videoni yuklab, Telegram chatga qaytarib yuboradigan bot. Node.js va yt-dlp kutubxonasi asosida ishlab chiqilgan.',
      },
      gentlemensCut: {
        description: 'Sartaroshxona uchun zamonaviy landing sahifa.',
        details:
          'Gentlemen’s Cut — sartaroshxona xizmatlarini tanishtiruvchi zamonaviy landing sahifa. HTML5, CSS3 va vanilla JavaScript asosida, animatsiyalar va responsive dizayn bilan qurilgan.',
      },
    },
    testimonials: {
      title: 'Tavsiyalar',
      eyebrow: '07 / Fikrlar',
      description: 'Birga o‘rgangan, ishlagan va loyihalar yaratgan insonlarning fikrlari.',
      emptyTitle: 'Birga ishlaganmizmi?',
      emptyDescription: 'Hozircha tavsiyalar joylanmagan. Ustozim yoki hamkorim bo‘lsangiz, birga ishlash tajribamiz haqida fikringizni yuborishingiz mumkin.',
      action: 'Fikr bildirish',
      emailSubject: 'Portfolio uchun tavsiya',
    },
    aiTools: {
      title: 'Foydalanadigan AI vositalarim',
      subtitle: 'Ishimni tezlashtiruvchi yordamchilar',
      claude: 'Murakkab masalalarni tahlil qilish, kod yozish va refaktoring uchun asosiy AI yordamchim.',
      chatgpt: 'G‘oyalarni tezda sinab ko‘rish va matnlar bilan ishlash uchun foydalanaman.',
      cursor: 'AI asosidagi kod muharriri — loyiha ichida tezkor o‘zgarishlar kiritish uchun.',
      copilot: 'Kod yozish jarayonida avtomatik tugallash va takliflar uchun.',
    },
    contact: {
      title: 'Bog‘lanish',
      subtitle: 'Loyihangiz bormi? Yozing!',
      description:
        'Savol, taklif yoki hamkorlik bo‘yicha murojaat uchun quyidagi forma orqali yoki to‘g‘ridan-to‘g‘ri email/Telegram orqali bog‘laning.',
      formName: 'Ismingiz',
      formEmail: 'Email manzilingiz',
      formMessage: 'Xabaringiz',
      formSubmit: 'Yuborish',
      formSending: 'Yuborilmoqda...',
      formSuccess: 'Xabaringiz yuborildi! Tez orada javob beraman.',
      formError: 'Xatolik yuz berdi. Iltimos, birozdan so‘ng qayta urinib ko‘ring.',
      emailLabel: 'Email',
      phoneLabel: 'Telefon',
      telegramLabel: 'Telegram',
      locationLabel: 'Manzil',
    },
    footer: {
      rights: 'Barcha huquqlar himoyalangan.',
      builtWith: 'React, TypeScript va Tailwind CSS yordamida qurilgan.',
      backToTop: 'Yuqoriga',
    },
    learning: {
      title: 'Hozir o‘rganmoqdaman',
      eyebrow: '04 / Learning',
    },
    notFound: {
      title: 'Sahifa topilmadi',
      description: 'Siz qidirgan sahifa mavjud emas yoki ko‘chirilgan.',
      backHome: 'Bosh sahifaga qaytish',
    },
  },
  en: {
    nav: {
      about: 'About',
      tech: 'Tech Stack',
      experience: 'Experience',
      projects: 'Projects',
      ai: 'AI Tools',
      contact: 'Contact',
      hireMe: 'Hire Me',
    },
    hero: {
      badge: 'Available for work',
      greeting: "Hi, I'm",
      role: 'Frontend Developer',
      typingRoles: ['Frontend Developer', 'React Developer', 'UI Engineer'],
      description:
        'I build modern, fast and beautiful web applications. React, TypeScript and Tailwind CSS are my everyday tools.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Get in Touch',
      ctaResume: 'Resume',
      stats: {
        projects: 'Projects',
        stack: 'Technologies',
        coffee: 'Cups of Coffee',
      },
      terminal: {
        title: 'terminal — zsh',
        whoamiCmd: '$ whoami',
        whoamiResult: 'axror_murodov — Frontend Developer',
        catCmd: '$ cat stack.json',
      },
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know me',
      paragraph1:
        "Hi! I'm Axror Murodov, a Frontend Developer based in Tashkent, Uzbekistan. I love building fast, reliable interfaces with a great user experience.",
      paragraph2:
        "I'm currently growing my skills together with Mars IT School. I enjoy working in the React and TypeScript ecosystem, solving real problems at the interface level.",
      paragraph3:
        'Besides writing code, I make good use of AI tools like Claude, ChatGPT and Cursor to speed up my workflow.',
      locationLabel: 'Location',
      affiliationLabel: 'Education / Affiliation',
      emailLabel: 'Email',
      githubTitle: 'GitHub',
    },
    tech: {
      title: 'Tech Stack',
      subtitle: 'My toolbox',
      groups: {
        frontend: 'Frontend',
        data: 'Data / API',
        backend: 'Backend (basics)',
        tools: 'Tools',
        ai: 'AI',
      },
    },
    experience: {
      title: 'Experience',
      subtitle: 'My journey',
      marsIt: {
        title: 'Frontend Developer (Student)',
        period: 'Ongoing',
        description:
          "Deepening my knowledge of React, TypeScript and modern frontend architecture at Mars IT School, working on hands-on projects.",
      },
      freelance: {
        title: 'Freelance Frontend Developer',
        period: 'Ongoing',
        description:
          'Independently building websites and web applications for small businesses and personal projects.',
      },
    },
    projects: {
      title: 'Projects',
      subtitle: 'What I’ve built',
      liveButton: 'Live',
      codeButton: 'Code',
      detailsButton: 'Details',
      closeButton: 'Close',
      illustration: 'Project illustration',
      screenshot: 'Project screenshot',
      openProject: 'Open project details',
      problem: 'What problem does it solve?',
      highlights: 'Key features',
      contribution: 'My contribution',
      contributionPending: 'Want to know more about my responsibilities on this project?',
      askContribution: 'Get in touch',
      featured: 'Selected project',
      linksPending: 'Demo and code links coming soon',
      intro: 'Explore the purpose, technology, and solution behind each project.',
      feedbackLink: 'Read recommendations',
      caseStudyButton: 'Full case study',
      backToProjects: 'Back to projects',
      overview: 'Overview',
      statusLabel: 'Status',
      statusLive: 'Live',
      statusCompleted: 'Completed',
      statusInDevelopment: 'In Development',
      challenges: 'Challenges',
      challengesPending: 'Want to know more about the challenges on this project?',
      whatILearned: 'What I Learned',
      learnedPending: 'Want to know more about what I learned on this project?',
      devlabLms: {
        description:
          'Multi-role dashboard system for an IT education center (admin, student, parent, teacher, tutor, intern) with a registration → course selection flow.',
        details:
          'DevLab LMS is a full learning management system for IT education centers, with 6 separate dashboards: admin, student, parent, teacher, tutor and intern. Users go through a registration → course selection flow. Frontend built with React + Vite, backend with Express.js, JWT-based authentication.',
      },
      islamicCompanion: {
        description:
          'A desktop demo bringing together views for the Quran, daily duas, prayer times, tasbih, and qibla.',
        details:
          'Islamic Companion is a desktop demo built with React, Vite, and Tailwind CSS. It includes views for the Quran, daily duas, prayer times, tasbih, qibla, and chat. Prayer times and chat responses currently use sample data. Dark mode and page navigation are included.',
      },
      soch: {
        description: 'A B2B SaaS booking platform for barbershop owners in Uzbekistan.',
        details:
          'soch. is a B2B SaaS booking platform built for barbershop business owners in Uzbekistan. Owners can manage their schedule, staff and client bookings. Frontend built with React and TypeScript.',
      },
      shopvibe: {
        description: 'A single-page e-commerce app built with Swiper.js and Tailwind CSS.',
        details:
          'ShopVibe is a modern single-page e-commerce app. The product gallery uses Swiper.js for smooth sliders, with a design built entirely in Tailwind CSS.',
      },
      smarthub: {
        description: 'A countries explorer app powered by the REST Countries API and Axios.',
        details:
          'SmartHub lets users explore information about countries around the world using the REST Countries API, with search, filtering and detail pages. Data is fetched with Axios.',
      },
      adminDashboard: {
        description: 'A dark cyan/gray dashboard with FakeStore API products and nested routing.',
        details:
          'Admin Dashboard is a modern dark cyan/gray admin panel. Product listings, categories and details are pulled from the FakeStore API, with navigation organized via nested routing.',
      },
      tgVideoBot: {
        description: 'A Telegram video downloader bot built with Node.js and yt-dlp.',
        details:
          'Telegram Video Downloader Bot downloads a video from a link a user sends and returns it directly in the Telegram chat. Built with Node.js and the yt-dlp library.',
      },
      gentlemensCut: {
        description: 'A modern landing page for a barbershop.',
        details:
          "Gentlemen's Cut is a modern landing page showcasing barbershop services, built with HTML5, CSS3 and vanilla JavaScript, with animations and a responsive layout.",
      },
    },
    testimonials: {
      title: 'Recommendations',
      eyebrow: '07 / Feedback',
      description: 'Perspectives from people I have learned, worked, and built projects with.',
      emptyTitle: 'Have we worked together?',
      emptyDescription: 'No recommendations have been published yet. If you are a mentor or collaborator, you can share your experience of working with me.',
      action: 'Share your feedback',
      emailSubject: 'A recommendation for your portfolio',
    },
    aiTools: {
      title: 'AI Tools I Use',
      subtitle: 'Assistants that speed up my work',
      claude: 'My main AI assistant for analyzing complex problems, writing code and refactoring.',
      chatgpt: 'I use it for quickly testing ideas and working with text.',
      cursor: 'An AI-powered code editor for making fast changes inside a project.',
      copilot: 'For autocompletion and suggestions while writing code.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project? Let’s talk!',
      description:
        'For questions, proposals or collaboration, reach out through the form below or directly via email/Telegram.',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formMessage: 'Your Message',
      formSubmit: 'Send',
      formSending: 'Sending...',
      formSuccess: "Your message was sent! I'll get back to you soon.",
      formError: 'Something went wrong. Please try again in a moment.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      telegramLabel: 'Telegram',
      locationLabel: 'Location',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React, TypeScript and Tailwind CSS.',
      backToTop: 'Back to top',
    },
    learning: {
      title: 'Currently Learning',
      eyebrow: '04 / Learning',
    },
    notFound: {
      title: 'Page not found',
      description: "The page you're looking for doesn't exist or has moved.",
      backHome: 'Back to home',
    },
  },
} as const

export type TranslationShape = typeof translations.uz
