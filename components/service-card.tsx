import {
  Layout,
  Globe,
  Palette,
  ShoppingBag,
  FileText,
  BarChart,
  ArrowUpRight,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="h-6 w-6" />
      case "Globe":
        return <Globe className="h-6 w-6" />
      case "Palette":
        return <Palette className="h-6 w-6" />
      case "ShoppingBag":
        return <ShoppingBag className="h-6 w-6" />
      case "FileText":
        return <FileText className="h-6 w-6" />
      case "BarChart":
        return <BarChart className="h-6 w-6" />
      case "Shield":
        return <Shield className="h-6 w-6" />
      case "Zap":
        return <Zap className="h-6 w-6" />
      case "TrendingUp":
        return <TrendingUp className="h-6 w-6" />
      default:
        return <Layout className="h-6 w-6" />
    }
  }

  return (
    <Card className="border-0 shadow-none hover:bg-neutral-50 transition-colors group">
      <CardContent className="p-6">
        <div className="mb-4 p-2 inline-block bg-neutral-100 rounded-md">{getIcon(icon)}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="text-sm font-medium flex items-center gap-2 text-neutral-900 group-hover:underline">
          Learn more <ArrowUpRight className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
