// i18n — translation strings + language context
const I18N = {
  en: {
    // Nav
    nav: { outcomes: "Outcomes", how: "How it works", demo: "Live demo", pricing: "Pricing", faq: "FAQ", signin: "Sign in", cta: "Try the live agent" },
    // Hero
    badge: "AI Agent for Healthcare Providers",
    hero: {
      h1a: "",
      h1b: "Turn more patient inquiries into booked appointments.",
      sub: "AI agents that respond instantly 24/7, recommend the right services, and follow up automatically — so every patient inquiry turns into a booked, retained, and growing relationship.",
      ctaPrimary: "Try the live agent now",
      ctaSecondary: "See pricing",
      metaLive: "Live with pilot providers in Jakarta",
      metaWa: "Native WhatsApp Business API",
      pillars: [
        {
          tag: "01 · Conversion",
          title: "Turn more inquiries into booked appointments",
          desc: "AI agents respond instantly, 24/7 — unlike manual CS with limited hours. Patients get answers fast and book right away, reducing drop-offs.",
          metric: "<60s",
          metricLabel: "first reply, day or night"
        },
        {
          tag: "02 · Revenue",
          title: "Increase revenue per patient",
          desc: "AI consistently recommends relevant services, while manual teams may miss opportunities. This helps increase the value of each visit.",
          metric: "+18%",
          metricLabel: "avg. spend per visit"
        },
        {
          tag: "03 · Retention",
          title: "Improve patient retention",
          desc: "AI sends timely reminders and follow-ups automatically — something hard to do manually at scale — helping patients return when needed.",
          metric: "2.4×",
          metricLabel: "return-visit rate"
        }
      ],
      takeaway: "More bookings, higher spend, and stronger patient relationships."
    },
    // Outcomes
    outcomes: {
      eyebrow: "§ The four outcomes",
      h2a: "",
      h2b: "Start measuring outcomes.",
      sub: "Every claim on this page is a number you can verify against your own provider data within 30 days.",
      items: [
        { metric: "Rp 50–150jt", unit: "/month", title: "Recovered revenue", desc: "Inquiries that used to vanish after-hours now turn into bookings." },
        { metric: "<60s", unit: "first reply", title: "24/7 response", desc: "Patients get a real answer at 23:47 — not an away message." },
        { metric: "Rp 12rb", unit: "per booking", title: "Cost per outcome", desc: "Transparent unit economics. Know your ROI from day one." },
        { metric: "0", unit: "apps installed", title: "Native WhatsApp", desc: "Your patients keep using the channel they already trust." },
      ],
    },
    // How it works
    how: {
      eyebrow: "§ How it works",
      h2: "Live in your provider in three steps.",
      steps: [
        { n: "01", title: "Connect WhatsApp Business", body: "We onboard your number through Meta's official API in under 48 hours. No app install, no number change for your patients." },
        { n: "02", title: "Train on your provider", body: "Upload your services, doctors, hours, pricing. The agent learns your provider's voice and edge cases — not generic chatbot scripts." },
        { n: "03", title: "Hand off to humans", body: "Sensitive cases route to your staff inbox with full context. The agent never pretends to be a doctor." },
      ],
    },
    // Demo
    demo: {
      eyebrow: "§ Live demo",
      h2a: "Try it yourself.",
      h2b: "No signup, no setup.",
      sub: "Pick a real-world healthcare question. Watch the agent reply in seconds — the same way a patient on WhatsApp would experience it tonight.",
      footnote: "Demo conversation. No patient data is stored. Production agents are trained on your provider's services, hours, doctors, and pricing.",
      providerName: "Healthcare Provider",
      online: "online · replies in seconds",
      placeholder: "Type a message…",
      responseTime: "response time",
      tryFree: "Try our agent for free",
      behindEyebrow: "§ Agent reasoning",
      behindTitle: "What runs behind the chat",
      behindSub: "Each reply classifies intent, calls your provider's API, and composes the response — not a scripted chatbot.",
      idle: "Pick a scenario above to watch the agent's API calls play out in real time.",
    },
    // Pricing
    pricing: {
      eyebrow: "§ Pricing",
      h2a: "Pay based on usage.",
      h2b: "No surprises.",
      sub: "Estimated cost is Rp 3,000–6,000 per conversation. The exact rate depends on volume, complexity, and language model usage. Slide below to estimate your monthly bill.",
      sliderLabel: "Monthly conversations",
      lowEnd: "Low complexity",
      highEnd: "High complexity",
      perConv: "per conversation",
      monthly: "Estimated monthly cost",
      includes: "Estimate includes",
      includesItems: [
        "WhatsApp Business API messaging fees",
        "AI agent processing & language model usage",
        "Booking, FAQ, reminder & handoff flows",
        "Live staff handoff inbox + analytics dashboard",
      ],
      tableHead: ["Conversations / mo", "Low estimate", "High estimate", "Avg cost / booking*"],
      tableNote: "* Assumes 60% of conversations convert to a booking — typical baseline for trained agents after 30 days.",
      ctaTalk: "Talk to us about volume pricing",
    },
    // Social proof
    proof: {
      stats: [
        { num: "42%", label: "of patient inquiries arrive outside business hours", src: "[ Indonesian healthcare survey, 2025 ]" },
        { num: "2.8×", label: "more inquiries convert when first reply happens within 60 seconds", src: "[ Internal Qlar pilot data ]" },
        { num: "~Rp 110jt", label: "average untracked revenue lost per month at a 5-branch aesthetic provider", src: "[ Qlar revenue audit, 2026 ]" },
      ],
      logosNote: "Pilot partners — anonymized. Public case studies coming Q3 2026.",
    },
    // FAQ
    faq: {
      eyebrow: "§ FAQ",
      h2: "The questions provider owners ask first.",
      items: [
        { q: "What happens when the AI doesn't know the answer?", a: "It says so honestly and routes the conversation to your staff inbox with full chat history. The agent is configured to defer on anything medical — diagnosis, dosage, prescriptions — and on any case it's <90% confident on." },
        { q: "How does human handoff work in practice?", a: "Your staff get a notification (WhatsApp, Slack, or our inbox UI — your choice) with the full conversation transcript and a one-tap takeover. The patient sees a seamless transition — no 'connecting you to an agent' awkwardness." },
        { q: "Are you a Meta-approved WhatsApp Business Solution Provider?", a: "We operate through tier-1 BSP partners that are Meta-approved. This means your messages go through official channels — no green-tick risk, no API instability. We're also working toward direct Meta Tech Provider status; happy to share roadmap on the call." },
        { q: "What if my provider has weird, niche scenarios?", a: "That's the point. Generic chatbots break on edge cases. We onboard with a 2-hour scenario-mapping session and a 30-day tuning period where every misroute we see gets handled. After day 30, you should see >95% intent-handling accuracy." },
        { q: "Can patients tell they're talking to an AI?", a: "We're transparent by default — the WhatsApp profile says 'Provider X — Asisten Digital' and the bot identifies itself when asked. We don't recommend pretending to be human. Patients who feel deceived are patients you lose." },
        { q: "What's the contract length?", a: "Monthly. Cancel anytime with 30 days notice. We don't lock you in — if the unit economics don't work for you, the product isn't worth selling." },
      ],
    },
    // Final CTA
    cta: {
      eyebrow: "§ Ship in 48 hours",
      h2a: "Your healthcare provider's WhatsApp",
      h2b: "never sleeps again.",
      sub: "Try the live agent on a real provider scenario — no signup, no calendar dance. If it doesn't blow you away, the call is short.",
      primary: "Try the live agent now",
      secondary: "Book 20-min walkthrough",
    },
    footer: { rights: "© 2026 Qlar. Built in Jakarta for healthcare providers.", links: ["Privacy", "Terms", "Data residency", "Status", "Contact"] },
  },
  id: {
    nav: { outcomes: "Manfaat", how: "Cara kerja", demo: "Demo langsung", pricing: "Harga", faq: "FAQ", signin: "Masuk", cta: "Coba agen sekarang" },
    badge: "AI Agent untuk Penyedia Layanan Kesehatan",
    hero: {
      h1a: "",
      h1b: "Ubah lebih banyak pertanyaan pasien jadi booking.",
      sub: "Agen AI yang membalas instan 24/7, merekomendasikan layanan tepat, dan follow-up otomatis — supaya setiap pertanyaan pasien jadi booking, kunjungan kembali, dan hubungan yang tumbuh.",
      ctaPrimary: "Coba agen langsung sekarang",
      ctaSecondary: "Lihat harga",
      metaLive: "Aktif dengan mitra pilot di Jakarta",
      metaWa: "WhatsApp Business API resmi",
      pillars: [
        {
          tag: "01 · Konversi",
          title: "Ubah lebih banyak pertanyaan jadi booking",
          desc: "Agen AI membalas instan 24/7 — beda dengan CS manual yang jam terbatas. Pasien dapat jawaban cepat dan langsung booking, mengurangi drop-off.",
          metric: "<60dtk",
          metricLabel: "balasan pertama, siang atau malam"
        },
        {
          tag: "02 · Pendapatan",
          title: "Tingkatkan pendapatan per pasien",
          desc: "AI konsisten merekomendasikan layanan relevan, sementara tim manual bisa kehilangan peluang. Ini membantu menaikkan nilai setiap kunjungan.",
          metric: "+18%",
          metricLabel: "rata-rata belanja per kunjungan"
        },
        {
          tag: "03 · Retensi",
          title: "Tingkatkan retensi pasien",
          desc: "AI mengirim pengingat dan follow-up otomatis — sulit dilakukan manual dalam skala besar — membantu pasien kembali saat dibutuhkan.",
          metric: "2.4×",
          metricLabel: "tingkat kunjungan ulang"
        }
      ],
      takeaway: "Lebih banyak booking, belanja lebih tinggi, dan hubungan pasien yang lebih kuat."
    },
    outcomes: {
      eyebrow: "§ Empat manfaat",
      h2a: "",
      h2b: "Mulai mengukur hasil.",
      sub: "Setiap klaim di halaman ini adalah angka yang bisa Anda verifikasi dari data fasilitas Anda sendiri dalam 30 hari.",
      items: [
        { metric: "Rp 50–150jt", unit: "/bulan", title: "Pendapatan terselamatkan", desc: "Pertanyaan yang dulu hilang di luar jam kerja kini jadi booking." },
        { metric: "<60dtk", unit: "balasan pertama", title: "Respons 24/7", desc: "Pasien dapat jawaban nyata jam 23:47 — bukan pesan auto-reply." },
        { metric: "Rp 12rb", unit: "per booking", title: "Biaya per hasil", desc: "Unit economics transparan. Tahu ROI dari hari pertama." },
        { metric: "0", unit: "aplikasi terpasang", title: "WhatsApp asli", desc: "Pasien tetap pakai channel yang sudah mereka percaya." },
      ],
    },
    how: {
      eyebrow: "§ Cara kerja",
      h2: "Aktif di fasilitas Anda dalam tiga langkah.",
      steps: [
        { n: "01", title: "Hubungkan WhatsApp Business", body: "Kami onboard nomor Anda lewat Meta API resmi dalam <48 jam. Tanpa instalasi aplikasi, tanpa ganti nomor untuk pasien." },
        { n: "02", title: "Latih dengan data fasilitas Anda", body: "Upload layanan, dokter, jam, harga. Agen belajar suara fasilitas Anda dan edge case — bukan skrip chatbot generik." },
        { n: "03", title: "Serahkan ke manusia", body: "Kasus sensitif diteruskan ke inbox staf dengan konteks lengkap. Agen tidak pernah pura-pura jadi dokter." },
      ],
    },
    demo: {
      eyebrow: "§ Demo langsung",
      h2a: "Coba sendiri.",
      h2b: "Tanpa daftar, tanpa setup.",
      sub: "Pilih pertanyaan layanan kesehatan nyata. Lihat agen membalas dalam hitungan detik — sama seperti pengalaman pasien di WhatsApp malam ini.",
      footnote: "Percakapan demo. Tidak ada data pasien yang disimpan. Agen produksi dilatih dengan layanan, jam, dokter, dan harga fasilitas Anda.",
      providerName: "Klinik Qlar",
      online: "online · balas dalam hitungan detik",
      placeholder: "Ketik pesan…",
      responseTime: "waktu respons",
      tryFree: "Coba agen kami gratis",
      behindEyebrow: "§ Logika agen",
      behindTitle: "Yang berjalan di balik chat",
      behindSub: "Setiap balasan mengklasifikasi intent, memanggil API fasilitas Anda, dan menyusun respons — bukan bot skrip.",
      idle: "Pilih skenario di atas untuk melihat panggilan API agen berjalan secara real-time.",
    },
    pricing: {
      eyebrow: "§ Harga",
      h2a: "Bayar sesuai pemakaian.",
      h2b: "Tanpa kejutan.",
      sub: "Estimasi biaya Rp 3.000–6.000 per percakapan. Tarif pasti tergantung volume, kompleksitas, dan penggunaan model bahasa. Geser di bawah untuk estimasi tagihan bulanan.",
      sliderLabel: "Percakapan per bulan",
      lowEnd: "Kompleksitas rendah",
      highEnd: "Kompleksitas tinggi",
      perConv: "per percakapan",
      monthly: "Estimasi biaya bulanan",
      includes: "Termasuk dalam estimasi",
      includesItems: [
        "Biaya pesan WhatsApp Business API",
        "Pemrosesan agen AI & penggunaan model bahasa",
        "Alur booking, FAQ, pengingat & handoff",
        "Inbox handoff staf + dashboard analitik",
      ],
      tableHead: ["Percakapan / bln", "Estimasi rendah", "Estimasi tinggi", "Rata-rata / booking*"],
      tableNote: "* Asumsi 60% percakapan jadi booking — baseline tipikal setelah 30 hari pelatihan.",
      ctaTalk: "Diskusi harga volume",
    },
    proof: {
      stats: [
        { num: "42%", label: "pertanyaan pasien masuk di luar jam kerja", src: "[ Survei layanan kesehatan Indonesia, 2025 ]" },
        { num: "2.8×", label: "pertanyaan lebih banyak konversi jika balasan pertama dalam 60 detik", src: "[ Data pilot internal Qlar ]" },
        { num: "~Rp 110jt", label: "rata-rata pendapatan tak terlacak per bulan di klinik estetika 5 cabang", src: "[ Audit pendapatan Qlar, 2026 ]" },
      ],
      logosNote: "Mitra pilot — dianonimkan. Studi kasus publik akan dirilis Q3 2026.",
    },
    faq: {
      eyebrow: "§ FAQ",
      h2: "Pertanyaan pertama dari pemilik fasilitas kesehatan.",
      items: [
        { q: "Apa yang terjadi kalau AI tidak tahu jawabannya?", a: "Ia jujur bilang tidak tahu dan meneruskan percakapan ke inbox staf Anda dengan riwayat chat lengkap. Agen dikonfigurasi untuk menyerahkan urusan medis — diagnosa, dosis, resep — dan kasus dengan kepercayaan <90%." },
        { q: "Bagaimana handoff ke manusia bekerja?", a: "Staf Anda dapat notifikasi (WhatsApp, Slack, atau inbox UI kami — Anda yang pilih) dengan transkrip lengkap dan satu tap untuk ambil alih. Pasien melihat transisi mulus." },
        { q: "Apakah kalian Solution Provider WhatsApp Business resmi Meta?", a: "Kami beroperasi lewat partner BSP tier-1 yang disetujui Meta. Pesan Anda lewat channel resmi — tidak ada risiko centang hijau hilang atau API tidak stabil." },
        { q: "Bagaimana kalau fasilitas saya punya skenario aneh dan niche?", a: "Itu intinya. Chatbot generik patah di edge case. Kami onboard dengan sesi pemetaan skenario 2 jam dan tuning 30 hari. Setelah hari ke-30, akurasi handling intent harus >95%." },
        { q: "Apakah pasien tahu mereka bicara dengan AI?", a: "Kami transparan secara default — profil WhatsApp tertulis 'Penyedia X — Asisten Digital' dan bot identifikasi diri jika ditanya. Tidak disarankan pura-pura jadi manusia." },
        { q: "Berapa lama kontraknya?", a: "Bulanan. Bisa dibatalkan kapan saja dengan notice 30 hari. Tidak ada lock-in — jika unit economics tidak cocok, produknya tidak layak dijual." },
      ],
    },
    cta: {
      eyebrow: "§ Aktif dalam 48 jam",
      h2a: "WhatsApp fasilitas kesehatan Anda",
      h2b: "tidak akan tidur lagi.",
      sub: "Coba agen langsung dengan skenario fasilitas nyata — tanpa daftar, tanpa atur kalender. Kalau tidak terkesan, panggilannya singkat.",
      primary: "Coba agen sekarang",
      secondary: "Atur demo 20 menit",
    },
    footer: { rights: "© 2026 Qlar. Dibuat di Jakarta untuk penyedia layanan kesehatan.", links: ["Privasi", "Ketentuan", "Lokasi data", "Status", "Kontak"] },
  },
};

