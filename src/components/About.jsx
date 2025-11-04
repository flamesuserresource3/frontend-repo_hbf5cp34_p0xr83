export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-manrope text-2xl font-semibold text-zinc-900">
            Hakkımızda
          </h2>
          <p className="mt-4 text-zinc-600">
            Effective Animal Advocacy Turkey (EAATR), hayvanlar için en fazla
            faydayı üretmeyi amaçlayan, etkisi kanıtlanmış ve kanıta dayalı
            yaklaşımları benimseyen bir topluluktur. Küresel Etkili Yardımseverlik
            (Effective Altruism) hareketiyle ilham ve bilgi alışverişi içindeyiz;
            yerel bağlamda uygulanabilir, şefkat odaklı ve veriye dayalı çözümler
            geliştiriyoruz.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-28 w-28 rounded-2xl bg-emerald-50" />
          <div className="relative rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <p className="text-zinc-700">
              Araştırma, politika ve topluluk oluşturma çalışmalarını bir araya
              getirerek; hayvan refahını artırmayı ve kaynakları daha akıllıca
              kullanmayı hedefliyoruz. Amacımız, merhameti akılla güçlendirmek ve
              sürdürülebilir bir değişime ilham vermek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
