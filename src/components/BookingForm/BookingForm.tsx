import { useState, type FormEvent } from "react";
import { SubmitButton } from "../ui";
import { Field, Form, Honeypot, Intro, Row, Section, StatusText } from "./BookingForm.styles";
import type { Status } from "./BookingForm.types";

// Formspree-style endpoint, e.g. https://formspree.io/f/abcdwxyz (see .env.example)
const endpoint = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim() ?? "";

const serviceOptions = ["Walk", "Pop-in", "Chauffeuring", "Grooming", "Sitting"];

export function BookingForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Spam trap: real people never fill this in
    if ((form.elements.namedItem("website") as HTMLInputElement | null)?.value) return;

    if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
      setStatus({
        kind: "err",
        message: "This form isn't connected yet. See the README for the one-minute setup.",
      });
      return;
    }

    setStatus({ kind: "sending", message: "Sending..." });

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus({
        kind: "ok",
        message: "Thanks, your request is in. We'll be in touch to confirm the price and time.",
      });
    } catch {
      setStatus({
        kind: "err",
        message: "Something went wrong. Please try again, or message us on Instagram.",
      });
    }
  }

  return (
    <Section id="book" aria-labelledby="book-title">
      <Intro>
        <h2 id="book-title">Request a booking</h2>
        <p>Send your request and Beanies will confirm the price and time with you. Nothing is booked until you hear back.</p>
      </Intro>
      <Form onSubmit={onSubmit}>
        <Honeypot type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <Field>
          <label htmlFor="f-service">Service</label>
          <select id="f-service" name="service" required>
            {serviceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Row>
          <Field>
            <label htmlFor="f-date">Preferred date</label>
            <input id="f-date" name="preferred_date" type="text" placeholder="Saturday 12 December" required />
          </Field>
          <Field>
            <label htmlFor="f-time">Preferred time</label>
            <input id="f-time" name="preferred_time" type="text" placeholder="Mornings" />
          </Field>
        </Row>
        <Row>
          <Field>
            <label htmlFor="f-pet">Pet's name</label>
            <input id="f-pet" name="pet_name" type="text" placeholder="Biscuit" required />
          </Field>
          <Field>
            <label htmlFor="f-species">Type of pet</label>
            <input id="f-species" name="pet_type" type="text" placeholder="Rabbit" required />
          </Field>
        </Row>
        <Field>
          <label htmlFor="f-addr">Address</label>
          <input id="f-addr" name="address" type="text" autoComplete="street-address" placeholder="Street and postcode" required />
        </Field>
        <Field>
          <label htmlFor="f-notes">Notes, including any medication</label>
          <textarea id="f-notes" name="notes" rows={4} placeholder="Anything we should know about your pet" />
        </Field>
        <Row>
          <Field>
            <label htmlFor="f-name">Your name</label>
            <input id="f-name" name="name" type="text" autoComplete="name" placeholder="Alex Smith" required />
          </Field>
          <Field>
            <label htmlFor="f-email">Email or phone</label>
            <input id="f-email" name="contact" type="text" autoComplete="email" placeholder="name@example.com" required />
          </Field>
        </Row>
        <SubmitButton type="submit">Send request</SubmitButton>
        <StatusText $kind={status.kind} id="form-status" role="status" aria-live="polite">
          {status.message}
        </StatusText>
      </Form>
    </Section>
  );
}
