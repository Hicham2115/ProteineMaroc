# Mes Protéines Nutrition — Project Context

Last consolidated: 2026-10-17 (Africa/Casablanca). This is the project memory for the Next.js storefront redesign. Treat all live-site product prices, stock, reviews, shipping promises, and catalog counts as dated snapshots; re-check Shopify and the merchant before publishing them.

## Product and project goal

- Brand: Mes Protéines Nutrition / Mes Proteines Maroc, a Morocco-focused sports nutrition and supplement retailer.
- Goal: build a premium, modern, high-converting storefront homepage and later connect its product and commerce data to Shopify.
- Current scope: front end. Use Shopify as the planned backend/data source; do not hard-code changing catalog data into marketing copy.
- Audience: people shopping for sports nutrition, muscle gain, weight loss, training performance, vitamins, and wellness products in Morocco.
- Primary language: French. Use clear French copy and preserve the brand's Morocco delivery and cash-on-delivery context.

## User preferences and working rules

- **Tailwind CSS is the styling standard for this and future projects.** Use Tailwind utility classes for component styling. Avoid writing pure CSS for page or component layout. Keep global CSS focused on Tailwind imports, theme tokens, base resets, and keyframes that utilities cannot express cleanly.
- Use the Product Design workflow for design work: ground the design in the source, show visual options when exploring, and build from the option the user selects.
- Establish a coherent design system before implementing the UI, and keep colors, typography, spacing, and components in sync.
- Next.js/React project layout should follow the structure `app/`, reusable `components/`, shared `layout/`, `lib/`, `docs/`, and `public/`.
- Bijoux Ecom is a folder-structure reference only. Do not edit or otherwise change that project.
- COSS Origin is a reference for ecommerce navigation patterns.
- Use Lucide React for interface icons. Do not use the Lucide `Sparkles` icon.
- Keep copy, headings, buttons, and delivery notes as editable HTML text; do not bake website copy into generated hero images.
- When the user supplies a specific image or screenshot and says to use it, use that exact visual source. For mobile, use a dedicated portrait crop/asset derived from the chosen source.
- The user has repeatedly asked for careful visual checks in Brave and expects the latest selected/generated assets to appear in the page, not an older cached image.

## Original storefront observations

The old storefront was inspected from the public site and in Brave. The user also shared the brand's Instagram profile. These notes separate what was observed from what still needs source access.

### Old site structure and content observed

- Header/service messages: “Livraison partout au Maroc”, “Paiement à la livraison”, “Conseils d’experts”, and “Produits 100% authentiques”. The old desktop header used a red announcement strip and a light navigation row with the Mes Protéines wordmark, category links, search, and cart.
- Navigation observed in the shared old-site screenshot: Accueil, Boutique, Prise de masse, Perte de poids, Vitamines & santé, Qui sommes-nous ?
- The old homepage hero used the message “La performance se vit à votre façon.”, with supporting text “Nutrition sportive pensée pour chaque objectif.” and a “Découvrir la boutique” action.
- The hero direction the user chose features a man and a woman together, sports nutrition products, and a warm gym setting. Use a wide desktop composition and a separate portrait mobile composition.
- Catalog/category structure observed on the live home/catalog: prise de masse, perte de poids, protéines, gainers, vitamins/health, performance, and general wellness. Product archive controls included category, brand, flavor, and price filters, sorting by popularity/latest/price, and an on-sale filter.
- Product detail pages included product/brand name, discount where applicable, stock state, price and previous price, review link, variant selectors (flavor/size/color), quantity, add-to-cart, fast-order fields (name/city/phone), shipping/payment choices, description/additional-information sections, usage instructions, and related products. Sold-out products showed a notify-me form.
- Delivery/payment details visible in product-page snapshots included Casablanca delivery and outside-Casablanca courier delivery shown at 30 DH, plus cash and bank transfer/deposit options. Details vary by page and must be verified before launch.
- The public homepage snapshot retrieved on 2026-10-17 also showed: “Boostez Votre Corps”, the claim of fast delivery across Morocco, category counts (14 Perte de Poids, 16 Prise de Masse, 4 Protéines, 7 Gainers), best sellers, a whey section, authenticity/delivery/Casablanca free delivery/wholesale benefit blocks, FAQs, a BMI/calorie calculator, and contact details. It listed phone numbers (+212 522 980 410 and +212 522 958 982) and `infos@mesproteines.ma`. This may differ from the older design shown in Brave; confirm current business facts before reuse.
- Public home page: <https://mesproteines.ma/>. Product URLs and captured catalog data are recorded below.

