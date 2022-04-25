declare namespace eafc {

    // 枚举选项类型
    export type Option = {
        label: string,
        value: string,
        disabled?: boolean
    }

    // 枚举数据源类型
    export type EnumSourceType = {
        options?: Option[], // 本地枚举数据
        url?: string, // 枚举查询URL
        enumKey?: string, // 服务端枚举Key，对应查询Api：eafc.getEnumApi(query.key)
    }

    // EafcSelect Props
    export type EafcSelectProps = EnumSourceType & SelectProps

    // EafcRadio Props
    export type EafcRadioProps = EnumSourceType & RadioGroupProps
}