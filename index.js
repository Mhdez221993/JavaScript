const nextDigit = new Map();
for (let i = 0; i < 10; i++) {
  let val = (i + 1) % 10;
  nextDigit.set(i.toString(), val.toString());
}
const prevDigit = new Map();
for (let [key, val] of nextDigit.entries()) {
  prevDigit.set(val, key);
}

function numSteps(targetCombo, trappedCombos) {
  if (targetCombo === "0000") return 0;
  const trappedComboSet = new Set([...trappedCombos]);
  const steps = new Map([["0000", 0]]);
  const queue = ["0000"];

  while (queue.length > 0) {
    let top = queue.shift();

    for (let i = 0; i < 4; i++) {
      let newCombo =
        top.slice(0, i) + nextDigit.get(top.charAt(i)) + top.slice(i + 1);

      if (!trappedComboSet.has(newCombo) && !steps.has(newCombo)) {
        queue.push(newCombo);
        steps.set(newCombo, steps.get(top) + 1);
        if (newCombo === targetCombo) return steps.get(newCombo);
      }

      newCombo =
        top.slice(0, i) + prevDigit.get(top.charAt(i)) + top.slice(i + 1);

      if (!trappedComboSet.has(newCombo) && !steps.has(newCombo)) {
        queue.push(newCombo);
        steps.set(newCombo, steps.get(top) + 1);
        if (newCombo === targetCombo) return steps.get(newCombo);
      }
    }
  }
  return -1;
}

let target_combo = "0202";
let trapped_combos = ["0201", "0101", "0102", "1212", "2002"];
console.log(numSteps(target_combo, trapped_combos));
