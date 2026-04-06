"use client";

interface ModuleMockupProps {
  moduleId: string;
}

function StatusBadge({ color, label }: { color: string; label: string }) {
  return (
    <div
      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium"
      style={{ backgroundColor: `${color}15`, color }}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </div>
  );
}

function PrioBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-[9px] font-medium px-1.5 py-0.5 rounded"
      style={{ backgroundColor: `${color}12`, color }}
    >
      {label}
    </span>
  );
}

// LYFD Werkbeheer: werkorder lijst met echte data
function WerkbeheerMockup() {
  const orders = [
    { id: "WO-2847", locatie: "Schindler lift G-142", monteur: "Johan K.", status: "Actief", statusColor: "#22C55E", prio: "Normaal", prioColor: "#6B6B6B" },
    { id: "WO-2846", locatie: "KONE lift A-089", monteur: "Lisa V.", status: "Gepland", statusColor: "#3B82F6", prio: "Hoog", prioColor: "#EF4444" },
    { id: "WO-2845", locatie: "Otis lift B-201", monteur: "Sander V.", status: "Afgerond", statusColor: "#6B6B6B", prio: "Normaal", prioColor: "#6B6B6B" },
    { id: "WO-2844", locatie: "Orona lift C-455", monteur: "Jarno K.", status: "Wacht", statusColor: "#F59E0B", prio: "Laag", prioColor: "#A0A0A0" },
    { id: "WO-2843", locatie: "ThyssenKrupp D-112", monteur: "Jasvir S.", status: "Actief", statusColor: "#22C55E", prio: "Hoog", prioColor: "#EF4444" },
  ];

  return (
    <div className="space-y-0">
      {/* Table header */}
      <div className="grid grid-cols-12 gap-2 py-2 border-b border-[#EBEBEB] mb-1">
        <span className="col-span-2 text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider">Order</span>
        <span className="col-span-3 text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider">Locatie</span>
        <span className="col-span-2 text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider">Monteur</span>
        <span className="col-span-2 text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider text-center">Status</span>
        <span className="col-span-3 text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider text-right">Prioriteit</span>
      </div>
      {orders.map((order) => (
        <div key={order.id} className="grid grid-cols-12 gap-2 py-2.5 border-b border-[#F5F5F5] last:border-0 hover:bg-[#FAFAFA] transition-colors items-center">
          <span className="col-span-2 text-xs font-mono text-[#1A1A1A]">{order.id}</span>
          <span className="col-span-3 text-xs text-[#6B6B6B] truncate">{order.locatie}</span>
          <span className="col-span-2 text-xs text-[#6B6B6B]">{order.monteur}</span>
          <div className="col-span-2 flex justify-center">
            <StatusBadge color={order.statusColor} label={order.status} />
          </div>
          <div className="col-span-3 flex justify-end">
            <PrioBadge label={order.prio} color={order.prioColor} />
          </div>
        </div>
      ))}
    </div>
  );
}

// LYFD Planning: weekplanner met echte namen en uren
function PlanningMockup() {
  const days = ["Ma", "Di", "Wo", "Do", "Vr"];
  const monteurs = [
    { naam: "Johan K.", uren: ["8/8h", "6/8h", "8/8h", "4/8h", "-"] },
    { naam: "Lisa V.", uren: ["8/8h", "8/8h", "6/8h", "8/8h", "4/8h"] },
    { naam: "Sander V.", uren: ["4/8h", "8/8h", "8/8h", "8/8h", "8/8h"] },
    { naam: "Jarno K.", uren: ["-", "4/8h", "8/8h", "8/8h", "6/8h"] },
  ];

  function getCellColor(uren: string): string {
    if (uren === "-") return "bg-[#F0F0F0] text-[#A0A0A0]";
    if (uren.startsWith("8/8")) return "bg-[#1A1A1A] text-white";
    if (uren.startsWith("6/8") || uren.startsWith("4/8")) return "bg-[#4A4A4A] text-white";
    return "bg-[#F0F0F0] text-[#6B6B6B]";
  }

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="grid grid-cols-[80px_repeat(5,1fr)] gap-1.5">
        <div />
        {days.map((day) => (
          <div key={day} className="text-center">
            <span className="text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider">{day}</span>
          </div>
        ))}
      </div>
      {/* Rows */}
      {monteurs.map((m) => (
        <div key={m.naam} className="grid grid-cols-[80px_repeat(5,1fr)] gap-1.5 items-center">
          <span className="text-[10px] text-[#6B6B6B] font-medium truncate">{m.naam}</span>
          {m.uren.map((u, i) => (
            <div
              key={i}
              className={`text-center py-1.5 rounded-md text-[9px] font-mono ${getCellColor(u)}`}
            >
              {u}
            </div>
          ))}
        </div>
      ))}
      {/* Capacity bar */}
      <div className="flex items-center gap-3 pt-3 border-t border-[#F0F0F0]">
        <span className="text-[10px] text-[#A0A0A0]">Team capaciteit</span>
        <div className="flex-1 h-2 rounded-full bg-[#F0F0F0] overflow-hidden">
          <div className="h-full rounded-full bg-[#1A1A1A]" style={{ width: "84%" }} />
        </div>
        <span className="text-[10px] font-mono font-medium text-[#1A1A1A]">84% bezet</span>
      </div>
    </div>
  );
}

