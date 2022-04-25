import React from 'react';
import { useEnum } from '@/components/Eafc/Hooks/useEnum';
import { Radio } from 'antd';

const EafcRadio: React.FC<eafc.EafcRadioProps> = ({ options, url, enumKey, ...radioGroupProps }) => {

    const enums = useEnum<eafc.Option[]>({ options: options, url: url, key: enumKey });

    return (<Radio.Group {...radioGroupProps}>
        {enums.map(option => {
            return radioGroupProps.buttonStyle
                ? <Radio.Button key={option.value} value={option.value} disabled={option.disabled}>{option.label}</Radio.Button>
                : <Radio key={option.value} value={option.value} disabled={option.disabled}>{option.label}</Radio>
        })}
    </Radio.Group>)
}

export default EafcRadio;

