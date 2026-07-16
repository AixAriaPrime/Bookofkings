// Service: Payments
// Interface only — Stripe implementation comes in subscription milestone.

import type { Subscription, PricingPlan } from "@/domain/subscription/types";

export interface IPaymentsService {
  getPlans(): Promise<PricingPlan[]>;
  createCheckoutSession(planId: string, userId: string): Promise<string>;
  getSubscription(userId: string): Promise<Subscription | null>;
  cancelSubscription(subscriptionId: string): Promise<void>;
  createPortalSession(userId: string): Promise<string>;
}

// Placeholder
export class PaymentsService implements IPaymentsService {
  async getPlans(): Promise<PricingPlan[]> {
    return [];
  }
  async createCheckoutSession(
    _planId: string,
    _userId: string
  ): Promise<string> {
    throw new Error("PaymentsService not implemented");
  }
  async getSubscription(_userId: string): Promise<Subscription | null> {
    return null;
  }
  async cancelSubscription(_subscriptionId: string): Promise<void> {
    throw new Error("PaymentsService not implemented");
  }
  async createPortalSession(_userId: string): Promise<string> {
    throw new Error("PaymentsService not implemented");
  }
}
