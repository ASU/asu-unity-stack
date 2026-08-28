import { LitElement } from 'lit';

/**
 * Base element for all UDS Lit web components.
 * Provides shared utilities and lifecycle hooks.
 */
export class UdsBaseElement extends LitElement {
  /**
   * Track a Google Analytics event via the dataLayer.
   */
  protected trackGA(detail: {
    component: string;
    action: string;
    label?: string;
    event?: string;
    name?: string;
    type?: string;
    region?: string;
    section?: string;
  }): void {
    const dataLayer = (window as any).dataLayer;
    const payload = {
      event: detail.event ?? 'collapse',
      action: detail.action.toLowerCase(),
      name: detail.name ?? 'onclick',
      type: detail.type ?? 'click',
      region: detail.region ?? 'main content',
      section: detail.section ?? '',
      text: detail.label?.toLowerCase() ?? '',
      component: detail.component.toLowerCase(),
    };
    if (dataLayer) {
      dataLayer.push(payload);
    }
  }
}
