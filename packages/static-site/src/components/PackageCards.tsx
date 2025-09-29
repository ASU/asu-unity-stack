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
  // Manually add deprecated packages, as they may no longer be in the packages folder
  return (
    <>
      <CardWrapper
        title="@asu/components-core"
        description="Core UDS React UI components required by other higher-order React packages"
        href="https://github.com/orgs/ASU/packages/npm/package/components-core"
        linkLabel="View npm package"
      />
      <CardWrapper
        title="@asu/component-header"
        description="ASU Global Header"
        href="https://github.com/orgs/ASU/packages/npm/package/component-header"
        linkLabel="View npm package"
      />
      <CardWrapper
        title="@asu/component-footer"
        description="ASU Global Footer"
        href="https://github.com/orgs/ASU/packages/npm/package/component-footer"
        linkLabel="View npm package"
      />
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
