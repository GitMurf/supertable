import { getAttrConfigFromQuery } from "roam-client";

export const createObserver = (
  mutationCallback: (mutationList?: MutationRecord[]) => void
) =>
  createDivObserver(
    mutationCallback,
    document.getElementsByClassName("roam-body")[0]
  );

const createDivObserver = (
  mutationCallback: (mutationList?: MutationRecord[]) => void,
  mutationTarget: Element
) => {
  const observer = new MutationObserver(mutationCallback);
  observer.observe(mutationTarget, { childList: true, subtree: true });
};

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
