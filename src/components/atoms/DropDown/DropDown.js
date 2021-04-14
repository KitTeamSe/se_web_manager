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

const DropDown = ({ name, items, input, value, setValue }) => {
  const handleValue = event => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Select name={name} value={value} onChange={handleValue}>
        {items.map(item => (
          <Option value={item}>{item}년</Option>
        ))}
      </Select>
      {input}
    </Wrapper>
  );
};

DropDown.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.array),
  input: PropTypes.shape({ root: PropTypes.string }),
  value: PropTypes.string,
  setValue: PropTypes.func
};

DropDown.defaultProps = {
  name: '',
  items: [],
  input: null,
  value: '',
  setValue: () => {}
};

export default DropDown;
