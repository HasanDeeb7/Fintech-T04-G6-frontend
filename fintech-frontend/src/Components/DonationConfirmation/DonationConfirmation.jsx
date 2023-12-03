import React from "react";
import "./DonationConfirmation.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
function DonationConfirmation({donationAmount, setDonationAmount, setCurrentStep}) {
  const confirmationVariant = {
    closed: { opacity: 0, scale: 0, transform: "translateX(300px)" },
    opened: {
      opacity: 1,
      scale: 1,
      transform: "translateX(0)",
    },
  };
  return (
    <motion.div
      variants={confirmationVariant}
      initial="closed"
      animate="opened"
      transition={{
        delay: 0.3,
        duration: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      exit="closed"
    >
      <h3>Are you sure you want to donate {donationAmount}$ for Elementary School Fund</h3>
      <div className="confirmationButtonsWrapper">
        <Button action='Confirm' onClick={()=>setCurrentStep(2)}/>
        <Button btnType='secondary' action='Back' onClick={()=>setCurrentStep(0)} />    
      </div>
    </motion.div>
  );
}

export default DonationConfirmation;