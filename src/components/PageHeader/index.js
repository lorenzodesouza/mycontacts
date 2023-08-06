import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
