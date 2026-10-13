export type Lang = 'uz' | 'en'

export const translations = {
  uz: {
    nav: {
      about: 'Men haqimda',
      tech: 'Texnologiyalar',
      experience: 'Tajriba',
      projects: 'Usta top',
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
      ctaPrimary: 'Usta toping',
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
      title: 'Usta toping',
      subtitle: 'Kerakli mutaxassisni toping',
      intro:
        'Santexnik, elektrik, mebel ustasi va boshqa xizmat turlari bo‘yicha arizangizni qoldiring — tez orada siz bilan bog‘lanamiz.',
      formName: 'Ismingiz',
      formPhone: 'Telefon raqamingiz',
      formService: 'Xizmat turi',
      formServicePlaceholder: 'Xizmat turini tanlang',
      serviceOptions: [
        'Santexnik',
        'Elektrik',
        'Mebel ustasi',
        'Quruvchi / Ta’mirchi',
        'Konditsioner ustasi',
        'Boshqa',
      ],
      formLocation: 'Manzil / Tuman',
      formNote: 'Qo‘shimcha izoh',
      formSubmit: 'Yuborish',
      formSending: 'Yuborilmoqda...',
      formSuccess: 'Arizangiz qabul qilindi! Tez orada siz bilan bog‘lanamiz.',
      formError: 'Xatolik yuz berdi. Iltimos, birozdan so‘ng qayta urinib ko‘ring.',
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
      projects: 'Find a Pro',
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
      ctaPrimary: 'Find a Pro',
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
      title: 'Find a Pro',
      subtitle: 'Find the specialist you need',
      intro:
        'Submit a request for a plumber, electrician, furniture specialist or other service — we will get back to you shortly.',
      formName: 'Your Name',
      formPhone: 'Your Phone Number',
      formService: 'Service Type',
      formServicePlaceholder: 'Choose a service type',
      serviceOptions: ['Plumber', 'Electrician', 'Furniture specialist', 'Builder / Repairman', 'AC technician', 'Other'],
      formLocation: 'Address / District',
      formNote: 'Additional notes',
      formSubmit: 'Send',
      formSending: 'Sending...',
      formSuccess: "Your request was received! We'll get back to you soon.",
      formError: 'Something went wrong. Please try again in a moment.',
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
