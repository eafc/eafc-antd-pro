---
title: Access
group: 
  title: Access
  path: /components/Eafc/Access
---

# 权限组件

权限组件是基于umi的`Access`的二次封装，支持通过权限Key进行权限判断，简化操作。

## AccessButton

权限按钮组件，基于`Antd`的`Button`组件进行二次封装，支持`Button`组件的全部属性，在`ButtonProps`的基础上添加`permission`属性。

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import { AccessButton } from '@/components/Eafc/Access';

export default () => {
  return (
    <>
        <AccessButton type="primary" permission="">
            无需权限，同Antd按钮
        </AccessButton>
        <AccessButton type="primary" permission="permissionKey">
            无权限，按钮隐藏
        </AccessButton>
    </>
  );
};

```

## AccessLink

权限链接组件，基于`<a>`标签进行二次封装，支持`<a>`标签的全部属性，在`<a>`标签属性的基础上添加`permission`属性。

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import { AccessLink } from '@/components/Eafc/Access';

export default () => {
  return (
    <>
        <AccessLink permission="">
            无需权限，同a标签
        </AccessLink>
        <AccessLink permission="permissionKey">
            无权限，a标签隐藏
        </AccessLink>
    </>
  );
};

```

## AccessWrapper

权限包装器组件，基于umi的`Access`的二次封装，支持通过权限Key进行权限判断，简化操作。

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import { AccessWrapper } from '@/components/Eafc/Access';

export default () => {
  return (
    <>
        <AccessWrapper permission="">
            <div>无需权限，显示内容</div>
        </AccessWrapper>
        <AccessWrapper permission="permissionKey">
            <div>无权限，内容隐藏</div>
        </AccessWrapper>
    </>
  );
};

```