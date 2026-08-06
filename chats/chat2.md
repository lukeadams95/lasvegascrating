# Adding photos to shipping section

_Started 2026-08-03 15:15 UTC_

---

## User

Continuing from "Las Vegas Crating & Logistics".

## Assistant

We've been building a full-service Las Vegas Crating & Logistics homepage with a premium, modern design using #1A1C27 (charcoal-navy) and #CEC2AB (tan/beige) accents. The site went through several major iterations — starting with a clean serif/sans-serif aesthetic, then pivoting to a bold high-contrast navy-orange layout, and finally settling on the current diagonal-split hero with video background.

The header is now white with the new logo, tightened spacing, and a top nav bar holding phone/email buttons. The hero section uses a full-bleed 4K video background (no solid panel), with text and a "Get a Quote" form on the left, and a draggable logo carousel below showcasing client logos in full color with auto-scroll and hover pause.

We've recently redesigned the "What We Ship" section to match a reference layout — 5 cards in a 3-2 stacked grid with icon badges positioned on the diagonal stripe in the upper-right corner, wiggling on hover. We also added an animated delivery-truck SVG icon beside "ALL" in the intro section heading that opens/closes a box, then animates the truck speeding away and looping.

The intro section ("A Packaging Store That Actually Has It All") is now two-column (heading left, body right, mobile-responsive). Below that is a new 5-card icon row (Air Freight, Ground Shipping, Crate Shipping, Art & Antiques, Event & Tradeshow) replacing the old photo carousel.

All remaining homepage sections (ship-anything, custom crating, industrial boxes, warehouse/art, reviews, features, locations, 3PL banner, footer) are in place with the established palette and card styling.

Project files: Homepage v3.dc.html, support.js

Open: confirm the truck animation and icon styling are working as expected, then move forward with remaining inner pages (Packaging, Shipping, Crating, Logistics detail pages) if needed.

## User

please add this photos to what we ship section. the label is already set

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Photos added to all 5 "What We Ship" cards, matching each label.

## User

there's weird line on those boxes can you fix that

## Assistant

_[tool: screenshot]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: list_files]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: save_screenshot]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: screenshot_user_view]_

_[tool: eval_js]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: eval_js_user_view]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: eval_js_user_view]_

_[tool: eval_js_user_view]_

_[tool: eval_js_user_view]_

_[tool: eval_js_user_view]_

_[tool: screenshot_user_view]_

_[tool: view_image]_

_[tool: dc_js_str_replace]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: eval_js_user_view]_

_[tool: screenshot_user_view]_

_[tool: eval_js_user_view]_

_[tool: run_script]_

_[tool: read_file]_

Fixing the seam between the diagonal wedge and card body by overlapping them and removing the mismatched border edge.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Overlapped the diagonal wedge with the card body by 2px (instead of butting them edge-to-edge) so the clip-path seam/border mismatch no longer shows a hairline.

## User

fix this in secure and white glove section

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

The stray white sliver was the divider's clipped-away area showing the page background instead of the next section's color. Wrapped it in an `#F7F5F0` base so the cut now reveals the matching section color.

## User

still there

## Assistant

_[tool: eval_js_user_view]_

_[tool: screenshot_user_view]_

_[tool: str_replace_edit]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: eval_js_user_view]_

_[tool: screenshot_user_view]_

Now a single clean diagonal edge — no thin sliver line, no double-navy band. Divider transitions directly from navy to the cream section.

## User

why does it have a divider though?

## Assistant

_[tool: str_replace_edit]_

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: eval_js_user_view]_

_[tool: screenshot_user_view]_

Removed the standalone divider block — the navy section now cuts directly into the cream section with one clean diagonal edge, no extra layer.

## User

why not make it the same as Nationwide Reach section?

## Assistant

_[tool: grep]_

That section is just a plain flat rectangle — no diagonal cut at all. Simplifying the Warehouse→Save-Time transition to match: flat edge, no diagonal.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Matched: plain flat transition between navy and cream sections, same as Nationwide Reach.

## User

this is for Precision Built section

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added both photos to the Custom Crating and Shipping section.

## User

