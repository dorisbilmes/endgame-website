import type { Metadata } from "next";
import { HeroSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Endgame Terms of Use",
  description: "Endgame Terms of Use",
};

export default function TermsPage() {
  return (
    <>
      <HeroSection
        title="Endgame Terms of Use"
        description=""
        buttonText={null}
        videoSrc={null}
        align="center"
      />
      <section className="py-20 bg-[var(--color-canvas)] w-full">
        <div 
          className="prose max-w-[720px] mx-auto relative flex-none w-full h-auto whitespace-pre-wrap break-words [&>p]:mb-[24px]"
        >
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            Last Revised: 07/09/2025
          </p>
          <p>
            The following terms and conditions (the “Terms of Use”) constitute a binding agreement between you and Endgame Labs, Inc. (“Endgame,” “we,” or “us”) with respect to your use of endgame.io (“Site”) and the services available on the Site (collectively, the “Services”), including any Content (as defined in Section 2 below).
          </p>

          <p>
            By accessing or using the Services in any manner (whether automated or otherwise), you (A) ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO THESE TERMS AND OUR PRIVACY POLICY, WHICH IS INCORPORATED HEREIN BY REFERENCE, and (B) affirm that you are at least 18 years of age (or have reached the age of majority in the jurisdiction where you reside). <strong>IF YOU DO NOT AGREE TO THESE TERMS OR OUR PRIVACY POLICY, DO NOT USE THE SERVICES.</strong>
          </p>

          <p className="font-bold">
            THESE TERMS INCLUDE AN AGREEMENT TO MANDATORY ARBITRATION, WHICH MEANS THAT YOU AGREE TO SUBMIT ANY DISPUTE RELATED TO THE SITE OR THE SERVICES, THESE TERMS AND/OR OUR PRIVACY POLICY TO BINDING INDIVIDUAL ARBITRATION RATHER THAN PROCEEDING IN COURT. THE DISPUTE RESOLUTION PROVISION ALSO INCLUDES A CLASS ACTION WAIVER, WHICH MEANS THAT YOU AGREE TO PROCEED WITH ANY DISPUTE INDIVIDUALLY AND NOT AS PART OF A CLASS ACTION. MORE INFORMATION ABOUT THE ARBITRATION AND CLASS ACTION WAIVER CAN BE FOUND IN SECTION 11 (ARBITRATION AGREEMENT) BELOW.
          </p>

          <p className="font-bold">
            THESE TERMS ALSO INCLUDE A JURY TRIAL WAIVER.
          </p>

          <h2>1. Changes to Terms</h2>
          <p>
            We may revise and update these Terms from time to time in our sole discretion. The date these Terms were last updated is set forth at the top of this page. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
          </p>

          <h2>2. Scope of and Restrictions on Use</h2>
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services for your personal, non-commercial use, including any graphics, text, instructions, images, audio files and/or other sounds, videos, and other materials you may view on, access through, or are otherwise related to the Services (collectively, the “Content”). Except as otherwise provided in these Terms, the Content may not be copied, downloaded, or stored in a retrieval system for any other purpose, nor may it be redistributed, reused, or modified for any purpose, without the express written permission of Endgame. You agree not to:
          </p>
          <ul>
            <li>collect information from the Services using an automated software tool or manually on a mass basis;</li>
            <li>use automated means to access the Services, or gain unauthorized access to the Services or to any account or computer system connected to the Services;</li>
            <li>obtain, or attempt to obtain, access to areas of the Site or our systems that are not intended for access by you;</li>
            <li>“flood” the Services with requests or otherwise overburden, disrupt, or harm the Services or our systems;</li>
            <li>restrict or inhibit other users from accessing or using the Services;</li>
            <li>modify or delete any copyright, trademark, or other proprietary rights notices that appear on the Site or in the Content; or</li>
            <li>access or use the Services or Content for any unlawful purpose or otherwise beyond the scope of the rights granted herein.</li>
          </ul>
          <p>
            The Services (including the Content) are owned by Endgame and are protected under copyright, trademark, and other applicable United States and international laws and treaties. Without limiting the foregoing, the trademarks, service marks, and logos displayed on the Site are registered and unregistered marks of Endgame. You acknowledge and agree that, as between you and Endgame, Endgame is and shall remain the sole owner of the Services and the Content, including, without limitation, all patents, copyrights, trademarks, trade secrets, and other intellectual property and proprietary rights therein and thereto.
          </p>

          <h2>3. Account Registration and Security</h2>
          <p>
            Access to and use of certain Services may require you to register for an account. You agree to provide true, accurate, current, and complete information about yourself as prompted by the applicable registration or log-in form, and you are responsible for keeping such information up to date. You are responsible and liable for all activities conducted through your account, regardless of who conducts those activities. You may not share your account with anyone or allow anyone else to access or use your account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to immediately notify us of any unauthorized use of your account, or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your username or password.
          </p>

          <h2>4. Electronic Communications</h2>
          <p>
            The communications between you and Endgame via the Services use electronic means. For contractual purposes, you consent to receive communications from us in electronic form, and you agree that all terms and conditions, agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
          </p>

          <h2>5. Privacy Policy</h2>
          <p>
            You acknowledge and agree that all information collected by Endgame is subject to our Privacy Policy. By using the Services, you consent to all actions we take with respect to your information in compliance with our Privacy Policy.
          </p>

          <h2>6. Change and Suspension</h2>
          <h3>6.1 Changes to the Services</h3>
          <p>
            Endgame reserves the right to make changes to, suspend, or discontinue (temporarily or permanently) the Services or any portion thereof (including any Content) at any time. You agree that Endgame will not be liable to you or to any third party for any such change, suspension, or discontinuance.
          </p>
          <h3>6.2 Suspension/Termination of Access</h3>
          <p>
            Endgame has the right to deny access to, and to suspend or terminate your access to, the Services or to any features or portions thereof, at any time and for any reason, including if you violate these Terms. In the event that we suspend or terminate your access to the Services, you will continue to be bound by the Terms that were in effect as of the date of your suspension or termination.
          </p>

          <h2>7. Disclaimer; Limitation of Liability</h2>
          <h3>7.1 Disclaimer of Warranties</h3>
          <p className="text-sm uppercase">
            THE SERVICES AND THE CONTENT ARE PROVIDED TO YOU ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT WARRANTIES OF ANY KIND, AND ENDGAME HEREBY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. NEITHER ENDGAME NOR ANY PERSON ASSOCIATED WITH ENDGAME MAKES ANY REPRESENTATION OR WARRANTY WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICE OR ANY CONTENT. WITHOUT LIMITING THE FOREGOING, NEITHER ENDGAME NOR ANYONE ASSOCIATED WITH ENDGAME REPRESENTS OR WARRANTS THAT THE SERVICES OR THE CONTENT WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES, CONTENT, OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SERVICES OR THE CONTENT WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
          </p>
          <h3>7.2 Limitation of Liability</h3>
          <p className="text-sm uppercase">
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL ENDGAME OR ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES OR THE CONTENT, INCLUDING, BUT NOT LIMITED TO, PERSONAL INJURY OR DEATH, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS, LOSS OF USE, OR LOSS OF DATA, WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE. THE FOREGOING LIMITATIONS SHALL APPLY EVEN IF YOUR REMEDIES UNDER THESE TERMS FAIL OF THEIR ESSENTIAL PURPOSE. USE OF THE SERVICES IS AT YOUR SOLE RISK.
          </p>
          <h3>7.3 Exclusions</h3>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain warranties or consequential damages, so some of the exclusions and/or limitations in this Section 7 may not apply to you.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold Endgame and its officers, directors, employees, agents, licensors, and service providers harmless from and against any claims, liabilities, losses, damages, judgments, awards, costs, and expenses (including reasonable attorneys’ fees) arising out of or resulting from your use of the Services and/or any Content, or any violation of these Terms or applicable law. We reserve the right, at our own expense, to assume the exclusive defense and control of any action subject to indemnification by you, and in such event you agree to cooperate with us in defending such action. Your indemnification, defense, and hold harmless obligations will survive the termination of your use of the Services and/or these Terms.
          </p>

          <h2>9. Third Party Materials</h2>
          <p>
            The Services may display, include, or make available third-party content (including data, information, applications and other products services and/or materials) or provide links to third-party websites or services (collectively, “Third Party Materials”). You acknowledge and agree that Endgame is not responsible for any Third Party Materials, including their accuracy, completeness, timeliness, validity, legality, decency, quality, or any other aspect thereof. Endgame does not assume and will not have any liability to you or any other person or entity for any Third Party Materials. Third Party Materials and links thereto are provided solely as a convenience to you, and you access and use them at entirely at your own risk and subject to such third parties’ terms and conditions.
          </p>

          <h2>10. Third Party Platforms</h2>
          <p>
            Endgame may provide the Services to you through third-party websites, operating systems, platforms, and portals (collectively, “Third Party Platforms”). Additional terms and conditions may apply to you with respect to your use of Third Party Platforms, which are not under Endgame’s control. Endgame does not assume any responsibility or liability for your use of such Third Party Platforms.
          </p>

          <h2>11. Linking to the Site</h2>
          <p>
            You may link to the Site’s homepage, provided you do so in a way that is fair and legal and does not damage or take advantage of our reputation, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part where none exists. You must not establish a link from any website that is not owned by you. The Site must not be framed on any other website, nor may you create a link to any part of the Site other than the homepage. You agree to cooperate with us in causing any unauthorized framing or linking immediately to cease. We reserve the right to withdraw linking permission without notice.
          </p>

          <h2>12. Arbitration Agreement</h2>
          <p className="font-bold uppercase">
            PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS AND IMPACTS THE WAY THAT YOU AND WE BRING CLAIMS AGAINST EACH OTHER AND HOW THOSE CLAIMS ARE DECIDED.
          </p>
          <h3>12.1 Dispute Resolution</h3>
          <p className="text-sm uppercase">
            YOU AND WE AGREE THAT ANY DISPUTE OR CLAIM RELATING IN ANY WAY TO THE INTERPRETATION, APPLICABILITY, ENFORCEABILITY, OR FORMATION OF THESE TERMS OR YOUR USE OF THE SERVICES AND/OR CONTENT WILL BE RESOLVED EXCLUSIVELY THOUGH FINAL AND BINDING ARBITRATION, RATHER THAN IN COURT. THIS AGREEMENT TO ARBITRATE IS INTENDED TO BE BROADLY INTERPRETED AND INCLUDES ANY DISPUTE, CLAIM, OR CONTROVERSY BETWEEN YOU AND ENDGAME REGARDING ANY ASPECT OF YOUR RELATIONSHIP WITH US OR ANY CONDUCT OR FAILURE TO ACT ON OUR PART, INCLUDING CLAIMS BASED ON BREACH OF CONTRACT, TORT (FOR EXAMPLE, A NEGLIGENCE CLAIM), VIOLATION OF LAW OR ANY CLAIMS BASED ON ANY OTHER THEORY, AND INCLUDING THOSE BASED ON EVENTS THAT OCCURRED PRIOR TO THE DATE OF THIS AGREEMENT, WITH THE FOLLOWING EXCEPTIONS:
          </p>
          <ol type="a">
            <li>You may assert claims in your local small claims court if its rules permit it;</li>
            <li>Any claim regarding the validity, protection or enforcement of a party’s intellectual property rights (such as its patent, copyright, trademark, trade secret, or moral rights, but not including its privacy or publicity rights) must be brought in court; and</li>
            <li>In the event this agreement to arbitrate is for any reason held to be unenforceable, any dispute or claim against us (except for small-claims court actions) may be commenced only in a federal or state court located in Los Angeles, California, and we both consent to the jurisdiction of and venue in those courts for such purposes. We both also consent to the jurisdiction of and venue in those courts for purposes of any claim regarding the validity, protection or enforcement of a party’s intellectual property rights (excluding its privacy or publicity rights). You agree to waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.</li>
          </ol>
          <p>
            This agreement to arbitrate is governed by the Federal Arbitration Act, including its procedural provisions, in all respects.
          </p>

          <h3>12.2 Prohibition of Class Actions and Non-Individualized Relief</h3>
          <p className="text-sm uppercase">
            ANY ARBITRATION WILL BE CONDUCTED BY THE PARTIES IN THEIR INDIVIDUAL CAPACITIES ONLY AND NOT AS A CLASS ACTION OR OTHER REPRESENTATIVE ACTION. UNLESS BOTH YOU AND WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE THAN ONE PERSON'S OR PARTY'S CLAIMS, AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A CONSOLIDATED, REPRESENTATIVE, CLASS, OR PRIVATE ATTORNEY GENERAL ACTION OR PROCEEDING. ALSO, THE ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF NECESSITATED BY THAT PARTY'S INDIVIDUAL CLAIM(S). If this specific provision is found to be unenforceable, then neither of us will be entitled to arbitrate our dispute.
          </p>

          <h3>12.3 Arbitration Rules</h3>
          <p>
            The arbitration will be administered by the American Arbitration Association (“AAA”) and will be governed by AAA’s Consumer Arbitration Rules (“AAA Rules”), as modified by this Agreement. The AAA Rules may be accessed at <a href="https://www.adr.org" target="_blank" rel="noopener noreferrer">www.adr.org</a> or by calling the AAA at 1-800-778-7879. The arbitrator shall be empowered to grant whatever relief would be available in a court under law or in equity and must enforce the same limitations stated in this Agreement as a court would. The arbitrator will issue an award decision in writing but will not provide an explanation for the award unless you or Endgame requests one. The arbitrator’s award shall be final and binding, and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof.
          </p>

          <h3>12.4 Demand for Arbitration</h3>
          <p>
            A party who intends to arbitrate (“Claimant”) must first send to the other party (“Respondent”) a written notice, entitled “Demand for Arbitration” (“Demand”). The Demand must: (1) briefly explain the dispute; (2) provide the Claimant’s name and address, the address of the Claimant’s representative (if the Claimant has one), and the Respondent’s name and address (for Endgame, see below); (3) specify the amount of money in dispute, if applicable; (4) if the Claimant is requesting an in-person hearing, identify the requested location for the hearing; and (5) include a statement of what the Claimant wants. The Claimant must send one copy of the Demand to AAA at the same time the Claimant sends it to the Respondent. When sending a copy of the Demand to AAA, the Claimant must also include a copy of this arbitration agreement and any amendments to it and the then current filing fee required by the AAA. The Demand must be sent to the AAA at the following address:
          </p>
          <address className="not-italic my-4 pl-4 border-l-2 border-[var(--color-border)]">
            American Arbitration Association<br />
            Case Filing Services<br />
            1101 Laurel Oak Road, Suite 100<br />
            Voorhees, NJ 08043
          </address>
          <p>
            Alternatively, the Demand may be filed with the AAA online using : AAA WebFile: <a href="https://www.adr.org" target="_blank" rel="noopener noreferrer">https://www.adr.org</a>. Any Demand to Endgame should be addressed to: 1001 Wilshire Blvd Suite 2033 Los Angeles, CA 90017.
          </p>

          <h3>12.5 Filing, Administration and Arbitrator Fees</h3>
          <p>
            Payment of all filing, administration and arbitrator fees will be governed by the AAA's rules, unless otherwise stated in this Section 11. If the value of the relief sought is $10,000 or less, at your request, we will pay all filing, administration, and arbitrator fees associated with the arbitration, but not your attorneys’ fees. Any request for payment of filing, administration, and arbitrator fees by Endgame should be submitted by mail to the AAA along with your Demand and Endgame will make arrangements to pay all such necessary fees directly to the AAA. In the event that the arbitrator determines that the claim(s) you assert in the arbitration are frivolous, you agree to reimburse us for all fees associated with the arbitration paid by Endgame on your behalf that you otherwise would be obligated to pay under the AAA Rules.
          </p>

          <h3>12.6 OPT-OUT PROCEDURE</h3>
          <p className="font-bold uppercase">
            IF YOU DO NOT WISH TO BE BOUND BY THE ARBITRATION PROVISIONS IN THIS SECTION 11, YOU MUST NOTIFY ENDGAME IN WRITING WITHIN 30 DAYS OF THE DATE THAT YOU ACCEPT THIS AGREEMENT FOR THE FIRST TIME. YOU MAY OPT OUT BY MAILING A WRITTEN NOTICE TO ENDGAME AT THE ADDRESS SET FORTH IN SUBSECTION 4. YOUR WRITTEN NOTIFICATION TO ENDGAME MUST INCLUDE YOUR NAME, MAILING ADDRESS, E-MAIL ADDRESS, PHONE NUMBER AND ENDGAME ACCOUNT INFORMATION AS WELL AS A CLEAR STATEMENT THAT YOU DO NOT WISH TO RESOLVE DISPUTES WITH ENDGAME THROUGH ARBITRATION. IF YOU OPT OUT OF THE ARBITRATION PROVISIONS IN THIS SECTION 11, ALL OTHER PROVISIONS OF THIS AGREEMENT WILL CONTINUE TO APPLY.
          </p>

          <h3>12.7 Amendment to Arbitration Provisions</h3>
          <p>
            Notwithstanding any provision in this Agreement to the contrary, you and we agree that if we make any amendment to the arbitration provisions in this Section 11 in the future (other than an amendment to any notice address or site link provided herein), that amendment shall not apply to any claim that was filed in a legal proceeding against Endgame prior to the effective date of the amendment. The amendment shall apply to all other disputes or claims that have arisen or may arise between you and Endgame. We will notify you of amendments to the arbitration provisions of this Section 11 by posting the amended terms here, and/or by providing notice to you by email, at least 30 days before the effective date of the amendments. If you do not agree to the amended terms, you may close your account with us within the 30-day period and you will not be bound by the amended terms.
          </p>

          <h3>12.8 JURY TRIAL AND CLASS ACTION WAIVER</h3>
          <p className="font-bold uppercase">
            IF FOR ANY REASON A CLAIM PROCEEDS IN COURT RATHER THAN IN ARBITRATION, YOU AND ENDGAME EACH UNCONDITIONALLY WAIVE ANY RIGHT TO A JURY TRIAL. THIS MEANS THAT ANY CLAIM WOULD BE DECIDED BY A JUDGE, NOT A JURY. FURTHER, WITH RESPECT TO ANY CLAIM THAT PROCEEDS IN A COURT, YOU AND WE AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, OR REPRESENTATIVE OR PRIVATE ATTORNEY GENERAL ACTION OR PROCEEDING.
          </p>

          <h2>13. Geographic Restrictions</h2>
          <p>
            Endgame is based in the State of California in the United States. We make no claims that the Services or the Content are accessible or appropriate outside of the United States. Access to and use of the Services may not be legal by certain persons or in certain countries. If you access the Services from outside the United States, you do so on your own initiative and are responsible for compliance with local laws.
          </p>

          <h2>14. Governing Law; Jurisdiction and Venue</h2>
          <p>
            These Terms and any dispute or claim arising out of or related to these Terms, their subject matter, or their formation (in each case, including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the State of California, other than such laws and case law that would result in the application of the laws of a jurisdiction other than the State of California.
          </p>

          <h2>15. Waiver and Severability</h2>
          <p>
            Our failure to exercise or enforce any right or provision of these Terms will not constitute a waiver of such right or provision. If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent possible, and the remaining provisions of these Terms will continue in full force and effect.
          </p>

          <h2>16. Entire Agreement</h2>
          <p>
            These Terms, including our Privacy Policy, constitute the entire agreement between you and Endgame with respect to the subject matter hereof, and supersede and replace all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter.
          </p>

          <h2>17. Notice to California Residents</h2>
          <p>
            If you are a California resident, in accordance with Cal. Civ. Code §1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834, or by telephone at (800) 952-5210.
          </p>
        </div>
      </section>
    </>
  );
}

