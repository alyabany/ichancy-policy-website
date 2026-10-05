// All editable text, links and services live here.
export type Lang = "ar" | "en";
type T = Record<Lang, string>;

export const LINKS = {
  bot: "https://t.me/YOUR_BOT_USERNAME",
  support: "https://t.me/YOUR_SUPPORT",
  channel: "https://t.me/YOUR_CHANNEL",
  email: "support@example.com",
};

export const LAST_UPDATED = "2026-10-05";

export const SERVICES: { icon: string; title: T; desc: T }[] = [
  { icon: "🎮", title: { ar: "شحن الألعاب", en: "Game Top-ups" }, desc: { ar: "شدات، جواهر، وعملات لأشهر الألعاب خلال ثوانٍ.", en: "UC, diamonds and coins for top games in seconds." } },
  { icon: "📱", title: { ar: "شحن التطبيقات", en: "App Top-ups" }, desc: { ar: "رصيد وعملات للتطبيقات الاجتماعية والبث.", en: "Credits and coins for social and streaming apps." } },
  { icon: "🎁", title: { ar: "بطاقات الهدايا", en: "Gift Cards" }, desc: { ar: "بطاقات متاجر رقمية تصلك فورًا.", en: "Digital store cards delivered instantly." } },
  { icon: "⭐", title: { ar: "الاشتراكات", en: "Subscriptions" }, desc: { ar: "اشتراكات الألعاب والتطبيقات المميزة.", en: "Premium game and app memberships." } },
];

export const STEPS: T[] = [
  { ar: "افتح البوت", en: "Open the bot" },
  { ar: "اختر الخدمة", en: "Choose a service" },
  { ar: "ادفع بأمان", en: "Pay securely" },
  { ar: "استلم فورًا", en: "Receive instantly" },
];

export const PRIVACY: { title: T; body: T }[] = [
  { title: { ar: "المعلومات التي نجمعها", en: "Information we collect" }, body: { ar: "نجمع معرّف تيليجرام واسم المستخدم وسجل الطلبات فقط. لا نطلب كلمات المرور أبدًا.", en: "We collect your Telegram user ID, username and order history only. We never ask for passwords." } },
  { title: { ar: "كيف نستخدم المعلومات", en: "How we use the information" }, body: { ar: "لتنفيذ طلباتك، وتقديم الدعم، وتحسين الخدمة ومنع الاحتيال.", en: "To fulfil your orders, provide support, improve the service and prevent fraud." } },
  { title: { ar: "حماية البيانات وتخزينها", en: "Data protection and storage" }, body: { ar: "تُخزَّن البيانات بشكل آمن ويقتصر الوصول إليها على الحاجة الفعلية.", en: "Data is stored securely and access is limited to what is strictly necessary." } },
  { title: { ar: "المشاركة مع أطراف ثالثة", en: "Sharing with third parties" }, body: { ar: "لا نبيع بياناتك أبدًا. نشارك الحد الأدنى فقط مع مزودي الدفع لإتمام العملية.", en: "We never sell your data. Only the minimum is shared with payment providers to complete a transaction." } },
  { title: { ar: "المدفوعات والاسترداد", en: "Payments and refunds" }, body: { ar: "تتم المدفوعات عبر بوابات موثوقة. يُعاد المبلغ في حال تعذّر تنفيذ الطلب.", en: "Payments go through trusted gateways. You are refunded if an order cannot be fulfilled." } },
  { title: { ar: "حقوق المستخدم وحذف البيانات", en: "User rights and data deletion" }, body: { ar: "يمكنك طلب نسخة من بياناتك أو حذفها بالتواصل مع الدعم.", en: "You can request a copy or deletion of your data by contacting support." } },
  { title: { ar: "التغييرات على هذه السياسة", en: "Changes to this policy" }, body: { ar: "قد نحدّث هذه السياسة، وسيظهر تاريخ آخر تحديث أعلاه.", en: "We may update this policy; the last updated date is shown above." } },
  { title: { ar: "التواصل", en: "Contact" }, body: { ar: `لأي استفسار راسلنا على ${LINKS.email} أو عبر حساب الدعم في تيليجرام.`, en: `For any question email ${LINKS.email} or reach our Telegram support account.` } },
];

export const TEXT = {
  nav: { home: { ar: "الرئيسية", en: "Home" }, services: { ar: "الخدمات", en: "Services" }, how: { ar: "طريقة العمل", en: "How it works" }, privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy" }, support: { ar: "الدعم", en: "Support" } },
  openBot: { ar: "افتح البوت", en: "Open Bot" },
  heroTitle: { ar: "اشحن ألعابك وتطبيقاتك بسرعة وأمان", en: "Top up your games and apps instantly" },
  heroSub: { ar: "Tuco Bot على تيليجرام — شحن فوري، دفع آمن، ودعم على مدار الساعة.", en: "Tuco Bot on Telegram — instant delivery, secure payment and round-the-clock support." },
  start: { ar: "ابدأ على تيليجرام", en: "Start on Telegram" },
  contact: { ar: "تواصل مع الدعم", en: "Contact Support" },
  badges: [{ ar: "سريع", en: "Fast" }, { ar: "آمن", en: "Secure" }, { ar: "24/7", en: "24/7" }],
  servicesTitle: { ar: "خدماتنا", en: "Our Services" },
  howTitle: { ar: "كيف يعمل", en: "How it works" },
  privacyTitle: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
  lastUpdated: { ar: "آخر تحديث", en: "Last updated" },
  supportTitle: { ar: "الدعم والتواصل", en: "Support" },
  supportCards: [
    { key: "bot", icon: "🤖", label: { ar: "بوت تيليجرام", en: "Telegram Bot" } },
    { key: "support", icon: "💬", label: { ar: "حساب الدعم", en: "Support Account" } },
    { key: "channel", icon: "📢", label: { ar: "القناة", en: "Channel" } },
    { key: "email", icon: "✉️", label: { ar: "البريد الإلكتروني", en: "Email" } },
  ] as const,
  footerDesc: { ar: "بوت شحن سريع وآمن للألعاب والتطبيقات على تيليجرام.", en: "Fast, secure top-ups for games and apps on Telegram." },
  disclaimer: { ar: "Tuco Bot غير تابع لأي من الألعاب أو التطبيقات المذكورة.", en: "Tuco Bot is not affiliated with any of the games or apps mentioned." },
};
