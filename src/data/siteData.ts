// Persian (fa-IR) site content. Times are stored as "H:MM AM/PM" for sorting and shown via faTime().

export const toFaDigits = (value: string | number) =>
  String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!);

export const faTime = (time: string) => {
  const [hm = "", period] = time.split(" ");
  const h = parseInt(hm);
  const label =
    period === "AM" ? "صبح" : h === 12 ? "ظهر" : h < 5 ? "بعدازظهر" : h < 7 ? "عصر" : "شب";
  return `${toFaDigits(hm)} ${label}`;
};

export const siteData = {
  name: "باشگاه فیت‌زون",
  tagline: "بدنت را بساز، زندگی‌ات را متحول کن",
  description: "مقصد اول شما برای تناسب اندام، سلامتی و انرژی بیشتر",
  address: "تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲۳",
  phone: "۰۲۱-۱۲۳۴۵۶۷۸",
  phoneLink: "+982112345678",
  email: "info@fitzonegym.ir",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "فیسبوک" },
  { name: "instagram", icon: "ri-instagram-fill", label: "اینستاگرام" },
  { name: "twitter", icon: "ri-twitter-x-fill", label: "ایکس" },
  { name: "youtube", icon: "ri-youtube-fill", label: "یوتیوب" },
];

export const contactInfo = [
  { icon: "ri-map-pin-line", title: "آدرس", content: siteData.address, link: null },
  { icon: "ri-phone-line", title: "تلفن", content: siteData.phone, link: `tel:${siteData.phoneLink}` },
  { icon: "ri-mail-line", title: "ایمیل", content: siteData.email, link: `mailto:${siteData.email}` },
  {
    icon: "ri-time-line",
    title: "ساعات کاری",
    content: ["شبانه‌روزی برای اعضای ویژه و طلایی", "اعضای پایه: هر روز ساعت ۵ صبح تا ۱۱ شب"],
    link: null,
  },
];

export const navigation = [
  { name: "خانه", href: "/" },
  { name: "درباره ما", href: "/about" },
  { name: "کلاس‌ها", href: "/classes" },
  { name: "تعرفه‌ها", href: "/pricing" },
  { name: "تماس با ما", href: "/contact" },
];

export const features = [
  { title: "دسترسی شبانه‌روزی", description: "هر ساعتی که بخواهید تمرین کنید؛ باشگاه ۲۴ ساعته در اختیار شماست", icon: "ri-time-line" },
  { title: "مربیان حرفه‌ای", description: "مربیان شخصی دارای مدرک که در تمام مسیر همراهتان هستند", icon: "ri-user-star-line" },
  { title: "تجهیزات مدرن", description: "به‌روزترین دستگاه‌های بدنسازی برای هر نوع تمرین", icon: "ri-settings-3-line" },
  { title: "کلاس‌های گروهی", description: "از یوگا تا هیت؛ کلاس‌های گروهی پرانرژی برای همه", icon: "ri-group-line" },
  { title: "مشاوره تغذیه", description: "برنامه غذایی اختصاصی، هماهنگ با تمرینات شما", icon: "ri-restaurant-line" },
  { title: "جامعه صمیمی", description: "عضوی از جمعی پرانگیزه و حامی از علاقه‌مندان ورزش شوید", icon: "ri-community-line" },
];

