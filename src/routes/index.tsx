import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/tuco-logo.png.asset.json";
import { FOOTER, HERO, LAST_UPDATED, LIMITS, LINKS, MAIN_SERVICES, MINI_SERVICES, NAV, RESPONSIBLE, STEPS, SUPPORT } from "@/config/site";
import { POLICY, POLICY_INTRO } from "@/config/policy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tuco Bot — إيداع وسحب iChancy عبر تيليغرام" },
      { name: "description", content: "إيداع وسحب لحسابك على iChancy بسهولة وأمان عبر بوت تيليغرام Tuco Bot. الحدود، العمولات، والشروط كاملة." },
      { property: "og:title", content: "Tuco Bot — إيداع وسحب iChancy" },
      { property: "og:description", content: "إيداع وسحب لحسابك على iChancy بسهولة وأمان عبر تيليغرام." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Bolt = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>
);

function Divider() {
  return (
    <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4" aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-l from-accent/70 to-transparent" />
      <Bolt className="h-5 w-5 text-accent drop-shadow-[0_0_8px_var(--accent)]" />
      <span className="h-px flex-1 bg-gradient-to-r from-accent/70 to-transparent" />
    </div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="reveal steel-text mb-10 text-center text-3xl font-black sm:text-4xl">{children}</h2>;
}

function Index() {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggle = (i: number) => setOpen((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  const allOpen = open.size === POLICY.length;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--navy),transparent_60%)]" />
        <div className="animate-drift absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="animate-drift absolute bottom-0 left-[-10%] h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl [animation-delay:-8s]" />
        <div className="absolute left-1/2 top-40 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-accent/10" />
        <div className="absolute left-1/2 top-64 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-primary/10" />
      </div>

      {/* navbar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <img src={logo.url} alt="شعار Tuco Bot" className="h-9 w-9 shrink-0 rounded-full" />
            <span className="steel-text font-display text-lg font-black" dir="ltr">Tuco Bot</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="transition-colors hover:text-accent">{n.label}</a></li>)}
          </ul>
          <div className="flex shrink-0 items-center gap-2">
            <a href={LINKS.bot} target="_blank" rel="noopener" className="btn-glow bevel px-4 py-2 text-sm font-bold">افتح البوت</a>
            <button onClick={() => setMenu(!menu)} className="btn-steel rounded-md px-3 py-2 lg:hidden" aria-label="القائمة" aria-expanded={menu}>☰</button>
          </div>
        </nav>
        {menu && (
          <ul className="border-t border-border px-4 py-3 lg:hidden">
            {NAV.map((n) => <li key={n.id}><a onClick={() => setMenu(false)} href={`#${n.id}`} className="block py-2 text-muted-foreground hover:text-accent">{n.label}</a></li>)}
          </ul>
        )}
      </header>

      <main className="relative z-10">
        {/* hero */}
        <section id="home" className="mx-auto flex max-w-4xl flex-col items-center px-5 pb-12 pt-12 text-center sm:pt-20">
          <div className="relative mb-8">
            <div className="animate-pulse-glow absolute inset-0 rounded-full bg-primary/40 blur-3xl" aria-hidden />
            <img src={logo.url} alt="Tuco Bot" width={260} height={260} className="animate-floaty relative h-52 w-52 rounded-full sm:h-64 sm:w-64" />
          </div>
          <h1 className="steel-text text-3xl font-black leading-tight sm:text-5xl">{HERO.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{HERO.subtitle}</p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={LINKS.bot} target="_blank" rel="noopener" className="btn-glow bevel px-8 py-3 font-bold">{HERO.primary}</a>
            <a href={LINKS.support} target="_blank" rel="noopener" className="btn-steel bevel px-8 py-3 font-bold">{HERO.secondary}</a>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {HERO.badges.map((b) => (
              <li key={b} className="flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
                <Bolt className="h-3.5 w-3.5 text-accent" />{b}
              </li>
            ))}
          </ul>
        </section>

        <Divider />

        {/* services */}
        <section id="services" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-14">
          <Title>الخدمات</Title>
          <div className="grid gap-5 sm:grid-cols-2">
            {MAIN_SERVICES.map((s) => (
              <article key={s.title} className="reveal glass bevel p-7">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-accent/40 text-xl text-accent shadow-[var(--glow)]">{s.icon}</div>
                <h3 className="mb-2 text-2xl font-black">{s.title}</h3>
                <p className="leading-8 text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {MINI_SERVICES.map((s) => (
              <div key={s.title} className="reveal glass bevel flex items-center gap-3 p-4">
                <span className="text-xl text-accent">{s.icon}</span>
                <span className="font-semibold">{s.title}</span>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* key terms */}
        <section id="terms" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-14">
          <Title>الشروط الأساسية</Title>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["الحد الأدنى للإيداع", LIMITS.minDeposit],
              ["الحد الأدنى للسحب", LIMITS.minWithdraw],
              ["مدة التنفيذ", LIMITS.processing],
              ["العمر", LIMITS.age],
            ].map(([k, v]) => (
              <div key={k} className="reveal glass bevel p-5">
                <p className="text-sm text-muted-foreground">{k}</p>
                <p className="mt-2 text-xl font-black text-foreground">{v}</p>
              </div>
            ))}
          </div>
          <div className="reveal glass bevel mt-5 p-5">
            <p className="mb-3 font-bold">عمولات السحب</p>
            <ul className="divide-y divide-border">
              {LIMITS.fees.map((f) => (
                <li key={f.range} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-muted-foreground">{f.range}</span>
                  <span className="font-display text-xl font-black text-accent" dir="ltr">{f.rate}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Divider />

        {/* how it works */}
        <section className="mx-auto max-w-5xl px-5 py-14">
          <Title>كيف يعمل</Title>
          <ol className="relative grid gap-8 sm:grid-cols-4">
            <span className="absolute right-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-accent to-primary/20 shadow-[var(--glow)] sm:right-[12.5%] sm:left-[12.5%] sm:h-px sm:w-auto sm:bg-gradient-to-l" aria-hidden />
            {STEPS.map((s, i) => (
              <li key={s} className="reveal relative flex items-center gap-4 sm:flex-col sm:text-center">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent bg-background font-display text-lg font-black text-accent shadow-[var(--glow)]">{i + 1}</span>
                <span className="font-bold">{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <Divider />

        {/* policy */}
        <section id="policy" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14">
          <Title>شروط الاستخدام وسياسة الخصوصية</Title>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent">آخر تحديث: {LAST_UPDATED}</span>
            <button onClick={() => setOpen(allOpen ? new Set() : new Set(POLICY.map((_, i) => i)))} className="btn-steel bevel px-5 py-2 text-sm font-bold">
              {allOpen ? "طي الكل" : "توسيع الكل"}
            </button>
          </div>
          <p className="mb-6 leading-9 text-muted-foreground">{POLICY_INTRO}</p>
          <div className="grid gap-6 lg:grid-cols-[16rem_1fr]">
            <aside className="lg:sticky lg:top-20 lg:self-start">
              <nav aria-label="فهرس السياسة" className="glass bevel max-h-[70vh] overflow-auto p-4 max-lg:flex max-lg:gap-2 max-lg:overflow-x-auto max-lg:p-2">
                {POLICY.map((p, i) => (
                  <a key={i} href={`#sec-${i}`} onClick={() => setOpen((s) => new Set(s).add(i))}
                    className="block shrink-0 whitespace-nowrap rounded px-2 py-1.5 text-sm text-muted-foreground hover:text-accent lg:whitespace-normal">
                    {p.title}
                  </a>
                ))}
              </nav>
            </aside>
            <div className="space-y-3">
              {POLICY.map((p, i) => {
                const isOpen = open.has(i);
                return (
                  <article key={i} id={`sec-${i}`} className="glass bevel scroll-mt-24">
                    <h3>
                      <button onClick={() => toggle(i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 p-5 text-start text-lg font-bold">
                        <span>{p.title}</span>
                        <span className={`text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                      </button>
                    </h3>
                    {isOpen && (
                      <div className="space-y-2 px-5 pb-5 leading-9 text-muted-foreground">
                        {p.content.map((line, j) =>
                          line.startsWith("- ") ? (
                            <div key={j} className="flex gap-2"><Bolt className="mt-2.5 h-4 w-4 shrink-0 text-accent" /><span>{line.slice(2)}</span></div>
                          ) : <p key={j}>{line}</p>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* responsible gambling */}
        <section className="mx-auto max-w-4xl px-5 py-10">
          <div className="reveal bevel border border-warn/50 bg-warn/5 p-6">
            <h2 className="mb-3 text-xl font-black text-warn">{RESPONSIBLE.title}</h2>
            <p className="leading-9 text-muted-foreground">{RESPONSIBLE.text}</p>
          </div>
        </section>

        <Divider />

        {/* support */}
        <section id="support" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-14">
          <Title>الدعم</Title>
          <div className="grid gap-5 sm:grid-cols-2">
            {SUPPORT.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener" className="reveal glass bevel flex items-center gap-4 p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-accent/40 text-2xl shadow-[var(--glow)]">{s.icon}</span>
                <span className="min-w-0">
                  <span className="block text-lg font-bold">{s.label}</span>
                  <span className="block truncate text-accent" dir="ltr">{s.handle}</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border bg-navy/60 px-5 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="" className="h-10 w-10 rounded-full" />
              <span className="steel-text font-display text-xl font-black" dir="ltr">Tuco Bot</span>
            </div>
            <p className="mt-3 max-w-sm leading-8 text-muted-foreground">{FOOTER.desc}</p>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="text-muted-foreground hover:text-accent">{n.label}</a></li>)}
          </ul>
        </div>
        <p className="mx-auto mt-8 max-w-6xl border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <span dir="ltr">{FOOTER.copy}</span> — {FOOTER.rights}
        </p>
      </footer>
    </div>
  );
}
