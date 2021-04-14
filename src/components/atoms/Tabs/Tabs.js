import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  flex: 1 1 auto;
  display: inline-block;
  position: relative;
  white-space: nowrap;
`;

// const ButtonWrapper = styled.div`
//   width: 33.33333333333333333333333%;
//   background-color: gray;
// `;

const Tab = styled.button`
  width: ${({ width }) => width};
  padding: 6px 12px;
  overflow: hidden;
  position: relative;
  display: inline-flex;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  background-color: #00000000;
  border-radius: 0;
  border: none;
  justify-content: center;
  text-decoration: none;
`;

const TabText = styled.span`
  width: 100%;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const UnderLine = styled.span`
  position: absolute;
  width: 33.33333333333333333333333%;
  height: 2px;
  background-color: red;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  left: 0;
  bottom: 0;
`;

const items = [
  { name: '작성중인 시간표', status: '' },
  { name: '작성완료 시간표', status: '' },
  { name: '전체보기', status: '' }
];

const Tabs = () => {
  const [width, setWidth] = useState('100%');
  useEffect(() => {
    console.log(items.length);
    const newWidth = 100 / items.length;
    setWidth(`${newWidth}%`);
  });
  return (
    <Wrapper>
      {items.map(item => (
        <Tab>
          <TabText width={width}>{item.name}</TabText>
        </Tab>
      ))}
      <UnderLine />
    </Wrapper>
  );
};

Tabs.propTypes = {
  //   name: PropTypes.string,
  //   items: PropTypes.arrayOf(PropTypes.array),
  //   input: PropTypes.shape({ root: PropTypes.string }),
  //   value: PropTypes.string,
  //   setValue: PropTypes.func
};

Tabs.defaultProps = {
  //   name: '',
  //   items: [],
  //   input: null,
  //   value: '',
  //   setValue: () => {}
};

export default Tabs;