// Sample WhatsApp demo conversations (per language)
const DEMO_SCRIPTS_I18N = {
  en: {
    facial: {
      label: "I'd like to book a facial tomorrow morning",
      convo: [
        { role: "user", text: "I'd like to book a facial tomorrow morning", delay: 0 },
        { role: "ai", typing: 800, text: "Sure! Tomorrow morning is open at 3 branches:\n\n📍 Kemang — 09:00, 10:30\n📍 Senopati — 09:30, 11:00\n📍 Pondok Indah — 08:30, 10:00\n\nWhich branch would you like?", delay: 1200 },
        { role: "user", text: "Kemang at 10:30", delay: 1500 },
        { role: "ai", typing: 600, text: "Booking confirmation ✨\n\n• Facial Treatment\n• Tue, May 5 · 10:30\n• Qlar Kemang\n• Therapist: Rina\n\nReply *YES* to confirm.", delay: 1000 },
      ],
      actions: [
        { trigger: 1, method: "GET", api: "/api/availability", intent: "Intent · BOOKING_REQUEST", thought: "Patient wants to book a facial for tomorrow morning — checking real-time slot availability across all branches to find options.", desc: "Looking up facial slots tomorrow morning across all branches" },
        { trigger: 3, method: "POST", api: "/api/bookings", intent: "Intent · SLOT_SELECTION", thought: "Patient selected Kemang 10:30 — creating the booking record and assigning therapist Rina.", desc: "Creating: Facial · Kemang 10:30 · Therapist Rina · Tue May 5" },
      ],
    },
    pricing: {
      label: "How much is a botox consultation?",
      convo: [
        { role: "user", text: "How much is a botox consultation?", delay: 0 },
        { role: "ai", typing: 700, text: "A botox consultation with Dr. Sari is **free** — includes a 15-minute skin assessment.\n\nTreatments start from:\n• Forehead botox — Rp 2.5jt\n• Crow's feet — Rp 1.8jt\n• Full package — Rp 5.5jt\n\nWant me to book a consultation?", delay: 1400 },
      ],
      actions: [
        { trigger: 1, method: "GET", api: "/api/pricing", intent: "Intent · PRICING_QUERY", thought: "Patient is asking about botox costs — fetching the full treatment menu and consultation policy to give an accurate, personalized answer.", desc: "Pulling botox menu, consultation policy, and treatment ranges" },
      ],
    },
    emergency: {
      label: "My child has a high fever, any doctor tomorrow 8am?",
      convo: [
        { role: "user", text: "My child has a high fever, any doctor tomorrow 8am?", delay: 0 },
        { role: "ai", typing: 900, text: "I understand — this is urgent 🙏\n\nFor tomorrow 8 AM:\n👩‍⚕️ Dr. Sari Wijaya — Pediatrician\n📍 Qlar Kemang\n💰 Consultation Rp 250rb\n\nIf the fever is >39°C tonight, please go to the ER. Shall I book 8 AM?", delay: 1500 },
        { role: "user", text: "Yes please book", delay: 1200 },
        { role: "ai", typing: 600, text: "Booked ✓ Details sent. Get well soon — wishing your little one a fast recovery 💜", delay: 900 },
      ],
      actions: [
        { trigger: 1, method: "GET", api: "/api/availability", intent: "Intent · URGENT_BOOKING", thought: "Urgency detected: child has high fever and parent needs the earliest available pediatrician. Also loading ER triage thresholds in case fever is severe tonight.", desc: "Pediatrician slots tomorrow 08:00 + ER triage criteria for high pediatric fever" },
        { trigger: 3, method: "POST", api: "/api/bookings", intent: "Intent · BOOKING_CONFIRM", thought: "Parent confirmed 'Yes please book' — creating the urgent appointment with Dr. Sari Wijaya at the 8 AM slot.", desc: "Creating: Dr. Sari Wijaya · Pediatrician · 08:00 · Qlar Kemang" },
      ],
    },
  },
  id: {
    facial: {
      label: "Saya mau booking facial besok pagi",
      convo: [
        { role: "user", text: "Saya mau booking facial besok pagi", delay: 0 },
        { role: "ai", typing: 800, text: "Tentu! Untuk besok pagi tersedia di 3 cabang:\n\n📍 Kemang — 09:00, 10:30\n📍 Senopati — 09:30, 11:00\n📍 Pondok Indah — 08:30, 10:00\n\nMau pilih cabang yang mana?", delay: 1200 },
        { role: "user", text: "Kemang jam 10:30", delay: 1500 },
        { role: "ai", typing: 600, text: "Konfirmasi booking ✨\n\n• Facial Treatment\n• Selasa, 5 Mei · 10:30\n• Klinik Qlar Kemang\n• Therapist: Mbak Rina\n\nKirim *YA* untuk konfirmasi.", delay: 1000 },
      ],
      actions: [
        { trigger: 1, method: "GET", api: "/api/availability", intent: "Intent · BOOKING_REQUEST", thought: "Pasien ingin booking facial besok pagi — mengecek ketersediaan slot real-time di semua cabang untuk menemukan pilihan terbaik.", desc: "Mencari slot facial besok pagi di semua cabang" },
        { trigger: 3, method: "POST", api: "/api/bookings", intent: "Intent · SLOT_SELECTION", thought: "Pasien memilih Kemang jam 10:30 — membuat record booking dan menugaskan Mbak Rina sebagai therapist.", desc: "Membuat: Facial · Kemang 10:30 · Therapist Mbak Rina · Sel 5 Mei" },
      ],
    },
    pricing: {
      label: "Berapa harga konsultasi botox?",
      convo: [
        { role: "user", text: "Berapa harga konsultasi botox?", delay: 0 },
        { role: "ai", typing: 700, text: "Konsultasi botox dengan dr. Sari **gratis** — termasuk skin assessment 15 menit.\n\nTreatment dimulai dari:\n• Botox forehead — Rp 2.5jt\n• Botox crow's feet — Rp 1.8jt\n• Paket lengkap — Rp 5.5jt\n\nMau saya bookingkan konsultasi?", delay: 1400 },
      ],
      actions: [
        { trigger: 1, method: "GET", api: "/api/pricing", intent: "Intent · PRICING_QUERY", thought: "Pasien bertanya soal biaya botox — mengambil menu lengkap treatment dan kebijakan konsultasi untuk memberikan jawaban yang akurat.", desc: "Mengambil daftar treatment botox dan kebijakan konsultasi" },
      ],
    },
    emergency: {
      label: "Anak saya demam tinggi, ada dokter besok pagi 8am?",
      convo: [
        { role: "user", text: "Anak saya demam tinggi, ada dokter besok pagi 8am?", delay: 0 },
        { role: "ai", typing: 900, text: "Saya pahami, ini urgent 🙏\n\nUntuk besok 8 AM tersedia:\n👩‍⚕️ Dr. Sari Wijaya — Pediatrician\n📍 Klinik Qlar Kemang\n💰 Konsultasi Rp 250rb\n\nKalau demam >39°C malam ini, sebaiknya ke IGD. Mau saya booking jam 8?", delay: 1500 },
        { role: "user", text: "Iya tolong book", delay: 1200 },
        { role: "ai", typing: 600, text: "Booked ✓ Detail dikirim. Get well soon, semoga si kecil cepat pulih 💜", delay: 900 },
      ],
      actions: [
        { trigger: 1, method: "GET", api: "/api/availability", intent: "Intent · URGENT_BOOKING", thought: "Terdeteksi urgensi: anak demam tinggi dan orang tua butuh dokter anak sesegera mungkin. Juga memuat panduan triase IGD untuk antisipasi gejala berat malam ini.", desc: "Slot dokter anak besok 08:00 + kriteria triase IGD untuk demam tinggi anak" },
        { trigger: 3, method: "POST", api: "/api/bookings", intent: "Intent · BOOKING_CONFIRM", thought: "Orang tua konfirmasi 'Iya tolong book' — membuat janji mendesak dengan dr. Sari Wijaya di slot jam 8 pagi.", desc: "Membuat: dr. Sari Wijaya · Dokter Anak · 08:00 · Klinik Qlar Kemang" },
      ],
    },
  },
};

// Auto-detect: Indonesia → id, anywhere else → en
const detectLang = () => {
  try {
    const stored = localStorage.getItem("qlar-lang");
    if (stored === "en" || stored === "id") return stored;

    // Indonesia timezone check
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.includes("Jakarta") || tz.includes("Pontianak") || tz.includes("Makassar") || tz.includes("Jayapura")) return "id";

    // Browser language check
    const lang = (navigator.language || "").toLowerCase();
    if (lang.startsWith("id")) return "id";
  } catch (e) {}
  return "en";
};

const LangContext = React.createContext({ lang: "en", t: I18N.en, setLang: () => {} });

const LangProvider = ({ children }) => {
  const [lang, setLangState] = React.useState(detectLang());
  const setLang = React.useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem("qlar-lang", l); } catch (e) {}
    document.documentElement.lang = l;
  }, []);
  React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return (
    <LangContext.Provider value={{ lang, t: I18N[lang], setLang, scripts: DEMO_SCRIPTS_I18N[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

const useLang = () => React.useContext(LangContext);

Object.assign(window, { I18N, DEMO_SCRIPTS_I18N, LangContext, LangProvider, useLang });