### Instagram source and evidence status

- Profile supplied by the user: <https://www.instagram.com/mesproteinesmaroc/>.
- The profile URL is part of the research brief. Instagram's public page could not be fetched through the available web reader, and this project has no saved capture of its posts, reels, captions, follower count, bio, or visual grid.
- Do not invent Instagram themes, follower numbers, campaign details, testimonials, or product claims. If social-specific brand voice or creative direction matters, review the profile in Brave or ask the user for screenshots and add verified observations here.

## Current design direction and assets

- Brand palette: brand red `#D72D32`, deep red `#B91F28`, charcoal `#202326`, soft charcoal `#2C3135`, warm paper `#FFFDF9`, sand `#E9E0D1`, soft surface `#F5F2EC`, muted ink `#666A6D`.
- Type: Georgia for editorial/display hero copy; Geist Sans for interface and body text. Utility labels use uppercase letters with expanded tracking.
- Desktop header: COSS-inspired compact service ticker, clear category navigation, separate search and cart actions. The announcement band moves continuously from right to left, slowly, with visible spacing between messages.
- Mobile navigation: right-side drawer that opens from right to left and fits the viewport without horizontal overflow.
- Selected mobile hero design (user screenshot dated 2026-10-17 10:44): compact cream header with wordmark and hamburger; portrait photo showing both athletes and products; dark lower fade/copy area; uppercase brand eyebrow; large editorial headline with italic phrase and red period/accent; short supporting copy; red shop button; delivery reassurance at the bottom. Keep the heading and copy as HTML text. Hide the announcement strip on mobile to match the selected design.
- Approved hero assets live under `public/images/`. Latest upscaled source files currently used by the homepage are `hero-athletes-desktop-upscaled.png` and `hero-athletes-mobile-upscaled.png`. Use versioned filenames when replacing assets to avoid stale Next image/browser cache responses.
- The desktop hero uses a wide image. The mobile hero uses a dedicated portrait image, with both genders and the product lineup visible. Keep responsive image positions/crops in the chosen composition.

## Evidence and content safeguards

- Product facts below are transcribed from visible site pages, not independently validated against manufacturers. Product copy sometimes conflicts with supplement facts, flavor selectors, serving directions, price fields, or package format. Preserve these as source notes only and flag inconsistencies for merchant review.
- No review count, popularity claim, stock state, sale price, or delivery ETA is permanent. Do not present a captured snapshot as current data.
- The public homepage repeated or displayed review scores on separate product cards. Confirm review data with the merchant before using ratings or counts in the redesigned store.
- The hero copy “Rapide et fiable, 1 à 3 jours.” appeared in the selected user reference; verify this delivery claim with the merchant before publishing.
- For product page migration, Shopify should own titles, descriptions, nutrition facts, images, variant options, inventory, prices, discounts, and availability.

---

# Product Reference — captured product and catalog notes

Research captured: 2026-10-16 (Africa/Casablanca)
Source: public catalog and product pages at https://mesproteines.ma, with the live site opened in Brave. Prices, stock, discounts, shipping dates, and assortment change; treat them as examples only and re-check Shopify/source data before publishing.

## Product page pattern

- Shared header: red announcement strip with store phone, dark charcoal brand/search/cart row, white navigation.
- Product detail begins with discount badge (when applicable), product name, stock state, delivery estimate, review link/rating, price/old price.
- Variant selectors appear for flavors; some products offer multiple flavors or sizes.
- Purchase controls include quantity, add to cart, fast order fields (first name, city, phone), shipping choices, payment options, and checkout/WhatsApp actions.
- Shipping options shown: Casablanca delivery; express courier outside Casablanca (30 DH).
- Payment shown: cash and bank transfer/deposit.
- Below purchase area: Description and Additional information tabs, detailed product copy, usage instructions, flavor list, and related products.
- Out of stock pages show a notify-me form (product, brand, name, phone) in place of purchase controls.

## Observed example products

