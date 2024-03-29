export function createIdFromTitle(title: string) {
  if (!title || !title.length) {
    return "";
  }

  const sanitizedText = title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/  /g, " ");
  const textArray = sanitizedText.split(" ");

  return textArray.join("-");
}

export function parseFeedData(data: any) {
  if (!data?.rss?.channel && !data?.feed) {
    return {};
  }

  const feedResult = data?.feed || data?.rss?.channel;

  return feedResult;
}

export function addOrUpdateObject(array: any[], newObject: any) {
  let newArray = array;
  const index = newArray.findIndex(
    (item) => item.webLink === newObject.webLink
  );
  if (index !== -1) {
    newArray[index] = newObject;
  } else {
    newArray.push(newObject);
  }

  return newArray;
}

export function formatDate(date: string) {
  return date.slice(0, 10);
}
