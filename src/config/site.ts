// All editable text, links and numbers live here.
export const LINKS = {
  bot: "https://t.me/ichancy_tuco_bot",
  support: "https://t.me/TUCO_ROBERT",
};

export const LAST_UPDATED = "4 أكتوبر 2026";

export const LIMITS = {
  minDeposit: "20,000 ليرة سورية",
  minWithdraw: "100,000 ليرة سورية",
  processing: "عادة خلال 48 ساعة",
  age: "18 عاماً فأكثر",
  fees: [
    { range: "أقل من 1,000,000 ل.س", rate: "10%" },
    { range: "من 1,000,000 حتى 10,000,000 ل.س", rate: "15%" },
    { range: "أكثر من 10,000,000 ل.س", rate: "20%" },
  ],
};

export const NAV = [
  { id: "home", label: "الرئيسية" },
  { id: "services", label: "الخدمات" },
  { id: "terms", label: "الشروط الأساسية" },
  { id: "policy", label: "الشروط وسياسة الخصوصية" },
  { id: "support", label: "الدعم" },
];

export const HERO = {
  title: "إيداع وسحب لحسابك على iChancy بسهولة وأمان",
  subtitle: "Tuco Bot على تيليغرام — عمليات واضحة، بيانات محمية، ودعم مباشر في كل خطوة.",
  primary: "ابدأ على تيليغرام",
  secondary: "تواصل مع الدعم",
  badges: ["سريع", "آمن", "دعم مباشر"],
};

export const MAIN_SERVICES = [
  { icon: "⬇", title: "الإيداع", desc: "اشحن رصيد حسابك على iChancy مباشرة من البوت بخطوات بسيطة وواضحة." },
  { icon: "⬆", title: "السحب", desc: "اسحب أرباحك من حسابك إلى وسيلة الدفع الخاصة بك مع توضيح العمولة قبل التأكيد." },
];

export const MINI_SERVICES = [
  { icon: "⏱", title: "معالجة خلال 48 ساعة كحد أقصى" },
  { icon: "🛡", title: "حماية البيانات" },
  { icon: "✈", title: "دعم عبر تيليغرام" },
];

export const STEPS = ["افتح البوت", "اختر إيداع أو سحب", "أكّد بياناتك", "تتم المعالجة"];

export const RESPONSIBLE = {
  title: "المقامرة المسؤولة · +18",
  text: "تنطوي خدمات المراهنات والألعاب على احتمال خسارة الأموال، ولا يوجد أي ضمان لتحقيق أرباح أو استرداد الخسائر. الخدمة لمن بلغ 18 عاماً فأكثر، ويُنصح بعدم استخدام أموال ضرورية لتغطية النفقات الأساسية أو الالتزامات المالية المهمة.",
};

export const SUPPORT = [
  { icon: "🤖", label: "بوت تيليغرام", handle: "@ichancy_tuco_bot", href: LINKS.bot },
  { icon: "💬", label: "الدعم على تيليغرام", handle: "@EN_KHIDER", href: LINKS.support },
];

export const FOOTER = {
  desc: "بوت تيليغرام لتسهيل الإيداع والسحب لحسابك على iChancy بسرعة وأمان.",
  copy: "© 2026 Tuco Bot",
  rights: "جميع الحقوق محفوظة",
};