export const classes = [
  {
    name: "تمرین هیت (HIIT)",
    description: "تمرینات اینتروال با شدت بالا برای حداکثر کالری‌سوزی",
    detailedDescription: "در این کلاس، فعالیت‌های بسیار شدید با استراحت‌های کوتاه ترکیب می‌شوند تا بیشترین کالری را بسوزانید و آمادگی قلبی‌عروقی‌تان بالا برود. انتخابی عالی برای کسانی که می‌خواهند سریع چربی بسوزانند و استقامت بسازند.",
    duration: "۴۵ دقیقه",
    difficulty: "پیشرفته",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["سوزاندن تا ۶۰۰ کالری", "تقویت قلب و عروق", "افزایش استقامت", "تمرین کوتاه و مؤثر"],
    trainer: "علی رضایی",
    whatToExpect: "حرکات پویا، استراحت‌های کوتاه و فضایی پرانرژی",
  },
  {
    name: "یوگا و انعطاف‌پذیری",
    description: "افزایش انعطاف، تعادل و آرامش ذهن",
    detailedDescription: "در کلاس یوگا، حرکات سنتی با روش‌های امروزی ترکیب می‌شوند تا تعادل بدن بهتر شود، استرس کم شود و تحرک مفاصل افزایش یابد. مناسب همه سطوح، از مبتدی تا حرفه‌ای.",
    duration: "۶۰ دقیقه",
    difficulty: "همه سطوح",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
    benefits: ["افزایش انعطاف", "کاهش استرس", "بهبود تعادل", "تمرکز و آرامش ذهن"],
    trainer: "سارا محمدی",
    whatToExpect: "کشش‌های ملایم، تمرین تنفس، مدیتیشن و فضایی آرام",
  },
  {
    name: "تمرینات قدرتی",
    description: "عضله‌سازی و افزایش قدرت با تمرینات اصولی",
    detailedDescription: "با برنامه جامع تمرینات قدرتی، عضلات خود را بسازید و قوی‌تر شوید. مربیان ما فرم صحیح حرکات را با وزنه آزاد، دستگاه و وزن بدن به شما آموزش می‌دهند. بهترین انتخاب برای اندامی قوی و خوش‌فرم.",
    duration: "۶۰ دقیقه",
    difficulty: "متوسط",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    benefits: ["افزایش حجم عضلات", "افزایش قدرت", "تقویت استخوان‌ها", "بالا رفتن سوخت‌وساز"],
    trainer: "رضا کریمی",
    whatToExpect: "افزایش تدریجی وزنه، اصلاح فرم حرکات و راهنمایی اختصاصی",
  },
  {
    name: "کاردیو پرانرژی",
    description: "تمرینات هوازی پرهیجان برای افزایش استقامت",
    detailedDescription: "با ترکیبی از دویدن، پرش و حرکات ریتمیک، ضربان قلبتان را بالا ببرید. این کلاس استقامت شما را بیشتر می‌کند، به سلامت قلب کمک می‌کند و در کاهش وزن مؤثر است.",
    duration: "۴۵ دقیقه",
    difficulty: "همه سطوح",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    benefits: ["سلامت قلب", "کالری‌سوزی", "افزایش استقامت", "انرژی بیشتر در طول روز"],
    trainer: "علی رضایی",
    whatToExpect: "موسیقی پرانرژی، حرکات متنوع و جمعی همراه",
  },
  {
    name: "پیلاتس",
    description: "تقویت عضلات مرکزی بدن و اصلاح فرم بدن",
    detailedDescription: "با حرکات کنترل‌شده پیلاتس، عضلات عمقی شکم و کمر را تقویت کنید و وضعیت بدنی خود را بهبود دهید. مناسب برای توان‌بخشی و ساختن عضلاتی کشیده و فرم‌گرفته.",
    duration: "۵۰ دقیقه",
    difficulty: "همه سطوح",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    benefits: ["تقویت عضلات مرکزی", "اصلاح فرم بدن", "افزایش انعطاف", "کاهش کمردرد"],
    trainer: "سارا محمدی",
    whatToExpect: "حرکات کنترل‌شده، تمرکز بر فرم صحیح و هماهنگی ذهن و بدن",
  },
  {
    name: "کراس‌فیت",
    description: "حرکات کاربردی با شدت بالا",
    detailedDescription: "کراس‌فیت ترکیبی از وزنه‌برداری، ژیمناستیک و تمرینات هوازی است و هر جلسه با جلسه قبل فرق دارد. قدرت، استقامت و اراده خود را به مرزهای جدید برسانید.",
    duration: "۶۰ دقیقه",
    difficulty: "پیشرفته",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["قدرت کاربردی", "آمادگی جسمانی کامل", "چالش با خود", "همراهی با جمع"],
    trainer: "رضا کریمی",
    whatToExpect: "تمرینات متنوع، شدت بالا، جمعی حامی و پیشرفت قابل اندازه‌گیری",
  },
];

export const pricingPlans = [
  {
    name: "پایه",
    price: "۱٬۵۰۰٬۰۰۰",
    period: " تومان / ماهانه",
    features: ["استفاده از سالن باشگاه", "استفاده از تجهیزات پایه", "رختکن و کمد", "پارکینگ رایگان"],
    popular: false,
  },
  {
    name: "ویژه",
    price: "۲٬۹۰۰٬۰۰۰",
    period: " تومان / ماهانه",
    features: ["همه امکانات پلن پایه", "شرکت در کلاس‌های گروهی", "مشاوره با مربی شخصی", "راهنمایی تغذیه", "دسترسی شبانه‌روزی"],
    popular: true,
  },
  {
    name: "طلایی",
    price: "۴٬۹۰۰٬۰۰۰",
    period: " تومان / ماهانه",
    features: ["همه امکانات پلن ویژه", "مربی شخصی نامحدود", "برنامه غذایی اختصاصی", "اولویت در رزرو کلاس‌ها", "استفاده از اسپا و ریکاوری"],
    popular: false,
  },
];

