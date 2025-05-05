"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuieroWebGratisModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function QuieroWebGratisModal({ open, onOpenChange }: QuieroWebGratisModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      businessType: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Submit form data to API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.message || 'Error al enviar el formulario')
      }
      
      // Reset form and show success message
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        businessType: "",
        message: "",
      })
      
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      })
      
      onOpenChange(false)
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: error instanceof Error ? error.message : "Hubo un problema al procesar tu solicitud. Por favor, intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Quiero mi web gratis</DialogTitle>
          <DialogDescription>
            Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas para hablar sobre tu nuevo sitio web.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre y apellido"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono (opcional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 123 456 789"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Nombre del negocio</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="businessType">Tipo de negocio</Label>
            <Select 
              value={formData.businessType} 
              onValueChange={handleSelectChange}
            >
              <SelectTrigger id="businessType">
                <SelectValue placeholder="Selecciona el tipo de negocio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retail">Comercio minorista</SelectItem>
                <SelectItem value="service">Servicios profesionales</SelectItem>
                <SelectItem value="restaurant">Restaurante / Hostelería</SelectItem>
                <SelectItem value="tech">Tecnología / Software</SelectItem>
                <SelectItem value="health">Salud / Bienestar</SelectItem>
                <SelectItem value="education">Educación / Formación</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="other">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">¿Qué buscas en tu sitio web?</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe brevemente tu negocio y lo que esperas de tu sitio web..."
              className="min-h-[100px]"
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full mt-6" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Quiero mi web gratis"}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Cerrar</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
} 