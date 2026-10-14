import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogs } from "@/data/blogs";
import logo from "@/assets/garima-wellness-logo.png";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

function BlogHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <nav className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-2 font-semibold text-base md:text-lg">
          <img src={logo} alt="Garima Wellness logo" className="h-9 w-9 object-contain" />
          <span>Garima Wellness</span>
        </Link>
        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="sm" className="h-11 md:h-9"><Link to="/blog">Blog</Link></Button>
          <Button asChild size="sm" className="h-11 md:h-9"><Link to="/#contact">Book a Call</Link></Button>
        </div>
      </nav>
    </header>
  );
}

export function BlogList() {
  const posts = [...blogs].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogHeader />
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">Journal</p>
        <h1 className="text-3xl md:text-5xl font-semibold mt-2">Wellness Blog</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">Notes on yoga, nutrition, mindfulness and workplace wellbeing.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
              <Card className="p-6 h-full transition group-hover:border-primary group-hover:shadow-lg">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">{p.category} · {fmt(p.date)}</p>
                <h2 className="text-xl font-semibold mt-3 group-hover:text-primary transition">{p.title}</h2>
                <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">Read more →</span>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogHeader />
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary font-semibold">
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>
        {post ? (
          <article className="mt-6">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">{post.category} · {fmt(post.date)}</p>
            <h1 className="text-3xl md:text-5xl font-semibold mt-3 leading-tight">{post.title}</h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed">
              {post.content.map((block, i) => {
                if (typeof block === "string") return <p key={i}>{block}</p>;
                if (block.type === "heading") {
                  return (
                    <h2 key={i} className="text-xl md:text-2xl font-semibold pt-4">
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <figure key={i} className="my-6">
                    <img
                      src={block.src}
                      alt={block.alt}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="w-full max-h-96 object-cover rounded-2xl border border-border shadow-sm"
                    />
                    {block.caption && (
                      <figcaption className="mt-2 text-sm text-muted-foreground text-center">{block.caption}</figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
            <Card className="mt-12 p-6 bg-secondary/40">
              <p className="font-semibold">Want personal guidance?</p>
              <Button asChild className="mt-4"><Link to="/#contact">Book a free discovery call</Link></Button>
            </Card>
          </article>
        ) : (
          <p className="mt-8">This post could not be found.</p>
        )}
      </main>
    </div>
  );
}
