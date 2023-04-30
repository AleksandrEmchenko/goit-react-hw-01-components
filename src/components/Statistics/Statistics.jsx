import PropTypes from "prop-types";
import {
  StatisticsBox,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";

export function Statistics({ title, stats }) {
  return (
    <StatisticsBox>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          const bgColor =
            "#" +
            Math.floor(Math.random() * 2 ** 16)
              .toString(16)
              .padStart(6, "f");

          return (
            <Item key={id} style={{ backgroundColor: bgColor }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsBox>
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
  ),
};
