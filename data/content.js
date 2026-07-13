export const company = {
  name: "KASI Technical Services Ltd",
  shortName: "KASI",
  tagline: "For General Engineering Works, Supplies & Services",
  founded: 2013,
  incorporated: "1 July 2014",
  tin: "1006795390",
  address: "Plot 283, Willis Road, Namirembe Hill, Kampala",
  poBox: "P.O. Box 37683, Kampala",
  phones: ["+256 760 065902", "+256 752 715510", "+256 701 196492"],
  email: "kasi.tsl.2014@gmail.com",
  mission:
    "To maintain the highest standards of safety and service in the engineering sector without compromise.",
  vision:
    "For the most efficient and affordable engineering works, supplies and services in Uganda and beyond.",
  values: [
    "Safety",
    "Quality",
    "Integrity",
    "Flexibility",
    "Time management",
    "Customer satisfaction",
  ],
};

export const coreBusiness =
  "Electrical engineering works, supplies & services up to 33kV.";

export const services = [
  {
    id: "power-lines",
    icon: "zap",
    title: "Power Line Construction & Maintenance",
    description:
      "Construction and upkeep of medium-voltage power lines and rural electrification schemes, from pole erection to transformer commissioning.",
    voltage: "33kV",
  },
  {
    id: "generators",
    icon: "power",
    title: "Generator Supply, Installation & Servicing",
    description:
      "Supply, installation and ongoing maintenance of standby and prime power generator sets for institutional and commercial sites.",
    voltage: "Gen",
  },
  {
    id: "motors",
    icon: "cog",
    title: "Motor Supply, Installation & Rewinding",
    description:
      "Supply and installation of industrial motors, plus rewinding and repair services to keep plant equipment running.",
    voltage: "3ph",
  },
  {
    id: "installations",
    icon: "plug-zap",
    title: "Industrial, Commercial & Domestic Installations",
    description:
      "Full electrical fit-out and wiring for industrial facilities, commercial premises and residential buildings.",
    voltage: "LV",
  },
  {
    id: "solar",
    icon: "sun",
    title: "Solar Street Light Installation",
    description:
      "Design, supply and installation of solar-powered street lighting for town councils, trading centres and public spaces.",
    voltage: "Solar",
  },
  {
    id: "hvac",
    icon: "wind",
    title: "Air Conditioner Installation & Servicing",
    description:
      "Supply, installation and routine servicing of air conditioning units for offices and institutions.",
    voltage: "HVAC",
  },
  {
    id: "civil",
    icon: "hammer",
    title: "Civil Works",
    description:
      "Building, painting, plumbing and carpentry — from classroom blocks and pit latrines to office renovations.",
    voltage: "Civil",
  },
  {
    id: "supplies",
    icon: "package",
    title: "General Materials Supply",
    description:
      "Procurement and supply of electrical, construction and general materials to institutional clients.",
    voltage: "Supply",
  },
];

export const capabilityLadder = [
  {
    level: "33 kV",
    label: "Power line construction & HV supply (UETCL, TBEA)",
  },
  {
    level: "3-phase",
    label: "Distribution boards, motors & industrial installations",
  },
  { level: "LV", label: "Commercial & domestic electrical installations" },
  { level: "Solar", label: "Solar street lighting for public infrastructure" },
  { level: "Civil", label: "Building, plumbing, carpentry & site works" },
];

export const clients = [
  { name: "Bank of Uganda", abbr: "BOU" },
  { name: "Uganda Electricity Transmission Company Ltd", abbr: "UETCL" },
  { name: "Uganda Electricity Distribution Company Ltd", abbr: "UEDCL" },
  { name: "Uganda Electricity Generation Company Ltd", abbr: "UEGCL" },
  { name: "TBEA Co. Ltd", abbr: "TBEA" },
  { name: "Uganda National Bureau of Standards", abbr: "UNBS" },
  { name: "Uganda Civil Aviation Authority", abbr: "UCAA" },
  { name: "Uganda Communications Commission", abbr: "UCC" },
  {
    name: "Uganda Institute of Information & Communication Technology",
    abbr: "UICT",
  },
  { name: "Mityana District Local Government", abbr: "Mityana DLG" },
  { name: "Gomba District Local Government", abbr: "Gomba DLG" },
  { name: "Lyantonde District Local Government", abbr: "Lyantonde DLG" },
  { name: "National Water and Sewerage Corporation", abbr: "NWSC" },
  { name: "Kampala Capital City Authority", abbr: "KCCA" },
  { name: "Uganda Revenue Authority", abbr: "URA" },
  { name: "Newrest Uganda Inflight Services", abbr: "Newrest UIS" },
  { name: "Atomic Energy Council", abbr: "AEC" },
  { name: "Uganda Virus Research Institute", abbr: "UVRI" },
  { name: "The Hunger Project", abbr: "THP" },
  {
    name: "Mukono Zonal Agricultural Research & Development Institute",
    abbr: "MUZARDI",
  },
];

