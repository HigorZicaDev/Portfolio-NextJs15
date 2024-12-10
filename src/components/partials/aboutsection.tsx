import { Button } from "@/components/ui/button"
import Link from "next/link"
import { timelineItems } from "@/data/timelines"



export function AboutSection() {
  return (
    <div className="space-y-12">
      {timelineItems.map((item, index) => (
        <div key={index} className="relative pl-8">
          {/* Date indicator */}
          <div className="absolute left-0 top-0 flex items-center">
            <div className="h-4 w-4 rounded-full border border-zinc-200 bg-white" />
          </div>
          
          {/* Content */}
          <div className="space-y-2">
            <div className="text-sm text-zinc-500">{item.date}</div>
            <h3 className="text-xl font-semibold text-zinc-200">{item.title}</h3>
            <p className="text-zinc-500">{item.description}</p>
            {item.learnMoreUrl && (
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="h-8 px-4 text-sm"
                  asChild
                >
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

