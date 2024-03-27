/**
 * 多级分类接口
 */
export interface ICategory {
  id: number | string;
  parentId?: number | string;
  children: ICategory[];
}
