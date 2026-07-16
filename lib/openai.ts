import OpenAI from "openai";

/**
 * OpenAI client, stubbed behind OPENAI_API_KEY.
 *
 * If OPENAI_API_KEY is set, real calls are made. If it is missing, the app
 * still runs end-to-end: callers fall back to deterministic mocks so the demo
 * works with no key. The user can add a real key later (secrets / Connections).
 *
 * HARD CONSTRAINT (see README): the LLM only extracts JSON from documents and
 * drafts prose. It NEVER decides clinical stage or urgency — that lives in the
 * deterministic state machine.
 */

const apiKey = process.env.OPENAI_API_KEY?.trim();

/** True when a real key is configured; false means deterministic mock mode. */
export const hasOpenAIKey: boolean = Boolean(apiKey);

/** The model used for extraction and drafting. Override with OPENAI_MODEL. */
export const OPENAI_MODEL = process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";

let client: OpenAI | null = null;

/**
 * Returns a configured OpenAI client, or null when no key is present.
 * Callers MUST handle null by returning a deterministic mock so the app runs
 * without a key.
 */
export function getOpenAI(): OpenAI | null {
  if (!apiKey) return null;
  if (!client) client = new OpenAI({ apiKey });
  return client;
}
