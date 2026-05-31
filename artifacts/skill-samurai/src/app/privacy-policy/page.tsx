import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Skill Samurai Winnipeg",
  description: "Privacy Policy for Skill Samurai Winnipeg coding and STEM classes.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary mb-10 hover:underline">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-black font-heading text-secondary mb-2">Privacy Policy</h1>
        <p className="text-sm text-secondary/50 mb-10">Last updated: October 9, 2025</p>

        <div className="prose prose-secondary max-w-none text-secondary/80 leading-relaxed space-y-8">
          <p>
            Skill Samurai Pty. Ltd. ("Skill Samurai," "we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, register for our programs, or subscribe to our SMS messaging services. By using our services, you agree to the terms of this Privacy Policy.
          </p>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">1. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Contact Information:</strong> name, email address, phone number, and mailing address.</li>
              <li><strong>Account Information:</strong> username, password, and related credentials.</li>
              <li><strong>Payment Information:</strong> billing address and payment method (processed through secure third-party processors).</li>
              <li><strong>Usage Information:</strong> website visits, device details, and IP address for analytics and security.</li>
              <li><strong>Communications:</strong> preferences and interactions with our support or marketing channels.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide, maintain, and improve our services.</li>
              <li>Process transactions and manage your account.</li>
              <li>Communicate with you about programs, updates, and events.</li>
              <li>Send SMS messages (if you opt in) regarding class updates, reminders, or promotions.</li>
              <li>Comply with legal obligations and protect against fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">3. SMS Messaging Program (A2P Compliance Statement)</h2>
            <p><strong>Program Name:</strong> Skill Samurai Alerts</p>
            <p className="mt-2"><strong>Program Description:</strong> Subscribers may receive SMS messages related to class reminders, enrollment confirmations, event announcements, promotional offers, and customer service updates.</p>
            <p className="mt-2"><strong>Opt-Out Instructions:</strong> You can cancel the SMS service at any time. Simply text "STOP" to the shortcode or number from which you received messages. Upon sending "STOP," you will receive a confirmation message, and you will no longer receive SMS messages from us.</p>
            <p className="mt-2"><strong>Rejoining Instructions:</strong> To rejoin, sign up as you did initially, or text "START" to the same shortcode to begin receiving messages again.</p>
            <p className="mt-2"><strong>Help Instructions:</strong> If you experience issues with the messaging program, reply with "HELP" for more assistance, or contact our support team at <a href="mailto:support@skillsamurai.com" className="text-primary hover:underline">support@skillsamurai.com</a>.</p>
            <p className="mt-2"><strong>Carrier Liability Disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.</p>
            <p className="mt-2"><strong>Message Frequency and Rates:</strong> Message frequency varies. Message and data rates may apply. For questions about your text or data plan, contact your wireless provider.</p>
            <div className="mt-4 p-4 bg-secondary/5 rounded-xl border border-secondary/10 text-sm">
              <strong>Important A2P Compliance:</strong> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">4. Data Sharing and Disclosure</h2>
            <p>We do <strong>not sell or share</strong> personal information with third parties for marketing or promotional purposes. We may share information only in the following limited situations:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>With service providers or subcontractors assisting with website hosting, customer support, or payment processing.</li>
              <li>When required by law, regulation, or legal process.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">5. Data Retention</h2>
            <p>We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">6. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies for website functionality and analytics. You may disable cookies in your browser settings; however, this may affect your site experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">7. Your Privacy Rights</h2>
            <p>Depending on your location, you may have rights to access, correct, delete, or restrict certain uses of your data. To exercise these rights, contact us at <a href="mailto:winnipeg@skillsamurai.com" className="text-primary hover:underline">winnipeg@skillsamurai.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">8. Security</h2>
            <p>We implement reasonable technical and administrative safeguards to protect your information. However, no online transmission is completely secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">9. Children&apos;s Privacy</h2>
            <p>Our services are designed for parents and guardians enrolling students. We do not knowingly collect personal information from children under 13 without parental consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">10. Links to Other Sites</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Updates will be posted on this page with the "Last updated" date revised accordingly.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <p className="mt-2"><strong>Skill Samurai Winnipeg</strong><br />
            Email: <a href="mailto:winnipeg@skillsamurai.com" className="text-primary hover:underline">winnipeg@skillsamurai.com</a><br />
            Website: <a href="https://www.skillsamuraiwinnipeg.com" className="text-primary hover:underline">www.skillsamuraiwinnipeg.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
