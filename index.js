function invertBinaryTree(tree) {
  if (!tree) return null;

  return new Node(
    tree.val,
    invertBinaryTree(tree.right),
    invertBinaryTree(tree.left)
  );
}
