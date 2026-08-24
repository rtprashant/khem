import { site } from "@/data/site";

// ─────────────────────────────────────────────────────────────
// FormSubmit configuration
// Everything about the form-delivery service lives here so the
// UI components never need to know the endpoint or payload shape.
// To go live: confirm `site.email` in src/data/site.js is correct,
// then (first submission) confirm the activation email FormSubmit
// sends to that inbox.
// ─────────────────────────────────────────────────────────────
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

/**
 * Sends the consultation-booking form to FormSubmit.
 * @param {Object} fields - form values keyed by field name.
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
export async function sendContactForm(fields) {
  const payload = {
    ...fields,
    _subject: `New consultation request — ${site.shortName}`,
    _template: "table",
    _captcha: "false",
  };

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`FormSubmit responded with ${response.status}`);
    }

    return { ok: true, message: "Your consultation request has been sent." };
  } catch (error) {
    return {
      ok: false,
      message:
        "Something went wrong sending your request. Please WhatsApp or call the studio directly.",
    };
  }
}

/**
 * Builds a wa.me link pre-filled with the client's form info.
 */
export function buildWhatsappLink(fields = {}) {
  const parts = [
    `Hi Khem, I'd like to book a consultation.`,
    fields.name ? `Name: ${fields.name}` : null,
    fields.service ? `Service: ${fields.service}` : null,
    fields.preferredDate ? `Preferred date: ${fields.preferredDate}` : null,
    fields.message ? `Idea: ${fields.message}` : null,
  ].filter(Boolean);

  const text = encodeURIComponent(parts.join("\n"));
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
