const steps = [
{
number: "01",
title: "Create an account",
description: "Register on Moregains and provide your basic personal information."
},
{
number: "02",
title: "Verify your business",
description: "Complete identity verification and submit your business information."
},
{
number: "03",
title: "Meet your agent",
description: "An agent assigned to your business location reviews your application."
},
{
number: "04",
title: "Apply for financing",
description: "Submit your loan request and follow its progress from your dashboard."
}
];

function HowItWorks() {
return (
<div className="started">GETTING STARTED
Four steps. One bigger opportunity.
Our process is designed to keep your application organized.
</div>
  <div className="steps-grid">
    {steps.map((step) => (
      <div className="step-card" key={step.number}>
        <span className="step-number">{step.number}</span>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    ))}
  </div>
</section>

);
}

export default HowItWorks;
