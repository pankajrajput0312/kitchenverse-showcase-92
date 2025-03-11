import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle2, Mail, Phone, ArrowRight, X } from "lucide-react";

interface ProductEnquiryFormProps {
  productName: string;
  buttonLabel?: string;
  buttonClassName?: string;
  buttonIcon?: React.ReactNode;
}

const ProductEnquiryForm = ({ 
  productName, 
  buttonLabel = "Request Quote",
  buttonClassName = "w-full bg-rose-600 hover:bg-rose-700 h-12",
  buttonIcon = <ArrowRight className="w-4 h-4 ml-2" />
}: ProductEnquiryFormProps) => {
  const { toast } = useToast();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    productName: productName
  });

  const handleEnquiry = () => {
    setFormData(prev => ({ ...prev, productName }));
    setIsEnquiryOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEnquiryOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  return (
    <>
      <Button 
        onClick={handleEnquiry} 
        className={buttonClassName}
      >
        {buttonLabel}
        {buttonIcon}
      </Button>

      <Dialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen}>
        <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                                 sm:max-w-[425px] w-[calc(100%-32px)] rounded-lg
                                 bg-white z-50 p-6 gap-6 shadow-xl">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-semibold">Product Enquiry</DialogTitle>
            <DialogDescription>
              Fill in your details and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 py-2 max-h-[60vh] overflow-y-auto">
              <div className="grid gap-2">
                <Label htmlFor="product">Product</Label>
                <Input 
                  id="product" 
                  value={formData.productName} 
                  disabled 
                  className="bg-gray-50 border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="min-h-[100px] border border-gray-200 focus:border-rose-500 
                           focus:ring-2 focus:ring-rose-500/20 resize-none"
                />
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
                Submit Enquiry
              </Button>
            </DialogFooter>
          </form>

          <button
            onClick={() => setIsEnquiryOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background 
                     transition-opacity hover:opacity-100 focus:outline-none 
                     focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none 
                     data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                                 sm:max-w-[425px] w-[calc(100%-32px)] rounded-lg
                                 bg-white z-50 shadow-xl">
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              Our team will contact you within 24 hours.
            </p>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@company.com</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductEnquiryForm; 