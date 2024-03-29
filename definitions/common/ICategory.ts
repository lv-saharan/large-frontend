/**
 * 多级分类接口
 */
export interface ICategory {
  id: number | string;
  name: string;
  parentId?: number | string;
  children: ICategory[];
}
