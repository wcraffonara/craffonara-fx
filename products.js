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
 *   NOTE: blurb, specs and price can be bilingual objects: { en: …, de: … }
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
        price: "€180",
        status: "built-to-order",
        color: "#A7ACB4",
        knobs: 5,
        switches: 1,
        blurb: {
            en: "High-end adaptation of the legendary OCD circuit. Doubled Drive and Tone pots with relay-switched presets give you four sounds in one pedal — by soft-touch button or MIDI. Internal DIP switches recreate every historic OCD version from V1.1 to the V2 Custom Shop germanium.",
            de: "Highend-Adaption der legendären OCD-Schaltung. Doppelte Drive- und Tone-Potis mit relaisgeschalteten Presets liefern vier Sounds in einem Pedal — per Soft-Touch-Taster oder MIDI. Interne DIP-Schalter bilden jede historische OCD-Version von V1.1 bis zum V2 Custom Shop Germanium nach.",
        },
        specs: {
            en: [
                "Dual DRV + TONE presets — one white and one red pot per channel, relay-switched",
                "Independent preset buttons: LED off = white pot active, LED on = red pot active",
                "All OCD versions V1.1–V1.7 and V2 via internal DIP switches (+GE, HI CUT, +BASS, +MIDS)",
                "MIDI IN / THRU (TRS): CC 00 recalls all four combos, CC 10/30 per channel, CC 50 bypass",
                "CLIP toggle: MOSFET/germanium (M) or LED clipping (L) — FILTER toggle: high/low peak",
                "Silent soft-touch footswitch, relay true bypass",
                "9–18 V DC center-negative — run it at 18 V for more headroom and dynamics",
            ],
            de: [
                "Duale DRV- + TONE-Presets — je ein weißes und ein rotes Poti pro Kanal, relaisgeschaltet",
                "Unabhängige Preset-Taster: LED aus = weißes Poti aktiv, LED an = rotes Poti aktiv",
                "Alle OCD-Versionen V1.1–V1.7 und V2 über interne DIP-Schalter (+GE, HI CUT, +BASS, +MIDS)",
                "MIDI IN / THRU (TRS): CC 00 ruft alle vier Kombis ab, CC 10/30 pro Kanal, CC 50 Bypass",
                "CLIP-Schalter: MOSFET/Germanium (M) oder LED-Clipping (L) — FILTER-Schalter: High/Low Peak",
                "Geräuschloser Soft-Touch-Fußschalter, Relais True Bypass",
                "9–18 V DC Center-Negative — mit 18 V für mehr Headroom und Dynamik",
            ],
        },
        image: "img/ocd-top.webp",
        gallery: ["img/ocd-hero.webp", "img/ocd-top.webp", "img/ocd-side.webp", "img/ocd-angle.webp"],
    },
    {
        id: "ep-booster",
        name: "EP Booster — Echo Plex Boost",
        category: "custom",
        price: { en: "on request", de: "auf Anfrage" },
        status: "built-to-order",
        color: "#A7ACB4",
        knobs: 1,
        switches: 1,
        blurb: {
            en: "Discrete FET preamp in a mini enclosure — up to +20 dB of unadulterated boost with shimmering highs and lows, inspired by the legendary Echoplex preamp stage. Fully MIDI-controllable, down to switching in time with the MIDI clock.",
            de: "Diskreter FET-Preamp im Mini-Gehäuse — bis zu +20 dB purer Boost mit schimmernden Höhen und Tiefen, inspiriert von der legendären Echoplex-Vorstufe. Voll MIDI-steuerbar, bis hin zum Schalten im Takt der MIDI-Clock.",
        },
        specs: {
            en: [
                "Discrete FET preamp, low-impedance output, up to +20 dB of clean boost",
                "Boost (+3 dB) and Bright (EQ) voicing via internal DIP switches — or via MIDI",
                "MIDI IN / THRU (TRS): effect on/off and toggling in sync with MIDI clock (1/32 notes up to 8 bars)",
                "Status LED: green = effect on, orange = on with +3 dB MIDI boost",
                "Silent footswitch, mini enclosure — fits on any board",
                "9–18 V DC center-negative — 18 V for extra headroom",
            ],
            de: [
                "Diskreter FET-Preamp, niederohmiger Ausgang, bis zu +20 dB Clean Boost",
                "Boost (+3 dB) und Bright (EQ) über interne DIP-Schalter — oder per MIDI",
                "MIDI IN / THRU (TRS): Effekt an/aus und Umschalten im Takt der MIDI-Clock (1/32-Noten bis 8 Takte)",
                "Status-LED: Grün = Effekt an, Orange = an mit +3-dB-MIDI-Boost",
                "Geräuschloser Fußschalter, Mini-Gehäuse — passt auf jedes Board",
                "9–18 V DC Center-Negative — 18 V für mehr Headroom",
            ],
        },
        image: "img/ep-top.webp",
        gallery: ["img/ep-hero.webp", "img/ep-top.webp", "img/ep-side.webp", "img/ep-angle.webp"],
    },
];
