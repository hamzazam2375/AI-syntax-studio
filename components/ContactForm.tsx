"use client";

import { useActionState } from "react";
import { submitInquiry, type ContactState } from "@/app/actions/contact";
import { serviceOptions } from "@/lib/site";

const initialState: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  return (
    <form className="contact-form" action={formAction}>
      <div className="form-row">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required minLength={2} />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Service of interest
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Project details
        <textarea
          name="details"
          rows={6}
          required
          minLength={20}
          placeholder="Tell us about the workflow, data, constraints, and timeline."
        />
      </label>
      <button className="button-primary" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send inquiry"}
      </button>
      {state.status !== "idle" ? (
        <p className={`form-status is-${state.status}`} role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
