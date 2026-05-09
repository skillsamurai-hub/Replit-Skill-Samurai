"use client";

import Script from "next/script";

export function ContactForm() {
  return (
    <div className="rounded-3xl overflow-hidden border border-border bg-white shadow-sm" style={{ minHeight: 984 }}>
      <iframe
        src="https://link.skillsamurai.com/widget/form/IQgM9f88Vnnv8Lep8JV0"
        style={{ width: "100%", height: "100%", border: "none", minHeight: 984 }}
        id="inline-IQgM9f88Vnnv8Lep8JV0"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Us"
        data-height="984"
        data-layout-iframe-id="inline-IQgM9f88Vnnv8Lep8JV0"
        data-form-id="IQgM9f88Vnnv8Lep8JV0"
        title="Contact Us"
      />
      <Script
        src="https://link.skillsamurai.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
