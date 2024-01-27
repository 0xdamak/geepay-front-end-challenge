import { platforms } from "@/src/data/platforms";
import TopPlatforms from "@/src/components/TopPlatforms";

export default function Report(): JSX.Element {
  return <TopPlatforms data={platforms} seeAll={false} />;
}
