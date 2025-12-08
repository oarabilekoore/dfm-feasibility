export const components = {
  h1: (props) => (
    <h1
      className="science-gothic-l300 scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl mb-8 mt-10"
      {...props}
    />
  ),

  h2: (props) => (
    <h2
      className="science-gothic-l300 scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0 mb-6 mt-10"
      {...props}
    />
  ),

  h3: (props) => (
    <h3
      className="science-gothic-l300 scroll-m-20 text-2xl font-semibold tracking-tight text-foreground mb-4 mt-8"
      {...props}
    />
  ),

  p: (props) => (
    <p
      className="leading-7 not-first::mt-6 text-foreground text-base"
      {...props}
    />
  ),

  blockquote: (props) => (
    <blockquote
      className="shadows-into-light-regular mt-6 border-l-4 border-primary pl-6 italic text-2xl text-muted-foreground bg-muted/20 py-4 rounded-r-lg"
      {...props}
    />
  ),

  a: (props) => (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      {...props}
    />
  ),

  ul: (props) => (
    <ul
      className="my-6 ml-6 list-disc [&>li]:mt-2 text-foreground"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-6 ml-6 list-decimal [&>li]:mt-2 text-foreground"
      {...props}
    />
  ),

  hr: (props) => <hr className="my-8 border-border" {...props} />,
};
