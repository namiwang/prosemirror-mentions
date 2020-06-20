import { tagNode } from "./nodes";

/**
 *
 * @param {OrderedMap} nodes
 * @returns {OrderedMap}
 */
export function addTagNodes(nodes) {
  return nodes.append({
    tag: tagNode
  });
}
