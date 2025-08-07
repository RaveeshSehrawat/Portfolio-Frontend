import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTheme } from "next-themes";

const API_URL = "http://127.0.0.1:5001/contact"; // Update with your backend URL if needed
const RECEIVER_EMAIL = "raveeshsehrawat@gmail.com";

export const ContactSection = () => {
  const { toast } = useToast();
  const { resolvedTheme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Dynamically set the toast color to the OPPOSITE of the current theme
    const oppositeClass =
      (resolvedTheme === "dark"
        ? "bg-white text-black"
        : "bg-black text-white") +
      " font-medium border-2 border-destructive";

    // Validate email not same as receiver email (case insensitive)
    if (email.toLowerCase() === RECEIVER_EMAIL.toLowerCase()) {
      toast({
        title: "Invalid Email",
        description:
          "You cannot use the receiver's email address to send a message.",
        variant: "destructive",
        className: `${oppositeClass} animate-in slide-in-from-top-1 duration-300`,
      });
      setIsSubmitting(false);
      return;
    }

    // Optionally: add more validation here for name/message length etc.

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.target.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href={`mailto:${RECEIVER_EMAIL}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {RECEIVER_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <span className="text-muted-foreground">Delhi, India</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/raveesh-sehrawat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/RaveeshSehrawat?t=ZDcq7T1Zy7q0RJzZez6vXw&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/raveesh_sehrawat/?igsh=Y2d4bDVyeTI1amU2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="https://github.com/RaveeshSehrawat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <p id="name-description" className="sr-only">Enter your full name, minimum 2 characters</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={50}
                  aria-describedby="name-description"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  aria-describedby="email-description"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary peer"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={500}
                  rows={4}
                  aria-describedby="message-description"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Please enter your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("beach-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
