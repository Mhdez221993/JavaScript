// Back tracking template
function dfs(start_index, path) {
  if (is_leaf(start_index)) {
    report(path);
    return;
  }

  for (edge of get_edges(start_index)) {
    path.add(edge);
    dfs(start_index + 1, path);
    path.pop();
  }
}

// Backtracking with Pruning template
function dfs(start_index, path) {
  if (is_leaf(start_index)) {
    report(path);
    return;
  }

  for (let edge of get_edges(start_index)) {
    // prune if needed
    if (is_not_valid(edge)) {
      continue;
    }

    path.add(edge);
    // increment start_index
    dfs(start_index + len(edge), path);
    path.pop();
  }
}
