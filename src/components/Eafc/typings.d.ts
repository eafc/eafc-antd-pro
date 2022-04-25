declare namespace eafc {

    // 枚举选项类型
    export type Option = {
        label: string,
        value: string,
        disabled?: boolean
    }

    // 枚举数据源 Props
    export type EafcSelectProps = {
        options?: Option[], // 本地枚举数据
        url?: string, // 枚举查询URL
        enumKey?: string, // 服务端枚举Key，对应查询Api：eafc.getEnumApi(query.key)
    } & SelectProps
}