export const projects = [
  {
    client: "UEDCL",
    title: "Painting & Pole Pike Supply — UEDCL Tower",
    description:
      "2nd phase painting works for UEDCL Tower, including lower and upper parking basement and emergency exit, plus supply of pole pikes for power line construction.",
    tags: ["Civil", "Painting", "Supply"],
    images: ["/projects/uedcl-painting.jpg"],
  },
  {
    client: "TBEA Co. Ltd",
    title: "Rural Electrification Power Line Construction",
    description:
      "Power line construction under the 'Bridging the Demand Supply Gaps Through Accelerated Rural Electrification Program' across 11 schemes including Kyegegwa–Kigambo, Buliisa–Buliisa and Kiboga–Kyomya.",
    tags: ["33kV", "Power Lines"],
    images: ["/projects/tbea-transformer.jpg"],
    schemes: [
      "Kyegegwa – Kigambo",
      "Kyegegwa – Nkwakwa",
      "Kassanda – Makokoto",
      "Kibaale – Mugarama",
      "Buliisa – Buliisa",
      "Buliisa – Ngwedo 1",
      "Buliisa – Ngwedo 2",
      "Kassanda – Makata",
      "Kassanda – Kiganda Tea Factory",
      "Kyegegwa – Rwentuha",
      "Kiboga – Kyomya",
    ],
  },
  {
    client: "MUZARDI",
    title: "Construction of 38 Maize Cribs",
    description:
      "Construction of 38 maize cribs across 11 site locations including Mukono, Kiboga, Mpigi, Masaka, Mubende and Nakasongola.",
    tags: ["Civil", "Agriculture"],
    images: ["/projects/muzardi-maize-cribs.jpg"],
  },
  {
    client: "Gomba District Local Government",
    title: "Solar Street Lights — Kanoni Trading Centre",
    description:
      "Supply and installation of solar street lights at Kanoni Town Council, plus filing cabinets, metallic shelving, a 5-stance pit latrine and a water testing kit for the district water department.",
    tags: ["Solar", "Civil", "Supply"],
    images: ["/projects/gomba-solar-1.jpg", "/projects/gomba-solar-2.jpg"],
  },
  {
    client: "NWSC",
    title: "Water Reservoir Construction — Atto Hills, Gulu",
    description:
      "Water supply works for Atto Hills in Gulu under rechargeable works for UPDF radar sites (5 lots), plus supply of construction materials, batteries, solar panels and electrical materials.",
    tags: ["Civil", "Water", "Supply"],
    images: ["/projects/nwsc-reservoir.jpg"],
  },
  {
    client: "UNBS",
    title: "3-Phase Distribution Board Installation — Gulu",
    description:
      "Supply, delivery, installation and commissioning of three-phase power at the UNBS Gulu office, alongside a PPE framework contract and lab partitioning at Nakawa.",
    tags: ["3-phase", "Installation"],
    images: ["/projects/unbs-board-1.jpg", "/projects/unbs-board-2.jpg"],
  },
  {
    client: "Mityana District Local Government",
    title: "2-Classroom Block — Namutidde P/S",
    description:
      "Completion of a 2-classroom block at Namutidde Primary School, plus 5-stance lined pit latrines at three schools and renovation works in Kakindu sub-county.",
    tags: ["Civil", "Education"],
    images: ["/projects/mityana-classroom.jpg"],
  },
  {
    client: "Bank of Uganda",
    title: "10,000-Litre Tank & Pump Installation — Arua Branch",
    description:
      "Supply, delivery and installation of ten 10,000-litre plastic water tanks and a plinth wall tank base at BOU Arua Branch, part of a wider multi-year supply framework covering electrical items, cookers and office equipment across BOU branches.",
    tags: ["Civil", "Water", "Supply"],
    images: ["/projects/bou-tank-1.jpg", "/projects/bou-tank-2.jpg"],
  },
  {
    client: "UCAA",
    title: "Street Light Repair — Entebbe International Airport",
    description:
      "Framework contract for hiring a bucket truck to repair floodlighting and street lights at Entebbe and up-country airports, plus generator servicing and electrical material supply at CAA headquarters.",
    tags: ["LV", "Maintenance"],
    images: [
      "/projects/ucaa-streetlight-1.jpg",
      "/projects/ucaa-streetlight-2.jpg",
    ],
  },
  {
    client: "UCC",
    title: "Storm Water Channel — Nakawa UICT",
    description:
      "Construction of a stone-lined storm water channel at UICT, alongside metallic ceiling repair and security lighting improvements at Njeru, Gulu, Masaka and Mwizi remote stations.",
    tags: ["Civil", "Solar"],
    images: [
      "/projects/ucc-stormwater-1.jpg",
      "/projects/ucc-stormwater-2.jpg",
    ],
  },
  {
    client: "UETCL",
    title: "HV Cable & SF6 Gas Supply",
    description:
      "Supply of 600m of 150sqmm 18/30(36)kV XLPE cable for the Matugga–Kasana project, 162 cylinders of SF6 gas to UETCL stores, and materials for access road repair along the Nkonge–Nkenda 132kV line.",
    tags: ["33kV", "Supply"],
    images: ["/projects/uetcl-cable-1.jpg", "/projects/uetcl-cable-2.jpg"],
  },
  {
    client: "UICT",
    title: "Estates & Procurement Block Renovation",
    description:
      "Renovation of the estates and procurement office blocks and boardroom at UICT, plus plumbing repairs at the National ICT Innovation Hub.",
    tags: ["Civil", "Renovation"],
    images: ["/projects/uict-renovation.jpg"],
  },
];

