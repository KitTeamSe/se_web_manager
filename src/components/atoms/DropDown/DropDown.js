import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 5px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
  min-width: 150px;
`;

const Option = styled.option`
  padding: 5px;
  border-radius: 5px;
`;

const DropDown = ({ items, input, value, setValue, first }) => {
  const handleValue = event => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Select value={value} onChange={handleValue}>
        {items.map((item, index) => {
          if (item === 'ALL') return <Option value={item}>전체년도</Option>;
          if (index === first)
            return (
              <Option value={item} selected>
                {item}년
              </Option>
            );
          return <Option value={item}>{item}년</Option>;
        })}
      </Select>
      {input}
    </Wrapper>
  );
};

DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array),
  input: PropTypes.shape({ root: PropTypes.string }),
  value: PropTypes.string,
  setValue: PropTypes.func,
  first: PropTypes.number
};

DropDown.defaultProps = {
  items: [],
  input: null,
  value: '',
  setValue: () => {},
  first: 0
};

export default DropDown;
