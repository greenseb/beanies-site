import { services } from "../../content/services";
import { Rule, SectionTitle, Wrap } from "../ui";
import { Badge, Card, Cards, Duration, Head, Price, Section, Tiers } from "./PriceList.styles";
import type { ServiceCardProps } from "./PriceList.types";

function ServiceCard({ service }: ServiceCardProps) {
  const { name, duration, price, comingSoon, description, tiers, note } = service;
  const hasHead = Boolean(duration || price || comingSoon);

  return (
    <Card $soon={comingSoon}>
      {hasHead ? (
        <Head>
          <h3>{name}</h3>
          {duration && <Duration>{duration}</Duration>}
          {price && (
            <Price>
              {price.from && <small>from </small>}
              {price.amount}
            </Price>
          )}
          {comingSoon && <Badge>Coming soon</Badge>}
        </Head>
      ) : (
        <h3>{name}</h3>
      )}
      <p>{description}</p>
      {tiers && (
        <Tiers>
          {tiers.map((t) => (
            <li key={t.label}>
              <span>{t.label}</span>
              <b>{t.price}</b>
            </li>
          ))}
        </Tiers>
      )}
      {note && <p>{note}</p>}
    </Card>
  );
}

export function PriceList() {
  return (
    <Section id="prices" aria-labelledby="prices-title">
      <Wrap>
        <SectionTitle>
          <h2 id="prices-title">Price list</h2>
          <Rule />
        </SectionTitle>
        <Cards>
          {services.map((s) => (
            <ServiceCard key={s.name} service={s} />
          ))}
        </Cards>
      </Wrap>
    </Section>
  );
}
