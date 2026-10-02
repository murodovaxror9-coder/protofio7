import type { LocalizedText } from './projects'

interface ProjectStory {
  problem: LocalizedText
  highlights: LocalizedText[]
  // Add these once you can describe the real challenges/learnings without inventing outcomes.
  challenges?: LocalizedText[]
  whatILearned?: LocalizedText[]
}

// These summaries use the existing portfolio descriptions; they do not claim
// individual ownership, measured results, or unverified client outcomes.
export const projectStories: Record<string, ProjectStory> = {
  'devlab-lms': {
    problem: {
      uz: 'Ta’lim markazida turli vazifadagi foydalanuvchilar uchun o‘quv jarayonlarini bir tizimda tashkil qilish.',
      en: 'Organize learning workflows in one system for users with different roles at an education center.',
    },
    highlights: [
      { uz: 'Olti xil foydalanuvchi roli uchun alohida boshqaruv panellari.', en: 'Separate dashboards for six user roles.' },
      { uz: 'Ro‘yxatdan o‘tishdan kurs tanlashgacha bo‘lgan jarayon.', en: 'A registration-to-course-selection flow.' },
      { uz: 'React interfeysi, Express serveri va JWT autentifikatsiyasi.', en: 'A React interface, Express backend, and JWT authentication.' },
    ],
  },
  'islamic-companion': {
    problem: {
      uz: 'Kundalik diniy vositalar uchun yagona desktop interfeys konseptini ko‘rsatish.',
      en: 'Demonstrate a unified desktop interface for daily religious tools.',
    },
    highlights: [
      { uz: 'Namuna ma’lumotlari bilan namoz vaqtlari va oy jadvali.', en: 'Prayer times and a monthly schedule using sample data.' },
      { uz: 'Qur’on, kundalik duolar, tasbeh va qibla sahifalari.', en: 'Pages for the Quran, daily duas, tasbih, and qibla.' },
      { uz: 'Desktop navigatsiya, qorong‘i rejim va demo suhbat.', en: 'Desktop navigation, dark mode, and a demo chat.' },
    ],
  },
  soch: {
    problem: {
      uz: 'Sartaroshxona egalari uchun mijozlar bronlari, xodimlar va ish jadvalini boshqarishni birlashtirish.',
      en: 'Bring client bookings, staff, and schedule management together for barbershop owners.',
    },
    highlights: [
      { uz: 'Mijozlar bronlarini boshqarish.', en: 'Client booking management.' },
      { uz: 'Xodimlar va ish jadvali bilan ishlash.', en: 'Staff and schedule management.' },
      { uz: 'React va TypeScript asosidagi B2B interfeys.', en: 'A B2B interface built with React and TypeScript.' },
    ],
  },
  shopvibe: {
    problem: {
      uz: 'Internet-do‘kon mahsulotlarini bir sahifada ko‘rgazmali taqdim etish.',
      en: 'Present an online store’s products visually within a single-page experience.',
    },
    highlights: [
      { uz: 'Bir sahifali React ilovasi.', en: 'A single-page React application.' },
      { uz: 'Swiper.js bilan mahsulotlar galereyasi.', en: 'A product gallery using Swiper.js.' },
      { uz: 'Tailwind CSS asosidagi interfeys.', en: 'An interface styled with Tailwind CSS.' },
    ],
  },
  smarthub: {
    problem: {
      uz: 'Dunyo davlatlari haqidagi ma’lumotlarni qidirish, saralash va o‘rganishni qulaylashtirish.',
      en: 'Make country information easy to search, filter, and explore.',
    },
    highlights: [
      { uz: 'REST Countries API ma’lumotlarini Axios orqali olish.', en: 'Country data fetched from the REST Countries API with Axios.' },
      { uz: 'Davlatlarni qidirish va filtrlash.', en: 'Country search and filtering.' },
      { uz: 'Har bir davlat uchun tafsilotlar sahifasi.', en: 'A detail page for each country.' },
    ],
  },
  'admin-dashboard': {
    problem: {
      uz: 'Mahsulotlar, kategoriyalar va ularning tafsilotlarini boshqaruv panelida tartibli ko‘rsatish.',
      en: 'Organize products, categories, and product details inside an admin interface.',
    },
    highlights: [
      { uz: 'FakeStore API bilan mahsulotlar ro‘yxati.', en: 'Product listings powered by the FakeStore API.' },
      { uz: 'Kategoriya va mahsulot tafsilotlari.', en: 'Category and product detail views.' },
      { uz: 'Ichma-ich routing orqali navigatsiya.', en: 'Navigation through nested routing.' },
    ],
  },
  'tg-video-bot': {
    problem: {
      uz: 'Havola orqali video olish jarayonini Telegram suhbatining o‘zida bajarish.',
      en: 'Handle video downloads from links directly inside a Telegram conversation.',
    },
    highlights: [
      { uz: 'Foydalanuvchi yuborgan video havolasini qabul qilish.', en: 'Receive a video link from the user.' },
      { uz: 'Node.js va yt-dlp orqali videoni yuklash.', en: 'Download the video using Node.js and yt-dlp.' },
      { uz: 'Tayyor videoni Telegram chatga qaytarish.', en: 'Return the downloaded video to the Telegram chat.' },
    ],
  },
  'gentlemens-cut': {
    problem: {
      uz: 'Sartaroshxona xizmatlarini tashrif buyuruvchiga tushunarli va ko‘rgazmali tanishtirish.',
      en: 'Introduce a barbershop’s services through a clear, visual landing page.',
    },
    highlights: [
      { uz: 'Xizmatlarni tanishtiruvchi landing sahifa.', en: 'A landing page presenting the shop’s services.' },
      { uz: 'Turli ekranlarga moslashadigan dizayn.', en: 'A responsive layout for different screen sizes.' },
      { uz: 'HTML, CSS va JavaScript asosidagi animatsiyalar.', en: 'Animations built with HTML, CSS, and JavaScript.' },
    ],
  },
}
