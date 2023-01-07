import * as React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { useNavigateSlice } from 'app/pages/ProjectPage/slice';
import {
  AppstoreOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  SwapOutlined,
  TransactionOutlined,
  UserOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { themes } from 'styles/theme/themes';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(
    'Dashboard',
    '',
    <AppstoreOutlined
      style={{ fontSize: '24px', color: themes.light.textSecondary }}
    />,
  ),
  getItem(
    'Transactions',
    'transactions',
    <SwapOutlined
      style={{ fontSize: '24px', color: themes.light.textSecondary }}
    />,
  ),
  getItem(
    'Reports',
    'reports',
    <FileTextOutlined
      style={{ fontSize: '24px', color: themes.light.textSecondary }}
    />,
  ),
  getItem(
    'Withdrawal',
    'withdrawal',
    <TransactionOutlined
      style={{ fontSize: '24px', color: themes.light.textSecondary }}
    />,
  ),
  getItem(
    'Accounts',
    'accounts',
    <CreditCardOutlined
      style={{ fontSize: '24px', color: themes.light.textSecondary }}
    />,
  ),
  getItem(
    'Settings',
    'grp',
    null,
    [
      getItem(
        'Profile',
        'profile',
        <UserOutlined
          style={{ fontSize: '24px', color: themes.light.textSecondary }}
        />,
      ),
      // getItem('', '14'),
    ],
    'group',
  ),
];

export function Nav() {
  const dispatch = useDispatch();

  const { actions } = useNavigateSlice();

  const onClick: MenuProps['onClick'] = e => {
    dispatch(actions.setNavigate(e.key));
    console.log('click ', e);
  };

  return (
    <Wrapper>
      <Menu
        onClick={onClick}
        style={{ width: 256, border: 'none', backgroundColor: 'transparent' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['']}
        mode="inline"
        items={items}
      />
      {/* //////////// */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.8rem;
`;
