import { Mail, ArrowRight, Instagram } from "lucide-react";

export default function Join() {
  return (
    <section id="join" className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-amber-50 p-8 ring-1 ring-emerald-100/60">
        <div className="grid items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="font-manrope text-2xl font-semibold text-zinc-900">
              Bize katılın
            </h3>
            <p className="mt-2 max-w-xl text-zinc-600">
              Topluluğa katılmak, projelerde yer almak veya daha fazla bilgi
              almak isterseniz bize ulaşın. Birlikte daha etkili olabiliriz.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <Mail className="h-4 w-4" /> Topluluğa Katıl
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-200 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Daha Fazla Bilgi Al <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-emerald-100">
            <p className="text-sm text-zinc-600">Sosyal Medya</p>
            <div className="mt-3 space-y-2 text-zinc-700">
              <a
                className="flex items-center gap-2 transition hover:text-emerald-700"
                href="https://instagram.com/effectiveanimaladvocacytr"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-4 w-4" /> @effectiveanimaladvocacytr
              </a>
              <a
                className="flex items-center gap-2 transition hover:text-emerald-700"
                href="https://instagram.com/eaatr"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-4 w-4" /> @eaatr
              </a>
            </div>
          </div>
        </div>

        {/* Footer inside this section */}
        <div className="mt-10 border-t border-emerald-100/60 pt-6 text-center text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Effective Animal Advocacy Turkey •
            Akılla güçlenen merhamet
          </p>
        </div>
      </div>
    </section>
  );
}
