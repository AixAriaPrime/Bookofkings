import type { MirrorResult } from "@/domain/ritual";

export const CARD_WIDTH = 1080;
export const CARD_HEIGHT = 1920;

export function cardLines(result: MirrorResult) {
  return [result.title, result.summary, result.shareText];
}

export function exportMirrorCard(canvas: HTMLCanvasElement, result: MirrorResult) {
  canvas.width = CARD_WIDTH;
  canvas.height = CARD_HEIGHT;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas rendering is unavailable");
  context.fillStyle = "#173f78";
  context.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);
  context.strokeStyle = "#c89b3c";
  context.lineWidth = 12;
  context.strokeRect(60, 60, CARD_WIDTH - 120, CARD_HEIGHT - 120);
  context.fillStyle = "#f7f0df";
  context.textAlign = "center";
  context.font = "64px Georgia";
  cardLines(result).forEach((line, index) => {
    context.fillText(line, CARD_WIDTH / 2, 600 + index * 180, 840);
  });
  return canvas.toDataURL("image/png");
}
