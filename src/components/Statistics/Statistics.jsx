import PropTypes from "prop-types";

export function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.lenght > 0 &&
          stats.map(({ id, label, percentage }) => {
            const bgColor =
              "#" +
              Math.floor(Math.random() * 2 ** 16)
                .toString(16)
                .padStart(6, "f");

            return (
              <li
                claclassNamess="item"
                key={id}
                style={{ backgroundColor: bgColor }}
              >
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  //   data: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};


  /* <ul className="stat-list">
{stats.lenght > 0 &&
  stats.map(({ id, label, percentage }) => {
    const bgColor =
      "#" +
      Math.floor(Math.random() * 2 ** 16)
        .toString(16)
        .padStart(6, "f");

    return (
      <li claclassNamess="item" key={id} style={{ backgroundColor: bgColor }}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
  })}
</ul> */

