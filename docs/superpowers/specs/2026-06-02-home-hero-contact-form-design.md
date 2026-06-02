# Home Hero Contact Form Design

## Context

The home page hero currently uses a dark gradient background, text on the left, and a separate image/stat card on desktop. The contact page already has a functional form that posts to `https://black-elephant.app.n8n.cloud/webhook/verite-contact-form`.

The approved change is desktop-only: the home hero should use Eneida's image as a full background and include a functional contact form directly inside the hero.

## Scope

- Apply the redesigned hero only at the Tailwind `lg` breakpoint and above.
- Keep the existing mobile hero behavior and layout intact.
- Use `/images/eneida.png` as the full-bleed hero background on desktop.
- Add a functional form in the desktop hero with these fields:
  - full name
  - email
  - phone
  - message
- Submit to the same webhook used by the contact page.
- Use a glass effect form surface with rounded corners and a `1px solid` white border.

## Layout Direction

Use the approved first composition:

- Left side: keep the hero headline, supporting copy, badge, and CTA buttons.
- Right side: place the contact form in a compact glass panel.
- Background: Eneida's image covers the full hero area on desktop with `object-cover`.
- Readability: add dark/gold overlays above the image and below the content so text and form remain legible without hiding the photograph.
- Remove the current desktop-only right image/stat card from the hero, since the image becomes the background.

## Visual Treatment

The direction is refined and institutional: strong photographic presence, restrained gold highlights, and a polished glass form.

The form panel should use:

- white border at `1px solid`
- rounded corners
- translucent white background
- backdrop blur
- subtle shadow for separation from the image
- white or near-white labels/text
- high-contrast focus states using the existing gold palette

The fields should stay compact enough to fit comfortably in the first viewport on common desktop sizes.

## Behavior

The home hero form should maintain its own local form state, including:

- `nome`
- `email`
- `telefone`
- `mensagem`
- submitting state
- success state
- error state

On submit, it should POST JSON to the existing webhook with:

- `nome`
- `email`
- `telefone`
- `mensagem`

Fields should be required. After a successful submit, clear the form and show a concise success message. If the webhook fails, show a concise error message.

## Implementation Notes

- `src/app/page.tsx` is already a client component, so local React state can be added directly.
- Reuse the existing import patterns from the home page and contact page.
- Keep the change scoped to the home hero unless a small helper is clearly needed.
- Do not change the contact page form behavior.
- Do not change mobile layout except where unavoidable to keep existing rendering stable.

## Testing

Verify:

- `npm run build` completes successfully.
- Desktop hero shows Eneida's image as a full background.
- Desktop hero shows the glass contact form on the right.
- Mobile hero remains visually consistent with the current mobile version and does not show the new desktop form.
- Required fields block empty submission.
- Submit uses the same webhook endpoint as the contact page.
- Success and error states render without layout overlap.

## Out of Scope

- Redesigning the contact page.
- Adding new contact fields beyond name, email, phone, and message.
- Changing webhook infrastructure.
- Creating new image assets.
