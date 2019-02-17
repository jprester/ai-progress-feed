export function createIdFromTitle(title: string) {
  if (!title || !title.length) {
    return '';
  }

  const sanitizedText = title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/  /g, ' ');
  const textArray = sanitizedText.split(' ');

  return textArray.join('-');
}
