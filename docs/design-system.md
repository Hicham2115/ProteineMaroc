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
