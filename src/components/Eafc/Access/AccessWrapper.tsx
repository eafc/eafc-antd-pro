import React from 'react';
import { useAccess, Access } from 'umi';

/**
 * 权限组件包装器，支持判断任何子组件的权限
 * @param props eafc.AccessWrapperProps
 * @returns <Access>
 */
const AccessWrapper: React.FC<eafc.AccessWrapperProps> = (props) => {

    const access = useAccess();

    return <Access accessible={!props.permission || access[props.permission]}>{props.children}</Access>
}

export default AccessWrapper;