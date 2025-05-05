"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })
    // Show success toast
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Nombre
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
          className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Correo electrónico
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Tu correo electrónico"
          required
          className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company" className="text-white">
          Nombre del negocio
        </Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Nombre de tu negocio"
          className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">
          Cuéntanos sobre tu negocio
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="¿A qué se dedica tu negocio? ¿Qué buscas en un sitio web?"
          required
          className="min-h-[120px] bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
        />
      </div>
      <Button type="submit" size="lg" className="w-full">
        Quiero mi web gratis <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
