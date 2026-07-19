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
        price: "€180",
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
        image: "img/ocd-top.webp",
        gallery: ["img/ocd-hero.webp", "img/ocd-top.webp", "img/ocd-side.webp", "img/ocd-angle.webp"],
    },
];
