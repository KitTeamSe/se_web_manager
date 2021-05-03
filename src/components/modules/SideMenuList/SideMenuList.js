import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List, Collapse, Divider } from '@material-ui/core';
import SideMenuListItem from '../../atoms/SideMenuListItem/SideMenuListItem';
import SideMenuNestedList from '../../atoms/SideMenuNestedList/SideMenuNestedList';
import useToggle from '../../../libs/useToggle';
import { MANAGE_URL } from '../../../statics/data/config';

const ListStyled = styled(List)`
  padding: 2px 0;
`;

const MenuList = ({ items }) =>
  items.map((el, index) => {
    return (
      <>
        {index % 4 === 0 && <Divider />}
        <SideMenuListItem
          count={index}
          to={`${MANAGE_URL}/${el.to}`}
          name={el.name}
          key={el.name}
        >
          {el.icon}
        </SideMenuListItem>
      </>
    );
  });

const SideMenuList = ({ itemData, items }) => {
  const [open, setOpen] = useToggle();

  return (
    <ListStyled>
      <SideMenuNestedList
        name={itemData.name}
        open={open}
        onClick={setOpen}
        key={itemData.name}
      >
        {itemData.icon}
      </SideMenuNestedList>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListStyled>
          <MenuList items={items} />
        </ListStyled>
      </Collapse>
    </ListStyled>
  );
};

SideMenuList.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.shape({ root: PropTypes.string })
  }),
  items: PropTypes.arrayOf(PropTypes.object)
};

SideMenuList.defaultProps = {
  itemData: [],
  items: []
};

export default SideMenuList;
