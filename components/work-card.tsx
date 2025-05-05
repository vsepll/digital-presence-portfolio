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
    <Card className="border-0 shadow-none overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={800}
              height={600}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="text-sm text-neutral-500 mb-1">{category}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </CardContent>
    </Card>
  )
}
