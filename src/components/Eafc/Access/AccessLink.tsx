import React from 'react';
import { useAccess } from 'umi';

/**
 * 权限Link，支持权限判断的<a>标签
 * @param props eafc.AccessLinkProps
 * @returns <a> or <span>
 */
const AccessLink: React.FC<eafc.AccessLinkProps> = (props) => {

    const access = useAccess();

    if (!props.permission || access[props.permission]) {
        return <a {...props}>{props.children}</a>
    }

    return <span />
}

export default AccessLink;