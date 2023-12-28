import { services } from "@/constants";
import { BsArrowRight } from "react-icons/bs";
import Modal from "./Modal";

const Services = () => {
  return (
    <div className="section services" id="services">
      <span className="section__subtitle">What i offer</span>
      <h2 className="section__title">Services</h2>

      <div className="container grid__section grid-cols-[repeat(3,270px)] justify-center gap-x-7">
        {services.map((service) => (
          <div className="relative border border-solid border-[rgba(0,0,0,0.1)] bg-containerColor pt-24 pb-8 pl-10">
            <div className="">
              <span className="block text-[2rem] text-titleColor mb-4">
                {service.icon}
              </span>
              <h3 className="font-h3-font mb-4 font-medium">{service.title}</h3>
            </div>
            <div className="text-titleColor text-small-font inline-flex items-center gap-x-1 cursor-pointer group">
              <Modal
                title={service.title}
                subtitle={service.subtitle}
                details={service.details}
              />
              <span className="text-base duration-300 group-hover:translate-x-1">
                <BsArrowRight />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
