/** @format */

import { Person } from "./Avatar";

export function getImageUrl(person: Person, size: string | number = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
