const extractElementInfo = (inputString: string) => {
  const regex = /\{color: #([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\}(.+?)\{color\}/g;

  return Array.from(inputString.matchAll(regex)).map((match) => {
    return {
      color: match[1],
      text: match[2],
    };
  });
};

const splitStringWithColors = (inputString: string) => {
  const regex =
    /(\{color: #([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\}(.+?)\{color\}|[^{]+)/g;
  const segments = [];
  let match;
  while ((match = regex.exec(inputString)) !== null) {
    segments.push(match[1]);
  }

  return segments;
};

const containsColorPattern = (inputString: string) => {
  const regex = /\{color: #([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\}.+?\{color\}/;

  return regex.test(inputString);
};

export const colorSyntaxPlugin = () => {
  return (tree: any) => {
    function processNode(node: any) {
      if (node.type === "text" && containsColorPattern(node.value)) {
        const children: any[] = [];
        const segments = splitStringWithColors(node.value);
        segments.forEach(async (segment) => {
          if (containsColorPattern(segment)) {
            const element: any = extractElementInfo(segment);
            element &&
              children.push({
                type: "html",
                value: {
                  type: "element",
                  tagName: "span",
                  properties: { style: `color: #${element[0].color};` },
                  children: [{ type: "text", value: element[0].text }],
                },
              });
          } else {
            children.push({
              type: "html",
              value: {
                type: "element",
                tagName: "span",
                children: [{ type: "text", value: segment }],
              },
            });
          }
        });
        node.type = "paragraph";
        node.children = children;
      }

      if (node.children) {
        node.children.forEach(processNode);
      }
    }
    processNode(tree);
  };
};
