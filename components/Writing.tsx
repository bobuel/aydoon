import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { WritingArticle } from '../types';
import { WRITING_ARTICLES, WRITING_DESCRIPTION, readingMinutes } from '../writing/content';

function ArticleMeta({ article }: { article: WritingArticle }) {
  return <p className="writing-meta">{article.category} · {readingMinutes(article)} min read{article.status === 'draft' && ' · Draft for review'}</p>;
}

export function WritingIndex() {
  return (
    <section className="writing-index" aria-labelledby="writing-title">
      <h2 id="writing-title">Writing</h2>
      <p className="row-description">{WRITING_DESCRIPTION}</p>
      {WRITING_ARTICLES.some(article => article.status === 'draft') && <p className="writing-review-note">Local review. Drafts are excluded from production builds.</p>}
      <div className="writing-list">
        {WRITING_ARTICLES.map(article => (
          <article className="writing-row" key={article.slug}>
            <h3><Link to={`/writing/${article.slug}`}>{article.title}</Link></h3>
            <p className="row-description">{article.summary}</p>
            <ArticleMeta article={article} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function WritingDetail({ article }: { article: WritingArticle }) {
  return (
    <article className="writing-detail" aria-labelledby="article-title">
      <Link className="back-link" to="/writing"><ArrowLeft size={15} aria-hidden="true" /> Back to writing</Link>
      <h2 id="article-title">{article.title}</h2>
      <ArticleMeta article={article} />
      <div className="writing-opening">{article.opening.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      {article.sections.map((section, sectionIndex) => (
        <section key={section.heading}>
          <h3>{section.heading}</h3>
          {section.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.example && (
            <div className="writing-example">
              <h4 id={`writing-example-${sectionIndex}`}>{section.example.label}</h4>
              <dl aria-labelledby={`writing-example-${sectionIndex}`}>
                {section.example.fields.map(field => (
                  <div key={field.label}><dt>{field.label}</dt><dd>{field.value}</dd></div>
                ))}
              </dl>
            </div>
          )}
        </section>
      ))}
      <Link className="back-link" to="/writing"><ArrowLeft size={15} aria-hidden="true" /> Back to writing</Link>
    </article>
  );
}
