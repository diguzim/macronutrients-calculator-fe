"use server";

import { revalidateTag } from "next/cache";
import { RESOURCE_TAGS } from "../../../utils/constants/resource-tags";

export async function revalidatePublicFoods() {
  revalidateTag(RESOURCE_TAGS.PUBLIC_FOODS);
}
