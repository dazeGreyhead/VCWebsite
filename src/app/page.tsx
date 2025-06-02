import CallToActionSection from "./homepageSections/callToActionSection";
import OurImpactSection from "./homepageSections/ourImpactSection";
import VCNProgrammaticApproaches from "./homepageSections/vcnProgrammaticApproaches";
import WhoWeAreSection from "./homepageSections/whoWeAreSection";

export default function Home() {
  return (
    <>
      <main>
        <CallToActionSection />
        <VCNProgrammaticApproaches />
        <WhoWeAreSection />
        <OurImpactSection />
      </main>
    </>
  );
}
