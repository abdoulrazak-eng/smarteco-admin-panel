import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  MapPin, 
  Camera, 
  Fingerprint, 
  Bell, 
  Server, 
  UserCheck, 
  Trash2, 
  Mail, 
  ExternalLink,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SmartEco AI',
  description: 'Privacy Policy for SmartEco AI - Intelligent Waste Management & Circular Economy Platform.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 08, 2026';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-gray-100 px-6 py-4 flex items-center justify-between shadow-xs">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-emerald-900">SmartEco AI</h1>
              <p className="text-xs text-gray-500 font-medium">Intelligent Waste Management & Circular Economy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              href="/delete-account"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-500" />
              <span>Data Deletion</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100 mb-4">
            <Lock className="w-3.5 h-3.5" />
            Official Platform Policy
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            How SmartEco AI collects, uses, protects, and handles your personal data across our mobile applications, web services, and smart IoT waste infrastructure.
          </p>
          <div className="mt-4 text-xs font-medium text-gray-400">
            Effective Date: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs p-8 sm:p-12 space-y-10">

          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">1</span>
              Introduction & Scope
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>SmartEco AI</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the SmartEco AI mobile application, web portals, and IoT smart waste collection services. This Privacy Policy informs users of our policies regarding the collection, processing, protection, and disclosure of personal data when using our platform.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              By using SmartEco AI, you acknowledge that you have read and understood this Privacy Policy. We are dedicated to maintaining the trust of our users through strict privacy standards and compliance with applicable data protection legislation.
            </p>
          </section>

          {/* 2. Information Collection */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">2</span>
              Information We Collect
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To provide reliable waste collection, smart bin tracking, and circular economy rewards, we collect the following categories of information:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
                  <UserCheck className="w-4 h-4" />
                  <span>Account & Contact Data</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  First and last name, email address, phone number (used for primary login authentication and OTP verification), and residential/business address.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Location Data</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Precise and approximate GPS location to display nearby smart waste bins, compute collection routes, and direct waste pickup vehicles to scheduled pickup sites.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
                  <Camera className="w-4 h-4" />
                  <span>Camera Access</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Camera permission is utilized strictly for scanning QR codes affixed to smart bins to record deposits, check fill levels, and credit EcoPoint rewards. We do not store personal photos.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
                  <Fingerprint className="w-4 h-4" />
                  <span>Biometric Verification</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fingerprint and Face biometric authorization is processed 100% on-device via native secure hardware (iOS Keychain / Android Keystore). Biometric scans never leave your device.
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Information */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">3</span>
              How We Use Your Data
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 leading-relaxed">
              <li><strong>Pickup & Route Scheduling:</strong> To assign collectors, plan optimized vehicle routes, and complete scheduled trash and recyclable collections.</li>
              <li><strong>Reward Tracking (EcoPoints):</strong> To calculate recyclable deposit volumes, calculate environmental impact metrics, and credit reward points.</li>
              <li><strong>Notifications & Communications:</strong> To send SMS reminders, WhatsApp updates, or push notifications regarding pickup dispatch, driver arrival, and account security.</li>
              <li><strong>Fraud Prevention & System Security:</strong> To detect anomalies, protect against unauthorized access, and ensure platform safety.</li>
              <li><strong>Billing & Invoicing:</strong> To generate accurate invoices and process payments via licensed mobile money providers (MTN MoMo, Airtel Money).</li>
            </ul>
          </section>

          {/* 4. Third-Party Service Providers */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">4</span>
              Third-Party Service Providers
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We work with trusted third-party service providers who assist us in operating our infrastructure under strict contractual confidentiality obligations:
            </p>
            <div className="divide-y divide-gray-100 border border-gray-200/80 rounded-xl overflow-hidden text-sm">
              <div className="p-3.5 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-gray-800">Google Firebase & Cloud Services</span>
                <span className="text-xs text-gray-500">Authentication, FCM Push Notifications & Database</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-gray-800">Google Maps Platform</span>
                <span className="text-xs text-gray-500">Geocoding, bin geolocation & driver routing</span>
              </div>
              <div className="p-3.5 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-gray-800">Twilio Inc.</span>
                <span className="text-xs text-gray-500">SMS OTP authentication & WhatsApp notifications</span>
              </div>
              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-gray-800">MTN MoMo & Airtel Money</span>
                <span className="text-xs text-gray-500">Mobile payment gateway processing</span>
              </div>
              <div className="p-3.5 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-gray-800">Amazon Web Services (AWS)</span>
                <span className="text-xs text-gray-500">Secure backend hosting & encrypted cloud storage</span>
              </div>
            </div>
          </section>

          {/* 5. Biometric Data Protection */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">5</span>
              Biometric Data Guarantee
            </h2>
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-sm text-emerald-950 leading-relaxed space-y-2">
              <p>
                SmartEco AI values your privacy. When you enable biometric login (Touch ID, Face ID, or Android Biometrics), all authentication is executed exclusively within your operating system&apos;s isolated Secure Enclave / Trusted Execution Environment (TEE).
              </p>
              <p className="font-medium text-emerald-900">
                • SmartEco AI never transmits, receives, or stores your biometric fingerprints or facial geometry on any remote servers.
              </p>
            </div>
          </section>

          {/* 6. Data Retention & Deletion */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">6</span>
              Your Rights & Account Deletion
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              You maintain full ownership of your personal information. You have the right to request access to your data, demand correction of inaccurate records, or request complete account and personal data deletion.
            </p>
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-gray-900">Request Account & Data Deletion</h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  You can purge your profile, registered addresses, and rewards directly via our public web portal.
                </p>
              </div>
              <Link
                href="/delete-account"
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shadow-xs"
              >
                Go to Deletion Portal
              </Link>
            </div>
          </section>

          {/* 7. Data Security */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">7</span>
              Data Security Standards
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We employ strict organizational and technical security measures:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 leading-relaxed">
              <li>End-to-end transport layer encryption (TLS 1.3 / HTTPS) for all mobile and web traffic.</li>
              <li>AES-256 database encryption at rest.</li>
              <li>Stateless JWT authentication tokens with automated session expiration and refresh cycles.</li>
              <li>Granular role-based access control (RBAC) ensuring operational data is isolated strictly by authorization.</li>
            </ul>
          </section>

          {/* 8. Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">8</span>
              Children&apos;s Privacy
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our Services are not designed for or targeted at children under the age of 13. We do not knowingly collect personal information from minors. If you become aware that a child has provided us with personal data without parental consent, please contact us immediately so we can remove such information.
            </p>
          </section>

          {/* 9. Policy Updates */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">9</span>
              Updates to This Policy
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We may update our Privacy Policy periodically to reflect enhancements in technology, service features, or regulatory compliance. Any revisions will be published on this page with an updated &ldquo;Effective Date&rdquo;. Continued use of the Service after changes indicates acceptance.
            </p>
          </section>

          {/* 10. Contact Us */}
          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-extrabold">10</span>
              Contact Us
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you have any questions, concerns, or requests concerning this Privacy Policy or your personal information, please contact our Data Protection Team:
            </p>
            <div className="p-4 rounded-xl border border-gray-200/80 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
              <div className="space-y-1">
                <p className="font-semibold text-gray-900">SmartEco AI Data Protection Office</p>
                <p className="text-xs text-gray-600">Kigali, Rwanda</p>
              </div>
              <a 
                href="mailto:support@smarteco.rw" 
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@smarteco.rw
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 px-6 text-center text-xs text-gray-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SmartEco AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-emerald-700 hover:underline font-medium">Privacy Policy</Link>
            <Link href="/delete-account" className="text-gray-500 hover:text-gray-700 transition-colors">Account Deletion</Link>
            <a href="mailto:support@smarteco.rw" className="text-gray-500 hover:text-gray-700 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
