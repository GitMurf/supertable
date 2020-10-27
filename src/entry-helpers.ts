import { getAttrConfigFromQuery } from "roam-client";

export const getConfigFromBlock = (container: HTMLElement) => {
  const block = container.closest(".roam-block");
  if (!block) {
    return {};
  }
  const blockId = block.id.substring(block.id.length - 9, block.id.length);

  return getAttrConfigFromQuery(
    `[:find (pull ?e [*]) :where [?e :block/uid "${blockId}"]]`
  );
};
