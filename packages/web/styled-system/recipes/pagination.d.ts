/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

interface PaginationVariant {
  
}

type PaginationVariantMap = {
  [key in keyof PaginationVariant]: Array<PaginationVariant[key]>
}

export type PaginationVariantProps = {
  [key in keyof PaginationVariant]?: ConditionalValue<PaginationVariant[key]>
}

export interface PaginationRecipe {
  __type: PaginationVariantProps
  (props?: PaginationVariantProps): Pretty<Record<"root" | "item" | "ellipsis" | "prev-trigger" | "next-trigger", string>>
  raw: (props?: PaginationVariantProps) => PaginationVariantProps
  variantMap: PaginationVariantMap
  variantKeys: Array<keyof PaginationVariant>
  splitVariantProps<Props extends PaginationVariantProps>(props: Props): [PaginationVariantProps, Pretty<DistributiveOmit<Props, keyof PaginationVariantProps>>]
}


export declare const pagination: PaginationRecipe