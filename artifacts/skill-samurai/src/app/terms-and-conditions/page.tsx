import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Skill Samurai Winnipeg",
  description: "Terms and Conditions for Skill Samurai Winnipeg coding and STEM classes.",
  robots: { index: false, follow: false },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary mb-10 hover:underline">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-black font-heading text-secondary mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-secondary/50 mb-10">Last Updated: October 9, 2025</p>

        <div className="prose prose-secondary max-w-none text-secondary/80 leading-relaxed space-y-8">
          <p>
            Welcome to Skill Samurai Pty. Ltd. ("Skill Samurai," "we," "our," "us"). These Terms of Service ("Terms") govern your access to and use of our website, programs, and communications—including SMS messaging services. By visiting our website or participating in our programs, you agree to these Terms and to our{" "}
            <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">1. Acceptance of Terms</h2>
            <p>By using our website or services, including SMS notifications, you acknowledge that you have read and agree to these Terms. If you do not agree, please do not use our website or subscribe to our SMS services.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">2. Services Overview</h2>
            <p>Skill Samurai provides educational programs for children and families, including coding, robotics, STEM camps, and related communications. Services may include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Web-based program registration and payment processing</li>
              <li>Email and SMS notifications regarding schedules, class updates, and offers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">3. Eligibility</h2>
            <p>You must be at least 18 years old or have a parent/guardian&apos;s consent to use our services or enroll a child in Skill Samurai programs.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">4. Account Registration</h2>
            <p>To access certain features, you may create an account by providing accurate information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">5. SMS Messaging Program</h2>
            <p><strong>Program Name:</strong> Skill Samurai Alerts</p>
            <p className="mt-2"><strong>Program Description:</strong> Upon opting in, you may receive text messages related to class reminders, event updates, promotional offers, and customer service notifications.</p>
            <p className="mt-2"><strong>Opt-Out Instructions:</strong> Text "STOP" to the shortcode or number that sent you the message to cancel. You will receive one final confirmation message that you have unsubscribed. After confirmation, you will no longer receive SMS messages from Skill Samurai.</p>
            <p className="mt-2"><strong>Rejoining Instructions:</strong> To re-subscribe, sign up again through our website or text "START" to the same shortcode.</p>
            <p className="mt-2"><strong>Help Instructions:</strong> For help, reply "HELP" to any message, or contact us at <a href="mailto:support@skillsamurai.com" className="text-primary hover:underline">support@skillsamurai.com</a>.</p>
            <p className="mt-2"><strong>Message Frequency &amp; Rates:</strong> Message frequency varies. Message and data rates may apply. For questions regarding your text or data plan, please contact your wireless carrier.</p>
            <p className="mt-2"><strong>Carrier Liability Disclaimer:</strong> Mobile carriers are not liable for delayed or undelivered messages.</p>
            <div className="mt-4 p-4 bg-secondary/5 rounded-xl border border-secondary/10 text-sm">
              <strong>Privacy:</strong> No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services (e.g., customer service) is permitted. All other use-case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties except aggregators and providers of the Text Message services.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">6. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use our services for lawful purposes only.</li>
              <li>Not interfere with or disrupt our website or communications systems.</li>
              <li>Provide accurate information when registering or communicating with us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">7. Payments</h2>
            <p>All payments for programs are processed through secure third-party gateways such as Stripe. Skill Samurai does not store payment card details.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">8. Intellectual Property</h2>
            <p>All website content, logos, program materials, and branding are the intellectual property of Skill Samurai Pty. Ltd. and may not be reproduced or distributed without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Skill Samurai and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use or inability to use our services</li>
              <li>SMS delays or delivery failures</li>
              <li>Errors, omissions, or inaccuracies in our materials</li>
            </ul>
            <p className="mt-2">Our total liability for any claim shall not exceed the amount you paid for the specific service in question.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">10. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Skill Samurai, its officers, employees, and partners from any claims or damages arising out of your violation of these Terms or misuse of our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">11. Termination</h2>
            <p>We may suspend or terminate your access to our services if we reasonably believe that you have violated these Terms, applicable laws, or caused harm to others or the company.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">12. Governing Law</h2>
            <p>These Terms are governed by the laws of the jurisdiction in which Skill Samurai operates, without regard to its conflict-of-laws principles.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">13. Modifications</h2>
            <p>We may revise these Terms from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our services constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-secondary mb-3">14. Contact Us</h2>
            <p>For questions about these Terms or our SMS program, contact:</p>
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
