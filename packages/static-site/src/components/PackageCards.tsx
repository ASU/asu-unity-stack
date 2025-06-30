import CardWrapper, { CardWrapperProps } from "./Card";

interface PackageJson {
  name: string;
  description: string;
  private: boolean;
  deprecated?: boolean | string;
}

const packages: Record<string, { default: PackageJson }> = import.meta.glob(
  "../../../../packages/*/package.json",
  { eager: true }
);

export const DeprecatedPackageCards = () => {
  const cards: CardWrapperProps[] = [];

  for (const key in packages) {
    const p = packages[key].default;
    const deprecated = p.deprecated ? p.deprecated : false;
    if (
      p.private !== true &&
      deprecated !== false &&
      typeof deprecated === "string"
    ) {
      cards.push({
        title: p.name,
        description: deprecated,
        href: `/${p.name}/index.html`,
        linkLabel: "Launch",
        isRoute: true,
      });
    }
  }

  return (
    <>
      {cards.map((card, index) => (
        <CardWrapper key={index} {...card} />
      ))}
    </>
  );
};

const PackageCards = () => {
  const cards: CardWrapperProps[] = [];

  for (const key in packages) {
    const p = packages[key].default;
    const deprecated = p.deprecated ? p.deprecated : false;
    if (p.private !== true && deprecated === false) {
      cards.push({
        title: p.name,
        description: p.description,
        href: `/${p.name}/index.html`,
        linkLabel: "Launch",
        isRoute: true,
      });
    }
  }

  return (
    <>
      {cards.map((card, index) => (
        <CardWrapper key={index} {...card} />
      ))}
    </>
  );
};

export default PackageCards;
