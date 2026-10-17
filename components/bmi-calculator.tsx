"use client";

import { useState, type FormEvent } from "react";
import { StoreSelect } from "@/components/ui/store-select";

type BmiResult = {
  value: string;
  category: string;
  message: string;
  bmi: number | null;
};

function getCategory(bmi: number) {
  if (bmi < 18.5) return "Poids insuffisant";
  if (bmi < 25) return "Corpulence considérée comme saine";
  if (bmi < 30) return "Surpoids";
  return "Obésité";
}

export function BmiCalculator() {
  const [result, setResult] = useState<BmiResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const age = Number(formData.get("age"));
    const weight = Number(formData.get("weight"));
    const height = Number(formData.get("height"));

    if (!Number.isFinite(age) || !Number.isFinite(weight) || !Number.isFinite(height) || weight <= 0 || height <= 0) {
      setResult({ value: "—", category: "Vérifiez vos informations", message: "Saisissez un âge, un poids et une taille valides.", bmi: null });
      return;
    }

    if (age < 20) {
      setResult({ value: "—", category: "Résultat non disponible", message: "Cette estimation utilise les repères adultes, prévus à partir de 20 ans.", bmi: null });
      return;
    }

    const bmi = weight / (height / 100) ** 2;
    setResult({
      value: bmi.toFixed(1),
      category: getCategory(bmi),
      message: "Le BMI est un repère de dépistage. Il ne suffit pas à évaluer votre santé à lui seul.",
      bmi,
    });
  }

  return (
    <section
      className="relative isolate overflow-hidden bg-[#202326] bg-cover bg-center px-[clamp(20px,4vw,72px)] py-[clamp(60px,6vw,92px)] text-white"
      style={{ backgroundImage: "linear-gradient(rgba(18,20,22,.88), rgba(32,35,38,.96)), url('/images/audience/men-editorial.jpg')" }}
      aria-labelledby="bmi-title"
    >
      <div className="pointer-events-none absolute -right-32 -top-24 size-[420px] rounded-full border border-white/[.06]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-12 size-[300px] rounded-full border border-white/[.06]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px]">
        <header className="mx-auto mb-8 max-w-[760px] text-center sm:mb-10">
          <span className="mb-4 inline-flex items-center gap-2 border border-white/15 bg-white/[.06] px-3 py-2 text-[9px] font-extrabold uppercase tracking-[.2em] text-white/70">
            <span className="size-1.5 rounded-full bg-[#e0463f]" aria-hidden="true" />
            Votre repère forme
          </span>
          <h2 id="bmi-title" className="m-0 font-heading text-[clamp(40px,5vw,68px)] font-black uppercase leading-[.92] tracking-[-.02em] text-white">
            Calculateur <span className="text-[#e0463f]">BMI</span>
          </h2>
          <p className="mx-auto mb-0 mt-4 max-w-[650px] text-[14px] leading-6 text-white/65 sm:text-[16px]">
            Obtenez une estimation rapide à partir de vos mesures. Cela prend moins d’une minute.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mx-auto max-w-[900px] border border-white/10 border-t-[3px] border-t-[#d72d32] bg-[#252a30]/95 shadow-[0_28px_90px_rgba(0,0,0,.38)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-8">
            <div>
              <p className="mb-1 text-[9px] font-extrabold uppercase tracking-[.2em] text-[#e46a61]">Informations personnelles</p>
              <p className="m-0 text-[13px] text-white/55">Renseignez vos mesures pour commencer.</p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[.14em] text-white/40">Étape 1 · 1 min</span>
          </div>

          <div className="p-5 sm:p-8 lg:p-9">
          <fieldset className="mb-8 border-0 p-0">
            <legend className="mb-3 text-[11px] font-extrabold uppercase tracking-[.14em] text-white/60">Sexe</legend>
            <div className="grid max-w-[360px] grid-cols-2 gap-2">
              <label className="flex cursor-pointer items-center gap-2 border border-white/10 bg-white/[.04] px-4 py-3 text-[13px] font-semibold text-white/75 transition-colors has-[:checked]:border-[#e0463f] has-[:checked]:bg-[#d72d32]/10 has-[:checked]:text-white">
                <input type="radio" name="sex" value="homme" defaultChecked className="size-4 accent-[#d72d32]" /> Homme
              </label>
              <label className="flex cursor-pointer items-center gap-2 border border-white/10 bg-white/[.04] px-4 py-3 text-[13px] font-semibold text-white/75 transition-colors has-[:checked]:border-[#e0463f] has-[:checked]:bg-[#d72d32]/10 has-[:checked]:text-white">
                <input type="radio" name="sex" value="femme" className="size-4 accent-[#d72d32]" /> Femme
              </label>
            </div>
          </fieldset>

          <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            <label className="block text-[11px] font-extrabold uppercase tracking-[.12em] text-white/65">
              Âge
              <input required type="number" name="age" min="1" max="120" inputMode="numeric" placeholder="Ex. 28 ans" className="mt-2 h-14 w-full border border-white/10 bg-[#363d44] px-4 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/35 hover:border-white/25 focus:border-[#e46a61] focus:ring-1 focus:ring-[#e46a61]/40" />
            </label>
            <label className="block text-[11px] font-extrabold uppercase tracking-[.12em] text-white/65">
              Poids (kg)
              <input required type="number" name="weight" min="1" max="500" step="0.1" inputMode="decimal" placeholder="Ex. 72 kg" className="mt-2 h-14 w-full border border-white/10 bg-[#363d44] px-4 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/35 hover:border-white/25 focus:border-[#e46a61] focus:ring-1 focus:ring-[#e46a61]/40" />
            </label>
            <label className="block text-[11px] font-extrabold uppercase tracking-[.12em] text-white/65">
              Taille (cm)
              <input required type="number" name="height" min="50" max="260" step="0.1" inputMode="decimal" placeholder="Ex. 175 cm" className="mt-2 h-14 w-full border border-white/10 bg-[#363d44] px-4 text-[14px] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/35 hover:border-white/25 focus:border-[#e46a61] focus:ring-1 focus:ring-[#e46a61]/40" />
            </label>
            <label className="block text-[11px] font-extrabold uppercase tracking-[.12em] text-white/65 lg:col-span-2">
              Niveau d’exercice / activité
              <StoreSelect
                name="activity"
                defaultValue="sedentary"
                tone="dark"
                options={[
                  { value: "sedentary", label: "Sédentaire" },
                  { value: "light", label: "Activité légère" },
                  { value: "moderate", label: "Activité modérée" },
                  { value: "high", label: "Activité élevée" },
                ]}
              />
            </label>
            <label className="block text-[11px] font-extrabold uppercase tracking-[.12em] text-white/65 lg:col-span-1">
              Objectif
              <StoreSelect
                name="goal"
                defaultValue="maintain"
                tone="dark"
                options={[
                  { value: "maintain", label: "Maintien" },
                  { value: "gain", label: "Prise de masse" },
                  { value: "lose", label: "Perte de poids" },
                  { value: "performance", label: "Performance" },
                ]}
              />
            </label>
          </div>

          <div className="mt-9 flex flex-col items-center gap-5">
            <button type="submit" className="group inline-flex min-h-14 min-w-[220px] items-center justify-center gap-3 rounded-full bg-[#d72d32] px-10 text-[12px] font-extrabold uppercase tracking-[.12em] text-white transition-all hover:bg-[#b91f28] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Calculer
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            {result && (
              <div className="w-full border border-white/10 bg-[#1f2429] p-6 text-center sm:p-8" aria-live="polite" role="status">
                <p className="m-0 text-[9px] font-extrabold uppercase tracking-[.2em] text-white/45">Votre BMI estimé</p>
                <p className="mb-1 mt-3 font-heading text-[clamp(52px,8vw,76px)] font-black leading-none text-white">{result.value}</p>
                <p className="mb-2 text-[16px] font-bold text-[#f07870]">{result.category}</p>
                {result.bmi !== null && (
                  <div className="mx-auto mb-4 mt-6 max-w-[520px]" aria-label={`BMI ${result.value}`}>
                    <div className="relative flex h-2 overflow-visible">
                      <span className="h-full w-[14%] bg-[#e0ad55]" />
                      <span className="h-full w-[26%] bg-[#6db98c]" />
                      <span className="h-full w-[20%] bg-[#e0ad55]" />
                      <span className="h-full flex-1 bg-[#d7655e]" />
                      <span className="absolute -top-1.5 size-5 -translate-x-1/2 rounded-full border-[3px] border-white bg-[#202326] shadow" style={{ left: `${Math.min(100, Math.max(0, ((result.bmi - 15) / 25) * 100))}%` }} />
                    </div>
                    <div className="mt-2 flex justify-between text-[8px] font-semibold text-white/45 sm:text-[9px]"><span>Faible</span><span>Repère sain</span><span>Élevé</span></div>
                  </div>
                )}
                <p className="mx-auto mb-0 max-w-[620px] text-[11px] leading-5 text-white/50">{result.message}</p>
              </div>
            )}
          </div>

          <p className="mb-0 mt-7 text-center text-[10px] leading-5 text-white/45">
            Estimation pour les adultes de 20 ans et plus. Le BMI est un outil de dépistage, pas un diagnostic.
          </p>
          </div>
        </form>
      </div>
    </section>
  );
}
