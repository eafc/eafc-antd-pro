import { request } from 'umi';
import { useState, useEffect } from 'react';

/**
 * Eafc树节点转Antd树节点 处理器
 * @param options Eafc树节点集合
 * @returns Antd 树节点集合
 */
const AntdTreeHandler = (options: eafc.EafcTreeOption[]) => {
    const nodeHash = {};
    options.forEach((item: eafc.EafcTreeOption) => {
        nodeHash[item.value] = {
            label: item.label,
            value: item.value,
            isLeaf: item.isLeaf
        };
    });

    const antdTreeOptions: eafc.AntdTreeOptions[] = [];
    options.forEach((item: eafc.EafcTreeOption) => {
        const node = nodeHash[item.value];
        const parentNode: eafc.AntdTreeOptions = nodeHash[item.parentValue];
        if (parentNode) {
            if (!parentNode.children) {
                parentNode.children = [];
            }
            parentNode.children.push(node);
        } else {
            antdTreeOptions.push(node);
        }
    });
    return antdTreeOptions;
};

/**
 * 树节点数据源Query，优先级：options > url
 */
type TreeQuery<T> = {
    options?: eafc.EafcTreeOption[],
    url?: string,
    resultHandler?: (options: eafc.EafcTreeOption[] | any) => T; // 自定义结果处理器
}

export const useTree = function <T>({ options, url, resultHandler }: TreeQuery<T>) {
    const [nodes, setNodes] = useState<eafc.EafcTreeOption[]>([]);

    useEffect(() => {
        const queryTreeNodes = async () => {
            let treeOptions: eafc.EafcTreeOption[] = [];
            if (options) {
                treeOptions = options;
            } else if (url) {
                treeOptions = await request<eafc.EafcTreeOption[]>(url, { method: 'GET' }) || [];
            }

            setNodes(treeOptions);
        };

        queryTreeNodes();
    }, [options, url, resultHandler]);

    const treeNodeHandler = resultHandler ?? AntdTreeHandler;
    return treeNodeHandler(nodes);
};

export default useTree;
