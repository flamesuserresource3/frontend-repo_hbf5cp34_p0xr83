import { Users, BarChart3, Heart, Leaf } from "lucide-react";

const values = [
  {
    icon: BarChart3,
    title: "Etki",
    desc:
      "Önceliklendirme, maliyet-etkinlik ve ölçümlemenin ışığında daha fazla fayda üretmeye odaklanırız.",
  },
  {
    icon: Heart,
    title: "Merhamet",
    desc:
      "Hayvanların yaşamlarını iyileştirmeyi merkeze alır, empatiyi ilkeye dönüştürürüz.",
  },
  {
    icon: Users,
    title: "İşbirliği",
    desc:
      "Araştırmacılar, savunucular ve kurumlarla yan yana çalışarak bilgi ve deneyimi paylaşırız.",
  },
  {
    icon: Leaf,
    title: "Sadelik",
    desc:
      "Temiz, açık ve erişilebilir çözümlerle ilerleriz; karmaşıklığı azaltırız.",
  },
];

export default function MissionValues() {
  return (
    <section className="bg-emerald-50/30">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="font-manrope text-2xl font-semibold text-zinc-900">
            Misyon & Değerler
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Etkiye odaklanan, merhameti bilimle birleştiren ve işbirliğini
            merkeze alan bir yaklaşımı benimsiyoruz.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-manrope text-lg font-semibold text-zinc-900">
                {title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
