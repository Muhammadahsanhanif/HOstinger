import Card from "./component/card";
import FeaturesSection from "./component/fearture";
import Footer from "./component/footer";
import PromoSection from "./component/herosection"
import MigrationSection from "./component/migrationsection";
import PricingTable from "./component/pricingtable";
import PromoOffer from "./component/prooffer";
import ProSection from "./component/prosection";
import { RatingsSection } from "./component/rating";
import DashboardPage from "./component/sidebar";
import TestimonialCard from "./component/testmotal";
import WebHostingSection from "./component/webhosting";
 export default function Landingpage() {
  return (
    <div>
 <PromoSection/>

<RatingsSection/>
<PricingTable/>
<WebHostingSection/>
<ProSection/>
<MigrationSection/>
<TestimonialCard/>
<DashboardPage/>
<FeaturesSection/>
<Card/>
<PromoOffer/>
<Footer/>

    </div>

 );
}
