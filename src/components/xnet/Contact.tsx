"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin, Clock, User, MessageCircle, Send } from 'lucide-react';
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  phone: z.string().min(10, { message: "Por favor, insira um telefone válido." }),
  whatsapp: z.string().optional(),
  address: z.string().min(5, { message: "Por favor, insira um endereço válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }).max(500),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      whatsapp: "",
      address: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Mensagem enviada com sucesso!", {
      description: "Nossa equipe entrará em contato em breve.",
    });
    form.reset();
  }

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">
            Fale <span className="text-brand-purple">Conosco</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida ou quer contratar? Preencha o formulário ou use um de nossos canais de atendimento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-white p-4 sm:p-8 rounded-2xl shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Envie uma mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input placeholder="Seu nome completo" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <Input placeholder="(13) 99999-9999" {...field} className="pl-10" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp (Opcional)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <Input placeholder="Seu WhatsApp" {...field} className="pl-10" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Endereço</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input placeholder="Rua, número, bairro" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Como podemos ajudar?" {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-brand-purple to-purple-600 hover:from-purple-700 hover:to-brand-purple text-white font-bold rounded-full py-6 text-lg shadow-lg hover:shadow-xl transition-all group">
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800">Nossos Contatos</h3>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-brand-purple" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Telefone e WhatsApp</h4>
                <p className="text-gray-600">(13) 99102-1555</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-brand-purple" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">E-mail</h4>
                <p className="text-gray-600">contato@xnet.com.br</p>
                <p className="text-gray-600">suporte@xnet.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-brand-purple" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Endereço</h4>
                <p className="text-gray-600">Estrada Coronel Joaquim Branco, 1061 — Savoy, Itanhaém - SP, CEP: 11742-674</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-brand-purple" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Horário Comercial</h4>
                <p className="text-gray-600">Segunda a Sábado: 9h às 17h20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};