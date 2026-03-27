import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, MapPin, ChevronRight, Star, Music, Sparkles } from "lucide-react";

const upcomingEvents = [
  { id: 1, title: "Omakase Night — Chef's Table Experience", date: "15 Avril 2026", time: "19:30", capacity: "8 guests", category: "Omakase", price: "2,800 MAD / personne", description: "Une soirée intime au comptoir du chef, où Chef Takashi Moretti guide chaque convive à travers 14 plats signature en direct.", highlights: ["14 plats signature", "Accord saké premium", "Interaction directe avec le chef"], available: true, featured: true },
  { id: 2, title: "Soirée Wagyu & Barolo", date: "22 Avril 2026", time: "20:00", capacity: "40 guests", category: "Wine Dinner", price: "1,950 MAD / personne", description: "Une soirée dédiée au wagyu A5 de Kagoshima et au grand Barolo italien.", highlights: ["Wagyu A5 Kagoshima", "Barolo DOCG millésimés", "5 services exclusifs"], available: true, featured: false },
  { id: 3, title: "Sunset Terrace — Soirée Privée", date: "1 Mai 2026", time: "18:00", capacity: "40 guests", category: "Terrace Event", price: "Sur devis", description: "Privatisation exclusive de la terrasse panoramique pour vos événements.", highlights: ["Vue Méditerranée exclusive", "Menu sur-mesure", "Service dédié"], available: true, featured: false },
  { id: 4, title: "Cours de Sushi — Atelier Master Class", date: "8 Mai 2026", time: "15:00", capacity: "12 guests", category: "Atelier", price: "850 MAD / personne", description: "Maîtrisez les fondamentaux du sushi nigiri, maki et temaki.", highlights: ["Apprentissage technique", "Ingrédients premium", "Dégustation incluse"], available: true, featured: false },
  { id: 5, title: "Soirée Jazz & Fusion Italienne", date: "15 Mai 2026", time: "20:30", capacity: "80 guests", category: "Soirée Musicale", price: "1,200 MAD / personne", description: "Le Quatuor Marco Ferri rencontre la cuisine de Chef Moretti.", highlights: ["Quartet jazz live", "Menu 6 services", "Champagne d'accueil"], available: false, featured: false },
  { id: 6, title: "Iftar de Prestige — Ramadan Edition", date: "Dates sur demande", time: "Au coucher du soleil", capacity: "120 guests", category: "Saisonnier", price: "à partir de 1,600 MAD / personne", description: "Une rupture du jeûne raffinée alliant saveurs marocaines et fusion 2R.", highlights: ["Fusion maroco-japonaise", "Privatisation possible", "Menu traditionnel revisité"], available: true, featured: false },
];

const categories = ["Tous", "Omakase", "Wine Dinner", "Atelier", "Soirée Musicale", "Terrace Event", "Saisonnier"];
const categoryColors: Record<string, string> = {
  Omakase: "bg-amber-900/30 text-amber-300 border-amber-500/30",
  "Wine Dinner": "bg-red-900/30 text-red-300 border-red-500/30",
  Atelier: "bg-blue-900/30 text-blue-300 border-blue-500/30",
  "Soirée Musicale": "bg-purple-900/30 text-purple-300 border-purple-500/30",
  "Terrace Event": "bg-orange-900/30 text-orange-300 border-orange-500/30",
  Saisonnier: "bg-green-900/30 text-green-300 border-green-500/30",
};

export default function EventsPage() {
  const [active, setActive] = useState("Tous");
  const filtered = active === "Tous" ? upcomingEvents : upcomingEvents.filter((e) => e.category === active);
  const featured = upcomingEvents.find((e) => e.featured);

  return (
    <>
      <section className="relative section-spacing border-b border-stone-800 bg-gradient-to-b from-stone-900 to-stone-950 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="container-premium text-center space-y-8 relative z-10 animate-fade-in">
          <p className="text-amber-400 tracking-[0.3em] uppercase text-sm font-medium">Agenda & Événements</p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Expériences<br /><span className="text-amber-400">Exclusives</span>
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto" />
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Des soirées uniques, des ateliers maîtres et des dîners privatisés.
          </p>
        </div>
      </section>

      {featured && (
        <section className="section-spacing border-b border-stone-800">
          <div className="container-premium">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-5 w-5 text-amber-400" />
              <p className="text-amber-400 tracking-[0.2em] uppercase text-sm font-medium">Événement Vedette</p>
            </div>
            <Card className="bg-gradient-to-br from-amber-900/20 via-stone-900 to-stone-950 border-amber-500/30 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-amber-900/30 via-stone-800 to-stone-900 flex items-center justify-center border-r border-stone-800">
                  <Sparkles className="h-16 w-16 text-amber-400/40 mx-auto" />
                </div>
                <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
                  <Badge className={`w-fit ${categoryColors[featured.category]}`}>{featured.category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-stone-100">{featured.title}</h2>
                  <p className="text-stone-400 leading-relaxed">{featured.description}</p>
                  <div className="space-y-3">
                    {featured.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-amber-400 flex-shrink-0" />
                        <span className="text-stone-300 text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div><p className="text-xs text-stone-500 uppercase tracking-wider">Date</p><p className="text-stone-200 font-medium flex items-center gap-1"><Calendar className="h-3 w-3 text-amber-400" />{featured.date}</p></div>
                    <div><p className="text-xs text-stone-500 uppercase tracking-wider">Tarif</p><p className="text-amber-400 font-medium">{featured.price}</p></div>
                  </div>
                  <Link to="/book">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full md:w-auto px-8">Réserver ma place</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      <section className="section-spacing border-b border-stone-800 bg-stone-900/30">
        <div className="container-premium space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Tous nos Événements</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto" />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${active === cat ? "bg-amber-500 text-black" : "bg-stone-900 border border-stone-800 text-stone-300 hover:border-amber-500/50"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <Card key={event.id} className={`bg-stone-900 border-stone-800 hover:border-amber-500/30 transition-all duration-300 overflow-hidden flex flex-col ${!event.available ? "opacity-60" : ""}`}>
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <Badge className={`text-xs ${categoryColors[event.category] || "bg-stone-800 text-stone-300"}`}>{event.category}</Badge>
                    {!event.available && <span className="text-xs text-stone-500 bg-stone-800 px-2 py-1 rounded-full">Complet</span>}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-stone-100 leading-snug">{event.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed flex-1">{event.description}</p>
                  <div className="space-y-2 pt-2 border-t border-stone-800">
                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <Calendar className="h-3 w-3 text-amber-400" /><span>{event.date}</span>
                      <Clock className="h-3 w-3 text-amber-400 ml-2" /><span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-stone-400"><Users className="h-3 w-3 text-amber-400" /><span>{event.capacity}</span></div>
                      <span className="text-amber-400 text-xs font-medium">{event.price}</span>
                    </div>
                  </div>
                  {event.available ? (
                    <Link to="/book" className="block mt-auto">
                      <Button size="sm" className="w-full bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-white border border-amber-500/30 transition-all duration-300">Réserver</Button>
                    </Link>
                  ) : (
                    <Button size="sm" disabled className="w-full bg-stone-800 text-stone-500 cursor-not-allowed mt-auto">Complet</Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-premium text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Ne manquez aucun événement</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book"><Button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg">Réserver une table</Button></Link>
            <Link to="/contact"><Button variant="outline" className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10 px-10 py-6 text-lg">Nous contacter</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
