"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Image, Settings, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Features", id: "features" },
              { name: "About", id: "about" },
              { name: "Pricing", id: "pricing" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="NexAI"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitDualMedia
            background={{ variant: "gradient-bars" }}
            title="Meet the future of AI-powered creation."
            description="Fast. Smart. Creative. Our platform turns ideas into results in seconds."
            tag="🚀 Early Access"
            mediaItems={[
              {
                imageSrc: "http://img.b2bpic.net/free-photo/abstract-blue-background-with-many-small-details-generative-ai_169016-30136.jpg",                imageAlt: "AI Interface"
              },
              {
                imageSrc: "http://img.b2bpic.net/free-photo/3d-render-modern-technology-background-with-digital-particles-design_1048-15444.jpg",                imageAlt: "Neural Network"
              }
            ]}
            mediaAnimation="blur-reveal"
            rating={5}
            ratingText="Loved by 10,000+ creators"
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardFourteen
            useInvertedBackground={false}
            title="Built for scale"
            tag="Performance Stats"
            metrics={[
              { id: "m1", value: "10x", description: "Faster content generation" },
              { id: "m2", value: "99.9%", description: "Workflow automation efficiency" },
              { id: "m3", value: "500k+", description: "Global active users" }
            ]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureBorderGlow
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            features={[
              { icon: Zap, title: "AI Content Generation", description: "Produce high-quality articles, posts, and copy in seconds." },
              { icon: Image, title: "Visual Creation", description: "Generate engaging visuals and videos that drive engagement." },
              { icon: Settings, title: "Smart Automation", description: "Automate repetitive tasks and focus on your big ideas." }
            ]}
            title="Everything you need in one workspace."
            description="Powerful tools designed to accelerate your creative workflow."
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            useInvertedBackground={false}
            title="Inspired by the pioneers."
            description="We took the speed of Grok and the creativity of Zebracat and built a platform designed specifically for the modern innovator."
            metrics={[
              { value: "12ms", title: "Latency" },
              { value: "24/7", title: "Uptime" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/abstract-low-poly-with-connecting-lines-dots_1048-7721.jpg"
            imageAlt="Tech innovation"
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwo
            animationType="scale-rotate"
            textboxLayout="default"
            useInvertedBackground={true}
            testimonials={[
              { id: "1", name: "Alex Rivet", role: "Founder", testimonial: "NexAI completely changed my workflow. Speed is unparalleled.", imageSrc: "http://img.b2bpic.net/free-photo/young-gymnast-training-competition_23-2149334432.jpg" },
              { id: "2", name: "Sarah Chen", role: "Researcher", testimonial: "Finally, an AI tool that actually understands creative context.", imageSrc: "http://img.b2bpic.net/free-photo/videographer-smiling-camera-working-computer-editing-video-footage-audio-app-sitting-mo_482257-2649.jpg" },
              { id: "3", name: "Mike Ross", role: "Dev", testimonial: "The automation tools save me hours every single week.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-millennial-man-looking-camera-cafe-headshot-portrait_1163-5163.jpg" },
              { id: "4", name: "Elena P.", role: "Designer", testimonial: "Visuals are stunning and generation is lightning fast.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-bright-curly-woman-dressed-blue-jacket-glasses-stands-with-serious-emotions-pink_291650-1099.jpg" },
              { id: "5", name: "Julia V.", role: "Marketer", testimonial: "My content production has literally doubled in quality.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg" }
            ]}
            title="Loved by innovators"
            description="See how creators are using NexAI to build faster."
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardNine
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            plans={[
              { id: "p1", title: "Starter", price: "$29", period: "/mo", features: ["100 AI Generations", "Basic Automation", "Community Support"], button: { text: "Get Started" }, imageSrc: "http://img.b2bpic.net/free-photo/cosmic-background-with-dark-light-blue-laser-lights_181624-21201.jpg" },
              { id: "p2", title: "Pro", price: "$79", period: "/mo", features: ["Unlimited Generations", "Advanced Automation", "Priority Support"], button: { text: "Get Pro" }, imageSrc: "http://img.b2bpic.net/free-photo/abstract-blue-background-with-many-small-details-generative-ai_169016-30136.jpg" },
              { id: "p3", title: "Scale", price: "$199", period: "/mo", features: ["Enterprise API Access", "Custom Integrations", "Dedicated Manager"], button: { text: "Contact Us" }, imageSrc: "http://img.b2bpic.net/free-photo/3d-render-modern-technology-background-with-digital-particles-design_1048-15444.jpg" }
            ]}
            title="Affordable for everyone."
            description="Flexible plans to grow with your vision."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="default"
            useInvertedBackground={true}
            faqs={[
              { id: "f1", title: "Is this tool free?", content: "We offer a generous free tier for new users." },
              { id: "f2", title: "Can I automate workflows?", content: "Yes, our automation builder integrates seamlessly with thousands of apps." },
              { id: "f3", title: "How is this different?", content: "We prioritize speed and creative output quality above all else." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/empty-workplace-with-different-objects-man-moved-away_1153-3800.jpg"
            title="Common Questions"
            description="Got questions? We've got answers."
            faqsAnimation="blur-reveal"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            useInvertedBackground={false}
            background={{ variant: "rotated-rays-static" }}
            tag="Try it now"
            title="Ready to move faster?"
            description="Join the next generation of innovators."
            imageSrc="http://img.b2bpic.net/free-photo/abstract-background-with-pink-yellow-spheres_23-2148235949.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="NexAI"
            columns={[
              { title: "Product", items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
              { title: "Company", items: [{ label: "About", href: "#about" }, { label: "Contact", href: "#contact" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}