declare namespace eafc {

    // 枚举选项类型
    export type Option = {
        label: string | React.ReactNode,
        value: string | number,
        disabled?: boolean
    }

    // 枚举数据源类型
    export type EnumSourceType = {
        options?: Option[], // 本地枚举数据
        url?: string, // 枚举查询URL
        enumKey?: string, // 服务端枚举Key，对应查询Api：eafc.getEnumApi(query.key)
    }

    // Antd 树节点类型
    export type AntdTreeOptions = {
        isLeaf?: boolean,
        children?: AntdTreeOptions[],
    } & Option

    // Eafc 树节点类型
    export type EafcTreeOption = {
        isLeaf?: boolean,
        parentValue: string | number
    } & Option

    // EafcSelect Props
    export type EafcSelectProps = EnumSourceType & SelectProps

    // EafcRadio Props
    export type EafcRadioProps = EnumSourceType & RadioGroupProps

    // EafcCheckbox Props
    export type EafcCheckboxProps = {
        showAction?: boolean // 是否展示操作按钮：全选、反选
    } & EnumSourceType & CheckboxGroupProps

    // EafcCascader Props
    export type EafcCascaderProps = {
        url?: string
        eafcOptions?: EafcTreeOption[],
    } & CascaderProps

    // AccessWrapper Props
    export type AccessWrapperProps = {
        permission?: string;
        children: React.ReactNode;
    }

    // AccessLink Props，属性透传给<a>标签，添加permission属性
    export type AccessLinkProps = {
        permission?: string
    } & any;

    // AccessButton Props
    export type AccessButtonProps = {
        permission?: string
    } & ButtonProps
}