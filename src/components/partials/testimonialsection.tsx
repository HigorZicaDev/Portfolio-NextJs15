'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export default function TestimonialSection() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-6">
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage className="object-contain" src={testimonial.avatar} alt={testimonial.author} />
                <AvatarFallback>
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <p className="font-medium leading-none">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.createdAt}</p>
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Card className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex-1 flex items-center gap-2">
            <Input 
              className="flex-1" 
              placeholder="Add a comment..." 
              type="text"
            />
            <Button size="icon" variant="ghost">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send comment</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

