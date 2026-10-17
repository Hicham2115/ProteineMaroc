"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { StoreSelect } from "@/components/ui/store-select";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom (2 caractères minimum)."),
  email: z.string().trim().email("Saisissez une adresse e-mail valide."),
  phone: z.string().trim().min(8, "Saisissez un numéro de téléphone valide."),
  subject: z.string().trim().min(3, "Précisez le sujet de votre demande."),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères."),
});

type ContactValues = z.infer<typeof contactSchema>;
type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const fieldClass =
  "mt-2 w-full border border-white/15 bg-[#212326] px-4 py-3.5 text-[14px] text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#e46a61] focus:ring-1 focus:ring-[#e46a61]/30";

export function ContactSection() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedback, setFeedback] = useState("");
  const [emailUrl, setEmailUrl] = useState("");

  const form = useForm({
    defaultValues: initialValues,
    onSubmit: ({ value }) => {
      const result = contactSchema.safeParse(value);

      if (!result.success) {
        const nextErrors: ContactErrors = {};
        for (const issue of result.error.issues) {
          const field = issue.path[0] as keyof ContactValues;
          if (!nextErrors[field]) nextErrors[field] = issue.message;
        }
        setErrors(nextErrors);
        setFeedback("Vérifiez les champs signalés avant de continuer.");
        return;
      }

      const { name, email, phone, subject, message } = result.data;
      const emailBody = [
        `Nom : ${name}`,
        `E-mail : ${email}`,
        `Téléphone : ${phone}`,
        "",
        message,
      ].join("\n");

      setEmailUrl(`mailto:infos@mesproteines.ma?subject=${encodeURIComponent(`Demande Mes Proteines — ${subject}`)}&body=${encodeURIComponent(emailBody)}`);
      setErrors({});
      setFeedback("Votre message est prêt dans votre messagerie.");
    },
  });

  function clearError(field: keyof ContactValues) {
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFeedback("");
    setEmailUrl("");
  }

  return (
    <section id="contact" className="scroll-mt-6 bg-white px-[clamp(20px,4vw,72px)] py-[clamp(80px,9vw,136px)] text-[#202326]" aria-labelledby="contact-title">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex flex-col justify-between gap-8 border-b border-[#202326]/15 pb-10 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.22em] text-[#e46a61]">
              <span className="h-px w-5 bg-[#e46a61]" aria-hidden="true" />
              Parlons de vos objectifs
            </p>
            <h2 id="contact-title" className="m-0 font-heading text-[clamp(48px,7vw,92px)] font-black uppercase leading-[.88] tracking-[-.025em]">
              Contactez<span className="text-[#e46a61]">-</span>
              <br className="hidden sm:block" /> nous.
            </h2>
          </div>
          <p className="mb-1 max-w-[500px] text-[16px] leading-7 text-[#202326]/65">
            Besoin d’un conseil ou d’un renseignement ? Écrivez-nous, notre équipe vous répond avec plaisir.
          </p>
        </div>

        <div className="grid overflow-hidden border border-[#202326]/10 text-white lg:grid-cols-[.82fr_1.18fr]">
          <aside className="relative flex flex-col justify-between gap-14 overflow-hidden bg-[#2c3135] p-7 sm:p-11 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border border-white/[.06]" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full border border-white/[.06]" aria-hidden="true" />
            <div className="relative">
              <span className="mb-6 inline-flex size-12 items-center justify-center border border-[#e46a61]/40 text-[#e46a61]">
                <Mail size={20} aria-hidden="true" />
              </span>
              <h3 className="mb-4 max-w-[420px] font-heading text-[38px] font-black uppercase leading-[.96] sm:text-[46px]">
                À votre écoute, partout au Maroc.
              </h3>
              <p className="mb-0 max-w-[400px] text-[15px] leading-7 text-white/55">
                Contactez-nous par téléphone ou e-mail. Nous serons ravis de vous guider.
              </p>
            </div>

            <div className="relative space-y-5 border-t border-white/15 pt-6">
              <a className="group flex items-start gap-4 text-[13px] transition-colors hover:text-[#e46a61]" href="tel:+212522980410">
                <Phone size={17} className="mt-0.5 flex-none text-[#e46a61]" aria-hidden="true" />
                <span><span className="mb-1 block text-[10px] font-bold uppercase tracking-[.18em] text-white/40">Abdelmoumen</span>+212 522 980 410</span>
                <ArrowUpRight size={14} className="ml-auto mt-1 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a className="group flex items-start gap-4 text-[13px] transition-colors hover:text-[#e46a61]" href="tel:+212522958982">
                <Phone size={17} className="mt-0.5 flex-none text-[#e46a61]" aria-hidden="true" />
                <span><span className="mb-1 block text-[10px] font-bold uppercase tracking-[.18em] text-white/40">Twin Center</span>+212 522 958 982</span>
                <ArrowUpRight size={14} className="ml-auto mt-1 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a className="group flex items-start gap-4 text-[13px] transition-colors hover:text-[#e46a61]" href="mailto:infos@mesproteines.ma">
                <Mail size={17} className="mt-0.5 flex-none text-[#e46a61]" aria-hidden="true" />
                <span><span className="mb-1 block text-[10px] font-bold uppercase tracking-[.18em] text-white/40">E-mail</span>infos@mesproteines.ma</span>
                <ArrowUpRight size={14} className="ml-auto mt-1 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <div className="flex items-start gap-4 text-[13px] text-white/75">
                <MapPin size={17} className="mt-0.5 flex-none text-[#e46a61]" aria-hidden="true" />
                <span><span className="mb-1 block text-[10px] font-bold uppercase tracking-[.18em] text-white/40">Livraison</span>Partout au Maroc</span>
              </div>
            </div>

          </aside>

          <div className="bg-[#25282b] p-7 sm:p-11 lg:p-12">
            <div className="mb-9 flex items-center justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#e46a61]">Votre message</p>
                <h3 className="m-0 text-[24px] font-semibold sm:text-[28px]">Comment pouvons-nous vous aider ?</h3>
              </div>
              <span className="hidden size-11 items-center justify-center border border-white/10 text-white/45 sm:flex" aria-hidden="true">
                <Send size={17} />
              </span>
            </div>

            <form
              noValidate
              className="grid gap-x-6 gap-y-6 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();
                void form.handleSubmit();
              }}
            >
              <form.Field name="name">
                {(field) => (
                  <div>
                    <label htmlFor={field.name} className="text-[11px] font-semibold tracking-wide text-white/75">Nom complet <span className="text-[#e46a61]">*</span></label>
                    <input id={field.name} name={field.name} autoComplete="name" className={fieldClass} placeholder="Votre nom" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => { field.handleChange(event.target.value); clearError("name"); }} aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} />
                    {errors.name && <p id="contact-name-error" className="mb-0 mt-1.5 text-xs text-[#ff8b83]">{errors.name}</p>}
                  </div>
                )}
              </form.Field>
              <form.Field name="email">
                {(field) => (
                  <div>
                    <label htmlFor={field.name} className="text-[11px] font-semibold tracking-wide text-white/75">Adresse e-mail <span className="text-[#e46a61]">*</span></label>
                    <input id={field.name} name={field.name} type="email" autoComplete="email" className={fieldClass} placeholder="vous@exemple.ma" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => { field.handleChange(event.target.value); clearError("email"); }} aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} />
                    {errors.email && <p id="contact-email-error" className="mb-0 mt-1.5 text-xs text-[#ff8b83]">{errors.email}</p>}
                  </div>
                )}
              </form.Field>
              <form.Field name="phone">
                {(field) => (
                  <div>
                    <label htmlFor={field.name} className="text-[11px] font-semibold tracking-wide text-white/75">Téléphone <span className="text-[#e46a61]">*</span></label>
                    <input id={field.name} name={field.name} type="tel" autoComplete="tel" className={fieldClass} placeholder="+212 6 00 00 00 00" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => { field.handleChange(event.target.value); clearError("phone"); }} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "contact-phone-error" : undefined} />
                    {errors.phone && <p id="contact-phone-error" className="mb-0 mt-1.5 text-xs text-[#ff8b83]">{errors.phone}</p>}
                  </div>
                )}
              </form.Field>
              <form.Field name="subject">
                {(field) => (
                  <div>
                    <label htmlFor={field.name} className="text-[11px] font-semibold tracking-wide text-white/75">Sujet <span className="text-[#e46a61]">*</span></label>
                    <StoreSelect
                      id={field.name}
                      name={field.name}
                      required
                      value={field.state.value}
                      onValueChange={(value) => {
                        field.handleChange(value ?? "");
                        clearError("subject");
                      }}
                      onBlur={field.handleBlur}
                      placeholder="Choisissez un sujet"
                      tone="dark"
                      options={[
                        { value: "conseil-produit", label: "Conseil produit" },
                        { value: "commande", label: "Suivi de commande" },
                        { value: "livraison", label: "Livraison" },
                        { value: "produits-authentiques", label: "Authenticité d’un produit" },
                        { value: "vente-en-gros", label: "Vente en gros" },
                        { value: "autre", label: "Autre demande" },
                      ]}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    />
                    {errors.subject && <p id="contact-subject-error" className="mb-0 mt-1.5 text-xs text-[#ff8b83]">{errors.subject}</p>}
                  </div>
                )}
              </form.Field>
              <form.Field name="message">
                {(field) => (
                  <div className="sm:col-span-2">
                    <label htmlFor={field.name} className="text-[11px] font-semibold tracking-wide text-white/75">Votre message <span className="text-[#e46a61]">*</span></label>
                    <textarea id={field.name} name={field.name} rows={5} className={`${fieldClass} resize-y py-4`} placeholder="Dites-nous ce dont vous avez besoin…" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => { field.handleChange(event.target.value); clearError("message"); }} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} />
                    {errors.message && <p id="contact-message-error" className="mb-0 mt-1.5 text-xs text-[#ff8b83]">{errors.message}</p>}
                  </div>
                )}
              </form.Field>

              <div className="flex flex-col items-start justify-between gap-4 pt-1 sm:col-span-2 sm:flex-row sm:items-center">
                <p role="status" aria-live="polite" className={`m-0 max-w-[420px] text-xs leading-5 ${feedback.startsWith("Votre") ? "text-emerald-300" : "text-white/45"}`}>
                  {feedback || "Les champs marqués d’un astérisque sont obligatoires."}
                </p>
                {emailUrl ? (
                  <a href={emailUrl} className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-brand-red px-6 text-[12px] font-bold text-white transition-colors hover:bg-brand-red-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e46a61] sm:w-auto">
                    Contactez-nous
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                ) : (
                  <button type="submit" className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-brand-red px-6 text-[12px] font-bold text-white transition-colors hover:bg-brand-red-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e46a61] sm:w-auto">
                    Contactez-nous
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