Streamline this homepage: delete redundant sections and merge overlapping ones. Keep the same color system (
#1A1C27 / 
#CEC2AB), card styles, and spacing throughout — this is a cleanup only, not a restyle.

Delete these sections entirely:

"WE SHIP ANYTHING TO ANYWHERE"
"We Ship Anything to Anywhere Anytime On Time"
The Ground Shipping / By Air, Land, or Sea feature pair
The four-icon row: PACKING / SHIPPING / CROSS-DOCKING / QUOTES
The five-icon strip: Anywhere Anything Anytime / The Most Competitive Pricing / Crates and Boxes / Logistic Experts / Methods of Transport
"Our Brand of Boxes and Crates Save Time Space & Money"
The blog teaser section ("Adventures in the packing and shipping services...")
The 3PL callout banner ("Need a third party fulfillment dropshipping partner?...")

Merge these pairs into one section each:

Merge "INDUSTRIAL WOOD BOXES AND CRATES" into "CUSTOM CRATING AND SHIPPING" — one section under the heading "Custom Crating and Shipping" combining the customizable crate options (windows, doors, lids, hinges), ISPM-15 heat treatment, and the "single units or mass production, wood, plastic, metal" messaging about producing any quantity for local and international use.
Merge "Short Term Storage While Moving?" into "WAREHOUSE STORAGE AND FINE ART SHIPPING" — one section under the heading "Warehouse Storage and Fine Art Shipping" combining the fine art/white-glove storage messaging with the short-term/temporary storage-while-moving messaging.

Final homepage section order:

Header + Hero
Client Logos strip
"A Packaging Store That Actually Has It All"
Service cards (Air Freight, Ground Shipping, Crate Shipping, Art & Antiques, Event & Tradeshow Shipping)
Custom Crating and Shipping (merged)
Warehouse Storage and Fine Art Shipping (merged)
Google Reviews
Locations
Closing CTA band
Footer

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

Now removing the now-unused `fourIcons`/`blogPosts`/`fiveIcons` data from the logic class.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

Here's the updated sequence with the hero now set to video:

---

Apply this background color sequence to the sections in order:

1. **Hero** — video background (unchanged, no static color needed)
2. **Client Logos strip** — white
3. **"A Packaging Store That Actually Has It All"** — cream (#F7F5F0)
4. **Service cards row** (Air Freight, Ground Shipping, Crate Shipping, Art & Antiques, Event & Tradeshow) — dark navy (#1A1C27), cards in white or light tone against the dark background for contrast
5. **Custom Crating and Shipping** (merged) — white
6. **Warehouse Storage and Fine Art Shipping** (merged) — cream (#F7F5F0)
7. **Google Reviews** — dark navy (#1A1C27)
8. **Locations** — white
9. **Closing CTA band** — dark navy (#1A1C27), same as the footer for a strong close
10. **Footer** — dark navy (#1A1C27)

The sequence starts at the Client Logos strip (white) right after the video hero, then cycles cream → dark navy → white through the middle sections, anchoring back to dark navy for the CTA band and footer at the end.

---

## Assistant

_[tool: read_file]_

_[tool: read_file]_

Now let's view the WAREHOUSE and LOCATIONS and CLIENT LOGOS sections exactly.

_[tool: grep]_

_[tool: read_file]_

Now applying all the section background/text-color swaps.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

the buttons on Explore by Category boxes can you change to white or cream

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Arrow buttons on the What We Ship cards changed to cream with navy arrows.

## User

Remove the "Las Vegas Crating's Appreciated Clients" client logos section from the homepage entirely.

DO NOT TOUCH THE CLIENT LOGO STRIP — the one positioned directly after the hero (Wynn, Aria, Caesars, etc.) is a separate element and should remain exactly as it is. Only remove the "Las Vegas Crating's Appreciated Clients" section further down the page — do not confuse the two.

In its place, create a global CTA banner component that sits directly above the footer on every page of the site (not just the homepage) — this should be a reusable section that appears consistently sitewide, right before the footer, on every service page, location page, and the homepage.

CTA banner content:
Heading: "Ready to Ship? Let's Get Your Free Quote."
Subtext: phone icon + "702-748-4973" and a short line like "Call now or request a quote online — most quotes are returned the same business day."
Buttons: solid 
#CEC2AB "Get a Free Quote" button, plus an outlined "Call Now" button next to it

Style: dark navy (
#1A1C27) background, matching the footer directly below it so the two feel like one connected unit at the bottom of every page. Center-aligned or split layout (heading/subtext on the left, buttons on the right) — same as the CTA band style already used elsewhere on the page.

Updated homepage section order (Client Logo Strip stays untouched after hero; "Las Vegas Crating's Appreciated Clients" removed):

Hero (video)
Client Logos strip — unchanged
"A Packaging Store That Actually Has It All" — cream
Service cards row — dark navy
Custom Crating and Shipping — white
Warehouse Storage and Fine Art Shipping — cream
Google Reviews — dark navy
Locations — white
Global CTA banner (new, sits directly above footer)
Footer

## Assistant

_[tool: str_replace_edit]_

Now removing the unused `clients` data since it's no longer referenced.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

put this as background in Ready to Ship? Let's Get Your Free Quote. section

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added the photo as a darkened background image on the CTA banner.

## User

Here's a paste-ready prompt for the Google Reviews section using these:

Populate the Google Reviews section with the 8 reviews below, displayed as a carousel/slider (since there are 8), showing 3 at a time on desktop and 1 at a time on mobile, with arrow navigation.

Each review card should show: 5 gold/filled stars, a small Google "G" logo icon positioned next to the stars, the reviewer's name in bold, the time period ("2 years ago," etc.) in muted gray text below the name, and the review text below that — same card style (white background, thin border) as the rest of the page.

Ryan R — 2 years ago — "Great work and great service! They're professional and I am satisfied with the shipping experience. I recommend them!"
Melissa Wilt — 2 years ago — "We had 16 crates filled with thousands of pounds in solid marble art. It was shipped to us in perfect condition. A team of 5 had to piece together the marble to create the house that now stands outside the property. The attention and care that this company provides is incredible. I am very satisfied and impressed with the outcome. Thank you guys!"
Chris Dizon — 3 years ago — "Superb service from Chris and everyone at Las Vegas Crating. I had been looking all over the place to just get 1 or 2 boxes (both with awkward dimensions) for some personal items that I needed to ship. It was either impossible to find them or would cost me an arm and a leg. I contacted Chris and he made those custom boxes for me with no questions asked. Super professional and helpful."
JustBruce — 3 years ago — "Having purchased a huge amount of Engineering & Test Equipment, we decided to try Las Vegas Crating. They won us over with our very first shipment. 'I received the speakers and am overjoyed. Nothing I have ever ordered were packaged so professionally.'"
J. McClintock — 4 years ago — "My company had to ship a large framed piece of art. Not only did Chris respond promptly with accurate and competitive quotes, he even facilitated the white glove service at our pick up location."
FlowRider 13roz — 4 years ago — "Very helpful on getting a giant mirror and glass cabinet packaged and shipped for me."
Eric Rozan — 4 years ago — "Exceptionally professional. Will had a lot of wisdom and attention to detail. Very happy so far!"
Bill Durborow — 4 years ago — "Friendly and professional. Obviously a favorite of many because of how busy they were. Despite this they took the time to give personalized service."

Include a "Read more reviews on Google" link at the bottom, styled in 
#CEC2AB.

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now updating the logic class: replace `reviews` data with the 8 new reviews plus add scroller ref/prev/next handlers.

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

Matches — likely a stray whitespace diff from copy-paste. Adding after `componentWillUnmount` block instead.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

this is the google icon

## User

this is the google icon

## User

Redesign the Locations section using this layout style: a light cream (
#F7F5F0) background with a subtle dotted map illustration (light gray dots) behind circular pin markers, similar to the reference's world-map stat layout — but adapted to show our 4 actual locations instead of generic stats.

Layout:

Small eyebrow label in 
#CEC2AB, centered: "WHERE WE OPERATE"
Large centered heading in 
#1A1C27: "One Standard, Four Locations Nationwide."
Below the heading, a dotted map illustration of the United States (light gray dots, same style as the reference) with 4 circular pin markers positioned roughly over their real geographic locations: Las Vegas, NV · Miami, FL · Los Angeles, CA · San Antonio, TX
Each pin: a solid 
#1A1C27 circle with a white location-pin icon inside, connected by a thin dashed line down to its label (same visual structure as the reference's icon-to-label connector)
Under each pin: city name in bold 
#CEC2AB, with the label below it in dark text — for example: "Las Vegas, NV" / "Headquarters — 4640 Polaris Ave," and similarly for Miami ("9587 Premier Pkwy, Miramar, FL"), Los Angeles, and San Antonio
Below the map, a centered line of text: "Need service outside of Nevada? Contact our team." with "Contact Us →" as a linked, underlined 
#CEC2AB text link

Style notes: keep the background light cream rather than the reference's cool gray, use 
#1A1C27 for the pin icon circles instead of blue, and 
#CEC2AB instead of orange for the accent text/numbers — this keeps it consistent with the rest of the site's palette.

## Assistant

_[tool: read_skill_prompt]_

_[tool: grep]_

_[tool: read_file]_

Now replacing the whole Locations section with the dotted-map layout.

_[tool: str_replace_edit]_

_[tool: read_file]_

Need to remove the leftover duplicate closing tags from the old markup.

_[tool: str_replace_edit]_

Now updating the logic class: replace `locations` array with `mapLocations` (city, address, x%, y%).

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now closing the extra wrapping div after the sc-for/pins block.

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Also nudging LA's x back to give more breathing room from the padded edge.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

can you at least shape the dots as a map?

## Assistant

_[tool: str_replace_edit]_

Now adding the `mapDots` generation (US-outline point-in-polygon fill) to the logic class.

_[tool: str_replace_edit]_

Now exposing `mapDots` (computed once, cached) via `renderVals()`.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: screenshot]_

_[tool: save_screenshot]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: save_screenshot]_

_[tool: grep]_

_[tool: show_html]_

_[tool: ready_for_verification]_

## User

the dots can you do a different color that it would be more visible

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Darkened the map dots from light tan to `#a89877` for better visibility.

## User

the labels and addresses darked it or give a highlight

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

City name darkened to navy, address bolded, and both sit on a subtle cream highlight chip for contrast against the dotted map.

## User

the 2 CTA buttons in hero, put it in every section in home page please

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now Custom Crating, Warehouse, Reviews, and Locations sections.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now similarly the Custom Crating section's CTA is inside its two-column grid — needs `grid-column: 1 / -1` too.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

put back the design for A Packaging Store That Actually Has It All section, you broke it. the buttons should be middle as well.

## Assistant

_[tool: grep]_

_[tool: read_file]_

Restoring original two-column layout untouched, and adding the CTA row as a separate centered full-width block below.

_[tool: str_replace_edit]_

Now doing the same fix for the Custom Crating section's CTA (currently uses `grid-column: 1/-1` inside the 2-col grid, which likely also broke that layout).

_[tool: grep]_

_[tool: read_file]_

That one's fine — nested inside the right column, not a grid item, so it's already left-aligned within that column as intended (not centered page-wide, which matches "under the text" placement). Just cleaning up the harmless unused `grid-column` property.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Restored the intro section's original two-column layout and moved its CTA buttons to a separate, centered full-width row below.

## User

Ready to Ship? Let's Get Your Free Quote. - this section can you please lessen the blurry color?

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Reduced the dark overlay opacity on the CTA banner so the background photo shows through more clearly.

## User

the Ready to Ship? Let's Get Your Free Quote. section can you put the headers to middle? and the CTA button should be the same as the other sections.

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Centered the CTA banner content and swapped its buttons for the standard pair used across the rest of the page.

## User

A Packaging Store That Actually Has It All - can you put the header and body for middle instead?

## Assistant

_[tool: snip]_

_[tool: grep]_

_[tool: read_file]_

Converting to a single centered column instead of the two-column grid.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

_[tool: sleep]_

_[tool: get_webview_logs]_

Header, animated icon, divider, and body text are now centered in a single column.

## User

can we have that line something below that header to be applied to other headers in other sections as well?

## Assistant

_[tool: grep]_

Adding the same accent divider under each of these section headings (centered, `#CEC2AB`).

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

can we follow this menu header instead

HOME/

## Assistant



## User

can we follow this menu header instead

HOME
PACKAGING
SHIPPING
CRATING
LOGISTICS
LOCATIONS
CONTACT US

and on the small header above careers should be resources

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Updated main nav to Home/Packaging/Shipping/Crating/Logistics/Locations/Contact Us, and swapped "Careers" for "Resources" in the top bar.

## User

let's make a page for packaging

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- cta_focus: Get a Quote (same as homepage)
- sections: Hero + services overview (packing materials, supplies, on-site packing) + custom crating tie-in + CTA
- hero_style: Simpler static image hero with headline + CTA (lighter weight than homepage)
- photos: Reuse existing uploaded photos where relevant

## Assistant

_[tool: list_files]_

_[tool: dc_write]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Also linking the homepage logo to itself for consistency.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

this is for packaging page

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

## User

Hero section (updated): Two-column layout — eyebrow "Packaging," heading "Specialty Packing Services in Las Vegas," and subhead on the left; a photo on the right showing a packing/materials station — stacked corrugated boxes, rolls of shrink wrap, and packing supplies in a warehouse setting, dimmed slightly at the edges to keep focus on the text side. Below the subhead, the highlights row: Art & Fine Art Shipping · Antique Handling, Packing & Shipping · Difficult and Hard-to-Pack Items · Car Parts, Motorcycles, Pianos & More.

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

<pasted_text name="Pasted text (111 lines)">
Good catch — I compressed each service down to a short paragraph and 4 bullets to fit the tab/card panel format we set up, but that cut out a lot of real content you pasted: material specs, size charts, application examples, and full sub-sections like "Materials and Construction," "Sizes and Types," the RSC/HSC/FOL box-style breakdown, the mil-spec standards list, and the White Glove "What Requires Specialty Packing" and "Pickup and Delivery Options" sections. That wasn't intentional — I over-trimmed.Here's the rebuilt prompt with full detail restored, organized into labeled sub-sections per panel so it stays scannable instead of one big block:

---

Build the Packaging page as an interactive single-page hub. Hero: eyebrow "Packaging," heading "Specialty Packing Services in Las Vegas," subhead: "Need a box or packing material you can't find anywhere else? Concerned about safely crating a valuable or fragile item? Bring your items directly to our Las Vegas warehouse and we'll store, pack, and ship everything for you — locally or internationally, large or small, fragile or high-tech." Photo on the right: packing station with boxes, shrink wrap rolls, and supplies in a warehouse. Highlights row below: Art &amp; Fine Art Shipping · Antique Handling, Packing &amp; Shipping · Difficult and Hard-to-Pack Items · Car Parts, Motorcycles, Pianos &amp; More.

Below the hero, 7 clickable service cards (first one active by default). Clicking swaps the detail panel below with a smooth transition. Each panel uses labeled sub-headings as shown.

**1. Corrugated Shipping Boxes**

*Overview:* Corrugated shipping boxes are sturdy, lightweight containers made from corrugated fiberboard — a wavy inner "fluting" sandwiched between two flat "linerboards" that creates cushioning, rigidity, and impact resistance. Invented in the 19th century, they're now the backbone of modern logistics — eco-friendly, often made from recycled paper, and fully recyclable.

*Materials &amp; Construction:* Kraft paper linerboards, smooth and printable for branding, with a fluted medium for structural support.
- Single-Wall: one layer of fluting — ideal for lighter items
- Double-Wall: two layers of fluting, three linerboards — heavier or fragile loads
- Triple-Wall: three layers of fluting, four linerboards — industrial-strength jobs
Flute sizes vary: A-flute for maximum cushioning, B-flute for better stacking. Sourced to meet burst strength and edge crush standards, with optional handles, perforations, or moisture-resistant coatings.

*Sizes &amp; Types:*
- Regular Slotted Container (RSC): the most common style, flaps meet in the middle
- Half Slotted Container (HSC): open top, flaps on one end, often with a separate lid
- Full Overlap Slotted Container (FOL): fully overlapping flaps for extra strength — ideal for antiques or fine art
- Overlap Slotted Container (OSC): partial overlap for medium-weight shipments
- Telescoping Boxes: two-piece, adjustable height — great for wine, artwork frames, sculptures
- Die-Cut/Custom Shapes: non-slotted designs for retail or specialty items

Size ranges in stock: Small (4×4×4 to 10×8×6") for parts, jewelry, electronics, books · Medium (12×9×6 to 18×14×12") for shoeboxes, apparel, laptops, general e-commerce · Large (18×18×16 to 24×24×24") for moving, bulky items, appliances · Specialty/Tall (12×6×6 to 40×60×4" flat, or 18×18×28" tall) for frames, mirrors, wine cases, sculptures. Consider strength rating (32 ECT standard, 44 ECT/double-wall for heavier loads) and flute type (C-flute most common, B-flute for stacking, E-flute for retail/electronics).

*Applications:* Shipping (shock-absorbing, stackable, combinable with wood reinforcement) · Storage (durable, collapsible, moisture-barrier options for Las Vegas's dry climate) · Electronics (anti-static liners, double-wall for TVs/computers) · Fine Art (acid-free tissue, foam corners, telescoping fit) · Wine (molded pulp dividers, insulated double-wall) · Antiques (custom inserts, archival-quality materials).

*Why Choose Us:* Local Las Vegas storefront with competitive pricing on boxes, packing materials, and custom crating — single boxes or bulk orders, in-store or delivered, with expert help picking the right box.

**2. Heat Shrink Wrapping**

*Overview:* A flexible, heat-sensitive plastic film is wrapped around an item and heated to shrink tightly around its shape, creating a secure, tamper-evident seal that protects against moisture, dust, and UV — ideal for irregular or oversized items traditional packaging can't handle.

*Materials:* Polyethylene, PVC, or polyolefin film, shrinking uniformly at 250°F–350°F. Thickness (6–12 mils for heavier items) and additives (UV inhibitors, flame retardants, anti-static agents) vary by application.

*How It's Applied:* Draped over cargo with overlap, then heated with a propane heat gun, hot air blower, or shrink tunnel. Automated tunnels handle palletized goods; oversized items (modular homes, generators) are wrapped manually with scaffolding or lifts and checked for gaps.

*Applications:* Mil-Spec · Industrial · Commercial · Food Goods Storage · Storage &amp; Transportation · Aviation · Construction.

*Combined with Vapor Barrier Bags:* For moisture-sensitive electronics or metal, we heat-seal or vacuum-seal a vapor barrier bag first, then shrink wrap on top — standard in aerospace, military, and manufacturing under MIL-PRF-131K.

*Why Choose Us:* 25+ years — from boxes and crates to full warehousing, storage, and expert shrink wrap for cargo, vehicles, and mil-spec valuables of any shape or size.

**3. Industrial Shrink Wrapping**

*Overview:* Protects and stabilizes oversized or irregularly shaped cargo across marine, construction, aerospace, energy, and defense industries — the film conforms to complex shapes for a tight, weatherproof barrier.

*Materials:* Heavy-duty polyethylene (6–12 mils) for puncture resistance; polyolefin for lighter, clearer cargo like electronics; PVC for smaller high-value items needing a glossy finish. UV inhibitors and flame-retardant additives available.

*Applications by Industry:* Marine (full yachts shielded from saltwater corrosion) · Construction (steel beams, precast concrete, HVAC units) · Aerospace (wings, fuselage sections) · Energy (turbine blades, solar arrays, oil platform modules) · Mining (drill rigs, conveyor parts) · Automotive (molds, concept vehicles for trade shows) · Defense (armored vehicle components).

*Benefits:* Tamper-evident sealing, load stabilization for flatbed transport without extra strapping, smoother customs processing, theft deterrence for job-site equipment.

*Why Choose Us:* Full on-site operations, pickup, delivery, and short- or long-term storage, paired with our cross-docking warehouse.

**4. Food Industry Shrink Wrapping**

*Overview:* Ensures safe transport, storage, and preservation of perishable and non-perishable goods — from palletized canned goods to fresh produce and frozen items.

*Materials:* Food-grade films (3–6 mils), often with anti-fog agents or UV inhibitors. Polyolefin is FDA-approved for direct food contact, meeting HACCP standards.

*Applications:* Unitizing bulk transport (canned goods, beverages) · Securing boxes (frozen produce, dairy) · Retail packaging (snacks, condiments) · Extending shelf life (fresh/frozen/chilled items) · Long-term storage (flour, rice, dry powders). Used across dry goods, chilled products (cheese, butter), and non-chilled items (coffee, tea, chocolate).

*Transportation &amp; Storage:* Prevents shifting/breakage of bottled beverages in transit, maintains cold-chain temperatures, protects dry goods from humidity and pests in storage, and streamlines export customs compliance.

*Paired with Vapor Barrier Bags:* Adds a moisture/oxygen barrier for dried fruits, grains, and dehydrated meals — preserving flavor, texture, and nutrition.

**5. Mil-Spec Heat Shrink Wrapping &amp; Vapor Barrier Bags**

*Overview:* Meets U.S. Department of Defense standards (including MIL-STD-2073-1) for protecting military equipment during global shipping, long-term storage, or deployment.

*Heat Shrink Wrapping:* Heavy-duty polyethylene or MIL-PRF-81705-compliant film, applied with industrial heat guns or shrink tunnels; some films include volatile corrosion inhibitors (VCIs). Used for weapons/ammunition, vehicles/aircraft parts, and field equipment like generators and radar systems.

*Vapor Barrier Bags:* Multi-layered laminates meeting MIL-PRF-131K, blocking moisture vapor transmission and protecting against electrostatic discharge. Sealed with desiccants and humidity indicator cards. Used for electronics/circuit boards, munitions, and spare parts — preservation up to 20 years.

*Combined Use:* Electronics sealed in a vapor barrier bag with desiccants, then shrink-wrapped for physical protection and tamper evidence; large items vacuum-sealed then shrink-wrapped to pallets.

*Standards We Meet:* MIL-STD-2073-1 (packaging methods) · MIL-PRF-131K (barrier materials) · MIL-PRF-81705 (ESD protection) · Testing for puncture resistance, seal strength, and temperature extremes.

*Why Choose Us:* On-site work with full pickup and delivery, headquartered near the Las Vegas Strip with full warehouse storage.

**6. Vapor Barrier Bags**

*Overview:* Also called foil, alufoil, or Mylar bags — one of the most effective packaging solutions against moisture, oxygen, salt spray, aromas, and contaminants. Also known as VCI (Volatile Corrosion Inhibitor) packaging.

*Materials &amp; Types:* MIL-PRF-131K Class 1-rated poly foil laminate bags with low oxygen/moisture transmission and high puncture resistance. Available as heat-sealed bags, heat-sealed shrink, or coated paper.

*Desiccant Calculation:* Calculated to the exact volume being protected, using activated clay conforming to MIL-D-3464.

*Military &amp; Government Use:* Military accounts and federal/state/local government work, including transport of the M1165A1 HMMWV and experience with GovPlanet — every job meets MIL-STD-2073-1.

*Applications:* Electronics, antiques, and fine art shipped by sea, where salt water and salt spray are highly corrosive — humidity indicator cards included in every bag.

*Why Choose Us:* 25+ years in shipping, packing, and logistics, meeting all military standards for the Las Vegas and California region.

**7. White Glove Delivery Service**

*Overview:* Meticulous, hands-on care for every item — residential, commercial, state-to-state, and international. On-site art installation, removal, packing, shipping, and storage for major Strip galleries and casinos, plus private collectors with statues, oversized pieces, rigging, and hoisting.

*Worry-Free Guarantee:* You're never responsible for loading, unloading, or packing — door-to-door precision handling for fragile, expensive heirlooms and keepsakes.

*What Requires Specialty Packing:* Fine art · Museum sculptures · Auction wins · One-of-a-kind heirlooms · Fragile antiques · Vintage furniture · Heavy appliances · Collectibles · Electronic equipment · Rare jewelry and stones.

*Pickup &amp; Delivery:* Beyond standard curbside service — we've shipped vintage phone booths, slot machines, chandeliers, and priceless memorabilia, using multi-person teams, specialized vehicles, and lifts, with cleanup included.

*Why Choose Us:* Competitively priced quotes, next-day shipping availability, secure warehousing for any size item, extending from auctions and estates to small moves. Trusted · Guaranteed · On Time · Full Service.

---
</pasted_text>

## Assistant

_[tool: dc_html_str_replace]_

Now rewriting the logic class with full sub-sectioned content for all 7 services.

_[tool: dc_js_str_replace]_

Now updating `renderVals()` to expose `activeSections` with computed `hasBody`/`hasBullets` flags instead of `activeIntro`/`activeBullets`.

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

## User

here

## Assistant

_[tool: read_file]_

_[tool: read_file]_

Now replacing the whole tab/detail block with a quick-nav bar plus 7 stacked full sections.

_[tool: dc_html_str_replace]_

Now updating the logic class: add `id`, `eyebrow`, `bg` per service (alternating white/cream) and `quickNav`, removing the old select/active-state machinery.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Also removing the now-unused `state = { activeIndex: 0 }`.

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

## User

<pasted_text name="Pasted text (88 lines)">
Here's the complete, final prompt with everything incorporated:

---

Build the Packaging page as an interactive hub. There is only **one hero** on this page — do not create a second hero-style block anywhere else.

**Hero:** eyebrow "Packaging," heading "Specialty Packing Services in Las Vegas," subhead: "Need a box or packing material you can't find anywhere else? Concerned about safely crating a valuable or fragile item? Bring your items directly to our Las Vegas warehouse and we'll store, pack, and ship everything for you — locally or internationally, large or small, fragile or high-tech." Photo on the right: packing station with boxes, shrink wrap rolls, and supplies in a warehouse. Highlights row below: Art &amp; Fine Art Shipping · Antique Handling, Packing &amp; Shipping · Difficult and Hard-to-Pack Items · Car Parts, Motorcycles, Pianos &amp; More.

**Below the hero, keep the tab/pill selector box exactly as it currently is** — 7 pill-style buttons (Corrugated Boxes, Heat Shrink Wrapping, Industrial Shrink Wrapping, Food Industry Shrink Wrapping, Mil-Spec, Vapor Barrier Bags, White Glove Delivery), wrapping to two rows, cream background with thin border, no changes to this styling. The first pill is active by default.

**Directly below the tab row, that service's content begins immediately** — no second hero, no extra spacing block. A simple H2 section heading with the service name, followed by its Overview paragraph, **two photo placements**, and labeled sub-sections. Clicking a different pill replaces this entire content area with the new service's content, with a smooth transition, and marks the newly selected pill as active (#A9824F border/fill).

**Each service view includes two photo placements in these fixed positions:**
1. A large photo band directly after the Overview paragraph, full-width or two-thirds width, dimmed slightly at the edges to match the site's photo treatment elsewhere.
2. A smaller inline photo alongside the Applications (or Why Choose Us) sub-section, roughly one-third width, in a two-column layout.
Use a labeled placeholder image block for now (sized and positioned correctly) so real photos can be dropped in later without changing the layout.

**Content for each service:**

**Corrugated Shipping Boxes**
Photo 1 suggestion: stacked corrugated boxes in various sizes in the warehouse
Photo 2 suggestion: close-up of box flute/cross-section or a worker taping a box shut
*Overview:* Corrugated shipping boxes are sturdy, lightweight containers made from corrugated fiberboard — a wavy inner "fluting" sandwiched between two flat "linerboards" that creates cushioning, rigidity, and impact resistance. Invented in the 19th century, they're now the backbone of modern logistics — eco-friendly, often made from recycled paper, and fully recyclable.
*Materials &amp; Construction:* Kraft paper linerboards, smooth and printable for branding, with a fluted medium for structural support. Single-Wall (lighter items), Double-Wall (heavier/fragile loads), Triple-Wall (industrial-strength). Flute sizes: A-flute for cushioning, B-flute for stacking. Sourced to burst strength and edge crush standards.
*Sizes &amp; Types:* Regular Slotted Container (RSC) — most common. Half Slotted Container (HSC) — open top with lid. Full Overlap (FOL) — extra strength for antiques/fine art. Overlap (OSC) — medium-weight. Telescoping — adjustable height for wine/art/sculptures. Die-Cut/Custom — retail/specialty shapes. Sizes from small (4×4×4") to large (24×24×24") plus specialty tall/flat sizes for frames, mirrors, wine cases.
*Applications:* Shipping, storage, electronics, fine art, wine, antiques.
*Why Choose Us:* Local Las Vegas storefront, competitive pricing, single or bulk orders, expert box selection help.

**Heat Shrink Wrapping**
Photo 1 suggestion: a large item mid-wrap with a heat gun/torch visible
Photo 2 suggestion: close-up of shrink film being heated and conforming to a surface
*Overview:* A flexible, heat-sensitive plastic film is wrapped around an item and heated to shrink tightly around its shape, creating a secure, tamper-evident seal that protects against moisture, dust, and UV.
*Materials:* Polyethylene, PVC, or polyolefin film, shrinking at 250°F–350°F, 6–12 mils for heavier items, with UV/flame-retardant/anti-static additives available.
*How It's Applied:* Heat gun, hot air blower, or shrink tunnel; automated tunnels for pallets, manual wrapping with lifts for oversized items.
*Applications:* Mil-Spec · Industrial · Commercial · Food Goods Storage · Storage &amp; Transportation · Aviation · Construction.
*Combined with Vapor Barrier Bags:* Dual-layer protection for moisture-sensitive electronics under MIL-PRF-131K.
*Why Choose Us:* 25+ years of expert shrink wrap packaging for cargo, vehicles, and mil-spec valuables.

**Industrial Shrink Wrapping**
Photo 1 suggestion: an oversized item (boat, machinery, or crate) fully shrink-wrapped on a lift or flatbed
Photo 2 suggestion: close-up of heavy-duty film texture or a worker on scaffolding wrapping equipment
*Overview:* Protects oversized or irregularly shaped cargo across marine, construction, aerospace, energy, and defense industries.
*Materials:* Heavy-duty polyethylene (6–12 mils), polyolefin for lighter cargo, PVC for high-value glossy finishes, with UV and flame-retardant additives.
*Applications by Industry:* Marine (yachts) · Construction (steel beams, HVAC) · Aerospace (wings, fuselage) · Energy (turbine blades, solar arrays) · Mining (drill rigs) · Automotive (trade show vehicles) · Defense (armored vehicle components).
*Benefits:* Tamper-evident sealing, load stabilization, smoother customs, theft deterrence.
*Why Choose Us:* Full on-site operations, pickup, delivery, storage, paired with our cross-docking warehouse.

**Food Industry Shrink Wrapping**
Photo 1 suggestion: palletized food goods (canned goods, beverages) shrink-wrapped and ready for shipment
Photo 2 suggestion: close-up of food-safe film on a product case
*Overview:* Ensures safe transport, storage, and preservation of perishable and non-perishable goods.
*Materials:* Food-grade films (3–6 mils), FDA-approved polyolefin meeting HACCP standards.
*Applications:* Unitizing bulk transport, securing boxes, retail packaging, extending shelf life, long-term storage — across dry goods, chilled, and non-chilled products.
*Transportation &amp; Storage:* Prevents shifting/breakage, maintains cold-chain temps, protects dry goods from humidity/pests, streamlines export compliance.
*Paired with Vapor Barrier Bags:* Extra moisture/oxygen barrier for dried goods.

**Mil-Spec Heat Shrink Wrapping &amp; Vapor Barrier Bags**
Photo 1 suggestion: military-style crate or equipment being wrapped/sealed
Photo 2 suggestion: close-up of a sealed vapor barrier bag with a humidity indicator card
*Overview:* Meets DoD standards (MIL-STD-2073-1) for protecting military equipment during shipping, storage, or deployment.
*Heat Shrink Wrapping:* MIL-PRF-81705-compliant film for weapons, vehicles, aircraft parts, field equipment.
*Vapor Barrier Bags:* MIL-PRF-131K laminates for electronics, munitions, spare parts — preservation up to 20 years.
*Combined Use:* Layered protection for sensitive electronics and large equipment.
*Standards We Meet:* MIL-STD-2073-1 · MIL-PRF-131K · MIL-PRF-81705.
*Why Choose Us:* On-site work, full pickup/delivery, HQ near the Strip with full warehouse storage.

**Vapor Barrier Bags**
Photo 1 suggestion: a sealed foil/vapor barrier bag with visible desiccant packet
Photo 2 suggestion: close-up of the bag's metallic laminate texture
*Overview:* Foil, alufoil, or Mylar bags protecting against moisture, oxygen, salt spray, and contaminants.
*Materials &amp; Types:* MIL-PRF-131K Class 1-rated poly foil laminate; heat-sealed, heat-sealed shrink, or coated paper.
*Desiccant Calculation:* Calculated to MIL-D-3464 for the exact volume protected.
*Military &amp; Government Use:* Federal/state/local government accounts, including M1165A1 HMMWV transport and GovPlanet experience.
*Applications:* Electronics, antiques, and fine art shipped by sea.
*Why Choose Us:* 25+ years meeting all military standards for Las Vegas and California.

**White Glove Delivery Service**
Photo 1 suggestion: a team carefully handling or installing a large art piece/sculpture
Photo 2 suggestion: close-up of gloved hands packing a fragile item
*Overview:* Meticulous, hands-on care for every item — residential, commercial, state-to-state, and international. On-site art installation, removal, packing, shipping, and storage for major Strip galleries and casinos, plus private collectors with statues, oversized pieces, rigging, and hoisting.
*Worry-Free Guarantee:* You're never responsible for loading, unloading, or packing — door-to-door precision handling for fragile, expensive heirlooms and keepsakes.
*What Requires Specialty Packing:* Fine art · Museum sculptures · Auction wins · One-of-a-kind heirlooms · Fragile antiques · Vintage furniture · Heavy appliances · Collectibles · Electronic equipment · Rare jewelry and stones.
*Pickup &amp; Delivery:* Beyond standard curbside service — we've shipped vintage phone booths, slot machines, chandeliers, and priceless memorabilia, using multi-person teams, specialized vehicles, and lifts, with cleanup included.
*Why Choose Us:* Competitively priced quotes, next-day shipping availability, secure warehousing for any size item, extending from auctions and estates to small moves. Trusted · Guaranteed · On Time · Full Service.

**End of each service view with the global CTA banner** already established (sits above the footer on every page).

---
</pasted_text>

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

## User

<pasted_text name="Pasted text (68 lines)">
Build the Packaging page using the exact same section components already used on the homepage — intro sections, feature grid cards, split text+photo sections, and the CTA band. The only new element on this page is the service selector strip below the hero. Do not invent new section types or prose sub-headings.

Hero: eyebrow "Packaging," heading "Specialty Packing Services in Las Vegas," subhead: "Need a box or packing material you can't find anywhere else? Concerned about safely crating a valuable or fragile item? Bring your items directly to our Las Vegas warehouse and we'll store, pack, and ship everything for you — locally or internationally, large or small, fragile or high-tech." Photo on the right: packing station with boxes, shrink wrap rolls, and supplies in a warehouse. Highlights row below: Art &amp; Fine Art Shipping · Antique Handling, Packing &amp; Shipping · Difficult and Hard-to-Pack Items · Car Parts, Motorcycles, Pianos &amp; More.

Below the hero, keep the tab/pill service strip exactly as it is (7 pills, first one active by default). This is the only page-specific addition — everything below it reuses homepage components.

When a pill is selected, render that service's content using this exact sequence of homepage-style components:

Intro section (same style as "A Packaging Store That Actually Has It All" on the homepage — eyebrow + heading on one side, paragraph on the other): use the service's Overview text here.
Feature grid (same card style as the homepage's service cards): 3–4 cards covering that service's key facts — materials, sizes/types, or applications, whichever apply.
Split section with photo (same component as "Custom Crating and Shipping" / "Warehouse Storage" on the homepage — photo on one side, text + bullet list on the other): use this for the deeper explanation (how it's applied, standards met, or combined use) with Photo 1.
Second split section, reversed (photo on the opposite side this time): use this for "Why Choose Us" content, with Photo 2.

Switching pills swaps all four components to the new service's content with a smooth transition; the newly selected pill shows the active state (
#A9824F border/fill).

Content for each service, mapped into that structure:

Corrugated Shipping Boxes

Intro: "Corrugated shipping boxes are sturdy, lightweight containers made from corrugated fiberboard — a wavy inner 'fluting' sandwiched between two flat 'linerboards' that creates cushioning, rigidity, and impact resistance. Invented in the 19th century, they're now the backbone of modern logistics."
Feature grid: Single-Wall (lighter items) · Double-Wall (heavier/fragile loads) · Triple-Wall (industrial-strength) · Custom Sizing (4×4×4" to 24×24×24", plus specialty tall/flat sizes)
Split 1 (Photo: stacked boxes in warehouse): "RSC, HSC, FOL, OSC, telescoping, and die-cut styles cover shipping, storage, electronics, fine art, wine, and antiques." Bullets: Burst strength &amp; edge crush rated · A-flute/B-flute/C-flute options · Anti-static and moisture-resistant coatings available
Split 2 reversed (Photo: box flute close-up or taping): "Why Choose Us" — Local Las Vegas storefront, competitive pricing, single or bulk orders, expert box selection help.

Heat Shrink Wrapping

Intro: "A flexible, heat-sensitive plastic film is wrapped around an item and heated to shrink tightly around its shape, creating a secure, tamper-evident seal that protects against moisture, dust, and UV."
Feature grid: Polyethylene/PVC/Polyolefin Film · 250°F–350°F Application · 6–12 Mil Thickness · UV &amp; Flame-Retardant Additives
Split 1 (Photo: item mid-wrap with heat gun): "Applied with heat guns, hot air blowers, or shrink tunnels for cargo of any size." Bullets: Mil-Spec · Industrial · Commercial · Food Goods · Aviation · Construction
Split 2 reversed (Photo: film conforming close-up): "Why Choose Us" — 25+ years of expert shrink wrap packaging for cargo, vehicles, and mil-spec valuables.

Industrial Shrink Wrapping

Intro: "Protects oversized or irregularly shaped cargo across marine, construction, aerospace, energy, and defense industries — the film conforms to complex shapes for a tight, weatherproof barrier."
Feature grid: Marine (yachts) · Construction (steel, HVAC) · Aerospace (wings, fuselage) · Energy (turbines, solar)
Split 1 (Photo: oversized item wrapped on flatbed): "Heavy-duty polyethylene, polyolefin, and PVC films, 6–12 mils thick." Bullets: Tamper-evident sealing · Load stabilization · Smoother customs processing · Theft deterrence
Split 2 reversed (Photo: film texture/worker wrapping): "Why Choose Us" — Full on-site operations, pickup, delivery, storage, paired with our cross-docking warehouse.

Food Industry Shrink Wrapping

Intro: "Ensures safe transport, storage, and preservation of perishable and non-perishable goods — from palletized canned goods to fresh produce and frozen items."
Feature grid: FDA-Approved Films · HACCP Compliant · 3–6 Mil Thickness · Anti-Fog Additives
Split 1 (Photo: palletized food goods wrapped): "Unitizing bulk transport, securing boxes, retail packaging, extending shelf life, long-term storage." Bullets: Dry goods · Chilled products · Non-chilled items · Cold-chain compatible
Split 2 reversed (Photo: food-safe film close-up): "Paired with Vapor Barrier Bags" — Extra moisture/oxygen barrier for dried fruits, grains, and dehydrated meals.

Mil-Spec Heat Shrink Wrapping &amp; Vapor Barrier Bags

Intro: "Meets U.S. Department of Defense standards, including MIL-STD-2073-1, for protecting military equipment during global shipping, long-term storage, or deployment."
Feature grid: MIL-STD-2073-1 · MIL-PRF-131K · MIL-PRF-81705 · Up to 20-Year Preservation
Split 1 (Photo: military crate being sealed): "Heat shrink film for weapons, vehicles, and field equipment; vapor barrier bags for electronics, munitions, and spare parts." Bullets: Volatile corrosion inhibitors · Desiccants &amp; humidity cards · ESD protection
Split 2 reversed (Photo: sealed vapor bag with humidity card): "Why Choose Us" — On-site work, full pickup/delivery, HQ near the Strip with full warehouse storage.

Vapor Barrier Bags

Intro: "Also called foil, alufoil, or Mylar bags — one of the most effective packaging solutions against moisture, oxygen, salt spray, and contaminants."
Feature grid: MIL-PRF-131K Class 1 · Low MVTR · High Puncture Resistance · MIL-D-3464 Desiccant Calculation
Split 1 (Photo: sealed foil bag with desiccant): "Federal, state, and local government accounts, including M1165A1 HMMWV transport and GovPlanet experience." Bullets: Heat-sealed or coated paper options · Humidity indicator cards included
Split 2 reversed (Photo: laminate texture close-up): "Why Choose Us" — 25+ years meeting all military standards for Las Vegas and California.

White Glove Delivery Service

Intro: "Meticulous, hands-on care for every item — residential, commercial, state-to-state, and international. On-site art installation, removal, packing, shipping, and storage for major Strip galleries and casinos."
Feature grid: Fine Art &amp; Sculptures · Vintage Furniture &amp; Antiques · Heavy Appliances · Rare Jewelry &amp; Electronics
Split 1 (Photo: team installing art piece): "Worry-Free Guarantee — you're never responsible for loading, unloading, or packing." Bullets: Vintage phone booths, slot machines, chandeliers shipped · Multi-person teams · Specialized vehicles and lifts
Split 2 reversed (Photo: gloved hands packing fragile item): "Why Choose Us" — Competitive quotes, next-day shipping, secure warehousing, extending from auctions to small moves.

End with the global CTA banner already established (sits above the footer on every page).
</pasted_text>

## Assistant

_[tool: snip]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

