import { Request, Response } from 'express';

const getTreeNodes = (req: Request, res: Response) => {
  res.json([
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
  ]);
};

export default {
  'GET /api/tree': getTreeNodes,
};
