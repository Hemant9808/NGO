import Footer from '../components/Footer.tsx';
// import OurCampaigns from '../components/OurCampaigns.tsx';
import OurCampaignsBlog from '../components/OurCampaignsBlog.tsx';

function Campaigns() {

  return (
    <div className="flex flex-col">
      {/* <OurCampaigns /> */}
      <OurCampaignsBlog />
      <Footer />
    </div>
  )
}

export default Campaigns;