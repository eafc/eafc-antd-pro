import React from 'react';
import { useAccess } from 'umi';
import { Button } from 'antd';

/**
 * 权限按钮，未传递permission时与普通按钮一致，传递permission时验证按钮权限
 * 
 * @param props eafc.AccessButtonProps
 * @returns <Button> or <span>
 */
const AccessButton: React.FC<eafc.AccessButtonProps> = (props) => {

    const access = useAccess();

    if (!props.permission || access[props.permission]) {
        return <Button {...props}>{props.children}</Button>
    }

    return <span />
}

export default AccessButton;