import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface WorkCardProps {
  title: string
  category: string
  imageUrl: string
}

export default function WorkCard({ title, category, imageUrl }: WorkCardProps) {
  return (
    <Card className="border-0 rounded-lg overflow-hidden group bg-card shadow-md hover:shadow-lg transition-all duration-500">
      <CardContent className="p-0">
        <div className="relative">
          <div className="aspect-[16/10] overflow-hidden border-b border-border/30">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={600}
              height={375}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
          </div>
          <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-md p-1.5 rounded-full">
            <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{category}</div>
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex items-center mt-3">
            <div className="w-6 h-0.5 bg-primary rounded-full mr-2"></div>
            <p className="text-xs text-muted-foreground">Ver proyecto</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
