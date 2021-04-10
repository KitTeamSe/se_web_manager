import React from 'react';
import styled from 'styled-components';
import TextLine from '../../atoms/TextInfo/TextInfo';

const TextListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextList = ({ textData }) => {
  return (
    <TextListContainer>
      <TextLine />
    </TextListContainer>
  );
};

export default TextList;
