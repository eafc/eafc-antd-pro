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
  options?: eafc.Option[], // 本地枚举集合
  url?: string, // 枚举查询URL
  key?: string, // 服务端枚举Key，对应查询Api：eafc.getEnumApi(query.key)
  resultHandler?: (options: eafc.Option[] | any) => T; // 自定义结果处理器
}

export const useEnum = function <T>(query: EnumQuery<T>) {
  const [enums, setEnums] = useState<eafc.Option[]>([]);

  useEffect(() => {
    const queryEnums = async () => {
      let options: eafc.Option[] = [];
      if (query.options) {
        options = query.options;
      } else if (query.url) {
        options = await request<eafc.Option[]>(query.url, { method: 'GET' }) || [];
      } else if (query.key) {
        options = await request<eafc.Option[]>(eafc.getEnumApi(query.key), { method: 'GET' }) || [];
      }

      setEnums(options);
    };

    queryEnums();
  }, [query.options, query.url, query.key, query.resultHandler]);


  const resultHandler = query.resultHandler ?? DefaultEnumHandler;
  return resultHandler(enums);
};


export default useEnum;

