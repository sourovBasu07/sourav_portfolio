"use client";

import { contactData } from "@/constants";
import { BsArrowRight } from "react-icons/bs";

import * as z from "zod";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formValidation } from "@/lib/formValidations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  const form = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formValidation>) => { };

  return (
    <div className="contact section" id="contact">
      <span className="section__subtitle">Contact Me</span>
      <h2 className="section__title">Get in touch</h2>

      <div className="container grid__section grid-cols-1 md:grid-cols-[repeat(2,max-content)] justify-center gap-x-24 pb-12">
        <div className="contact__content">
          <h3 className="text-center text-h3-font font-medium mb-6">
            Talk to me
          </h3>

          <div className="grid gap-y-4 grid-cols-[300px]">
            {contactData.map((contact) => (
              <div
                key={contact.title}
                className="flex flex-col items-center bg-containerColor boredr border-solid border-[rgba(0,0,0,0.1)] p-4 rounded-xl text-center"
              >
                <span className="text-[2rem] text-titleColor mb-1">
                  {contact.icon}
                </span>
                <h3 className="text-small-font font-medium">{contact.title}</h3>
                <span className="text-small-font block mb-3">{contact.id}</span>
                <a
                  href={contact.link}
                  className="inline-flex justify-center items-center gap-x-1 text-textColor text-small-font group"
                >
                  Write me
                  <span className="duration-300 text-base group-hover:translate-x-1">
                    <BsArrowRight />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact__content">
          <h3 className="text-center mb-5 text-textColor">
            Write me about your project
          </h3>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-[360px] flex flex-col gap-y-10"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative mb-8 h-[4rem]">
                    <FormLabel className="">Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="w-full h-full border-2 border-solid border-[rgba(0,0,0,0.3)] text-textColor outline-none rounded-xl p-6 z-10"
                        {...field}
                        placeholder=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className=""
                        {...field}
                        placeholder=""
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="">Message</FormLabel>
                    <FormControl className="">
                      <Textarea rows={10} className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button className="button button--flex w-fit">
                Send Message
                <svg
                  className="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="#fff"
                  ></path>
                </svg>
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
