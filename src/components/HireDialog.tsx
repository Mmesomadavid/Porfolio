"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";

interface HireDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const HireDialog = ({ open, setOpen }: HireDialogProps) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full sm:max-w-2xl max-h-full p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">
            Hire Mmesoma David
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base mt-1">
            Please fill in your details so I can get back to you quickly.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[55vh] pr-2 sm:pr-4 mt-4">
          <form className="space-y-4">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" className="h-12 rounded-2xl" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" className="h-12 rounded-2xl" />
              </div>
            </div>

            {/* Email + Secondary Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" className="h-12 rounded-2xl" />
              </div>
              <div>
                <Label htmlFor="secondaryEmail">Secondary Email</Label>
                <Input
                  id="secondaryEmail"
                  type="email"
                  placeholder="alt@company.com"
                  className="h-12 rounded-2xl"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 234 567 890" className="h-12 rounded-2xl" />
            </div>

            {/* Company + Position */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Company Inc." className="h-12 rounded-2xl" />
              </div>
              <div>
                <Label htmlFor="position">Position</Label>
                <Input id="position" placeholder="HR Manager" className="h-12 rounded-2xl" />
              </div>
            </div>

            {/* Country Select */}
            <div>
              <Label>Hiring From</Label>
              <Select>
                <SelectTrigger className="h-12 rounded-2xl w-full">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ng">Nigeria</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="nl">Netherlands</SelectItem>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Calendar */}
            <div className="flex flex-col">
              <Label>Preferred Date For An Interview</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-12 rounded-2xl"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me more about your project or role..."
                rows={4}
                className="rounded-2xl"
              />
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full h-12 rounded-2xl">
              Submit
            </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default HireDialog;
