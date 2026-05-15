import { compile } from 'tailwindcss'

const css = `
@import "tailwindcss";
@custom-variant my-variant (&:hover);
.test {
  @apply my-variant:bg-red-500;
}
`

async function run() {
  try {
    const result = await compile(css)
    console.log("Success with @variant")
    // console.log(result.css)
  } catch (e) {
    console.log("Failed with @variant:", e.message)
  }
}

run()
