/**
 * Tiny cross-component channel for the résumé viewer.
 * Any button can call openResume(); the single mounted <ResumeViewer /> listens.
 * Avoids threading state or a context provider through the whole page.
 */
export const RESUME_OPEN_EVENT = "resume:open";

export function openResume() {
  window.dispatchEvent(new CustomEvent(RESUME_OPEN_EVENT));
}
