import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextContainer = styled.div``;
const Text = styled.p`
  > b {
    font-weight: bold;
  }
`;

const TextInfo = ({ text, isBold }) => {
  return (
    <TextContainer>
      <Text>{isBold ? <b>{text}</b> : text}</Text>
    </TextContainer>
  );
};
TextInfo.defaultProps = {
  isBold: false
};
TextInfo.propTypes = {
  text: PropTypes.string.isRequired,
  isBold: PropTypes.bool
};

export default TextInfo;
