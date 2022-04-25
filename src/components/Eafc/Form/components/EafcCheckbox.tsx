import React from 'react';
import { useEnum } from '@/components/Eafc/Hooks/useEnum';
import { Checkbox, Divider, Button, Space } from 'antd';
import { FormattedMessage } from 'umi';

const EafcCheckbox: React.FC<eafc.EafcCheckboxProps> = ({ options, url, enumKey, showAction, ...checkboxGroupProps }) => {

    const enums = useEnum<eafc.Option[]>({ options, url, enumKey });

    const checkableEnums = enums.filter(option => !option.disabled);

    /**
     * 全选点击事件
     * @param e CheckboxChangeEvent
     */
    const onCheckAllChange = (e: { target: { checked: boolean; }; }) => {
        const checked = e.target.checked;
        if (checked) {
            const allValues = checkableEnums.map(option => option.value);
            checkboxGroupProps?.onChange(allValues)
        } else {
            checkboxGroupProps?.onChange([])
        }
    }

    /**
     * 反选点击事件
     */
    const onCheckReverseChange = () => {
        const reverseValues = checkableEnums.filter(option => !checkboxGroupProps.value?.includes(option.value)).map(option => option.value);
        checkboxGroupProps?.onChange(reverseValues);
    }

    return (
        <>
            {showAction && <>
                <Space split={<Divider type="vertical" />}>
                    <Checkbox onChange={onCheckAllChange}
                        checked={checkboxGroupProps.value?.length === checkableEnums.length}
                        indeterminate={checkboxGroupProps.value?.length > 0 && checkboxGroupProps.value?.length < checkableEnums.length} >
                        <FormattedMessage id="eafc.checkbox.check-all" defaultMessage="Check All" />
                    </Checkbox>

                    <Button type="link" onClick={onCheckReverseChange}>
                        <FormattedMessage id="eafc.checkbox.check-reverse" defaultMessage="Check Reverse" />
                    </Button>
                </Space>
                <Divider />
            </>}
            <Checkbox.Group {...checkboxGroupProps} options={enums} />
        </>
    );
}

export default EafcCheckbox;