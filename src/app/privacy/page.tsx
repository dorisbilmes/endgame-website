import type { Metadata } from "next";
import { HeroSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Endgame Data Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <HeroSection
        title="Data Privacy Policy"
        description=""
        buttonText={null}
        videoSrc={null}
        align="center"
      />
      <section className="py-20 bg-[var(--color-canvas)] w-full">
        <div className="prose max-w-[720px] mx-auto relative flex-none w-full h-auto whitespace-pre-wrap break-words [&>p]:mb-[24px]">
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            Last Updated: March 5, 2025
          </p>
          
          <p>
            This Privacy Policy describes how Endgame Labs, Inc. (“Endgame,” “we,” or “us”) collects, uses, discloses and otherwise processes information about you. This Privacy Policy applies to information we collect when you access or use our website (the “Website”) or when you otherwise interact with us, such as through our product usage and sales services (the “Services”). We process certain personal information as a service provider/processor on behalf of our customers.
          </p>

          <p>
            This Privacy Policy is effective as of the “Last Updated” date above. We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the “Last Updated” date. Where required by law, we will provide you with additional notice (such as by adding a statement to the Website or sending you a notification). We encourage you to review this Privacy Policy regularly to stay informed about our information practices and the choices available to you.
          </p>

          <h2>COLLECTION OF INFORMATION</h2>
          <h3>Information You Provide to Us</h3>
          <p>
            We collect information directly from you when you create an account, request customer support, or otherwise communicate with us. The categories of information we collect include:
          </p>
          <ul>
            <li><strong>Identification and Contact Information:</strong> we collect your name, email address, phone number, and size of your sales team.</li>
            <li><strong>Communication Information:</strong> we collect information included in your communications with us.</li>
          </ul>
          <p>
            We may also collect any other information you choose to provide.
          </p>

          <h3>Information We Collect Automatically</h3>
          <p>
            We automatically collect the following categories of information:
          </p>
          <ul>
            <li><strong>Internet Activity Information:</strong> we collect information about how you access our Website, including data about the device and network you use, such as your hardware model, operating system version, mobile network, IP address, unique device identifiers, and browser type. We also collect information about your activity on our Website and interaction with our communications, such as access times, pages viewed, links clicked, and the page you visited before navigating to our Website.</li>
            <li><strong>Support Information:</strong> If you call or chat with our customer service team, we may monitor and retain those conversations.</li>
            <li><strong>Information Collected by Cookies and Similar Tracking Technologies:</strong> We use tracking technologies, such as cookies and pixels, to collect information about your interactions with our Website and communications. These technologies help us improve our Website and communications, see which areas and features of our Website are popular, count visits, and track clicks. You may be able to adjust your browser settings to remove or reject browser cookies. Please note that removing or rejecting cookies could affect the availability and functionality of our Website.</li>
          </ul>

          <h3>Information We Collect from Other Sources</h3>
          <p>
            We may also obtain information from other sources. For example, we may collect information like contact and employment information about Endgame customers and potential customers from advertising networks and lead generation providers. We also collect lead enhancement information like contact information, employment and/or education information, social media activity, and broad/course location information like city/country of residence (“Lead Enhancement Information”) about our customers’ current, former, and potential customers from third party data providers, social media platforms, and publicly available sources.
          </p>

          <h3>Derived Information</h3>
          <p>
            We may derive information or draw inferences about you based on the information we collect. For example, we may make inferences about your approximate location based on your IP address.
          </p>

          <h2>USE OF INFORMATION</h2>
          <p>
            We use the categories of information we collect for the following business and commercial purposes:
          </p>
          <ul>
            <li><strong>Service Delivery:</strong> we use information to provide and maintain our Website and Services.</li>
            <li><strong>Communication:</strong> we use information to communicate with you about Endgame and our Services, including to send you newsletters, respond to your questions, inform you of price or Services changes, and send you other transactional or relationship messages.</li>
            <li><strong>Marketing and Advertising:</strong> we use information to send direct marketing messages (including via email) and target advertisements to you on third-party platforms and websites as described below. You can opt out of direct marketing messages we send by following the instructions in those communications (such as by clicking “unsubscribe” in the emails) or by contacting us.</li>
            <li><strong>Conducting Analytics:</strong> we use information to monitor and analyze Website trends, usage, and activities, improve our Website, and generate de-identified data. We also use information to improve our Services and to develop new products and services, including to train our artificial intelligence models.</li>
            <li><strong>Protection and Compliance:</strong> we use information to detect, investigate, and help prevent security incidents and other malicious, deceptive, fraudulent, or illegal activity, help protect the rights and property of Endgame and others, and comply with our legal and financial obligations.</li>
          </ul>

          <h2>TARGETED ADVERTISING AND ANALYTICS</h2>
          <p>
            We engage others to provide analytics services, serve advertisements, and perform related services. These entities may use cookies, web beacons, device identifiers, and other technologies to collect information about your use of our Website and your activities across third-party websites and mobile apps, including your IP address, web browser and mobile network information, pages viewed, time spent on pages, and links clicked. This information is used to deliver advertising targeted to your interests on other companies’ websites or mobile apps and to analyze and track data, determine the popularity of certain content, and better understand your activity.
          </p>
          <p>
            You can also learn more about interest-based ads, or opt out of having your web browsing information used for behavioral advertising purposes by companies that participate in the Digital Advertising Alliance, by visiting <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a>.
          </p>

          <h2>DISCLOSURE OF INFORMATION</h2>
          <p>
            We disclose the categories of information described above as follows:
          </p>
          <ul>
            <li><strong>Vendors:</strong> we disclose information to vendors, service providers, contractors and consultants that need this information to provide services to us, such as companies that assist us with web hosting, payment processing, customer service, analytics, and marketing and advertising.</li>
            <li><strong>Customers:</strong> we make Lead Enhancement Information available to our customers.</li>
            <li><strong>Professional Advisors:</strong> we disclose information to our lawyers and other professional advisors where necessary to obtain advice or otherwise protect and manage our business interests.</li>
            <li><strong>Legal Authorities:</strong> we may disclose information to legal authorities and others for the Protection and Compliance purposes described above, including if we believe that disclosure is in accordance with, or required by, any applicable law or legal process, including lawful requests by public authorities to meet national security or law enforcement requirements and if we believe that your actions are inconsistent with our user agreements or policies, if we believe that you have violated the law, or if we believe it is necessary to protect the rights, property, and safety of Endgame, our users, the public, or others.</li>
            <li><strong>Corporate Transactions:</strong> we reserve the right to disclose information in connection with, or during negotiations of certain corporate transactions, including the merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
            <li><strong>Affiliates:</strong> we reserve the right to disclose information between and among Endgame and any current or future parents, affiliates, subsidiaries, and other companies under common control and ownership.</li>
            <li><strong>Consent:</strong> we may disclose information when we have your consent or you direct us to do so.</li>
          </ul>
          <p>
            We also disclose de-identified information that cannot reasonably be used to identify you.
          </p>

          <h2>TRANSFER OF INFORMATION</h2>
          <p>
            Endgame is headquartered in the United States and we have operations and vendors in the United States and other countries. Therefore, we and those that perform work for us may transfer your information to, or store or access it in, jurisdictions that may not provide levels of data protection that are equivalent to those of your home jurisdiction.
          </p>

          <h2>APPLICANT INFORMATION</h2>
          <p>
            When you apply for a position with Endgame, we collect the information that you provide in connection with your application. This includes name, contact information, professional credentials and skills, educational and work history, and other information that may be included in a resume or provided during interviews (which may be recorded). This may also include demographic or diversity information. We may also conduct background checks and receive related information.
          </p>
          <p>
            We use applicants’ information to facilitate our recruitment activities and process applications, including evaluating candidates and monitoring recruitment and hiring statistics. We use successful candidates’ information to administer the employment or independent contractor relationship. We may also use and disclose applicants’ information (a) to improve our Website, (b) as otherwise necessary to comply with applicable laws, (c) to respond to subpoenas or warrants served on Endgame, and (d) to protect and defend the rights or property of Endgame or others.
          </p>

          <h2>USER RIGHTS</h2>
          <p>
            You have the following rights regarding your personal information:
          </p>
          <ul>
            <li><strong>Deletion of Personal Information:</strong> If you would like us to delete your personal information, please email <a href="mailto:privacy@endgame.io">privacy@endgame.io</a> with the subject Forget me.</li>
            <li><strong>Correction of Inaccurate Personal Information:</strong> If you believe any personal information we have about you is inaccurate and would like it corrected, please email <a href="mailto:privacy@endgame.io">privacy@endgame.io</a> with the subject Personal Information Correction.</li>
            <li><strong>Opting Out of the Sale or Sharing of Personal Information:</strong> If you wish to opt out of the sale or sharing of your personal information, please email <a href="mailto:privacy@endgame.io">privacy@endgame.io</a> with the subject Personal Information Sharing Opt-Out.</li>
            <li><strong>Automated Request Access:</strong> If you are interested in accessing an API for automating such requests, please email <a href="mailto:privacy@endgame.io">privacy@endgame.io</a> with the subject Automated Personal Information Management.</li>
          </ul>

          <h2>CONTACT US</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:legal@endgame.io">legal@endgame.io</a>.
          </p>
        </div>
      </section>
    </>
  );
}

