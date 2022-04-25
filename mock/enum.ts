import { Request, Response } from 'express';

const getEnums = (req: Request, res: Response) => {
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
    },
    {
      value: 'value4',
      label: 'label4',
    },
  ]);
};

export default {
  'GET /api/enum': getEnums,
};
