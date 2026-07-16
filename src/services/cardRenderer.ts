import type { MirrorResult } from "@/domain/ritual";
import { colors } from "@/theme/tokens";

const CARD_BASE_WIDTH = 360;
const CARD_BASE_HEIGHT = 640;
const CARD_MARGIN = 60;
const CARD_HORIZONTAL_GUTTER_COUNT = 4;
const CARD_BORDER_BASE_WIDTH = 6;
const CARD_BORDER_WIDTH = CARD_BORDER_BASE_WIDTH * 2;
const CARD_TEXT_WIDTH =
  CARD_BASE_WIDTH * 3 - CARD_MARGIN * CARD_HORIZONTAL_GUTTER_COUNT;
const ARCHETYPE_CENTER_Y = 430;
const TITLE_CENTER_Y = 600;
const SUMMARY_CENTER_Y = 900;
const QUOTE_CENTER_Y = CARD_BASE_HEIGHT * 2;
const ARCHETYPE_LINE_HEIGHT = 54;
const TITLE_LINE_HEIGHT = 88;
const COPY_LINE_HEIGHT = 64;

export const CARD_WIDTH = CARD_BASE_WIDTH * 3;
export const CARD_HEIGHT = CARD_BASE_HEIGHT * 3;

export interface MirrorCardExportMetadata {
  width: number;
  height: number;
  mimeType: "image/png";
  fileName: string;
  alt: string;
}

export function cardLines(result: MirrorResult) {
  return [result.title, result.summary, result.shareText];
}

export function mirrorCardExportMetadata(result: MirrorResult): MirrorCardExportMetadata {
  return {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    mimeType: "image/png",
    fileName: `book-of-kings-${result.archetype.toLowerCase()}.png`,
    alt: `Book of Kings Mirror card: ${result.title}`,
  };
}

export function exportMirrorCard(canvas: HTMLCanvasElement, result: MirrorResult) {
  const metadata = mirrorCardExportMetadata(result);
  canvas.width = metadata.width;
  canvas.height = metadata.height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas rendering is unavailable");

  context.fillStyle = colors.lapis;
  context.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);
  context.strokeStyle = colors.gold;
  context.lineWidth = CARD_BORDER_WIDTH;
  context.strokeRect(
    CARD_MARGIN,
    CARD_MARGIN,
    CARD_WIDTH - CARD_MARGIN * 2,
    CARD_HEIGHT - CARD_MARGIN * 2,
  );
  context.fillStyle = colors.ivory;
  context.textAlign = "center";
  context.textBaseline = "middle";

  const sections = [
    {
      text: result.archetype.toUpperCase(),
      font: "36px Arial",
      y: ARCHETYPE_CENTER_Y,
      lineHeight: ARCHETYPE_LINE_HEIGHT,
    },
    {
      text: result.title,
      font: "72px Georgia",
      y: TITLE_CENTER_Y,
      lineHeight: TITLE_LINE_HEIGHT,
    },
    {
      text: result.summary,
      font: "48px Georgia",
      y: SUMMARY_CENTER_Y,
      lineHeight: COPY_LINE_HEIGHT,
    },
    {
      text: `“${result.shareText}”`,
      font: "italic 48px Georgia",
      y: QUOTE_CENTER_Y,
      lineHeight: COPY_LINE_HEIGHT,
    },
  ];
  for (const section of sections) {
    context.font = section.font;
    drawWrappedText(context, section.text, section.y, section.lineHeight);
  }
  return canvas.toDataURL(metadata.mimeType);
}

function drawWrappedText(
  context: CanvasRenderingContext2D,
  text: string,
  startY: number,
  lineHeight: number,
) {
  const lines = wrapText(context, text, CARD_TEXT_WIDTH);
  const firstY = startY - (lines.length * lineHeight) / 2 + lineHeight / 2;
  lines.forEach((line, index) => {
    context.fillText(line, CARD_WIDTH / 2, firstY + index * lineHeight);
  });
}

export function wrapText(
  context: Pick<CanvasRenderingContext2D, "measureText">,
  text: string,
  maxWidth: number,
): string[] {
  const normalized = text.trim();
  if (!normalized) return [];
  const words = normalized.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (!line || context.measureText(candidate).width <= maxWidth) {
      line = candidate;
    } else {
      lines.push(line);
      line = word;
    }
  }
  lines.push(line);
  return lines;
}
