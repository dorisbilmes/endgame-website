import type { Metadata } from "next";
import { HeroSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Endgame Acceptable Use Policy",
};

export default function AcceptableUsePage() {
  return (
    <>
      <HeroSection
        title="Acceptable Use Policy"
        description=""
        buttonText={null}
        videoSrc={null}
        align="center"
      />
      <section className="py-20 bg-[var(--color-canvas)] w-full">
        <div className="container-app">
          <div className="prose max-w-[720px] mx-auto relative flex-none w-full h-auto whitespace-pre-wrap break-words [&>p]:mb-[24px]">
            <p className="text-sm text-[var(--color-text-secondary)] mb-8">
              Last Updated: July 9, 2025
            </p>
            
            <p>
              This Acceptable Use Policy supplements the Endgame Master SaaS Service Agreement (“<strong>Terms of Service</strong>”) and applies to your access and use of our Services, Inputs you provide to the Services, and your use of Outputs you create through the Services (including your use outside our Website and our Services). Capitalized terms used but not defined in this Acceptable Use Policy have the meanings set forth in the Terms of Service. 
            </p>

          <p>
            Enforcement of this Acceptable Use Policy is solely at Endgame’s discretion, and failure to enforce this Acceptable Use Policy does not constitute a waiver of our right to enforce it in other instances. This Acceptable Use Policy does not create any right or private right of action on the part of any third party or any reasonable expectation that the Services will not contain any content that is prohibited by this Acceptable Use Policy or that objectionable material will be promptly removed after it has been posted.
          </p>

          <p>You agree that:</p>
          
          <ol type="a" className="list-[lower-alpha] space-y-4">
            <li>You will not use our Services for any illegal or unauthorized purpose; or engage in, encourage, or promote any activity that violates the Terms of Service or this Acceptable Use Policy or that is threatening, fraudulent, or harmful in any way.</li>
            <li>You will not create Outputs or otherwise use the Services to trick, deceive, or mislead others or to impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity.</li>
            <li>You will not, through the use of or in connection with our Services or any Outputs: 
              <ol type="i" className="list-[lower-roman] mt-4 ml-4 space-y-2">
                <li className="pl-2">Violate the rights of others, including others’ copyrights, rights of publicity, or other intellectual property rights;</li>
                <li className="pl-2">Discriminate against people based on their race, color, national or ethnic origin, religion, age, sex, gender, sexual orientation or preference, or physical ability;</li>
                <li className="pl-2">Engage in any harassing, threatening, intimidating, predatory, or stalking conduct;</li>
                <li className="pl-2">Place unauthorized automated calls (i.e., robocalls);</li>
                <li className="pl-2">Create Outputs comprised of sexually explicit content;</li>
                <li className="pl-2">Create political messages and advertisements without our prior written approval;</li>
                <li className="pl-2">Create advertisements for medical devices or services or pharmaceutical products without our prior written approval;</li>
                <li className="pl-2">Send, distribute, or post spam, unsolicited or bulk commercial electronic communications, chain letters, or pyramid schemes;</li>
                <li className="pl-2">Reverse engineer any aspect of our Services or do anything that might discover or reveal source code, or bypass or circumvent (A) measures employed to prevent or limit access to or use of any part of our Services, or (B) restrictions aimed at deterring or preventing uses of the Services that violate this Acceptable Use Policy;</li>
                <li className="pl-2">Develop or use any applications or software that interact with our Services without our authorization (such as through our APIs); or</li>
                <li className="pl-2">Use any part of our Services or Output to research and develop products, models and services that compete with Endgame.</li>
              </ol>
            </li>
            <li>You will not sell or resell our Services.</li>
            <li>You will not use any data mining, robots, or similar data gathering or extraction methods designed to scrape or extract data from our Services except in accordance with instructions contained in our robot.txt file and only to compile for search results.</li>
            <li>You will not modify our Services, remove any proprietary rights notices or markings associated with Output or our Services, or otherwise make any derivative works based upon our Services.</li>
            <li>You will not use or attempt to use another user’s account or information without authorization from that user and Endgame.</li>
            <li>You will not use our Services in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying our Services or that could damage, disable, overburden, or impair the functioning of our Services in any manner.</li>
            <li>You will not use our Services if you are not eligible to use our Services in accordance with the Terms of Service and will not use our Services other than for their intended purpose.</li>
          </ol>
        </div>
      </div>
      </section>
    </>
  );
}
