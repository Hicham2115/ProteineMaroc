"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Paperclip } from "lucide-react";
import { StoreSelect } from "@/components/ui/store-select";

const partnerOptions = [
  { value: "Coach sportif", label: "Coach sportif" },
  { value: "Salle de sport", label: "Salle de sport" },
  { value: "Créateur de contenu", label: "Créateur de contenu" },
  { value: "Revendeur / boutique", label: "Revendeur / boutique" },
  { value: "Autre", label: "Autre" },
];

const inputClass =
  "mt-2 h-12 w-full border border-charcoal/15 bg-[#f8f7f4] px-4 text-[14px] text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-brand-red focus:ring-1 focus:ring-brand-red/25";

export function PartnerForm() {
  const [activity, setActivity] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;
    if (!activity) {
      setFeedback("Choisissez votre activité pour continuer.");
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const file = data.get("file");
    const fileNote = file instanceof File && file.name ? `\nPièce jointe à ajouter : ${file.name}` : "";
    const body = [
      `Nom : ${name}`,
      `E-mail : ${email}`,
      `Téléphone : ${phone}`,
      `Activité : ${activity}`,
      "",
      message,
      fileNote,
    ].join("\n");

    window.location.href = `mailto:infos@mesproteines.ma?subject=${encodeURIComponent("Demande de partenariat — Mes Protéines Nutrition")}&body=${encodeURIComponent(body)}`;
    setFeedback("Votre messagerie va s’ouvrir avec votre demande préremplie. Ajoutez le fichier sélectionné avant l’envoi.");
  }

  return (
    <form onSubmit={submitApplication} className="border border-charcoal/10 bg-white p-5 sm:p-8 lg:p-10">
      <div className="mb-7 flex flex-col justify-between gap-2 border-b border-charcoal/10 pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[.2em] text-brand-red">Votre candidature</p>
          <h3 className="m-0 text-[21px] font-bold tracking-[-.03em] text-charcoal">Parlez-nous de votre projet</h3>
        </div>
        <p className="m-0 text-[11px] text-charcoal/45">* Champs obligatoires</p>
      </div>

      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className="text-[11px] font-semibold text-charcoal/75">Nom complet <span className="text-brand-red">*</span></label>
          <input id="partner-name" className={inputClass} name="name" autoComplete="name" placeholder="Votre nom" required minLength={2} />
        </div>
        <div>
          <label htmlFor="partner-email" className="text-[11px] font-semibold text-charcoal/75">Adresse e-mail <span className="text-brand-red">*</span></label>
          <input id="partner-email" className={inputClass} name="email" type="email" autoComplete="email" placeholder="vous@exemple.ma" required />
        </div>
        <div>
          <label htmlFor="partner-phone" className="text-[11px] font-semibold text-charcoal/75">Téléphone <span className="text-brand-red">*</span></label>
          <input id="partner-phone" className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="+212 6 00 00 00 00" required minLength={8} />
        </div>
        <div>
          <label htmlFor="partner-activity" className="text-[11px] font-semibold text-charcoal/75">Votre activité <span className="text-brand-red">*</span></label>
          <StoreSelect
            id="partner-activity"
            name="activity"
            value={activity ?? undefined}
            onValueChange={setActivity}
            options={partnerOptions}
            placeholder="Choisissez une activité"
            className="[&_button]:h-12 [&_button]:bg-[#f8f7f4] [&_button]:font-normal"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="partner-file" className="text-[11px] font-semibold text-charcoal/75">Présentation ou document <span className="font-normal text-charcoal/45">(facultatif)</span></label>
          <label htmlFor="partner-file" className="mt-2 flex min-h-12 cursor-pointer items-center gap-3 border border-dashed border-charcoal/20 bg-[#f8f7f4] px-4 text-[12px] text-charcoal/55 transition-colors hover:border-brand-red/60 hover:text-charcoal">
            <Paperclip size={16} className="text-brand-red" aria-hidden="true" />
            Joindre un fichier
            <input id="partner-file" name="file" type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="sr-only" />
          </label>
          <p className="mb-0 mt-1.5 text-[10px] text-charcoal/45">PDF, Word ou image. Votre messagerie vous permettra de joindre le fichier au message.</p>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="partner-message" className="text-[11px] font-semibold text-charcoal/75">Présentez votre projet <span className="text-brand-red">*</span></label>
          <textarea id="partner-message" name="message" className={`${inputClass} min-h-32 resize-y py-3`} placeholder="Parlez-nous de votre activité et de la collaboration envisagée…" required minLength={10} />
        </div>
      </div>

      {feedback && <p role="status" className="mb-0 mt-4 text-[12px] leading-5 text-charcoal/70">{feedback}</p>}
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 bg-brand-red px-5 text-[13px] font-bold text-white transition-colors hover:bg-brand-red-deep focus-visible:outline-charcoal">
        Envoyer ma demande
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </form>
  );
}
