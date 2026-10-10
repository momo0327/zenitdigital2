"use client";
import { useRef, useState } from "react";
import Modal from "./Modal";

const services = [
  ["Mobile development", "Mobile apps"],
  ["Full-stack development", "Full-stack"],
  ["Web development", "Websites"],
];
export default function ContactForm({ service, onClose }) {
  const [fields, setFields] = useState({ name: "", email: "", idea: "" });
  const [selected, setSelected] = useState(service ? [service] : []);
  const [brief, setBrief] = useState(""),
    [status, setStatus] = useState("");
  const dialog = useRef(null),
    downloadButton = useRef(null),
    nameInput = useRef(null);
  const update = (event) =>
    setFields({ ...fields, [event.target.name]: event.target.value });
  function submit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setBrief(
      `ZENIA DIGITAL — PROJECT BRIEF\n\nName: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\n\nInterested in:\n${selected.join("\n") || "Let’s work it out together"}\n\nThe idea:\n${fields.idea.trim()}\n\nCreated ${new Date().toLocaleDateString("en-GB")}\nThis brief has not been sent.`,
    );
    dialog.current.scrollTop = 0;
    setTimeout(() => downloadButton.current?.focus({ preventScroll: true }), 0);
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "zenia-project-brief.txt";
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setStatus("Copied. Ready to share.");
    } catch {
      setStatus("Copy is unavailable here. Download your brief instead.");
    }
  }
  function edit() {
    setBrief("");
    setStatus("");
    dialog.current.scrollTop = 0;
    setTimeout(() => nameInput.current?.focus({ preventScroll: true }), 0);
  }
  return (
    <Modal
      dialogRef={dialog}
      className="contact-dialog"
      id="contact-dialog"
      labelledBy="contact-dialog-title"
      onClose={onClose}
      backdropClose
    >
      <button
        className="close-button contact-close"
        onClick={onClose}
        aria-label="Close project brief"
      >
        Close <span aria-hidden="true">×</span>
      </button>
      <div id="form-intro" hidden={!!brief}>
        <h2 id="contact-dialog-title">Let’s hear your idea.</h2>
        <p>
          A few thoughts are all it takes to make a start. Create a brief you
          can save and share.
        </p>
      </div>
      <form id="project-form" hidden={!!brief} onSubmit={submit}>
        <div className="form-row">
          <label>
            Your name
            <input
              ref={nameInput}
              name="name"
              autoComplete="name"
              required
              maxLength="100"
              placeholder="Alex Morgan"
              value={fields.name}
              onChange={update}
            />
          </label>
          <label>
            Your email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength="200"
              placeholder="alex@company.com"
              value={fields.email}
              onChange={update}
            />
          </label>
        </div>
        <label>
          What are you thinking?
          <textarea
            name="idea"
            rows="4"
            required
            maxLength="4000"
            placeholder="Tell us a little about your idea…"
            value={fields.idea}
            onChange={update}
          />
        </label>
        <fieldset>
          <legend>I’m interested in</legend>
          <div className="service-choices">
            {services.map(([value, label]) => (
              <label key={value}>
                <input
                  type="checkbox"
                  name="service"
                  value={value}
                  checked={selected.includes(value)}
                  onChange={(event) =>
                    setSelected(
                      event.target.checked
                        ? [...selected, value]
                        : selected.filter((item) => item !== value),
                    )
                  }
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <button className="button button-dark form-submit" type="submit">
          Create project brief
        </button>
        <p className="form-note">
          Your details stay in this browser. Nothing is sent or stored.
        </p>
      </form>
      <div id="brief-result" hidden={!brief}>
        <h3>Your next chapter starts here.</h3>
        <p>Your brief is ready to download or copy. It hasn’t been sent.</p>
        <pre id="brief-preview">{brief}</pre>
        <div className="brief-actions">
          <button
            ref={downloadButton}
            className="button button-dark"
            onClick={download}
          >
            Download brief
          </button>
          <button className="button button-gray" onClick={copy}>
            Copy brief
          </button>
        </div>
        <p role="status">{status}</p>
        <button className="inline-link" onClick={edit}>
          Edit your answers
        </button>
      </div>
    </Modal>
  );
}
