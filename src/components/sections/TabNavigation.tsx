"use client"

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { MapPin } from "lucide-react"

const TabNavigation = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="mt-8 flex items-center justify-between border-t pt-4 px-4 md:px-8">
      <Tabs defaultValue="overview">
        <TabsList className="flex gap-4 bg-transparent shadow-none p-0">
          <TabsTrigger
            value="overview"
            onClick={() => handleScroll("overview")}
            className="relative pb-1 font-medium text-slate-500 data-[state=active]:text-black
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                       after:bg-black after:transition-all after:duration-300
                       hover:after:w-full data-[state=active]:after:w-full"
          >
            Overview
          </TabsTrigger>

          <TabsTrigger
            value="work"
            onClick={() => handleScroll("work")}
            className="relative pb-1 font-medium text-slate-500 data-[state=active]:text-black
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                       after:bg-black after:transition-all after:duration-300
                       hover:after:w-full data-[state=active]:after:w-full"
          >
            Work
          </TabsTrigger>

          <TabsTrigger
            value="about"
            onClick={() => handleScroll("about")}
            className="relative pb-1 font-medium text-slate-500 data-[state=active]:text-black
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                       after:bg-black after:transition-all after:duration-300
                       hover:after:w-full data-[state=active]:after:w-full"
          >
            About
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Location */}
      <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600">
        <MapPin className="h-4 w-4" />
        <span>Lagos, Nigeria</span>
      </div>
    </nav>
  )
}

export default TabNavigation
