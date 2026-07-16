import type { MirrorResult } from "@/domain/ritual";
import { colors } from "@/theme/tokens";

export const CARD_WIDTH = 900 + 90 + 90;
export const CARD_HEIGHT = 960 * 2;

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
  context.lineWidth = 6 * 2;
  context.strokeRect(60, 60, CARD_WIDTH - 60 * 2, CARD_HEIGHT - 60 * 2);
  context.fillStyle = colors.ivory;
  context.textAlign = "center";
  context.textBaseline = "middle";

  const sections = [
    { text: result.archetype.toUpperCase(), font: "36px Arial", y: 430, lineHeight: 54 },
    { text: result.title, font: "72px Georgia", y: 600, lineHeight: 88 },
    { text: result.summary, font: "48px Georgia", y: 900, lineHeight: 64 },
    { text: `“${result.shareText}”`, font: "italic 48px Georgia", y: 640 * 2, lineHeight: 64 },
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
  const lines = wrapText(context, text, 840);
  const firstY = startY - ((lines.length - Number(true)) * lineHeight) / 2;
  lines.forEach((line, index) => {
    context.fillText(line, CARD_WIDTH / 2, firstY + index * lineHeight);
  });
}

export function wrapText(
  context: Pick<CanvasRenderingContext2D, "measureText">,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.trim().split(/\s+/);
  if (!words[0]) return [];
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
