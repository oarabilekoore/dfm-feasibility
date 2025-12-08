interface TOCData {
  contents: {
    id: string;
    title: string;
  }[];
  activeId: string;
}

export function TableOfContents({ contents, activeId }: TOCData) {
  const tocdata = Array.isArray(contents) ? contents : [contents];

  const handleLinkClick = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const getLinkClasses = (id: string) => {
    const isActive = activeId === id;
    return `
      block py-1 px-4 text-sm transition-colors duration-200 cursor-pointer
      hover:text-primary dark:hover:text-primary
      ${
        isActive
          ? "text-foreground font-semibold border-l-2 border-primary-foreground dark:border-primary"
          : "text-muted-foreground font-medium border-l-2 border-transparent"
      }
    `;
  };

  const activeTitle = tocdata.find((item) => item.id === activeId)?.title;

  return (
    <div className="science-gothic-l300 text-foreground">
      <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 ml-4">
        ON THIS PAGE
      </h4>

      <nav className="space-y-1">
        {/* Active section title */}
        <div
          className={`
            py-1 px-4 text-sm font-bold transition-colors duration-200
            ${
              activeId && tocdata.some((l) => l.id === activeId)
                ? "text-foreground"
                : "text-muted-foreground"
            }
          `}
        >
          {activeTitle ?? "—"}
        </div>

        {/* All section links */}
        <div className="space-y-1 ml-4">
          {tocdata.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={getLinkClasses(link.id)}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
