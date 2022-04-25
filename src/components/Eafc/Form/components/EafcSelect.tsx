import React from 'react';
import { useEnum } from '@/components/Eafc/Hooks/useEnum';
import { Select } from 'antd';

const EafcSelect: React.FC<eafc.EafcSelectProps> = ({ options, url, enumKey, ...selectProps }) => {

    const enums = useEnum<eafc.Option[]>({ options, url, enumKey });

    return (<Select {...selectProps}>
        {enums.map(option => <Select.Option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</Select.Option>)}
    </Select>)
}

export default EafcSelect;

