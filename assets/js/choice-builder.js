const branchesEl = document.getElementById("branches");

function createBranch() {
  const wrapper = document.createElement("div");

  wrapper.className = "branch";

  wrapper.innerHTML = `
<h3>Choice Branch</h3>

<label>
Choice Value
</label>

<input
    class="choice-value"
    type="text"
    placeholder="snivy"
/>

<br><br>

<label>
Choice Row(s)
</label>

<textarea
    class="choice-rows"
    placeholder="Paste the rows that become the choice entries."
></textarea>

<br><br>

<label>
Dependent Row(s)
</label>

<textarea
    class="dependent-rows"
    placeholder="Paste rows that require this choice."
></textarea>

<button
    class="remove-branch"
>
    Remove Branch
</button>
`;

  wrapper.querySelector(".remove-branch").addEventListener("click", () => wrapper.remove());

  branchesEl.appendChild(wrapper);
}

function splitRows(text) {
  return text
    .trim()
    .split(/\n\s*\n/g)
    .map((x) => x.trim())
    .filter(Boolean);
}

function addChoice(row, choiceKey, choiceValue) {
  return row.replace(
    /^{/,
    `{
    type: "choice",
    choiceKey: "${choiceKey}",
    choiceValue: "${choiceValue}",`,
  );
}

function addRequires(row, choiceKey, choiceValue) {
  return row.replace(
    /^{/,
    `{
    requires: {
        ${choiceKey}: "${choiceValue}"
    },`,
  );
}

document.getElementById("addBranch").addEventListener("click", createBranch);

document.getElementById("generate").addEventListener("click", () => {
  const choiceKey = document.getElementById("choiceKey").value.trim();

  const output = [];

  document.querySelectorAll(".branch").forEach((branch) => {
    const choiceValue = branch.querySelector(".choice-value").value.trim();

    const choiceRows = splitRows(branch.querySelector(".choice-rows").value);

    const dependentRows = splitRows(branch.querySelector(".dependent-rows").value);

    choiceRows.forEach((row) => {
      output.push(addChoice(row, choiceKey, choiceValue));
    });

    dependentRows.forEach((row) => {
      output.push(addRequires(row, choiceKey, choiceValue));
    });
  });

  document.getElementById("output").value = output.join(",\n\n");
});

document.getElementById("copyOutput").addEventListener("click", async () => {
  await navigator.clipboard.writeText(document.getElementById("output").value);
});

createBranch();
