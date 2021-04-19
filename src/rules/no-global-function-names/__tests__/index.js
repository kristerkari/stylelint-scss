import rule, { messages, ruleName } from "..";

testRule(rule, {
  ruleName,
  config: [true],
  syntax: "scss",

  accept: [
    {
      code: `
      a {
       background: rgb(27,224,63);
      }
    `,
      description: "An allowed global function"
    },
    {
      code: `
      a {
       background: rgba(27,224,63, 0);
      }
    `,
      description: "An allowed global function"
    },
    {
      code: `
      a {
       background: hsla(27,224,63, 0);
      }
    `,
      description: "An allowed global function"
    },
    {
      code: `
      a {
       background: hsa(27,224,63);
      }
    `,
      description: "An allowed global function"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.red(#6b717f);
      }
    `,
      description: "Red function"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.blue(#6b717f);
      }
    `,
      description: "Blue function"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.green(#6b717f);
      }
    `,
      description: "color.green function"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.mix(#6b717f, #6b717f);
      }
    `,
      description: "color.mix"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.hue(#6b717f);
      }
    `,
      description: "color.hue"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.saturation(#6b717f);
      }
    `,
      description: "color.saturation"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.lightness(#6b717f);
      }
    `,
      description: "color.lightness"
    },
    {
      code: `
      @use "sass:color";
      @debug color.alpha(#e1d7d2)`,
      description: "color.alpha"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.adjust(#6b717f, $red: 15);
      }
    `,
      description: "color.adjust (not adjust-color)"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.scale(#6b717f, $red: 15);
      }
    `,
      description: "color.scale (not scale-color)"
    },
    {
      code: `
      @use "sass:color";
      a {
       background: color.ie-hex-str(#6b717f);
      }
    `,
      description: "color.ie-hex-str"
    },
    {
      code: `
      @use "sass:map";
      a {b: map.get((), 1)}
    `,
      description: "map.get()"
    },
    {
      code: `
      @use "sass:map";
      $font-weights: ("regular": 400, "medium": 500, "bold": 700)
      @debug map.has-key($font-weights, "regular")
    `,
      description: "map.has-key"
    },
    {
      code: `
      @use "sass:map";
      $light-weights: ("lightest": 100, "light": 300);
      $heavy-weights: ("medium": 500, "bold": 700);

      @debug map.merge($light-weights, $heavy-weights)
    `,
      description: "map.merge"
    },
    {
      code: `
      @use "sass:map";
      $font-weights: ("regular": 400, "medium": 500, "bold": 700)

      @debug map.remove($font-weights, "regular")
    `,
      description: "map.remove"
    },
    {
      code: `
      @use "sass:map";
      $font-weights: ("regular": 400, "medium": 500, "bold": 700)

      @debug map.keys($font-weights)
    `,
      description: "map.keys"
    },
    {
      code: `
      @use "sass:map";
      $font-weights: ("regular": 400, "medium": 500, "bold": 700)

      @debug map.values($font-weights)
    `,
      description: "map.values"
    },
    {
      code: `
      @use "sass:string"
      @debug string.quote(Helvetica);
      `,
      description: "string.quote"
    },
    {
      code: `
      @use "sass:string"
      @debug string.unquote("Helvetica");
      `,
      description: "string.unquote"
    },
    {
      code: `
      @use "sass:string"
      @debug string.length("Helvetica");
      `,
      description: "string.length"
    },
    {
      code: `
      @use "sass:string"
      @debug string.insert("Roboto Bold", " Mono", 7);
      `,
      description: "string.insert"
    },
    {
      code: `
      @use "sass:string"
      @debug string.slice("Helvetica Neue", 11);
      `,
      description: "string.slice"
    },
    {
      code: `
      @use "sass:string"
      @debug string.index("Helvetica Neue", "Helvetica");
      `,
      description: "string.index"
    },
    {
      code: `
      @use "sass:string"
      @debug string.to-upper-case("Bold");
      `,
      description: "string.to-upper-case"
    },
    {
      code: `
      @use "sass:string"
      @debug string.to-lower-case("Bold");
      `,
      description: "string.to-lower-case"
    },
    {
      code: `
      @use "sass:string"
      @debug string.unique-id()
      `,
      description: "string.unique-id"
    }
  ],

  reject: [
    {
      code: `
      a {
        background: red(#6b717f);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("red"),
      description: "red"
    },
    {
      code: `
      a {
        background: blue(#6b717f);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("blue"),
      description: "blue"
    },
    {
      code: `
      a {
        background: green(#6b717f);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("green"),
      description: "green"
    },
    {
      code: `
      a {
        background: mix(#6b717f, #6b717f);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("mix"),
      description: "mix"
    },
    {
      code: `
      a {
        background: hue(#6b717f);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("hue"),
      description: "hue"
    },
    {
      code: `
      a {
        background: saturation(#6b717f);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("saturation"),
      description: "saturation"
    },
    {
      code: `
      a {
        background: lightness(#6b717f);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("lightness"),
      description: "lightness"
    },
    {
      code: `
      a {
        background: alpha(#6b717f);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("alpha"),
      description: "alpha"
    },
    {
      code: `
      a {
        background: adjust-color(#6b717f, $red: 15);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("adjust-color"),
      description: "adjust-color"
    },
    {
      code: `
      a {
        background: scale-color(#6b717f, $red: 15);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("scale-color"),
      description: "scale-color"
    },
    {
      code: `
      a {
        background: change-color(#6b717f, $red: 15);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("change-color"),
      description: "change-color"
    },
    {
      code: `
      a {
        background: ie-hex-str(#6b717f);
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("ie-hex-str"),
      description: "ie-hex-str"
    },
    {
      code: `
      a {b: map-get((), 1)}
    `,
      line: 2,
      column: 13,
      message: messages.rejected("map-get"),
      description: "map-get"
    },
    {
      code: `
      $font-weights: ("regular": 400, "medium": 500, "bold": 700)
      @debug map-has-key($font-weights, "regular")
    `,
      line: 3,
      column: 14,
      message: messages.rejected("map-has-key"),
      description: "map-has-key"
    },
    {
      code: `
      $font-weights: ("regular": 400, "medium": 500, "bold": 700)
      @debug map-remove($font-weights, "regular")
    `,
      line: 3,
      column: 14,
      message: messages.rejected("map-remove"),
      description: "map-remove"
    },
    {
      code: `
      $font-weights: ("regular": 400, "medium": 500, "bold": 700)
      @debug map-keys($font-weights)
    `,
      line: 3,
      column: 14,
      message: messages.rejected("map-keys"),
      description: "map-keys"
    },
    {
      code: `
      $font-weights: ("regular": 400, "medium": 500, "bold": 700)
      @debug map-values($font-weights)
    `,
      line: 3,
      column: 14,
      message: messages.rejected("map-values"),
      description: "map-values"
    },
    {
      code: `
      a {
        background: #{change-color(#6b717f, $red: 15)};
      }
    `,
      line: 3,
      column: 21,
      message: messages.rejected("change-color"),
      description: "change-color"
    }
  ]
});
