import MarkdownIt from "markdown-it"
import PreserveNewline from "../../../src/markdown-it/preserve-newline"
import assert from "assert"

const renderer = new MarkdownIt()
renderer.use(
  PreserveNewline
)

describe("PreserveNewline", () => {
  it("![](hello)\\n![](world)", () => {
    let result = renderer.render("![](hello)\n![](world)").trim()
    assert.equal(result,
      '<p><img src="hello" alt="" markdown-newline="true">\n<img src="world" alt=""></p>'
    )
  })
})
