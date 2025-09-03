"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Email3DImg from "../../assets/images/3d_email.png"

type NewsletterModalProps = {
  onSubscribe: () => void
  onClose: () => void
  open: boolean
}

const NewsletterModal = ({ onSubscribe, onClose, open }: NewsletterModalProps) => {
  const [email, setEmail] = useState("")

  const handleSubscribe = () => {
    if (!email) return
    console.log("Subscribed with:", email)
    onSubscribe() // ✅ calls App handler to set localStorage + close
  }

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
          />
        </div>

        {/* Email Input + Button */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-3xl h-12 sm:h-14 pr-0 sm:pr-32"
          />
          <Button
            onClick={handleSubscribe}
            className="w-full sm:w-auto rounded-3xl px-6 sm:px-8 h-12 sm:h-12 flex-shrink-0"
          >
            Subscribe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default NewsletterModal
