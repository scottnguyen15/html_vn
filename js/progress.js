import { auth, db } from './firebase-config.js';
import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

export async function saveProgress(chapter, status) {
  const user = auth.currentUser;
  if (!user) return;

  const ref = doc(db, "progress", user.uid);
  const snapshot = await getDoc(ref);
  const data = snapshot.exists() ? snapshot.data() : { progress: {} };
  data.progress[chapter] = status;

  await setDoc(ref, data);
}

export async function getProgress() {
  const user = auth.currentUser;
  if (!user) return {};

  const ref = doc(db, "progress", user.uid);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? snapshot.data().progress : {};
}
