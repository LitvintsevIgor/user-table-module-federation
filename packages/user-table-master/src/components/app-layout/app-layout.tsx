import React, { useMemo, Suspense } from 'react';
import { Layout, Menu } from 'antd';

import { IAppLayoutProps } from './types';

import './../../remote-decl.d.ts';
import './app-layout.less';
const HelloWorld = React.lazy(() => import('hello_world/HelloWorld'));

export const AppLayout = ({ children, actions }: IAppLayoutProps) => {
  const items = useMemo(
    () =>
      actions?.map(({ key, title, action }) => ({
        key: key ?? title,
        label: title,
        onClick: () => {
          action();
        },
      })) ?? [],
    [actions]
  );

  return (
    <Layout className='app-layout'>
      <Layout.Header className='app-layout-header'>
        <div className='logo' />
        {items.length > 0 && (
          <Menu
            theme='dark'
            mode='horizontal'
            items={items}
            selectedKeys={[]}
          />
        )}
      </Layout.Header>
      <Layout>
        <Layout.Sider className='app-layout-sider' width={350}>
          <Suspense fallback={'loading...'}>
            <div className='hello-world-wrapper'>
              <HelloWorld />
            </div>
          </Suspense>
        </Layout.Sider>
        <Layout.Content className='app-layout-content'>
          {children}
        </Layout.Content>
      </Layout>
      <Layout.Footer className='app-layout-footer'>
        User Table ©{new Date().getFullYear()} Created by OIS
      </Layout.Footer>
    </Layout>
  );
};
