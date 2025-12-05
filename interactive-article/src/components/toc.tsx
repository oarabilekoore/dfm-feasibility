interface props {
  items: {
    label: string;
    id: string;
  }[];
  title?: string;
}

export function TableOfContents({ items, title = "Table Of Contents" }: props) {
  return (
    <div class="flex-col">
      <div>
        <span>{title}</span>
      </div>
      {items.map((section) => (
        <a
          onclick={(e: Event) => {
            e.preventDefault();
            document
              .getElementById(section.id)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>
            <div>{section.label}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
