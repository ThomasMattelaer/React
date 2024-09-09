import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../lib/constant.js";

export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} heading={"Words"} />
      <Stat number={stats.numberOfCharacters} heading={"Characters"} />
      <Stat
        number={INSTAGRAM_MAX_CHARACTERS - stats.numberOfCharacters}
        heading={"Instagram"}
      />
      <Stat
        number={FACEBOOK_MAX_CHARACTERS - stats.numberOfCharacters}
        heading={"Facebook"}
      />
    </section>
  );
}

function Stat({ number, heading }) {
  return (
    <section className="stat">
      <span
        className={`stat_number ${number < 0 ? "stat__number--limit" : null}`}
      >
        {number}
      </span>
      <h2 className="second-handing">{heading}</h2>
    </section>
  );
}
