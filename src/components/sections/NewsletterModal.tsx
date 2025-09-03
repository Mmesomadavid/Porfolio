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
      <DialogContent className="sm:max-w-md rounded-3xl border border-gray-300">
        <DialogHeader>
          <DialogTitle className="text-3xl Geist">Subscribe to my Newsletter</DialogTitle>
          <DialogDescription>
            Stay updated with my latest blogs and updates on LinkedIn or Medium.
          </DialogDescription>
        </DialogHeader>

        {/* Image Banner */}
        <div className="w-full h-32 rounded-2xl overflow-hidden mt-4">
          <img
            src={Email3DImg}
            alt="Newsletter Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Email Input + Button inside input */}
        <div className="relative mt-6">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-3xl pr-32 h-14" // extra padding for button
          />
          <Button
            onClick={handleSubscribe}
            className="absolute right-1 top-1 bottom-1 rounded-3xl px-8 h-12"
          >
            Subscribe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default NewsletterModal
