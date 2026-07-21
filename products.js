// CRAFFONARA FX — product catalog
// Edit this file to add, remove, or update pedals.
// Fields: id, name, category ("custom"|"mod"|"midi"), price, status
//         ("available"|"built-to-order"|"sold"), blurb, specs[], image, gallery[]

const PRODUCTS = [
    {
        "id": "ocd-dual-preset",
        "name": "OCD — Dual Preset MIDI Drive",
        "category": "custom",
        "price": "€180",
        "status": "built-to-order",
        "color": "#A7ACB4",
        "knobs": 5,
        "switches": 1,
        "blurb": "High-end adaptation of the legendary OCD circuit. Doubled Drive and Tone pots with relay-switched presets give you four sounds in one pedal — by soft-touch button or MIDI. Internal DIP switches recreate every historic OCD version from V1.1 to the V2 Custom Shop germanium.",
        "specs": [
            "Dual DRV + TONE presets — one white and one red pot per channel, relay-switched",
            "Independent preset buttons: LED off = white pot active, LED on = red pot active",
            "All OCD versions V1.1–V1.7 and V2 via internal DIP switches (+GE, HI CUT, +BASS, +MIDS)",
            "MIDI IN / THRU (TRS): CC 00 recalls all four combos, CC 10/30 per channel, CC 50 bypass",
            "CLIP toggle: MOSFET/germanium (M) or LED clipping (L) — FILTER toggle: high/low peak",
            "Silent soft-touch footswitch, relay true bypass",
            "9–18 V DC center-negative — run it at 18 V for more headroom and dynamics"
        ],
        "image": "img/ocd-hero.webp",
        "gallery": [
            "img/ocd-hero.webp",
            "img/ocd-top.webp",
            "img/ocd-side.webp",
            "img/ocd-angle.webp"
        ]
    },
    {
        "id": "klon-dual-preset",
        "name": "KLON — Dual Preset MIDI Drive",
        "category": "custom",
        "price": "on request",
        "status": "built-to-order",
        "color": "#A7ACB4",
        "knobs": 5,
        "switches": 1,
        "blurb": "High-end adaptation of the legendary Klon Centaur with the original circuit. Doubled Gain and Treble pots with relay-switched presets, germanium or LED clipping, and full MIDI control.",
        "specs": [
            "Original Klon Centaur circuit — GAIN, TREBLE, VOL",
            "Dual GAIN + TREBLE presets, relay-switched: LED off = upper pot, LED on = lower pot",
            "CLIP toggle: GE = stock germanium diodes, LD = LED clipping for a more aggressive drive",
            "MIDI IN / THRU (TRS): CC 00 recalls all four combos, CC 10/30 per channel",
            "Silent soft-touch footswitch, relay true bypass",
            "9 V DC center-negative only — do NOT run at 18 V"
        ],
        "image": "img/klon-hero.webp",
        "gallery": [
            "img/klon-hero.webp",
            "img/klon-top.webp",
            "img/klon-side.webp",
            "img/klon-angle.webp"
        ]
    },
    {
        "id": "univibe-dual-preset",
        "name": "UNI VIBE — Dual Preset MIDI Vibe",
        "category": "custom",
        "price": "on request",
        "status": "built-to-order",
        "color": "#A7ACB4",
        "knobs": 6,
        "switches": 1,
        "blurb": "Classic Uni-Vibe swirl with doubled Speed and Depth pots, relay-switched presets and full MIDI control. The MIX knob blends the effect signal, and MODE switches between chorus/vibe and tremolo.",
        "specs": [
            "Dual SPEED + DEPTH presets, relay-switched — by soft-touch button or MIDI",
            "MIX control blends the vibe/tremolo signal with your dry tone",
            "MODE button switches between vibe and tremolo (green LED ring)",
            "VOL control for unity or boosted output",
            "MIDI IN / THRU (TRS) for preset recall and effect switching",
            "Silent soft-touch footswitch, 9 V DC center-negative"
        ],
        "image": "img/univibe-hero.webp",
        "gallery": [
            "img/univibe-hero.webp",
            "img/univibe-top.webp",
            "img/univibe-angle.webp"
        ]
    },
    {
        "id": "big-muff-dual-preset",
        "name": "BIG MUFF — Dual Preset MIDI Fuzz",
        "category": "custom",
        "price": "on request",
        "status": "built-to-order",
        "color": "#A7ACB4",
        "knobs": 5,
        "switches": 2,
        "blurb": "Replica of the legendary Green Russian Big Muff, expanded with doubled Fuzz and Tone pots, relay-switched presets and full MIDI control. A CLIP toggle moves between thick fuzz and a tighter overdrive voicing.",
        "specs": [
            "Green Russian Big Muff circuit — FUZZ, TONE, VOL",
            "Dual FUZZ + TONE presets, relay-switched: LED off = upper pot, LED on = lower pot",
            "CLIP toggle: FZ = full fuzz, OD = tighter overdrive voicing",
            "FILTER toggle: high / low peak",
            "MIDI IN / THRU (TRS): CC 00 recalls all four combos, CC 10/30 per channel",
            "Silent soft-touch footswitch, relay true bypass",
            "9 V DC center-negative"
        ],
        "image": "img/muff-hero.webp",
        "gallery": [
            "img/muff-hero.webp",
            "img/muff-top.webp",
            "img/muff-angle.webp"
        ]
    },
    {
        "id": "ep-booster",
        "name": "EP Booster — Echo Plex Boost",
        "category": "custom",
        "price": "on request",
        "status": "built-to-order",
        "color": "#A7ACB4",
        "knobs": 1,
        "switches": 1,
        "blurb": "Discrete FET preamp in a mini enclosure — up to +20 dB of unadulterated boost with shimmering highs and lows, inspired by the legendary Echoplex preamp stage. Fully MIDI-controllable, down to switching in time with the MIDI clock.",
        "specs": [
            "Discrete FET preamp, low-impedance output, up to +20 dB of clean boost",
            "Boost (+3 dB) and Bright (EQ) voicing via internal DIP switches — or via MIDI",
            "MIDI IN / THRU (TRS): effect on/off and toggling in sync with MIDI clock (1/32 notes up to 8 bars)",
            "Status LED: green = effect on, orange = on with +3 dB MIDI boost",
            "Silent footswitch, mini enclosure — fits on any board",
            "9–18 V DC center-negative — 18 V for extra headroom"
        ],
        "image": "img/ep-hero.webp",
        "gallery": [
            "img/ep-hero.webp"
        ]
    },
    {
        "id": "midi-filter",
        "name": "MIDI Filter",
        "category": "midi",
        "price": "on request",
        "status": "built-to-order",
        "color": "#A7ACB4",
        "knobs": 0,
        "switches": 0,
        "blurb": "Not a pedal, but a lifesaver on a MIDI-heavy board. An ultra-compact utility (just 5 \u00d7 5 \u00d7 3 cm) that filters unwanted MIDI messages before they reach your gear. Eight DIP switches let you block SysEx, System Common, MIDI Clock, Program Change, Start/Stop/Continue and Active Sensing individually \u2014 with separate unfiltered, filtered and switchable TRS outputs.",
        "specs": [
            "Ultra-compact aluminium enclosure \u2014 just 5 \u00d7 5 \u00d7 3 cm, fits anywhere on a board",
            "8 DIP switches \u2014 OFF = message is passed through, ON = message is filtered",
            "Filterable: SysEx (1), System Common (2), MIDI Clock (3), Program Change (5), Start/Stop/Continue (6), Active Sensing (7)",
            "DIP 4 is reserved \u2014 must stay OFF",
            "Four MIDI TRS jacks: IN, THRU (always unfiltered), FLTR (always filtered), T/F (switchable)",
            "DIP 8 sets the T/F output: OFF = THRU (unfiltered), ON = filtered MIDI",
            "9\u201318 V DC, center-negative"
        ],
        "image": "img/midifilter-hero.webp",
        "gallery": [
            "img/midifilter-hero.webp",
            "img/midifilter-top.webp",
            "img/midifilter-angle2.webp",
            "img/midifilter-side.webp"
        ]
    }
];
