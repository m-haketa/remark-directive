export default function remarkDirective(
  this: import('unified').Processor<void, import('mdast').Root, void, void>,
  ...settings: void[]
):
  | void
  | import('unified').Transformer<import('mdast').Root, import('mdast').Root>
export type Root = import('mdast').Root
export type DoNotTouchAsThisImportIncludesDirectivesInTree =
  typeof import('mdast-util-directive')
