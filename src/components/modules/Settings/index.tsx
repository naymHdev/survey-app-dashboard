"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PrivacyPolicy from "./PrivacyPolicy";
import TermUse from "./TermUse";
import AboutUs from "./AboutUs";
import EditProfile from "./EditProfile";

const Settings = () => {
  return (
    <>
      <Accordion
        type="single"
        defaultValue="editProfile"
        collapsible
        className=" p-4 lg:p-6 font-sora"
      >
        <AccordionItem value="privacyPolicy">
          <AccordionTrigger>Privacy Policy</AccordionTrigger>
          <AccordionContent>
            <PrivacyPolicy />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="termOfUse">
          <AccordionTrigger>Term of Use</AccordionTrigger>
          <AccordionContent>
            <TermUse />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="aboutUs">
          <AccordionTrigger>About Us</AccordionTrigger>
          <AccordionContent>
            <AboutUs />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="editProfile">
          <AccordionTrigger>Edit Your Profile</AccordionTrigger>
          <AccordionContent>
            <EditProfile />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Settings;
