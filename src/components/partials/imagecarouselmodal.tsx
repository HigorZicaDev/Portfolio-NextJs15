'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

interface ImageCarouselModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex?: number
}

export function ImageCarouselModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}: ImageCarouselModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const showNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  const showPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-black border-zinc-800">
        <DialogHeader>
          <DialogTitle className="sr-only">Image Carousel</DialogTitle>
          <Button
            variant="default"
            size="icon"
            className="border absolute right-4 top-4 text-white z-50"
            onClick={onClose}
          >
          <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="relative aspect-square">
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="object-contain"
            fill
          />
          <Button
            variant="default"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            onClick={showPrevious}
          >
          <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            onClick={showNext}
          >
          <ChevronRight className="h-8 w-8" />
          </Button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
