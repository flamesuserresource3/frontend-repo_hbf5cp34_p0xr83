import Hero from "./components/Hero";
import About from "./components/About";
import MissionValues from "./components/MissionValues";
import Join from "./components/Join";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 antialiased">
      <header className="mx-auto max-w-5xl px-6 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600" />
            <span className="font-manrope text-sm font-semibold tracking-wide text-zinc-900">
              EAATR
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-700 sm:flex">
            <a className="transition hover:text-emerald-700" href="#about">
              Hakkımızda
            </a>
            <a className="transition hover:text-emerald-700" href="#join">
              Katıl
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <MissionValues />
        <Join />
      </main>
    </div>
  );
}
