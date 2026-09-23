import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Landing,
  metadataLanding,
  resolverLanding,
  slugsLanding,
} from "@/components/Landing";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return slugsLanding("ca");
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return metadataLanding("ca", slug);
}

export default async function Pagina({ params }: Props) {
  const { slug } = await params;
  if (!resolverLanding("ca", slug).pagina) notFound();
  return <Landing locale="ca" slug={slug} />;
}
