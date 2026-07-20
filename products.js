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
        image: "img/ocd-hero.webp",
        gallery: ["img/ocd-hero.webp", "img/ocd-top.webp", "img/ocd-side.webp", "img/ocd-angle.webp"],
    },
    {
        id: "klon-dual-preset",
        name: "KLON — Dual Preset MIDI Drive",
        category: "custom",
        price: { en: "on request", de: "auf Anfrage" },
        status: "built-to-order",
        color: "#A7ACB4",
        knobs: 5,
        switches: 1,
        blurb: {
            en: "High-end adaptation of the legendary Klon Centaur with the original circuit. Doubled Gain and Treble pots with relay-switched presets, germanium or LED clipping, and full MIDI control.",
            de: "Highend-Adaption des legendären Klon Centaur mit der Originalbeschaltung. Doppelte Gain- und Treble-Potis mit relaisgeschalteten Presets, Germanium- oder LED-Clipping und vollständige MIDI-Steuerung.",
        },
        specs: {
            en: [
                "Original Klon Centaur circuit — GAIN, TREBLE, VOL",
                "Dual GAIN + TREBLE presets, relay-switched: LED off = upper pot, LED on = lower pot",
                "CLIP toggle: GE = stock germanium diodes, LD = LED clipping for a more aggressive drive",
                "MIDI IN / THRU (TRS): CC 00 recalls all four combos, CC 10/30 per channel",
                "Silent soft-touch footswitch, relay true bypass",
                "9 V DC center-negative only — do NOT run at 18 V",
            ],
            de: [
                "Originale Klon-Centaur-Schaltung — GAIN, TREBLE, VOL",
                "Duale GAIN- + TREBLE-Presets, relaisgeschaltet: LED aus = oberes Poti, LED an = unteres Poti",
                "CLIP-Schalter: GE = originale Germanium-Dioden, LD = LED-Clipping für aggressiveren Drive",
                "MIDI IN / THRU (TRS): CC 00 ruft alle vier Kombis ab, CC 10/30 pro Kanal",
                "Geräuschloser Soft-Touch-Fußschalter, Relais True Bypass",
                "Nur 9 V DC Center-Negative — NICHT mit 18 V betreiben",
            ],
        },
        image: "img/klon-hero.webp",
        gallery: ["img/klon-hero.webp", "img/klon-top.webp", "img/klon-side.webp", "img/klon-angle.webp"],
    },
    {
        id: "univibe-dual-preset",
        name: "UNI VIBE — Dual Preset MIDI Vibe",
        category: "custom",
        price: { en: "on request", de: "auf Anfrage" },
        status: "built-to-order",
        color: "#A7ACB4",
        knobs: 6,
        switches: 1,
        blurb: {
            en: "Classic Uni-Vibe swirl with doubled Speed and Depth pots, relay-switched presets and full MIDI control. The MIX knob blends the effect signal, and MODE switches between chorus/vibe and tremolo.",
            de: "Klassischer Uni-Vibe-Swirl mit doppelten Speed- und Depth-Potis, relaisgeschalteten Presets und vollständiger MIDI-Steuerung. Der MIX-Regler blendet das Effektsignal, MODE schaltet zwischen Chorus/Vibe und Tremolo um.",
        },
        specs: {
            en: [
                "Dual SPEED + DEPTH presets, relay-switched — by soft-touch button or MIDI",
                "MIX control blends the vibe/tremolo signal with your dry tone",
                "MODE button switches between vibe and tremolo (green LED ring)",
                "VOL control for unity or boosted output",
                "MIDI IN / THRU (TRS) for preset recall and effect switching",
                "Silent soft-touch footswitch, 9 V DC center-negative",
            ],
            de: [
                "Duale SPEED- + DEPTH-Presets, relaisgeschaltet — per Soft-Touch-Taster oder MIDI",
                "MIX-Regler blendet das Vibe-/Tremolo-Signal mit deinem trockenen Ton",
                "MODE-Taster schaltet zwischen Vibe und Tremolo um (grüner LED-Ring)",
                "VOL-Regler für Unity-Gain oder Boost",
                "MIDI IN / THRU (TRS) für Preset-Abruf und Effekt-Schaltung",
                "Geräuschloser Soft-Touch-Fußschalter, 9 V DC Center-Negative",
            ],
        },
        image: "img/univibe-hero.webp",
        gallery: ["img/univibe-hero.webp", "img/univibe-top.webp", "img/univibe-angle.webp"],
    },
    {
        id: "big-muff-dual-preset",
        name: "BIG MUFF — Dual Preset MIDI Fuzz",
        category: "custom",
        price: { en: "on request", de: "auf Anfrage" },
        status: "built-to-order",
        color: "#A7ACB4",
        knobs: 5,
        switches: 2,
        blurb: {
            en: "Replica of the legendary Green Russian Big Muff, expanded with doubled Fuzz and Tone pots, relay-switched presets and full MIDI control. A CLIP toggle moves between thick fuzz and a tighter overdrive voicing.",
            de: "Replika des legendären Green Russian Big Muff, erweitert um doppelte Fuzz- und Tone-Potis, relaisgeschaltete Presets und vollständige MIDI-Steuerung. Ein CLIP-Schalter wechselt zwischen fettem Fuzz und einem strafferen Overdrive-Voicing.",
        },
        specs: {
            en: [
                "Green Russian Big Muff circuit — FUZZ, TONE, VOL",
                "Dual FUZZ + TONE presets, relay-switched: LED off = upper pot, LED on = lower pot",
                "CLIP toggle: FZ = full fuzz, OD = tighter overdrive voicing",
                "FILTER toggle: high / low peak",
                "MIDI IN / THRU (TRS): CC 00 recalls all four combos, CC 10/30 per channel",
                "Silent soft-touch footswitch, relay true bypass",
                "9 V DC center-negative",
            ],
            de: [
                "Green-Russian-Big-Muff-Schaltung — FUZZ, TONE, VOL",
                "Duale FUZZ- + TONE-Presets, relaisgeschaltet: LED aus = oberes Poti, LED an = unteres Poti",
                "CLIP-Schalter: FZ = volles Fuzz, OD = strafferes Overdrive-Voicing",
                "FILTER-Schalter: High / Low Peak",
                "MIDI IN / THRU (TRS): CC 00 ruft alle vier Kombis ab, CC 10/30 pro Kanal",
                "Geräuschloser Soft-Touch-Fußschalter, Relais True Bypass",
                "9 V DC Center-Negative",
            ],
        },
        image: "img/muff-hero.webp",
        gallery: ["img/muff-hero.webp", "img/muff-top.webp", "img/muff-angle.webp"],
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
        image: "img/ep-hero.webp",
        gallery: ["img/ep-hero.webp"],
    },
];
