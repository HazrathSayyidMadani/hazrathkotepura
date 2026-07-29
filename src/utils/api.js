const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function postJson(endpoint, data) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Request failed");
  }

  return result;
}

export function submitContact(data) {
  return postJson("/api/contact", data);
}

export function submitAdmission(data) {
  return postJson("/api/admission", data);
}

export function submitAlumni(data) {
  return postJson("/api/alumni", data);
}

export async function fetchAlumni(schoolId) {
  const response = await fetch(`${API_BASE}/api/alumni?school=${schoolId}`);
  const result = await response.json();
  if (!response.ok) throw new Error(result.message || "Failed to fetch alumni");
  return result;
}