export const policies = [
  {
    id: "health-safety",
    title: "Health & Safety Policy",
    date: "2 January 2026",
    points: [
      "Management is responsible for ensuring safety standards and a healthy working environment, with active employee participation in enhancing standards.",
      "Employees are responsible for their own safety and that of colleagues, and must report hazards that cannot be personally controlled.",
      "Employees must cooperate with safety rules and measures without compromise.",
      "New employees receive the company health & safety manual and induction training on its contents.",
      "Senior management is responsible for ensuring an injury-free workplace.",
    ],
  },
  {
    id: "environmental",
    title: "Environmental Policy",
    date: "2 January 2026",
    points: [
      "Compliance with applicable laws, regulations, voluntary commitments and NEMA standards, embedded in training, incentives and performance reviews.",
      "Provision of proper employee training to meet environmental program goals and take personal responsibility for implementation.",
      "Sharing environmental performance information with employees, vendors, customers and external stakeholders, and soliciting their input.",
      "Measuring and reporting progress at least annually, with continuous improvement of environmental performance.",
      "Management at all levels is responsible for ensuring the policy is communicated and adhered to.",
    ],
  },
  {
    id: "quality",
    title: "Quality Policy",
    date: "2 January 2026",
    points: [
      "Responsive to customers' needs, with reliable consultation and support.",
      "Effective engineering maintenance solutions and efficient use of resources.",
      "Meeting or exceeding customer requirements, enhanced through a feedback process.",
      "Continuous improvement of services and the Quality Management System (QMS).",
      "Ongoing identification of improvement opportunities.",
    ],
  },
];

export const whyChooseUs = [
  {
    icon: "users",
    title: "Experienced Engineers",
    description: "Skilled and qualified professionals across every discipline.",
  },
  {
    icon: "badge-check",
    title: "Quality Assurance",
    description: "We deliver quality work in every project, every time.",
  },
  {
    icon: "shield-check",
    title: "Safety First",
    description: "We prioritise safety in all site operations.",
  },
  {
    icon: "clock",
    title: "Timely Delivery",
    description: "We deliver projects on schedule, without compromise.",
  },
  {
    icon: "map-pinned",
    title: "Nationwide Operations",
    description: "Serving clients across districts throughout Uganda.",
  },
];

export const socials = {
  whatsapp: "https://wa.me/256760065902",
  email: "mailto:kasi.tsl.2014@gmail.com",
  linkedin: "#",
};

export const projectCategories = [
  "All",
  "33kV",
  "Civil",
  "Solar",
  "Supply",
  "Maintenance",
];

export const legalDocuments = [
  "Certificate of Incorporation",
  "Memorandum and Articles of Association",
  "VAT & TIN Registration Certificate",
  "Valid Trading License",
  "Tax Clearance Certificates",
  "General Powers of Attorney",
  "NSSF Certificate",
  "PPDA Registration Certificate",
  "Audited Books of Accounts",
  "Company Form No 10",
  "Company Form 18",
  "Beneficial Ownership Declaration (Form 1)",
];

export const orgStructure = [
  "Board of Directors",
  "Technical Director",
  "General Manager",
  "Manager, Human Resource & Administration",
  "Manager, Procurement & Finance",
  "Projects Manager",
  "Project Engineers",
  "Safety Officer",
  "Field Supervisors",
  "Field Technicians",
  "Accountant / Cashier / Store Keeper",
  "Administrative Officer & Assistant",
  "Human Resource Officer & Assistant",
  "Drivers & Casuals",
];
