"use client";

interface ModuleMockupProps {
  moduleId: string;
}

function StatusBadge({ color, label }: { color: string; label: string }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium"
      style={{ backgroundColor: `${color}15`, color }}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </div>
  );
}

function MockRow({ widths, hasStatus }: { widths: string[]; hasStatus?: boolean }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-[#F0F0F0] last:border-0">
      {widths.map((w, i) => (
        <div key={i} className={`h-3 rounded bg-[#EBEBEB]`} style={{ width: w }} />
      ))}
      {hasStatus && (
        <div className="ml-auto">
          <div className="h-5 w-16 rounded-full bg-[#E8F5E9]" />
        </div>
      )}
    </div>
  );
}

// FieldAssist: werkorder lijst
function FieldAssistMockup() {
  const orders = [
    { id: "WO-2847", status: "Actief", statusColor: "#22C55E" },
    { id: "WO-2846", status: "Gepland", statusColor: "#3B82F6" },
    { id: "WO-2845", status: "Afgerond", statusColor: "#6B6B6B" },
    { id: "WO-2844", status: "Actief", statusColor: "#22C55E" },
    { id: "WO-2843", status: "Wacht", statusColor: "#F59E0B" },
  ];

  return (
    <div className="space-y-0">
      {/* Table header */}
      <div className="flex items-center gap-4 py-2 border-b border-[#EBEBEB] mb-1">
        <span className="text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider w-20">Order</span>
        <span className="text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider flex-1">Locatie</span>
        <span className="text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider w-20">Monteur</span>
        <span className="text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider w-20 text-right">Status</span>
      </div>
      {orders.map((order) => (
        <div key={order.id} className="flex items-center gap-4 py-2.5 border-b border-[#F5F5F5] last:border-0 hover:bg-[#FAFAFA] transition-colors">
          <span className="text-xs font-mono text-[#1A1A1A] w-20">{order.id}</span>
          <div className="flex-1">
            <div className="h-3 rounded bg-[#EBEBEB]" style={{ width: `${60 + Math.random() * 30}%` }} />
          </div>
          <div className="w-20">
            <div className="w-6 h-6 rounded-full bg-[#F0F0F0]" />
          </div>
          <div className="w-20 flex justify-end">
            <StatusBadge color={order.statusColor} label={order.status} />
          </div>
        </div>
      ))}
    </div>
  );
}

