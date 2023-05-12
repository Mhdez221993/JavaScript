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

// Backtracking - Additional States
function dfs(startIndex, path, res, [additional, states]) {
  if (isLeaf(path)) {
    res.push(new Array(path));
    return;
  }
  for (const edge of getEdges(startIndex, [...additional, states])) {
    path.push(choice);
    if ((additionl, statees)) update(...additional, states);
    dfs(startIndex + edge.length, path, res, [...addtional, states]);
    path.pop();
    // revert(...additional states) if necessary, e.g. permutations
  }
}

// Backtracking 2 - Aggregation
function dfs(startIndex, target) {
  if (isLeaf(startIndex)) {
    return 1;
  }

  let ans = initialValue;
  for (const edge of getEdges(startIndex, [...additional_states])) {
    if (additional_states) {
      update([...additional_states]);
    }
    ans = aggregate(
      ans,
      dfs(startIndex + edge.length(), [...additional_states])
    );
    if (additional_states) {
      revert([...additional_states]);
    }
  }
  return ans;
}
/*
Depending on what the problem asks for, the initial_value and aggregate function here can be

  Problem statement	                     initial_value	       aggregate
  If it's possible? does it exist?	     boolean value	       logical OR (||)
  Number of ways to...	                 0	                   addition (+)
  Maximum/minimum ways/value to...	     0, inf	               max/min
*/
