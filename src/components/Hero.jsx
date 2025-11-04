import { Leaf, PawPrint } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
          <Leaf className="h-6 w-6" />
        </div>
        <h1 className="font-manrope text-3xl font-semibold leading-tight text-zinc-900 sm:text-4xl md:text-5xl">
          Etkiyi ciddiye alan hayvan savunucuları için bir topluluk.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
          Bilimsel düşünceyle, merhameti daha etkili hale getiriyoruz.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#join"
            className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Topluluğa Katıl
          </a>
          <a
            href="#about"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-200 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Daha Fazla Bilgi Al
          </a>
        </div>

        <div className="mt-14 flex items-center justify-center gap-3 text-zinc-500">
          <PawPrint className="h-5 w-5" />
          <span className="text-sm">Merhamet • Etki • Bilim</span>
        </div>
      </div>
    </section>
  );
}
