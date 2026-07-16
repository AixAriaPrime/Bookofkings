export type LearningTopic =
  | "persian-culture"
  | "shahnameh-theme"
  | "identity"
  | "world-history";

export interface LearningStory {
  topic: LearningTopic;
  kicker: string;
  title: string;
  body: string;
}

export const LEARNING_STORIES: LearningStory[] = [
  {
    topic: "persian-culture",
    kicker: "Persian culture · Everyday life",
    title: "Hospitality as connection",
    body: "Across many Persian communities, offering tea, food, and a warm welcome is a way to show care. Customs vary by family and place, but hospitality often helps people build trust and belonging.",
  },
  {
    topic: "shahnameh-theme",
    kicker: "Shahnameh · Theme",
    title: "Courage with consequence",
    body: "In the Shahnameh, strength is rarely simple. Heroes are remembered not only for victory, but for how choices echo through families and generations.",
  },
  {
    topic: "identity",
    kicker: "Language · Identity",
    title: "Persian, Iranian, and Farsi",
    body: "Iranian can describe a nationality and also a broad family of peoples and languages. Persian can describe a language and cultural tradition; Farsi is the language’s name in Persian. A person may use more than one of these words, and preferred identity terms vary by person and context.",
  },
  {
    topic: "world-history",
    kicker: "World history · Connection",
    title: "A living literary bridge",
    body: "For centuries, Persian poetry and storytelling traveled across Central, South, and West Asia through trade, migration, learning, and art. These exchanges connected royal courts, family homes, and everyday speech.",
  },
];
