import { request } from 'umi';
import { useState, useEffect } from 'react';
import eafc from '@/utils/config.eafc';

/**
 * 默认的枚举处理器
 * @param options 选项集合
 * @returns 枚举类型
 */
const DefaultEnumHandler = (options: eafc.Option[]) => options;

/**
 * 枚举Query，优先级：options > url > key
 */
type EnumQuery<T> = {
  resultHandler?: (options: eafc.Option[] | any) => T; // 自定义结果处理器
} & eafc.EnumSourceType

export const useEnum = function <T>({ options, url, enumKey, resultHandler }: EnumQuery<T>) {
  const [enums, setEnums] = useState<eafc.Option[]>([]);

  useEffect(() => {
    const queryEnums = async () => {
      let enumOptions: eafc.Option[] = [];
      if (options) {
        enumOptions = options;
      } else if (url) {
        enumOptions = await request<eafc.Option[]>(url, { method: 'GET' }) || [];
      } else if (enumKey) {
        enumOptions = await request<eafc.Option[]>(eafc.getEnumApi(enumKey), { method: 'GET' }) || [];
      }

      setEnums(enumOptions);
    };

    queryEnums();
  }, [options, url, enumKey, resultHandler]);

  const enumHandler = resultHandler ?? DefaultEnumHandler;
  return enumHandler(enums);
};

export default useEnum;