| Product                                           | Brand/type                         | Observed price/state                                                                                     | Variant/details                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dymatize ISO100 2.3kg – Whey Isolate Sans Lactose | Dymatize, hydrolyzed whey isolate  | 1,599 DH (was 1,699; -6%), in stock                                                                      | Flavors include Chocolate Peanut Butter, Cocoa Pebbles, Cookies & Cream, Fruity Pebbles, Fudge Brownie (site spelling “BRONWIE”), Gourmet Chocolate, Gourmet Vanilla, Peanut Butter; detail copy says 25 g protein, 5.5 g BCAA, 2.7 g leucine, zero lactose/gluten; 30 g serving with 200–300 ml water. [Source](https://mesproteines.ma/produit/dymatize-iso100-2-3kg/) |
| 100% Casein Gold Standard 1.8kg – Maroc           | Optimum Nutrition, micellar casein | Current price/state not fully captured in Brave; appears in catalog at varying snapshots around 1,000 DH | 24 g protein per serving, slow release up to 8 hours, flavors Chocolate Peanut Butter, Chocolate Supreme, Vanilla; 33 g with 300–350 ml water/milk, before sleep or between meals. [Source](https://mesproteines.ma/produit/100-casein-gold-standard-1-8kg-usa/)                                                                                                         |
| 100% Vegan Protein 500gr                          | IronMaxx, plant protein            | Out of stock; no purchase price shown                                                                    | One listed flavor: Peanut Chocolate Cookie Dough. Blend of pea, rice, hemp and carob sprout proteins; 75 g protein/100 g and 23 g per 30 g serving; no added sugar or soy per description. [Source](https://mesproteines.ma/produit/100-vegan-protein-05-kg/)                                                                                                            |
| 100% Whey Protein 900gr                           | IronMaxx whey                      | Out of stock; no purchase price shown                                                                    | Flavor list includes Banana Yoghurt, Blueberry Cheesecake, Cherry Yoghurt, Chocolate Coconut, Chocolate Cookie, French Vanilla, Latte Macchiato, Milk Chocolate, Nature, Pistase Coconut, Stracciatella, Strawberry White Choco. 50 g serving in 250 ml cold water; copy says no scoop included. [Source](https://mesproteines.ma/produit/100-whey-protein-09-kg/)       |
| 100% Casein Protein 750gr                         | IronMaxx micellar casein           | Listing shows 400 DH in search snapshot; availability should be checked                                  | Flavors Chocolate, Cookies and Cream, Vanilla. Product copy describes slow-release casein; 25 g serving in 250 ml cold water or low-fat milk. [Source](https://mesproteines.ma/produit/100-casein-protein-075-kg/)                                                                                                                                                       |

## Catalog sample (not a complete product feed)

The shop displays roughly 27–29 products across pages/load-more snapshots, with product filters for category, brand, flavor, and price; sort by popularity/latest/price; and sale-only toggle. Brands visible include AllMaxx, Animal, Applied Nutrition, BioTech USA, BPI Sports, Chiba, Dymatize, Grenade, IronMaxx, JNX Sports, Mammoth, MusclePharm, MuscleTech, Mutant, NOW Foods, Nutrabolics, Nutrex, Optimum Nutrition, PhD Nutrition, Pro Supps, Reflex, Rule 1, Skinny Food Co, Vitargo, and Xtend.

Examples visible on first catalog page (observed snapshots):

- Dymatize ISO100 2.3kg: 1,599 DH (from 1,699)
- Optimum Nutrition Whey Gold Standard 900g: 600 DH (from 700)
- Optimum Nutrition Serious Mass 5.4kg: 1,100 DH (from 1,200)
- Dymatize Super Mass Gainer 2.7kg: 600 DH
- Dymatize Super Mass Gainer 5.44kg: 900 DH (from 950)
- Shaker Inox 1L: 149 DH (from 199)
- Shaker compartment 600ml: 119 DH (from 149)
- Applied Nutrition Critical Mass 2.4kg: 530 DH (from 580)
- Applied Nutrition Critical Mass 6kg: 980 DH (from 1,050)
- Biotech USA Calcium Zinc Magnesium 100 tabs: 250 DH (from 300)
- Animal Pak Orange 44 scoops: 700 DH
- Nutrabolics Mass Fusion 5.45kg: catalog snapshots differ (750–900 DH); verify live price.

## Content/data notes for the rebuild

- Keep product facts, ingredients, nutrition panels, variant names, inventory, and price in Shopify/product data, not hard-coded page copy.
- Preserve flavor and size choices as selectable variants. Keep sold-out status and notify-me path visible.
- Product descriptions are French-first and may contain variant spellings, inconsistent claims, and duplicated serving instructions. Verify copy and claims with the merchant before migration.
- Review badge currently repeats a broad “4.9 +1.5k avis” signal across unrelated products; confirm whether this is intended before using it.
- The source product route may have fast-order and cart paths side by side; redesign can simplify the purchase panel while retaining Casablanca/national shipping, cash/bank payment, and WhatsApp ordering needs.

## Additional product page review (Oct 16, 2026)

The following live product pages were opened and their price/availability, options, page copy, and visible purchase flow were checked. Prices and delivery dates below are time-sensitive snapshots. Product page content is not always internally consistent; verify with the merchant before using nutrition claims.

| Product                                        | Live price/state snapshot      | Options and page content reviewed                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100% Whey Gold Standard 900gr – USA            | 600 DH (was 700), in stock     | Optimum Nutrition; 7 visible options on selector, additional-info list includes Rich Chocolate too; page claims 23 g protein, 5 g BCAA, 3.5 g glutamine, serving ~31 g in 250 ml. [Page](https://mesproteines.ma/produit/gold-standard-09kg/)                                                                                                                                        |
| Serious Mass 5.4 kg                            | 1,100 DH (was 1,200), in stock | Optimum Nutrition; Banana, Chocolate, Chocolate Peanut Butter, Strawberry, Vanilla; copy claims 1,250 kcal, 50 g protein, 250 g carbs per serving and ~16 portions. [Page](https://mesproteines.ma/produit/serious-mass-5-4-kg/)                                                                                                                                                     |
| Super Mass Gainer 2.7 kg                       | 600 DH, in stock               | Dymatize; selector showed Vanille, description lists Chocolate, Cookies & Cream, Vanille; nutrition table has water/milk values and 8 servings. Copy includes an apparent “500 L” liquid typo. [Page](https://mesproteines.ma/produit/super-mass-gainer-2-7kg/)                                                                                                                      |
| Super Mass Gainer 5.44 kg                      | 900 DH (was 950), in stock     | Dymatize; selector showed Chocolat and Vanille; copy describes high-calorie gainer and suggests 2–3 scoops. [Page](https://mesproteines.ma/produit/super-mass-gainer-5-44kg/)                                                                                                                                                                                                        |
| Shaker Inox 1L                                 | 149 DH (was 199), in stock     | Color variants Black, Gold, Silver, White; stainless steel, double wall, 1 L, graduations, screw base, wide opening. [Page](https://mesproteines.ma/produit/shaker-inox-1l/)                                                                                                                                                                                                         |
| Dymatize ISO100 1.4 kg                         | 1,000 DH, in stock             | Gourmet Chocolate and Gourmet Vanilla; copy describes hydrolyzed isolate and gives BCAA 5.5 g, leucine 2.7 g, glutamine 4.4 g; 1–2 servings/day. [Page](https://mesproteines.ma/produit/dymatize-iso-100-1-4kg/)                                                                                                                                                                     |
| Shaker compartiment 600 ml                     | 119 DH (was 149), in stock     | Black/Blue, Black/Green, Black/Red, Black/Yellow; cup plus compartment intended to carry up to three powder servings and capsules. [Page](https://mesproteines.ma/produit/shaker-compartiment-600ml/)                                                                                                                                                                                |
| Critical Mass 2.4 kg                           | 530 DH (was 580), in stock     | Applied Nutrition; Banana, Chocolat, Strawberry, Vanilla; detailed ingredient list and preparation (4 measures/240 g with 500–1000 ml). Copy describes added creatine, HMB, glutamine, leucine, CLA and MCT, and halal certification. [Page](https://mesproteines.ma/produit/critical-mass-2-4kg/)                                                                                   |
| Critical Mass 6 kg                             | 980 DH (was 1,050), in stock   | Same Applied Nutrition flavor set and description as 2.4 kg; 4 measures/240 g per serving recommendation. [Page](https://mesproteines.ma/produit/critical-mass-6kg/)                                                                                                                                                                                                                 |
| Calcium Zinc Magnesium 100 tabs                | 250 DH (was 300), in stock     | BioTech USA; generic English description for bone, immune, muscle and nerve support; no dosage or ingredient quantities on visible page. [Page](https://mesproteines.ma/produit/calcium-zinc-magnesium-100-tabs/)                                                                                                                                                                    |
| Animal Pak Orange 44 Scoops                    | 700 DH, in stock               | Daily multivitamin; copy claims 58 vitamins/minerals/enzymes/botanicals/amino acids and gives directions that refer to one pack of 11 tablets; page shows expiry 03/2027. Verify package format and expiry before migration. [Page](https://mesproteines.ma/produit/animal-pak-44-scoops-orange/)                                                                                    |
| Mass Fusion 5.45 kg                            | 750 DH (was 900), in stock     | Nutrabolics; Extreme Chocolate, Salted Caramel, Strawberry Cream, Vanilla Milkshake; copy claims 950 kcal, 50 g protein and 175 g carbs per 246 g serving; dosage copy says 4 scoops/day. [Page](https://mesproteines.ma/produit/mass-fusion-545-kg/)                                                                                                                                |
| Wrist support straps – Mes Proteines Nutrition | 150 DH (was 180), in stock     | Page purchase section was reviewed; no descriptive copy or variant options were exposed in fetched page text. [Page](https://mesproteines.ma/produit/bandes-soutien-poignets-strap-mesprot/)                                                                                                                                                                                         |
| IronMaxx BCAA + Glutamine 800, 130 caps        | 250 DH (was 300), in stock     | Copy describes BCAA (leucine/isoleucine/valine), L-glutamine and B6; claims 1,200 mg BCAA + glutamine per capsule and no fat/carbs. [Page](https://mesproteines.ma/produit/bcaa-glutamine-800-130-caps/)                                                                                                                                                                             |
| Shaker 700 ml                                  | 50 DH, in stock                | Simple shaker with printed logos; selector exposes many numbered design IDs (#1–#23). [Page](https://mesproteines.ma/produit/shaker-simple-700ml/)                                                                                                                                                                                                                                   |
| Hydropure 2.04 kg                              | Out of stock                   | Nutrabolics hydrolyzed whey; flavor list includes Chocolate Banana, Chocolate Coconut, Chocolate Peanut Butter, Extreme Chocolate, Peach Mango Smoothie, Salted Caramel, Vanilla Milkshake. Page copy and nutrition panel exist but conflict: marketing says 26 g protein while supplement facts list 28 g per 35 g scoop. [Page](https://mesproteines.ma/produit/hydropure-204-kg/) |
| Mass Fusion 2.27 kg                            | 600 DH (was 650), in stock     | Nutrabolics; same four flavors and same nutrition text as 5.45 kg page (copy says 950 kcal per 246 g serving). Check whether this unusually large serving/nutrition panel is valid for both sizes. [Page](https://mesproteines.ma/produit/mass-fusion-227-kg/)                                                                                                                       |

| Bandes De Poignet De Force (Mes proteines nutrition) | 150 DH (was 180), in stock | Two color variants: Noir and Rouge. Pair of wrist wraps for heavy training; 45.2 cm long, thumb loop and Velcro closure, 98% elastic/2% nylon, universal size. [Page](https://mesproteines.ma/produit/bandes-de-poignet-de-force-mes-proteines-nutrition/) |
| Grippad Orange Chiba                         | 100 DH (was 130), in stock | Two product images. Copy describes hand-shaped Chiba grip pads with traction grooves for micro-adjustment, intended to improve grip and help prevent calluses. [Page](https://mesproteines.ma/produit/grippad-orange-chiba/) |
| Carnibolic 30 Servings (156 g)                | In stock; catalog shows -20% | Nutrabolics; flavors Fruit Punch, Peach Mango, Iced Raspberry. 30 servings; table lists 2,000 mg L-carnitine, 300 mg green coffee extract, 200 mg Garcinia, 150 mg green tea extract per 5.2 g scoop. Directions: one scoop in 250 ml liquid 20–30 min before training. [Page](https://mesproteines.ma/produit/carnibolic-150-grammes/) |
| Maca 1300 – 260 Caps                           | 500 DH (was 600), in stock   | IronMaxx Maca Origin 1300, 260 Tricaps. Directions: 2 capsules at breakfast with liquid; on training days, an additional 2 capsules 30 minutes before training. Copy contains garbled text, so confirm claims before reuse. [Page](https://mesproteines.ma/produit/maca-1300-260-caps/) |
| Motivation Lady Glove Chiba                    | In stock; catalog shows -14% | Women’s training gloves for weights, cables and machines; copy says they improve grip and reduce calluses and pressure pain. Variant shown: Noir & Rose (M). [Page](https://mesproteines.ma/produit/motivation-lady-glove-chiba/) |
| Opti-Women 120 Caps – USA                       | 300 DH (was 350), in stock   | Optimum Nutrition multivitamin positioned for active women; 120 capsules / 60-day supply, 23 vitamins and minerals. Directions: 2 capsules daily with a meal and water. [Page](https://mesproteines.ma/produit/opti-women-120-caps-usa/) |

The catalog's live load-more control reported “viewed all 27 products” after loading the remainder. This is a catalog count, not proof that all product pages across the site have been reviewed; this reference covers products inspected during this pass and the earlier notes above, not every possible category/archive page. Prices and discount percentages are snapshots; several product page price fields were not exposed in the captured view.
# Mes Proteines Nutrition — Homepage Design System

This system guides the homepage header and hero. It keeps the existing red, charcoal, and white brand cues while giving the store a calmer premium sports identity. COSS Origin's commerce navbar gallery informs the compact utility strip, clear category navigation, and separate search/cart actions.

## Brand palette

| Token | Value | Use |
| --- | --- | --- |
| Brand red | `#D72D32` | Main action, announcement bar, fine accent |
| Deep red | `#B91F28` | Hover and pressed action state |
| Charcoal | `#202326` | Headings, navigation, image stage |
| Soft charcoal | `#2C3135` | Secondary dark surfaces |
| Warm paper | `#FFFDF9` | Main page and navigation surface |
| Sand | `#E9E0D1` | Photography and subtle secondary surface |
| Soft surface | `#F5F2EC` | Quiet control hover state |
| Muted ink | `#666A6D` | Supporting text |

## Type

- Display: Georgia, regular weight, used for the hero statement to add a confident editorial note.
- Interface and body: Geist Sans, clear and compact for French navigation, actions, and supporting copy.
- Utility labels: Geist Sans, uppercase with expanded tracking for the announcement strip and eyebrow.

## Layout and spacing

- Desktop content uses a wide, fluid frame with 6–7% side insets and a centered navigation row.
- Utility strip: compact 37px height. Primary navigation: 88px on desktop and 72px on mobile.
- Desktop hero: wide full-bleed photography, roughly 75vh with a 610px minimum; copy stays in the left third.
- Mobile hero: portrait-specific photography and bottom-left copy; both athletes stay visible above and beside the text.
- Spacing follows a 4px base rhythm, with 8px utility gaps and larger 24–32px action spacing.
- Corners stay mostly square. The primary CTA is a simple rectangle; circular icon controls are reserved for the navbar.

## Components and behavior

- Navbar: COSS Origin commerce-navbar pattern, adapted with the existing project stack; category navigation, search and cart are distinct actions. Mobile uses a native disclosure menu.
- Announcement strip: local service cues from the brand reference — shipping across Morocco, cash on delivery, expert advice, and authentic products.
- Hero: headline, one sentence of support, one primary shop action, and one clear delivery reassurance.
- Icons: Lucide React with consistent stroke weight. All controls have labels and visible keyboard focus.
- Motion: short color and position transitions; reduced-motion preference disables them.

## Image direction

Premium training studio, North African stone and arch detail, deep charcoal equipment, warm natural light, restrained red light accent. Feature a Moroccan woman and man together with equal visual weight. Desktop and portrait mobile images are separately composed so the pair remains visible at both sizes.

## Copy guardrails

French-first. Keep claims limited to visible brand and catalog information. Do not invent review counts, customer numbers, product benefits, or delivery guarantees. Prices and product facts belong to the future Shopify data layer, not this static hero.
