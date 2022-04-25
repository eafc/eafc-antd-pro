---
title: EafcSelect
group:
  title: Form
  path: /components/Eafc/Form/components/EafcSelect.md
---

# EafcSelect

`EafcSelect` 基于Antd `Select`组件的扩展，支持`Select`组件的所有属性，并自动获取下拉数据源绑定至`Select`组件，数据源类型：

 - options: 本地数据源，类型：`eafc.Option[]`
 - url: 服务端数据源，自动向该`url`发起`GET`请求，需要服务端接口返回`eafc.Option[]`类型的数据
 - enumKey: 服务端数据源，根据`enumKey`通过`config.eafc.ts`中`getEnumApi`方法获取`url`地址并发起`GET`请求，需要服务端接口返回`eafc.Option[]`类型的数据

数据源优先级：options > url > enumKey

## 示例

### 使用本地数据源

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import EafcSelect from '@/components/Eafc/Form/components/EafcSelect';

const options = [
    {
      value: 'value1',
      label: 'label1',
      disabled: true
    },
    {
      value: 'value2',
      label: 'label2',
    },
    {
      value: 'value3',
      label: 'label3',
    },
    {
      value: 'value4',
      label: 'label4',
    },
  ];

export default () => {
  return <EafcSelect options={options} allowClear={true} style={{ width: 120 }} />;
};
```


### 使用 url 获取数据源

使用`url`获取数据源，`EafcSelect`会向该 `url`发起`GET`请求，需要服务端接口返回`eafc.Option[]`的响应即可使用。

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import EafcSelect from '@/components/Eafc/Form/components/EafcSelect';

export default () => {
  return <EafcSelect url="/api/enum?key=xsd" allowClear={true} style={{ width: 120 }} />;
};
```

### 使用 enumKey 获取数据源

使用`enumKey`获取数据源，`EafcSelect`根据`enumKey`通过`config.eafc.ts`中`getEnumApi`方法获取`url`地址并发起`GET`请求，需要服务端接口返回`eafc.Option[]`的响应即可使用。

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import EafcSelect from '@/components/Eafc/Form/components/EafcSelect';

export default () => {
  return <EafcSelect enumKey="xsd" allowClear={true} style={{ width: 120 }} />;
};
```

## API

| 参数          | 说明                           | 类型                                        | 默认值 |
| ------------ | --------------------------------- | --------------------------------------- | ------ |
| options      | 本地数据源                   | `eafc.Option[]`,示例：[{"value":"","label":""}] | -      |
| url          | 服务端数据源url              | `string`                                       | -      |
| enumKey      | 服务端枚举Key                | `string`                                       | -      |
| ...          | 支持原`Select`组件的所有props | -                                              | -      |

