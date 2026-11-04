// src/api/api.js
// ─────────────────────────────────────────────────────────────
// All backend calls live here (one place = easy to maintain)
// In the full project these are split: doctorApi.js, appointmentApi.js, etc.
// In development Vite proxies /api to the local backend. In production,
// VITE_API_URL points to the deployed backend origin.
// ─────────────────────────────────────────────────────────────

export const API_BASE = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/+$/, '')}/api`
  : '/api'

// Shared fetch helper — handles network, JSON, and HTTP errors consistently.
export async function apiRequest(path, options = {}) {
  let res
  try {
    res = await fetch(`${API_BASE}${path}`, {
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...options,
    })
  } catch {
    throw new Error(
      'Cannot reach the backend. Start it and verify the MongoDB Atlas hostname and Network Access settings.'
    )
  }

  let data
  try {
    data = await res.json()
  } catch {
    throw new Error(
      `Backend is unavailable (HTTP ${res.status}). Check the backend logs and MongoDB Atlas connection.`
    )
  }

  if (!res.ok) throw new Error(data.message || 'Request failed')
  return data
}

const request = apiRequest

// ── Doctors ───────────────────────────────────────────────────
export const getDoctors      = (spec = '')  => request(`/doctors${spec ? `?spec=${spec}` : ''}`)
export const getDoctorById   = (id)         => request(`/doctors/${id}`)

// ── Appointments ──────────────────────────────────────────────
export const getAppointments = ()           => request('/appointments')
export const bookAppointment = (payload)    => request('/appointments', { method: 'POST', body: JSON.stringify(payload) })
export const cancelAppointment = (id)       => request(`/appointments/${id}`, { method: 'DELETE' })

// ── Stats (dashboard) ─────────────────────────────────────────
export const getStats        = ()           => request('/stats')
