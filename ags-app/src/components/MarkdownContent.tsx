import React from 'react';

interface MarkdownContentProps {
  content: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  if (!content) return null;

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  const flushList = (key: string) => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul
          key={`list-${key}`}
          style={{
            margin: '8px 0 16px 0',
            paddingLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            lineHeight: 1.7,
            color: 'var(--text-primary)',
          }}
        >
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = (key: string) => {
    if (inTable && tableRows.length > 0) {
      const headerRow = tableRows[0];
      const bodyRows = tableRows.slice(1).filter((r) => !r.every((c) => c.trim().match(/^[-:]+$/)));

      elements.push(
        <div
          key={`table-${key}`}
          style={{
            overflowX: 'auto',
            margin: '16px 0',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-medium)',
            backgroundColor: 'var(--bg-input)',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderBottom: '2px solid var(--border-medium)' }}>
                {headerRow.map((cell, idx) => (
                  <th key={idx} style={{ padding: '10px 14px', textAlign: 'left', color: '#93c5fd', fontWeight: 700 }}>
                    {renderInline(cell.trim())}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  style={{
                    borderBottom: '1px solid var(--border-subtle)',
                    backgroundColor: rIdx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} style={{ padding: '10px 14px', color: cIdx === 0 ? '#ffffff' : 'var(--text-secondary)' }}>
                      {renderInline(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  const renderInline = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} style={{ color: '#ffffff', fontWeight: 700 }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} style={{ color: '#93c5fd' }}>{part.slice(1, -1)}</em>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={i}
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '2px 6px',
              borderRadius: '4px',
              fontFamily: 'monospace',
              fontSize: '0.9em',
              color: '#38bdf8',
            }}
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushList(`${i}`);
      flushTable(`${i}`);
      continue;
    }

    // Markdown Table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushList(`${i}`);
      inTable = true;
      const cells = trimmed
        .slice(1, -1)
        .split('|')
        .map((c) => c.trim());
      tableRows.push(cells);
      continue;
    } else {
      flushTable(`${i}`);
    }

    // Heading 1
    if (trimmed.startsWith('# ')) {
      flushList(`${i}`);
      elements.push(
        <h1
          key={`h1-${i}`}
          style={{
            fontSize: '1.6rem',
            fontWeight: 800,
            color: '#ffffff',
            marginTop: '24px',
            marginBottom: '12px',
            borderBottom: '2px solid rgba(59, 130, 246, 0.4)',
            paddingBottom: '8px',
          }}
        >
          {renderInline(trimmed.substring(2))}
        </h1>
      );
      continue;
    }

    // Heading 2
    if (trimmed.startsWith('## ')) {
      flushList(`${i}`);
      elements.push(
        <h2
          key={`h2-${i}`}
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#38bdf8',
            marginTop: '22px',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '4px',
              height: '18px',
              backgroundColor: '#38bdf8',
              borderRadius: '2px',
            }}
          />
          {renderInline(trimmed.substring(3))}
        </h2>
      );
      continue;
    }

    // Heading 3
    if (trimmed.startsWith('### ')) {
      flushList(`${i}`);
      elements.push(
        <h3
          key={`h3-${i}`}
          style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#93c5fd',
            marginTop: '16px',
            marginBottom: '8px',
          }}
        >
          {renderInline(trimmed.substring(4))}
        </h3>
      );
      continue;
    }

    // Bullet List
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      inList = true;
      const itemText = trimmed.substring(2);
      listItems.push(
        <li key={`li-${i}-${listItems.length}`} style={{ fontSize: '0.925rem' }}>
          {renderInline(itemText)}
        </li>
      );
      continue;
    } else {
      flushList(`${i}`);
    }

    // Callout / Blockquote
    if (trimmed.startsWith('> ')) {
      elements.push(
        <div
          key={`quote-${i}`}
          style={{
            margin: '12px 0',
            padding: '12px 16px',
            backgroundColor: 'rgba(59, 130, 246, 0.08)',
            borderLeft: '4px solid #3b82f6',
            borderRadius: '0 8px 8px 0',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            fontStyle: 'italic',
          }}
        >
          {renderInline(trimmed.substring(2))}
        </div>
      );
      continue;
    }

    // Normal Paragraph
    elements.push(
      <p
        key={`p-${i}`}
        style={{
          margin: '0 0 12px 0',
          fontSize: '0.95rem',
          lineHeight: 1.75,
          color: 'var(--text-primary)',
        }}
      >
        {renderInline(trimmed)}
      </p>
    );
  }

  flushList('end');
  flushTable('end');

  return <div className="markdown-content">{elements}</div>;
};
