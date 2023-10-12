/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

interface SwitchesVariant {
  size: "sm" | "md"
}

type SwitchesVariantMap = {
  [key in keyof SwitchesVariant]: Array<SwitchesVariant[key]>
}

export type SwitchesVariantProps = {
  [key in keyof SwitchesVariant]?: ConditionalValue<SwitchesVariant[key]>
}

export interface SwitchesRecipe {
  __type: SwitchesVariantProps
  (props?: SwitchesVariantProps): Pretty<Record<"root" | "control" | "thumb" | "label", string>>
  raw: (props?: SwitchesVariantProps) => SwitchesVariantProps
  variantMap: SwitchesVariantMap
  variantKeys: Array<keyof SwitchesVariant>
  splitVariantProps<Props extends SwitchesVariantProps>(props: Props): [SwitchesVariantProps, Pretty<DistributiveOmit<Props, keyof SwitchesVariantProps>>]
}


export declare const switches: SwitchesRecipe