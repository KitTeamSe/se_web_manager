import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextInfo from '../../atoms/TextInfo/TextInfo';

const TextListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    margin: 0 1rem 1rem 1rem;
  }
`;
const TextList = ({ textData }) => {
  const [textList, setTextList] = useState();
  const renderTextList = () => {
    const tempArray = textData.map(data => (
      <TextLineContainer>
        {/* label */}
        <TextInfo className="label" text={data.label} isBold />
        {/* text */}
        <TextInfo className="text" text={data.text} />
      </TextLineContainer>
    ));
    setTextList(tempArray);
  };
  useEffect(() => {
    renderTextList();
  }, [textData]);
  return <TextListContainer>{textList}</TextListContainer>;
};

TextList.defaultProps = {
  textData: [{ label: 'defaultLabel', text: 'defaultText' }]
};
TextList.propTypes = {
  textData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

export default TextList;
