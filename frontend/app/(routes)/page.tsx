import CarouselHero from "@/app/components/carousel/carousel-hero";
import { FAKE_SLIDES_HERO, FAKE_SLIDES_PROMO } from "@/app/data/data-fake";
import H2 from "../components/heading/heading-2";
import IconArrowRight from "@/public/icons/icon-arrow-right.svg";
import CarouselPromo from "../components/carousel/carousel-promo";
import { LINK_PROMOS_REWARDS } from "../lib/constants";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";

export default async function Page() {
  return (
    <>
      <section>
        <CarouselHero slides={FAKE_SLIDES_HERO} />
      </section>
      <section className="flex justify-center my-6">
        <div className="max-w-screen-lg w-full px-6 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
            <H2>Promos & Rewards</H2>
            <Link
              as={NextLink}
              href={LINK_PROMOS_REWARDS}
              underline="always"
              className="font-n2m text-sm text-black flex items-center justify-center gap-2"
            >
              <p>View All Promos & Rewards</p>
              <IconArrowRight />
            </Link>
          </div>
          <CarouselPromo slides={FAKE_SLIDES_PROMO} />
        </div>
      </section>
    </>
  );
}
