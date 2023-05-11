// Back tracking template

function dfs(start_index, path) {
  is_leaf(start_index) {
    report(path)
    return
  }

  for (edge of get_edges(start_index)){
    path.add(edge)
    dfs(start_index + 1, path)
    path.pop()
  }
}