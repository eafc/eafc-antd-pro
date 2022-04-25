---
title: EafcRadio
group:
  title: Form
  path: /components/Eafc/Form
---

# EafcRadio

`EafcRadio` 基于Antd `Radio.Group`组件的扩展，支持`Radio.Group`组件的所有属性，并自动获取下拉数据源绑定至`Radio.Group`组件，数据源类型：

 - options: 本地数据源，类型：`eafc.Option[]`
 - url: 服务端数据源，自动向该`url`发起`GET`请求，需要服务端接口返回`eafc.Option[]`类型的数据
 - enumKey: 服务端数据源，根据`enumKey`通过`config.eafc.ts`中`getEnumApi`方法获取`url`地址并发起`GET`请求，需要服务端接口返回`eafc.Option[]`类型的数据

数据源优先级：options > url > enumKey

`EafcRadio`将根据`buttonStyle`属性的设置来决定内部是渲染`Radio`组件还是`Radio.Button`组件。

## 示例

### 使用本地数据源

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import EafcRadio from '@/components/Eafc/Form/components/EafcRadio';

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
  return <EafcRadio options={options} name="radioName" />;
};
```


### 使用 url 获取数据源

使用`url`获取数据源，`EafcRadio`会向该 `url`发起`GET`请求，需要服务端接口返回`eafc.Option[]`的响应即可使用。

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import EafcRadio from '@/components/Eafc/Form/components/EafcRadio';

export default () => {
  return <EafcRadio url="/api/enum?key=xsd" buttonStyle="outline" />;
};
```

### 使用 enumKey 获取数据源

使用`enumKey`获取数据源，`EafcRadio`根据`enumKey`通过`config.eafc.ts`中`getEnumApi`方法获取`url`地址并发起`GET`请求，需要服务端接口返回`eafc.Option[]`的响应即可使用。

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import EafcRadio from '@/components/Eafc/Form/components/EafcRadio';

export default () => {
  return <EafcRadio enumKey="xsd" buttonStyle="solid" />;
};
```

## API

| 参数          | 说明                           | 类型                                        | 默认值 |
| ------------ | --------------------------------- | --------------------------------------- | ------ |
| options      | 本地数据源                   | `eafc.Option[]`,示例：[{"value":"","label":""}] | -      |
| url          | 服务端数据源url              | `string`                                       | -      |
| enumKey      | 服务端枚举Key                | `string`                                       | -      |
| ...          | 支持原`RadioGroup`组件的所有props | -                                          | -      |

