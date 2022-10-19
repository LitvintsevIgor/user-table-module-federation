import React from 'react';
import { useAppDispatch } from '../../../store';
import { deleteUser } from '../../../store/users/actions';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import '../users-table.less';
import { RegisteredRendererProps } from './types';

import dayjs from 'dayjs';

export const RegisteredRenderer = React.memo(
  ({ date, id }: RegisteredRendererProps) => {
    const dispatch = useAppDispatch();

    return (
      <div className='registered'>
        {dayjs(date).format('D MMMM YYYY ')}
        <Button
          shape='circle'
          icon={<DeleteOutlined />}
          onClick={() => dispatch(deleteUser(id))}
        />
      </div>
    );
  }
);
