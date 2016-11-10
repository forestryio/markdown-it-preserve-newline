function parseAttrs(state) {
  state.tokens.forEach((token) => {
    if (token.children && token.children.map((child) => child.type).indexOf("image") > -1) {
      token.children.forEach((child, i) => {
        if (child.type == "image") {
          if (token.children[i + 1] && token.children[i + 1].type == "softbreak") {
            child.attrs.push([
              "markdown-newline", "true"
            ])
          }
        }
      })
    }
  })
}

// --

export default function kramdownAttrs(markdown) {
  markdown.core.ruler.before("replacements",
    "kramdown_attrs", parseAttrs
  );
}
