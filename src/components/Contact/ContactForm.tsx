"use client";

import { FormEvent, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      toast.success("Message Sent", {
        description: t("success"),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Error", {
        description: t("error"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="md:w-[500px] h-fit bg-muted rounded-md p-4 py-10 sm:m-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mx-auto w-full max-w-[450px]">
        <Input
          id="name"
          name="name"
          placeholder={t("name")}
          value={formData.name}
          onChange={handleChange}
          className="w-full"
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t("email")}
          value={formData.email}
          onChange={handleChange}
          className="w-full"
          required
        />
        <Textarea
          id="message"
          name="message"
          placeholder={t("message")}
          value={formData.message}
          onChange={handleChange}
          className="w-full min-h-[150px]"
          required
        />
        <Button
          type="submit"
          className="text-muted"
          size="md"
          disabled={isLoading}>
          {isLoading ? (
            <>
              <div className="size-4 mr-2 animate-spin rounded-full border-2 border-t-theme" />
              {t("loading")}
            </>
          ) : (
            <>
              <FaPaperPlane className="mr-2" /> {t("submit")}
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
