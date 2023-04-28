import PropTypes from "prop-types";

export function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          const bgColor =
            "#" +
            Math.floor(Math.random() * 2 ** 16)
              .toString(16)
              .padStart(6, "f");

          return (
            <li
              className="item"
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
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )


};