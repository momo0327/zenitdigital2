import { HOME_METADATA } from "@/app/constants/seo";
import ZeniaHome from "@/zenia/ZeniaHome";

// The page body is a client component, which cannot export metadata itself.
export const metadata = HOME_METADATA;

export default ZeniaHome;
