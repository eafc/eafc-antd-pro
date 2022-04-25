import React from 'react';
import { useEnum } from '@/components/Eafc/Hooks/useEnum';
import { Select } from 'antd';

const EafcSelect: React.FC<eafc.EafcSelectProps> = ({ options, url, enumKey, ...selectProps }) => {

    const enums = useEnum<eafc.Option[]>({ options: options, url: url, key: enumKey });

    return (<Select {...selectProps}>
        {enums.map(option => <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>)}
    </Select>)
}

export default EafcSelect;

