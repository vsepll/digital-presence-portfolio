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
        return <Layout className="h-5 w-5" />
      case "Globe":
        return <Globe className="h-5 w-5" />
      case "Palette":
        return <Palette className="h-5 w-5" />
      case "ShoppingBag":
        return <ShoppingBag className="h-5 w-5" />
      case "FileText":
        return <FileText className="h-5 w-5" />
      case "BarChart":
        return <BarChart className="h-5 w-5" />
      case "Shield":
        return <Shield className="h-5 w-5" />
      case "Zap":
        return <Zap className="h-5 w-5" />
      case "TrendingUp":
        return <TrendingUp className="h-5 w-5" />
      default:
        return <Layout className="h-5 w-5" />
    }
  }

  return (
    <Card className="border-0 shadow-none hover:bg-secondary transition-colors group">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-primary/10 dark:bg-primary/20 text-primary rounded-md flex-shrink-0">
            {getIcon(icon)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="text-xs font-medium flex items-center gap-1 text-primary group-hover:underline mt-2">
              Ver más <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
