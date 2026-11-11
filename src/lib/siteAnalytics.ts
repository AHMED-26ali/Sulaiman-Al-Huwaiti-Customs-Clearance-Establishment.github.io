/**
 * Privacy-safe, presentation-independent GA4 interaction tracking.
 * Only static event and placement labels are sent: never phone numbers,
 * customer names, messages, customs declarations or outbound URLs.
 *
 * Page views remain handled by GA4 Enhanced Measurement for SPA navigation.
 */
export type SiteEvent =
  | 'contact_call_click'
  | 'contact_whatsapp_click'
  | 'contact_form_whatsapp_click'
  | 'contact_cta_click'
  | 'services_cta_click';

export type EventPlacement =
  | 'contact_team'
  | 'contact_form'
  | 'home_hero'
  | 'home_cta'
  | 'home_office'
  | 'header'
  | 'footer';

export function trackSiteInteraction(event: SiteEvent, placement: EventPlacement): void {
  if (typeof window === 'undefined') return;

  try {
    const gtag = (window as Window & {
      gtag?: (...args: unknown[]) => void;
    }).gtag;
    if (typeof gtag !== 'function') return;

    gtag('event', event, {
      interaction_source: placement,
      transport_type: 'beacon',
    });
  } catch {
    // Tracking must never interrupt a customer call, WhatsApp or navigation.
  }
}
