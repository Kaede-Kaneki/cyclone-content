import { ExtractPropTypes } from 'vue'
import { makeStringProp } from '~/utils/props'

export const searchProps = {
  placeHolder: makeStringProp('请输入关键词')
}

export type SearchProps = ExtractPropTypes<typeof searchProps>
