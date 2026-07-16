// Domain: Subscription
// Types only — no logic.

export type SubscriptionStatus =
  | "active"
  | "trialing"
  | "past_due"
  | "canceled"
  | "incomplete";

export interface Subscription {
  id: string;
  userId: string;
  status: SubscriptionStatus;
  planId: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
}
