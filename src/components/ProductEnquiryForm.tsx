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
import { CheckCircle2, Mail, Phone, ArrowRight } from "lucide-react";

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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Product Enquiry</DialogTitle>
            <DialogDescription>
              Fill in your details and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="product">Product</Label>
                <Input id="product" value={formData.productName} disabled />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-rose-600 hover:bg-rose-700">
                Submit Enquiry
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-[425px]">
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