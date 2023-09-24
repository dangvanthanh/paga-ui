/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

type AvatarVariant = {
  size: "xs" | "sm" | "md" | "lg"
}

type AvatarVariantMap = {
  [key in keyof AvatarVariant]: Array<AvatarVariant[key]>
}

export type AvatarVariantProps = {
  [key in keyof AvatarVariant]?: ConditionalValue<AvatarVariant[key]>
}

interface AvatarRecipe {
  __type: AvatarVariantProps
  (props?: AvatarVariantProps): Pretty<Record<"root" | "image" | "fallback", string>>
  raw: (props?: AvatarVariantProps) => AvatarVariantProps
  variantMap: AvatarVariantMap
  variantKeys: Array<keyof AvatarVariant>
  splitVariantProps<Props extends AvatarVariantProps>(props: Props): [AvatarVariantProps, Pretty<DistributiveOmit<Props, keyof AvatarVariantProps>>]
}


export declare const avatar: AvatarRecipe