import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { Dropdown, Avatar, Menu, Space } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

const StyledDropdownLink = styled.a`
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledUsername = styled.span`
  @media screen and (max-width: 360px) {
    display: none;
  }
`;

const UserDropdown = ({ user, onLogout }) => {
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item>
            <NavLink to="/your-app-usage">Your app usage</NavLink>
          </Menu.Item>
          <Menu.Item>
            <span onClick={onLogout}>Log out</span>
          </Menu.Item>
        </Menu>
      }
      trigger={['click']}
    >
      <StyledDropdownLink
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        <Space size="small">
          <Avatar
            size="small"
            src={user.picture}
            icon={!user.picture ? <UserOutlined /> : null}
          />
          <StyledUsername>
            Hi, {user.given_name || user.nickname}
          </StyledUsername>
          <DownOutlined />
        </Space>
      </StyledDropdownLink>
    </Dropdown>
  );
};

UserDropdown.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func,
};

export default UserDropdown;
