export type PremiumFeature =
  | "full_archive"
  | "deep_sage"
  | "premium_cards"
  | "advanced_learning"
  | "rich_templates"
  | "comparison_history";

export function canAccess(feature: PremiumFeature, isPremium: boolean) {
  const premiumFeatures: PremiumFeature[] = [
    "full_archive",
    "deep_sage",
    "premium_cards",
    "advanced_learning",
    "rich_templates",
    "comparison_history",
  ];
  return !premiumFeatures.includes(feature) || isPremium;
}

export const PREMIUM_PRODUCT = {
  id: "premium_monthly",
  name: "Premium Monthly",
  period: "month",
} as const;

