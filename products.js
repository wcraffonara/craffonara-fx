/*
 * CRAFFONARA FX — product catalog
 * ------------------------------------------------------------------
 * HOW TO ADD A NEW PRODUCT:
 * Copy one of the blocks below, paste it into the list and adjust
 * the values. Save the file, commit, push — done. No HTML required.
 *
 * Fields:
 *   id        unique short name (letters, numbers, dashes)
 *   name      product name shown on the card
 *   category  "custom" | "mod" | "midi"
 *   price     free text, e.g. "from €249" or "sold"
 *   status    "available" | "built-to-order" | "sold"
 *   color     enclosure color used for the auto-generated artwork
 *   knobs     number of knobs drawn on the artwork (0–4)
 *   switches  number of footswitches drawn on the artwork (1–4)
 *   blurb     one or two sentences for the card
 *   specs     list of short spec lines shown in the detail view
 *   image     optional: path to a real photo, e.g. "img/quadra.jpg"
 *             (if set, it replaces the auto-generated artwork)
 *   gallery   optional: list of photo paths shown in the detail view
 *             with clickable thumbnails
 */

const PRODUCTS = [
    {
        id: "ocd-dual-preset",
        name: "OCD — Dual Preset MIDI Drive",
        category: "custom",
        price: "from €329",
        status: "built-to-order",
        color: "#A7ACB4",
        knobs: 5,
        switches: 1,
        blurb: "High-end take on the legendary OCD circuit with doubled Drive and Tone pots — four sounds in one pedal, switchable by button or MIDI.",
        specs: [
            "Dual DRV + TONE presets, relay-switched",
            "All OCD versions V1.1–V2 via internal DIP switches",
            "MIDI IN / THRU (TRS), CC preset recall",
            "CLIP (MOSFET/LED) + FILTER (H/L) toggles",
            "Silent soft-touch footswitch",
            "9–18 V DC center-negative",
        ],
        image: "img/ocd-card.jpg",
        gallery: ["img/ocd-hero.jpg", "img/ocd-top.jpg", "img/ocd-side.jpg", "img/ocd-angle.jpg"],
    },
    {
        id: "quadra-midi-switcher",
        name: "Quadra MIDI Switcher",
        category: "midi",
        price: "from €289",
        status: "built-to-order",
        color: "#B2442C",
        knobs: 0,
        switches: 4,
        blurb: "Four true-bypass relay loops under full MIDI control. Recall complete loop scenes with a single Program Change.",
        specs: [
            "4 relay loops, true bypass",
            "MIDI IN / THRU (DIN-5)",
            "128 scene presets via PC",
            "Direct loop access via CC",
            "9V DC center-negative, 120 mA",
        ],
        image: null,
    },
    {
        id: "ts-midi-retrofit",
        name: "Tube Screamer MIDI Retrofit",
        category: "mod",
        price: "from €149",
        status: "available",
        color: "#3E7C4F",
        knobs: 3,
        switches: 1,
        blurb: "Your own TS-9/TS-808 back from the workshop with a relay bypass and a MIDI socket — switchable from any controller.",
        specs: [
            "Relay true bypass conversion",
            "MIDI IN (DIN-5) added to enclosure",
            "Responds to PC and CC messages",
            "Original circuit untouched",
            "Works with all TS-style pedals",
        ],
        image: null,
    },
    {
        id: "vela-drive",
        name: "Vela Drive — Custom Build",
        category: "custom",
        price: "€219",
        status: "available",
        color: "#2E4E8F",
        knobs: 3,
        switches: 1,
        blurb: "Hand-built low-to-medium gain overdrive, voiced per customer. Choose clipping, EQ tilt and enclosure finish.",
        specs: [
            "Discrete JFET input stage",
            "Selectable clipping diodes",
            "Top-mounted jacks",
            "Hand-wired, socketed ICs",
            "Custom enclosure finish",
        ],
        image: null,
    },
    {
        id: "duo-tap-relay",
        name: "Duo Tap / Relay Box",
        category: "midi",
        price: "from €129",
        status: "available",
        color: "#4B4E57",
        knobs: 1,
        switches: 2,
        blurb: "Two isolated relay outputs for amp channel switching or tap tempo — triggered by footswitch or MIDI.",
        specs: [
            "2 isolated relay outputs (TRS)",
            "Latching / momentary per output",
            "MIDI CC control",
            "Amp-safe optocoupler option",
            "9V DC, 60 mA",
        ],
        image: null,
    },
    {
        id: "fuzz-rework",
        name: "Vintage Fuzz Rework",
        category: "mod",
        price: "from €99",
        status: "built-to-order",
        color: "#8F2E3B",
        knobs: 2,
        switches: 1,
        blurb: "Bias trimming, true bypass, LED indicator and modern DC jack for your vintage fuzz — without losing its soul.",
        specs: [
            "Transistor bias adjustment",
            "True bypass conversion",
            "Status LED + modern DC jack",
            "Reversible modifications",
            "Full measurement report included",
        ],
        image: null,
    },
    {
        id: "octa-controller",
        name: "Octa MIDI Foot Controller",
        category: "custom",
        price: "sold — ask for a build slot",
        status: "sold",
        color: "#1F2229",
        knobs: 0,
        switches: 4,
        blurb: "Eight-preset floor controller with bank switching, built for a touring pedalboard. Next build slot on request.",
        specs: [
            "8 presets in 2 banks",
            "PC + up to 4 CC per preset",
            "OLED preset display",
            "Rugged powder-coated steel",
            "USB-C for configuration",
        ],
        image: null,
    },
];
