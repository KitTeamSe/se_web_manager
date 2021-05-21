import React from 'react';
import styled from 'styled-components';
import useToggle from '../../../../libs/useToggle';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import MenuDeleteDialogContainer from '../../../modules/DeleteDialog/MenuDeleteDialogContainer';
import ManageInfoCard from '../../../modules/ManageInfoCard/ManageInfoCard';
import UpdateDialogContainer from '../../../modules/UpdateDialog/MenuUpdateDialog';
import MenuData from '../../../../statics/data/MenuData';

const ContentWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
`;

const MenuInfoData = {
  menuId: 'ID',
  nameEng: '영어이름',
  nameKor: '이름',
  menuOrder: '순서',
  menuType: '타입',
  parentId: '상위폴더ID',
  url: 'URL',
  description: '비고'
};

const MenuInfoPage = ({ menu, error, loading }) => {
  const title = '메뉴';
  const headerTitle = `${title} 정보 조회`;
  const [deleteOpen, setDeleteOpen] = useToggle();
  const [updateOpen, setUpdateOpen] = useToggle();

  return (
    <>
      <ContentHeader title={headerTitle} />
      <ContentWrapper>
        <ManageInfoCard
          data={menu}
          error={error}
          loading={loading}
          head={MenuInfoData}
          setDeleteOpen={setDeleteOpen}
          setUpdateOpen={setUpdateOpen}
        />
        {!deleteOpen || (
          <MenuDeleteDialogContainer
            title={title}
            data={menu.data}
            open={deleteOpen}
            setOpen={setDeleteOpen}
            type="menu"
          />
        )}
        {!updateOpen || (
          <UpdateDialogContainer
            title={title}
            data={menu.data}
            head={MenuData}
            open={updateOpen}
            setOpen={setUpdateOpen}
          />
        )}
      </ContentWrapper>
    </>
  );
};

MenuInfoPage.propTypes = {};

MenuInfoPage.defaultProps = {};

export default MenuInfoPage;
