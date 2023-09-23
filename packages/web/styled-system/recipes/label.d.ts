/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type LabelVariant = {
  size: "xs" | "sm" | "md" | "lg"
}

type LabelVariantMap = {
  [key in keyof LabelVariant]: Array<LabelVariant[key]>
}

export type LabelVariantProps = {
  [key in keyof LabelVariant]?: ConditionalValue<LabelVariant[key]>
}

interface LabelRecipe {
  __type: LabelVariantProps
  (props?: LabelVariantProps): string
  raw: (props?: LabelVariantProps) => LabelVariantProps
  variantMap: LabelVariantMap
  variantKeys: Array<keyof LabelVariant>
  splitVariantProps<Props extends LabelVariantProps>(props: Props): [LabelVariantProps, Pretty<DistributiveOmit<Props, keyof LabelVariantProps>>]
}


export declare const label: LabelRecipe