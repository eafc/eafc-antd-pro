---
title: EafcCascader
group:
  title: Form
  path: /components/Eafc/Form
---

# EafcCascader

`EafcCascader` 基于Antd `Cascader`组件的扩展，支持`Cascader`组件的所有属性，并自动获取数据源绑定至`Cascader`组件，数据源类型：

 - eafcOptions: 本地数据源，类型：`eafc.EafcTreeOption[]`
 - url: 服务端数据源，自动向该`url`发起`GET`请求，需要服务端接口返回`eafc.EafcTreeOption[]`类型的数据

数据源优先级：eafcOptions > url

## 示例

### 使用本地数据源

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import EafcCascader from '@/components/Eafc/Form/components/EafcCascader';

const options = [
    {
      value: 'value1',
      label: 'label1',
    },
    {
      value: 'value2',
      label: 'label2',
    },
    {
      value: 'value3',
      label: 'label3',
      parentValue: 'value1'
    },
    {
      value: 'value4',
      label: 'label4',
      parentValue: 'value1'
    },
    {
      value: 'value5',
      label: 'label5',
      parentValue: 'value3'
    },
  ];

export default () => {
  return <EafcCascader eafcOptions={options} />;
};
```


### 使用 url 获取数据源

使用`url`获取数据源，`EafcCascader`会向该 `url`发起`GET`请求，需要服务端接口返回`eafc.EafcTreeOption[]`的响应即可使用。

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import EafcCascader from '@/components/Eafc/Form/components/EafcCascader';

export default () => {
  return <EafcCascader url="/api/tree" />;
};
```

## API

| 参数          | 说明                           | 类型                                        | 默认值 |
| ------------ | --------------------------------- | --------------------------------------- | ------ |
| eafcOptions  | 本地数据源                   | `eafc.EafcTreeOption[]`               | -      |
| url          | 服务端数据源url              | `string`                                       | -      |
| ...          | 支持原`Cascader`组件的所有props | -                                            | -      |


Cascader组件支持的Options类型：

```ts
type Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
}
```
EafcCascader组件支持的EafcOptions类型：

```ts
type EafcTreeOption {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  parentValue?: string | number;
  isLeaf?: boolean;
}
```
