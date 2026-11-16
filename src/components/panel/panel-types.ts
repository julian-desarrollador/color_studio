export type PanelReservation = {
  id: string;
  treatmentId: string;
  treatmentName: string;
  subtitle: string;
  category: string;
  dateKey: string;
  timeLocal: string;
  displayDate: string;
  /** Duración total del turno en minutos (ausente en respuestas viejas). */
  durationMinutes?: number;
  customerName: string;
  customerPhone: string;
  reservationStatus: string;
  paymentStatus: string;
  cancelledBy?: "panel" | "customer" | "whatsapp" | null;
  source?: string;
  startsAt: string;
  createdAt: string;
  waReminder24hSentAt?: string | null;
  waAttendanceConfirmedAt?: string | null;
};

export type PanelAgendaBlock = {
  id: string;
  anchorDateKey: string;
  timeLocal: string;
  durationMinutes: number;
  scope: string;
  recurrence: { type: "weekly"; untilDateKey?: string | null } | null;
  notes?: string | null;
  groupId?: string | null;
};
