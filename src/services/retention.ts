const VISIT_KEY = "mirror-visited";
const LAST_RITUAL_KEY = "mirror-last-ritual";

export function isReturnVisit(storage: Pick<Storage, "getItem">) {
  return storage.getItem(VISIT_KEY) === "true";
}

export function markVisit(storage: Pick<Storage, "setItem">) {
  storage.setItem(VISIT_KEY, "true");
}

export function markRitualComplete(storage: Pick<Storage, "setItem">, date = new Date()) {
  storage.setItem(LAST_RITUAL_KEY, date.toISOString().slice(0, 10));
}

export function completedToday(storage: Pick<Storage, "getItem">, date = new Date()) {
  return storage.getItem(LAST_RITUAL_KEY) === date.toISOString().slice(0, 10);
}

