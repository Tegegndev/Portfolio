// Analytics utility functions

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-SF7YBY8398", {
      page_path: url,
    })
  }
}

// Track events
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (command: string, target: string, config?: Record<string, unknown> | string) => void
    dataLayer: unknown[]
  }
}
