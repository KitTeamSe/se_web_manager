import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextContainer = styled.div``;
const Text = styled.p``;
const TextInfo = ({ text }) => {
  return (
    <TextContainer>
      <Text>{text}</Text>
    </TextContainer>
  );
};

TextInfo.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextInfo;
