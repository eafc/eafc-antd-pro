import React from 'react';
import { useTree } from '@/components/Eafc/Hooks/useTree';
import { Cascader } from 'antd';

const EafcCascader: React.FC<eafc.EafcCascaderProps> = ({ url, eafcOptions, ...cascaderProps }) => {

    const options = useTree<eafc.AntdTreeOptions[]>({ options: eafcOptions, url });

    return (<Cascader {...cascaderProps} options={options} />)
}

export default EafcCascader;

