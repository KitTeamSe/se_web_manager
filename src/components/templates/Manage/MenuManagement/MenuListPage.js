import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import MenuData from '../../../../statics/data/MenuData';
import Pagination from '../../../modules/Pagination/Pagination';
import Table from '../../../modules/Table/Table';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';

const PAGE_DATA_LENGTH = 10;

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const PaperStyled = styled(Paper)`
  width: 100%;
  height: 100%;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

const MenuListPage = ({ menu, error, loading, page }) => {
  const title = '메뉴';
  const headerTitle = `${title}관리`;
  const [menuData, setMenuData] = useState([]);

  const handleChildData = parent => {
    const result = [];
    result.push(parent);
    if (parent.child.length)
      parent.child.forEach(e => {
        result.push(e);
        if (e.child.length) {
          e.child.forEach(el => result.push(...handleChildData(el)));
        }
      });
    return result;
  };

  const handleMenuData = data => {
    const result = [];
    data.forEach(e => {
      const newData = e;
      result.push(...handleChildData(newData));
    });
    return result;
  };

  useEffect(() => {
    if (menu) {
      setMenuData(handleMenuData(menu.data));
    }
  }, [menu]);

  return (
    <Wrapper>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <PaperStyled component="div">
          {error ? (
            <div>loading</div>
          ) : (
            !loading &&
            menu && (
              <>
                <Table
                  head={MenuData}
                  rows={menuData.slice(
                    PAGE_DATA_LENGTH * (page - 1),
                    PAGE_DATA_LENGTH * (page - 1) + PAGE_DATA_LENGTH
                  )}
                />
                <Pagination
                  totalPage={Math.ceil(menuData.length / PAGE_DATA_LENGTH)}
                  page={page}
                  link="m/menu"
                />
              </>
            )
          )}
        </PaperStyled>
      </ContentWrapper>
    </Wrapper>
  );
};

MenuListPage.propTypes = {
  menu: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.shape({
        menuId: PropTypes.string.isRequired,
        building: PropTypes.string.isRequired,
        roomNumber: PropTypes.string.isRequired,
        capacity: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  error: PropTypes.string,
  loading: PropTypes.string,
  page: PropTypes.number.isRequired
};

MenuListPage.defaultProps = {
  menu: null,
  error: null,
  loading: null
};

export default MenuListPage;
