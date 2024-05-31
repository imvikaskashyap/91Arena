import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsletterSubsribe = () => {
  return (
    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
      <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
        Subscribe to newsletter
      </p>

      <form className="mt-6">
        <Input type="email" placeholder="Enter your email" />

        <Button className="mt-2">Submit</Button>
      </form>
    </div>
  );
};

export default NewsletterSubsribe;
