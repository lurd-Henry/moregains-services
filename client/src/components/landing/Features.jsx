import {
  ShieldCheck,
  Clock,
  Store,
  HandCoins
} from "lucide-react";

const features = [
  {
    icon: <HandCoins size={24} />,
    title: "Business Financing",
    description:
      "Financing opportunities designed around the needs of small and growing businesses."
  },
  {
    icon: <Clock size={24} />,
    title: "Simple Application",
    description:
      "A structured application process that makes requesting financial assistance easier."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Secure Onboarding",
    description:
      "Identity and business information are handled through a structured verification process."
  },
  {
    icon: <Store size={24} />,
    title: "Business Focused",
    description:
      "We recognize the importance of supporting entrepreneurs and local businesses."
  }
];

function Features() {
  return (
    <section className="features" id="benefits">
      <div className="section-heading">
        <span className="eyebrow">WHY MOREGAINS</span>

        <h2>
          Financial support that understands business.
        </h2>

        <p>
          More than financing. A partner in your business journey.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
