"use client"

import { useEffect } from "react"

export default function GoogleAnalytics() {
  useEffect(() => {
    // Create the first script element (gtag.js)
    const gtagScript = document.createElement("script")
    gtagScript.async = true
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-SF7YBY8398"

    // Create the second script element (inline script)
    const inlineScript = document.createElement("script")
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SF7YBY8398');
    `

    // Append both scripts to the document head
    document.head.appendChild(gtagScript)
    document.head.appendChild(inlineScript)

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.head.removeChild(gtagScript)
      document.head.removeChild(inlineScript)
    }
  }, [])

  return null
}
