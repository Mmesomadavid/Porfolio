"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Email3DImg from "../../assets/images/3d_email.png";
import { Send } from "lucide-react";

type NewsletterModalProps = {
  onSubscribe: () => void;
  onClose: () => void;
  open: boolean;
};

const NewsletterModal = ({ onSubscribe, onClose, open }: NewsletterModalProps) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    console.log("Subscribed with:", email);
    onSubscribe();
  };

  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent className="w-full sm:max-w-md rounded-3xl border border-gray-300 p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl font-bold">
            Subscribe to my Newsletter
          </DialogTitle>
          <DialogDescription className="mt-1 text-sm sm:text-base text-gray-600">
            Stay updated with my latest blogs and updates on LinkedIn or Medium.
          </DialogDescription>
        </DialogHeader>

        {/* Image Banner */}
        <div className="w-full h-24 sm:h-32 rounded-2xl overflow-hidden mt-4">
          <img
            src={Email3DImg}
            alt="Newsletter Banner"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        {/* Email Input + Inline Send Button */}
        <div className="mt-4 sm:mt-6">
          {/* wrapper has fixed height so input & button match perfectly */}
          <div className="relative h-12 sm:h-14">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // h-full makes Input match the wrapper height; pr-20 reserves space for the button
              className="w-full h-full rounded-full pr-20"
              aria-label="Email address"
            />

            {/* Button positioned inside the input area and stretched to full height */}
            <Button
              type="button"
              onClick={handleSubscribe}
              className="absolute right-1 inset-y-0 h-full rounded-full px-5 bg-black text-white hover:bg-gray-800 flex items-center justify-center"
              aria-label="Send email"
            >
              <Send />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