// LYFD Reparatie: kanban met echte reparatie-items
function ReparatieMockup() {
  const columns = [
    {
      label: "Nieuw",
      count: 4,
      color: "#3B82F6",
      items: [
        { title: "Deurslot #B-089", detail: "Prio: Hoog", detailColor: "#EF4444" },
        { title: "Kabel #D-112", detail: "Prio: Middel", detailColor: "#F59E0B" },
      ],
    },
    {
      label: "In behandeling",
      count: 3,
      color: "#F59E0B",
      items: [
        { title: "Sensorlijst #A-142", detail: "Monteur: Lisa V.", detailColor: "#6B6B6B" },
        { title: "Besturing #G-455", detail: "Monteur: Johan K.", detailColor: "#6B6B6B" },
      ],
    },
    {
      label: "Gepland",
      count: 2,
      color: "#8B5CF6",
      items: [
        { title: "Motor #C-201", detail: "Datum: 8 apr", detailColor: "#6B6B6B" },
        { title: "Rubbers #E-087", detail: "Datum: 10 apr", detailColor: "#6B6B6B" },
      ],
    },
    {
      label: "Afgerond",
      count: 6,
      color: "#22C55E",
      items: [
        { title: "Schakelaar #F-330", detail: "Afgesloten", detailColor: "#A0A0A0" },
        { title: "Geleiding #H-110", detail: "Afgesloten", detailColor: "#A0A0A0" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {columns.map((col) => (
        <div key={col.label} className="space-y-2">
          <div className="flex items-center gap-2 pb-1 border-b-2" style={{ borderColor: col.color }}>
            <span className="text-[10px] font-medium text-[#6B6B6B]">{col.label}</span>
            <span className="text-[10px] font-mono text-[#A0A0A0]">{col.count}</span>
          </div>
          {col.items.map((item, i) => (
            <div key={i} className="rounded-lg border border-[#EBEBEB] bg-white p-2 space-y-1">
              <span className="text-[10px] font-medium text-[#1A1A1A] block">{item.title}</span>
              <span className="text-[9px] block" style={{ color: item.detailColor }}>{item.detail}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// LYFD Onderdelen: product grid met echte onderdelen
function OnderdelenMockup() {
  const products = [
    { name: "Frequentieregelaar 11kW", price: "EUR 890", stock: "Op voorraad", stockColor: "#22C55E" },
    { name: "Deurcellen set compleet", price: "EUR 245", stock: "Op voorraad", stockColor: "#22C55E" },
    { name: "Sensorlijst 2m", price: "EUR 78", stock: "3 beschikbaar", stockColor: "#3B82F6" },
    { name: "Besturingskast RPS400", price: "EUR 1.450", stock: "Op aanvraag", stockColor: "#F59E0B" },
    { name: "Deurmotor 200W", price: "EUR 320", stock: "Op voorraad", stockColor: "#22C55E" },
    { name: "Kabelset 40m", price: "EUR 165", stock: "5 beschikbaar", stockColor: "#3B82F6" },
  ];

  return (
    <div className="space-y-3">
      {/* Search bar */}
      <div className="flex gap-2">
        <div className="flex-1 h-8 rounded-lg bg-[#F0F0F0] flex items-center px-3">
          <svg className="w-3 h-3 text-[#DCDCDC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <span className="text-[10px] text-[#A0A0A0] ml-2 font-mono">Zoek onderdeel...</span>
        </div>
        <div className="h-8 px-3 rounded-lg bg-[#1A1A1A] flex items-center">
          <span className="text-[10px] text-white font-medium">Filters</span>
        </div>
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-3 gap-2">
        {products.map((p, i) => (
          <div key={i} className="rounded-lg border border-[#EBEBEB] bg-white p-2.5 space-y-1.5">
            <div className="aspect-square rounded-md bg-[#F5F5F5] flex items-center justify-center">
              <div className="w-8 h-8 rounded bg-[#EBEBEB]" />
            </div>
            <span className="text-[10px] text-[#1A1A1A] font-medium block leading-tight truncate">{p.name}</span>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#1A1A1A]">{p.price}</span>
            </div>
            <span className="text-[9px] block" style={{ color: p.stockColor }}>{p.stock}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// LYFD Offertes: document lijst
function OffertesMockup() {
  const docs = [
    { name: "Offerte Otis NL", status: "Verzonden", statusColor: "#3B82F6", date: "28 mrt" },
    { name: "Offerte Kone Service", status: "Getekend", statusColor: "#22C55E", date: "25 mrt" },
    { name: "Offerte ThyssenKrupp", status: "Concept", statusColor: "#A0A0A0", date: "24 mrt" },
    { name: "Offerte Schindler BV", status: "Bekeken", statusColor: "#F59E0B", date: "22 mrt" },
    { name: "Offerte Mitsubishi", status: "Verlopen", statusColor: "#EF4444", date: "18 mrt" },
  ];

  return (
    <div className="space-y-0">
      {docs.map((doc) => (
        <div key={doc.name} className="flex items-center gap-4 py-3 border-b border-[#F5F5F5] last:border-0">
          {/* Document icon */}
          <div className="w-8 h-10 rounded border border-[#EBEBEB] bg-white flex items-center justify-center">
            <div className="w-4 h-5 rounded-sm bg-[#F0F0F0]" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs text-[#1A1A1A] font-medium block truncate">{doc.name}</span>
            <span className="text-[10px] text-[#A0A0A0]">{doc.date}</span>
          </div>
          <StatusBadge color={doc.statusColor} label={doc.status} />
        </div>
      ))}
    </div>
  );
}

// LYFD Monitor: IoT dashboard
function MonitorMockup() {
  return (
    <div className="space-y-3">
      {/* Status row */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-[#EBEBEB] bg-white p-2.5">
          <div className="text-[10px] text-[#A0A0A0] mb-1">Online</div>
          <div className="text-sm font-bold text-[#22C55E] font-mono">247</div>
        </div>
        <div className="rounded-lg border border-[#EBEBEB] bg-white p-2.5">
          <div className="text-[10px] text-[#A0A0A0] mb-1">Storing</div>
          <div className="text-sm font-bold text-[#EF4444] font-mono">3</div>
        </div>
        <div className="rounded-lg border border-[#EBEBEB] bg-white p-2.5">
          <div className="text-[10px] text-[#A0A0A0] mb-1">Onderhoud</div>
          <div className="text-sm font-bold text-[#F59E0B] font-mono">12</div>
        </div>
      </div>
      {/* Chart mockup with SVG */}
      <div className="rounded-lg border border-[#EBEBEB] bg-white p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-[#6B6B6B]">Storinghistorie (30 dagen)</span>
          <div className="flex gap-2">
            <div className="h-4 w-10 rounded bg-[#F0F0F0]" />
            <div className="h-4 w-10 rounded bg-[#F0F0F0]" />
          </div>
        </div>
        <svg viewBox="0 0 300 80" className="w-full h-20" fill="none">
          {/* Grid lines */}
          <line x1="0" y1="20" x2="300" y2="20" stroke="#F0F0F0" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="300" y2="40" stroke="#F0F0F0" strokeWidth="0.5" />
          <line x1="0" y1="60" x2="300" y2="60" stroke="#F0F0F0" strokeWidth="0.5" />
          {/* Line chart */}
          <path
            d="M0,55 L25,50 L50,45 L75,52 L100,38 L125,42 L150,30 L175,35 L200,25 L225,28 L250,20 L275,22 L300,18"
            stroke="#1A1A1A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Area fill */}
          <path
            d="M0,55 L25,50 L50,45 L75,52 L100,38 L125,42 L150,30 L175,35 L200,25 L225,28 L250,20 L275,22 L300,18 L300,80 L0,80Z"
            fill="url(#chartGradientModule)"
            opacity="0.15"
          />
          <defs>
            <linearGradient id="chartGradientModule" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A1A1A" />
              <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Activity feed */}
      <div className="space-y-1.5">
        {[
          { text: "Lift #A-142 storing opgelost", time: "2 min", color: "#22C55E" },
          { text: "Lift #B-089 storing gemeld", time: "14 min", color: "#EF4444" },
          { text: "Onderhoud #C-201 gepland", time: "1 uur", color: "#F59E0B" },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-2 py-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-[10px] text-[#6B6B6B] flex-1 truncate">{item.text}</span>
            <span className="text-[10px] text-[#A0A0A0] font-mono">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// LYFD Marktplaats: marktplaats met echte listings
function MarktplaatsMockup() {
  const filters = ["Alle", "Deuren", "Motoren", "Besturing", "Kabels"];

  const listings = [
    {
      name: "Motor ABB 4kW",
      price: "EUR 450",
      condition: "Gebruikt - Goed",
      conditionColor: "#F59E0B",
      seller: "TechLift BV",
      location: "Rotterdam",
      rating: 4,
    },
    {
      name: "Besturingskast Otis 2000",
      price: "EUR 1.200",
      condition: "Gereviseerd",
      conditionColor: "#22C55E",
      seller: "LiftPartner",
      location: "Amsterdam",
      rating: 5,
    },
    {
      name: "Deurcellen Schindler",
      price: "EUR 180",
      condition: "Gebruikt - Goed",
      conditionColor: "#F59E0B",
      seller: "ElevatorParts",
      location: "Utrecht",
      rating: 4,
    },
    {
      name: "Kabelset Thyssen 30m",
      price: "EUR 220",
      condition: "Nieuw",
      conditionColor: "#3B82F6",
      seller: "LiftSupply NL",
      location: "Den Haag",
      rating: 4,
    },
  ];

  return (
    <div className="space-y-3">
      {/* Filter bar */}
      <div className="flex gap-1.5 flex-wrap">
        {filters.map((f, i) => (
          <div
            key={f}
            className={`h-7 rounded-full px-3 flex items-center ${
              i === 0 ? "bg-[#1A1A1A]" : "bg-[#F0F0F0]"
            }`}
          >
            <span className={`text-[10px] ${i === 0 ? "text-white" : "text-[#6B6B6B]"}`}>{f}</span>
          </div>
        ))}
      </div>
      {/* Listings */}
      <div className="space-y-2">
        {listings.map((item, i) => (
          <div key={i} className="flex gap-3 rounded-lg border border-[#EBEBEB] bg-white p-2.5">
            <div className="w-14 h-14 rounded-md bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
              <div className="w-7 h-7 rounded bg-[#EBEBEB]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-[#1A1A1A] truncate">{item.name}</span>
                <span className="text-[11px] font-mono font-bold text-[#1A1A1A] flex-shrink-0">{item.price}</span>
              </div>
              <span className="text-[9px] font-medium" style={{ color: item.conditionColor }}>{item.condition}</span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[9px] text-[#A0A0A0]">{item.seller} - {item.location}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span
                      key={s}
                      className="text-[8px]"
                      style={{ color: s < item.rating ? "#1A1A1A" : "#DCDCDC" }}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockupComponents: Record<string, () => React.JSX.Element> = {
  werkbeheer: WerkbeheerMockup,
  planning: PlanningMockup,
  reparatie: ReparatieMockup,
  onderdelen: OnderdelenMockup,
  offertes: OffertesMockup,
  monitor: MonitorMockup,
  marktplaats: MarktplaatsMockup,
};

export function ModuleMockup({ moduleId }: ModuleMockupProps) {
  const MockupComponent = mockupComponents[moduleId];

  if (!MockupComponent) return null;

  return (
    <div className="rounded-2xl border border-[#DCDCDC] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#EBEBEB] bg-[#FAFAFA]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E8E8]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E8E8]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8E8E8]" />
        </div>
        <div className="flex-1 mx-6">
          <div className="max-w-xs mx-auto h-5 rounded-md bg-[#F0F0F0] flex items-center px-2.5">
            <span className="text-[9px] text-[#A0A0A0] font-mono">
              app.lyfd.nl/{moduleId}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 bg-[#F8F8F8]">
        <MockupComponent />
      </div>
    </div>
  );
}
