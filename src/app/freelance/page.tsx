import Advertise from "@/components/freelance/homePage/advertise";
import CompleteYourProfile from "@/components/freelance/homePage/completeYourProfile";
import GigOffer from "@/components/freelance/homePage/gigOffer";
import InviteFriends from "@/components/freelance/homePage/inviteFriends";
import React from "react";

const Freelance = () => {
  return (
    <div className="flex flex-row">
      <div>
        <CompleteYourProfile />
        <InviteFriends />
        <Advertise />
      </div>
      <div className="w-full">
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
        <GigOffer data={null} />
      </div>
    </div>
  );
};

export default Freelance;
