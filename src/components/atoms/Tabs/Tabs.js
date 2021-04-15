import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  flex: 1 1 auto;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  box-shadow: 0px 3px 2px 0px #00000020;
`;

const ButtonWrapper = styled.div`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  display: flex;
`;

const Tab = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  position: relative;
  background-color: #00000000;
  outline: 0;

  width: 100%;
  margin: 0;
  padding: 1rem 1rem;

  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 0;

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #00000015;
  }
`;

const TabText = styled.span`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  text-weight: 500;
  font-size: 1vw;
`;

const UnderLine = styled.span`
  position: absolute;
  left: ${({ left }) => left}%;
  width: 100%;
  height: 5px;
  background: ${({ color }) => color || (props => props.theme.mainColorHover)};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  bottom: 0;
`;

const Tabs = ({ select, setSelect, items }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    setLeft(select * 100);
  }, [select]);

  return (
    <Wrapper>
      <ButtonWrapper>
        {items.map((item, index) =>
          index === 0 ? (
            <Tab onClick={() => setSelect(index)}>
              <TabText>{item.name}</TabText>
              <UnderLine left={left} />
            </Tab>
          ) : (
            <Tab onClick={() => setSelect(index)}>
              <TabText>{item.name}</TabText>
            </Tab>
          )
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

Tabs.propTypes = {
  select: PropTypes.number,
  setSelect: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.array)
  //   input: PropTypes.shape({ root: PropTypes.string }),
  //   value: PropTypes.string,
};

Tabs.defaultProps = {
  select: 0,
  setSelect: () => {},
  items: []
  //   input: null,
  //   value: '',
};

export default Tabs;