export const testimonials = [
  { name: "مریم احمدی", role: "۲ سال عضو باشگاه", content: "فیت‌زون مسیر ورزشی من را کاملاً عوض کرد. مربی‌ها فوق‌العاده‌اند و فضای باشگاه واقعاً حمایتگر است!", rating: 5 },
  { name: "امیر حسینی", role: "۱ سال عضو باشگاه", content: "بهترین باشگاه شهر! تجهیزات درجه یک است و دسترسی شبانه‌روزی کاملاً با برنامه کاری من جور است.", rating: 5 },
  { name: "نگار موسوی", role: "۶ ماه عضو باشگاه", content: "تنوع کلاس‌ها را خیلی دوست دارم. جلسات هیت سخت است اما نتیجه‌اش عالی است. به همه پیشنهاد می‌کنم!", rating: 5 },
];

export const facilities = [
  { title: "سالن کاردیو", description: "تردمیل، الپتیکال و دوچرخه‌های به‌روز", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80" },
  { title: "سالن بدنسازی", description: "مجموعه کامل وزنه‌های آزاد و دستگاه‌ها", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80" },
  { title: "استودیوی کلاس گروهی", description: "فضایی بزرگ برای یوگا، هیت و کلاس‌های دیگر", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80" },
  { title: "رختکن", description: "رختکن تمیز و مدرن همراه با دوش", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80" },
  { title: "تمرینات فانکشنال", description: "تی‌آر‌ایکس، طناب نبرد و تجهیزات کاربردی", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80" },
  { title: "بخش ریکاوری", description: "فضای کشش و فوم رولر برای بازیابی بدن", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80" },
];

export const faqs = [
  { question: "برای عضویت باید آمادگی جسمانی داشته باشم؟", answer: "اصلاً! ما از همه سطوح استقبال می‌کنیم. مربیان کمک می‌کنند با سرعت خودتان شروع کنید و کم‌کم قدرت و استقامت‌تان را بالا ببرید." },
  { question: "چه وسایلی باید همراه داشته باشم؟", answer: "فقط یک بطری آب، حوله و لباس ورزشی راحت. تمام تجهیزات، کمد و دوش در باشگاه موجود است." },
  { question: "می‌توانم قبل از ثبت‌نام باشگاه را امتحان کنم؟", answer: "بله! یک دوره آزمایشی رایگان ۷ روزه داریم تا امکانات، کلاس‌ها و فضای باشگاه را از نزدیک تجربه کنید." },
  { question: "مربی شخصی در عضویت گنجانده شده است؟", answer: "مربی شخصی به‌صورت خدمت جداگانه ارائه می‌شود. پلن‌های ویژه و طلایی جلسات مشاوره دارند و اعضای طلایی از مربی شخصی نامحدود بهره‌مندند." },
  { question: "ساعات کاری باشگاه چگونه است؟", answer: "برای اعضای ویژه و طلایی شبانه‌روزی باز هستیم. اعضای پایه از ساعت ۵ صبح تا ۱۱ شب می‌توانند استفاده کنند." },
  { question: "پارکینگ دارید؟", answer: "بله، پارکینگ رایگان برای همه اعضا داریم که روشن و امن است." },
];

const C = {
  hiit: "تمرین هیت (HIIT)",
  yoga: "یوگا و انعطاف‌پذیری",
  strength: "تمرینات قدرتی",
  cardio: "کاردیو پرانرژی",
  pilates: "پیلاتس",
  crossfit: "کراس‌فیت",
};
const T = { ali: "علی رضایی", sara: "سارا محمدی", reza: "رضا کریمی" };

export const classSchedule = [
  { time: "6:00 AM", class: C.hiit, trainer: T.ali },
  { time: "7:00 AM", class: C.yoga, trainer: T.sara },
  { time: "8:00 AM", class: C.strength, trainer: T.reza },
  { time: "9:00 AM", class: C.cardio, trainer: T.ali },
  { time: "12:00 PM", class: C.pilates, trainer: T.sara },
  { time: "5:00 PM", class: C.hiit, trainer: T.ali },
  { time: "6:00 PM", class: C.crossfit, trainer: T.reza },
  { time: "7:00 PM", class: C.yoga, trainer: T.sara },
];

export const successStories = [
  {
    name: "زهرا کاظمی",
    age: 32,
    duration: "۸ ماه",
    result: "۲۰ کیلو کاهش وزن",
    story: "اولش شک داشتم، اما فیت‌زون زندگی‌ام را عوض کرد. مربی‌ها و هم‌باشگاهی‌ها همیشه انگیزه‌ام را بالا نگه داشتند. هیچ‌وقت این‌قدر حالم خوب نبوده!",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "محمد صادقی",
    age: 28,
    duration: "۶ ماه",
    result: "۹ کیلو افزایش عضله",
    story: "برنامه تمرین قدرتی و مشاوره تغذیه کمکم کرد به اندامی برسم که همیشه می‌خواستم. مربی‌ها واقعاً حرفه‌ای هستند.",
    beforeImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "لیلا نوری",
    age: 35,
    duration: "۱ سال",
    result: "اولین ماراتن کامل",
    story: "از کسی که اصلاً نمی‌دوید تا تمام کردن یک ماراتن؛ برنامه‌های کاردیو و کلاس‌های گروهی فیت‌زون استقامت و اعتمادبه‌نفس لازم را به من داد.",
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
  },
];

export const statistics = [
  { number: "+۵۰۰", label: "عضو فعال", icon: "ri-user-line" },
  { number: "+۵۰", label: "مربی حرفه‌ای", icon: "ri-user-star-line" },
  { number: "+۱۰ هزار", label: "جلسه برگزارشده", icon: "ri-calendar-check-line" },
  { number: "+۲ هزار", label: "کیلو کاهش وزن", icon: "ri-line-chart-line" },
  { number: "٪۹۸", label: "رضایت اعضا", icon: "ri-heart-line" },
  { number: "+۱۵", label: "سال سابقه", icon: "ri-award-line" },
];

const weekdayA = classSchedule;
const weekdayB = [
  { time: "6:00 AM", class: C.cardio, trainer: T.ali },
  { time: "7:00 AM", class: C.strength, trainer: T.reza },
  { time: "8:00 AM", class: C.pilates, trainer: T.sara },
  { time: "9:00 AM", class: C.hiit, trainer: T.ali },
  { time: "12:00 PM", class: C.yoga, trainer: T.sara },
  { time: "5:00 PM", class: C.crossfit, trainer: T.reza },
  { time: "6:00 PM", class: C.cardio, trainer: T.ali },
  { time: "7:00 PM", class: C.strength, trainer: T.reza },
];

// Persian week order: Saturday first.
export const fullSchedule = [
  { day: "شنبه", slots: weekdayA },
  { day: "یکشنبه", slots: weekdayB },
  { day: "دوشنبه", slots: weekdayA },
  { day: "سه‌شنبه", slots: weekdayB },
  { day: "چهارشنبه", slots: weekdayA },
  {
    day: "پنجشنبه",
    slots: [
      { time: "8:00 AM", class: C.yoga, trainer: T.sara },
      { time: "9:00 AM", class: C.cardio, trainer: T.ali },
      { time: "10:00 AM", class: C.strength, trainer: T.reza },
      { time: "11:00 AM", class: C.pilates, trainer: T.sara },
    ],
  },
  {
    day: "جمعه",
    slots: [
      { time: "9:00 AM", class: C.yoga, trainer: T.sara },
      { time: "10:00 AM", class: C.pilates, trainer: T.sara },
      { time: "11:00 AM", class: C.cardio, trainer: T.ali },
    ],
  },
];

export const trainers = [
  {
    name: "رضا کریمی",
    role: "سرمربی",
    specialization: "تمرینات قدرتی و تغذیه",
    experience: "بیش از ۱۰ سال",
    bio: "رضا متخصص قدرت و آمادگی جسمانی است و بیش از یک دهه به ورزشکاران و علاقه‌مندان کمک کرده به اهدافشان برسند. تخصص او تمرینات قدرتی، پاورلیفتینگ و مربیگری تغذیه است.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
    certifications: ["CSCS", "NASM-CPT", "متخصص تغذیه"],
  },
  {
    name: "سارا محمدی",
    role: "مربی یوگا و پیلاتس",
    specialization: "یوگا، پیلاتس و سلامت کل‌نگر",
    experience: "بیش از ۸ سال",
    bio: "سارا مربی رسمی یوگا و پیلاتس است و در چند سبک یوگا آموزش دیده. او روش‌های سنتی و نوین را ترکیب می‌کند تا اعضا به تعادل، انعطاف و آرامش برسند.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: ["RYT-500", "مدرک پیلاتس", "مربی مدیتیشن"],
  },
  {
    name: "علی رضایی",
    role: "متخصص هیت",
    specialization: "تمرینات پرشدت و عملکرد ورزشی",
    experience: "بیش از ۷ سال",
    bio: "علی در تمرینات اینتروال پرشدت و بهبود عملکرد ورزشی تخصص دارد. کلاس‌های پرانرژی او اعضا را به مرزهای تازه می‌رساند و در عین حال ایمنی و فرم صحیح را حفظ می‌کند.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: ["ACE-CPT", "متخصص HIIT", "مربی عملکرد ورزشی"],
  },
  {
    name: "نازنین فرهادی",
    role: "مربی کاردیو و ایروبیک",
    specialization: "کاردیو، ایروبیک و زومبا",
    experience: "بیش از ۵ سال",
    bio: "نازنین به هر کلاس انرژی و شادی می‌آورد. با سابقه رقص و ورزش، تمرینات هوازی جذابی طراحی می‌کند که ورزش را لذت‌بخش می‌کند.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
    certifications: ["مدرک زومبا", "مربی ایروبیک", "ACE-CPT"],
  },
  {
    name: "حامد جعفری",
    role: "مربی کراس‌فیت",
    specialization: "کراس‌فیت و حرکات فانکشنال",
    experience: "بیش از ۶ سال",
    bio: "حامد مربی سطح ۲ کراس‌فیت است و به تمرینات کاربردی علاقه زیادی دارد. او با تمرینات متنوع و پرشدت به اعضا کمک می‌کند قوی‌تر و چابک‌تر شوند.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    certifications: ["CrossFit Level 2", "متخصص حرکات فانکشنال", "مربی وزنه‌برداری"],
  },
];

export const history = [
  { year: "۱۳۸۸", title: "تأسیس", description: "باشگاه فیت‌زون با هدف ساختن جمعی ورزشی که همه در آن احساس راحتی کنند، تأسیس شد." },
  { year: "۱۳۹۱", title: "اولین توسعه", description: "استودیوی اختصاصی کلاس‌های گروهی راه‌اندازی شد و بیش از ۲۰ دستگاه جدید اضافه شد." },
  { year: "۱۳۹۴", title: "دسترسی شبانه‌روزی", description: "دسترسی ۲۴ ساعته برای اعضای ویژه و طلایی فراهم شد." },
  { year: "۱۳۹۷", title: "۵۰۰ عضو فعال", description: "تعداد اعضای فعال به ۵۰۰ نفر و تیم مربیان به ۲۰ مربی حرفه‌ای رسید." },
  { year: "۱۳۹۹", title: "خدمات آنلاین", description: "رزرو آنلاین کلاس‌ها و تمرین مجازی برای همراهی بیشتر با اعضا راه‌اندازی شد." },
  { year: "۱۴۰۳", title: "باشگاه برتر", description: "انتخاب به‌عنوان «باشگاه برتر سال» توسط جامعه ورزشی شهر، هم‌زمان با ۱۵ سال فعالیت." },
];

export const paymentOptions = {
  methods: ["کارت بانکی", "درگاه پرداخت آنلاین", "کارت‌به‌کارت", "پرداخت حضوری"],
  plans: [
    { type: "ماهانه", description: "پرداخت ماه‌به‌ماه بدون هیچ تعهد بلندمدت" },
    { type: "سالانه", description: "با پرداخت سالانه ۱۵٪ صرفه‌جویی کنید؛ بهترین انتخاب!" },
    { type: "خانوادگی", description: "تخفیف ویژه برای خانواده‌ها؛ برای جزئیات تماس بگیرید" },
  ],
  guarantee: "ضمانت بازگشت وجه ۷ روزه برای همه پلن‌ها",
  trial: "دوره آزمایشی رایگان ۷ روزه برای اعضای جدید",
};
