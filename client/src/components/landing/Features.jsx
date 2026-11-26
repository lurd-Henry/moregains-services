import { ShieldCheck, Clock, Store, HandCoins } from "lucide-react";

const features = [
{
icon: ,
title: "Business Financing",
description: "Financing opportunities designed around the needs of small and growing businesses."
},
{
icon: ,
title: "Simple Application",
description: "A structured application process that makes requesting financial assistance easier."
},
{
icon: ,
title: "Secure Onboarding",
description: "Identity and business information are handled through a structured verification process."
},
{
icon: ,
title: "Business Focused",
description: "We recognize the importance of supporting entrepreneurs and local businesses."
}
];

function Features() {
return (
WHY MOREGAINS
Financial support that understands business.
More than financing. A partner in your business journey.
  <div className="features-grid">
    {features.map((feature, index) => (
      <div className="feature-card" key={index}>
        <div className="feature-icon">{feature.icon}</div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    ))}
  </div>
</section>

);
}

export default Features;
