import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ServiceHero from "@/components/service/ServiceHero";
import WhatsIncluded from "@/components/service/WhatsIncluded";
import WhoItsFor from "@/components/service/WhoItsFor";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import GetInTouch from "@/components/layout/GetInTouch";
import { getServiceBySlug } from "@/data/siteData";

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div data-testid={`service-page-${service.slug}`}>
      <ServiceHero service={service} />
      <WhatsIncluded items={service.whatsIncluded} />
      <WhoItsFor description={service.whoItsFor} />
      <ServiceFAQ faq={service.faq} />
      <GetInTouch />
    </div>
  );
};

export default ServicePage;