// FieldPro: weekkalender
function FieldProMockup() {
  const days = ["Ma", "Di", "Wo", "Do", "Vr"];
  const slots = [
    [3, 2, 1],
    [2, 3, 0],
    [1, 2, 2],
    [3, 1, 1],
    [2, 2, 1],
  ];

  return (
    <div className="space-y-3">
      {/* Header with day columns */}
      <div className="grid grid-cols-5 gap-2">
        {days.map((day) => (
          <div key={day} className="text-center">
            <span className="text-[10px] font-medium text-[#A0A0A0] uppercase tracking-wider">{day}</span>
          </div>
        ))}
      </div>
      {/* Calendar grid */}
      <div className="grid grid-cols-5 gap-2">
        {slots.map((daySlots, dayIdx) => (
          <div key={dayIdx} className="space-y-1.5">
            {daySlots.map((height, slotIdx) => (
              <div
                key={slotIdx}
                className="rounded-lg border border-[#EBEBEB] bg-white p-1.5"
                style={{ height: `${24 + height * 12}px` }}
              >
                <div className="h-2 rounded bg-[#EBEBEB]" style={{ width: `${50 + height * 15}%` }} />
                {height > 1 && <div className="h-1.5 rounded bg-[#F0F0F0] mt-1" style={{ width: "40%" }} />}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Capacity bar */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#F0F0F0]">
        <span className="text-[10px] text-[#A0A0A0]">Capaciteit</span>
        <div className="flex-1 h-2 rounded-full bg-[#F0F0F0] overflow-hidden">
          <div className="h-full rounded-full bg-[#1A1A1A]" style={{ width: "72%" }} />
        </div>
        <span className="text-[10px] font-mono text-[#1A1A1A]">72%</span>
      </div>
    </div>
  );
}

// FieldRepair: kanban board
function FieldRepairMockup() {
  const columns = [
    { label: "Nieuw", count: 4, color: "#3B82F6" },
    { label: "In behandeling", count: 3, color: "#F59E0B" },
    { label: "Gepland", count: 2, color: "#8B5CF6" },
    { label: "Afgerond", count: 6, color: "#22C55E" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {columns.map((col) => (
        <div key={col.label} className="space-y-2">
          <div className="flex items-center gap-2 pb-1 border-b-2" style={{ borderColor: col.color }}>
            <span className="text-[10px] font-medium text-[#6B6B6B]">{col.label}</span>
            <span className="text-[10px] font-mono text-[#A0A0A0]">{col.count}</span>
          </div>
          {Array.from({ length: Math.min(col.count, 3) }).map((_, i) => (
            <div key={i} className="rounded-lg border border-[#EBEBEB] bg-white p-2 space-y-1.5">
              <div className="h-2.5 rounded bg-[#EBEBEB]" style={{ width: `${60 + i * 10}%` }} />
              <div className="h-2 rounded bg-[#F5F5F5]" style={{ width: `${40 + i * 15}%` }} />
              <div className="flex items-center gap-1 pt-0.5">
                <div className="w-4 h-4 rounded-full bg-[#F0F0F0]" />
                <div className="h-1.5 rounded bg-[#F0F0F0] w-8" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Shop: product grid
function ShopMockup() {
  const products = Array.from({ length: 6 });

  return (
    <div className="space-y-3">
      {/* Search bar */}
      <div className="flex gap-2">
        <div className="flex-1 h-8 rounded-lg bg-[#F0F0F0] flex items-center px-3">
          <div className="h-3 w-3 rounded-full border border-[#DCDCDC]" />
          <div className="h-2.5 rounded bg-[#DCDCDC] ml-2 w-24" />
        </div>
        <div className="h-8 w-20 rounded-lg bg-[#1A1A1A]" />
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-3 gap-2">
        {products.map((_, i) => (
          <div key={i} className="rounded-lg border border-[#EBEBEB] bg-white p-2 space-y-2">
            <div className="aspect-square rounded-md bg-[#F5F5F5]" />
            <div className="h-2.5 rounded bg-[#EBEBEB]" style={{ width: `${60 + i * 5}%` }} />
            <div className="h-2 rounded bg-[#F0F0F0] w-1/2" />
            <div className="h-4 rounded bg-[#1A1A1A] w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Offertes: document lijst
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

// EDNL Sense: IoT dashboard met grafieken
function SenseMockup() {
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
            fill="url(#chartGradient)"
            opacity="0.15"
          />
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
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

// LiftParts Exchange: marktplaats
function LiftPartsMockup() {
  const items = Array.from({ length: 4 });

  return (
    <div className="space-y-3">
      {/* Filter bar */}
      <div className="flex gap-2">
        <div className="h-7 rounded-full bg-[#1A1A1A] px-3 flex items-center">
          <span className="text-[10px] text-white">Alle onderdelen</span>
        </div>
        <div className="h-7 rounded-full bg-[#F0F0F0] px-3 flex items-center">
          <span className="text-[10px] text-[#6B6B6B]">Deuren</span>
        </div>
        <div className="h-7 rounded-full bg-[#F0F0F0] px-3 flex items-center">
          <span className="text-[10px] text-[#6B6B6B]">Motoren</span>
        </div>
        <div className="h-7 rounded-full bg-[#F0F0F0] px-3 flex items-center">
          <span className="text-[10px] text-[#6B6B6B]">Besturing</span>
        </div>
      </div>
      {/* Listings grid */}
      <div className="grid grid-cols-2 gap-2">
        {items.map((_, i) => (
          <div key={i} className="rounded-lg border border-[#EBEBEB] bg-white p-2.5 space-y-2">
            <div className="aspect-[4/3] rounded-md bg-[#F5F5F5] flex items-center justify-center">
              <div className="w-8 h-8 rounded bg-[#EBEBEB]" />
            </div>
            <div className="h-2.5 rounded bg-[#EBEBEB]" style={{ width: `${65 + i * 8}%` }} />
            <div className="flex items-center justify-between">
              <div className="h-3.5 rounded bg-[#1A1A1A] w-12" />
              <div className="h-5 w-5 rounded-full bg-[#F0F0F0]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockupComponents: Record<string, () => React.JSX.Element> = {
  fieldassist: FieldAssistMockup,
  fieldpro: FieldProMockup,
  fieldrepair: FieldRepairMockup,
  shop: ShopMockup,
  offertes: OffertesMockup,
  sense: SenseMockup,
  liftparts: LiftPartsMockup,
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
