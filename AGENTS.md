<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- Home is one long page with anchor sections (`#solucoes`, `#sobre`, `#como-funciona`, `#faq`, `#contato`, `#orcamento`) because the brand reference site navigates that way; articles live at `/conteudos` and `/conteudos/$slug`.
- Contact data and WhatsApp link builders live only in `src/lib/site.ts`; every WhatsApp button uses `whatsappLink()` so the number stays in one place.
- The quote wizard never posts to a server; it builds a message in `src/lib/quote.ts` and opens WhatsApp (covered by `src/lib/quote.test.ts`).
- Articles are static data in `src/content/articles.ts`; add an entry to publish a new one.
- Navbar is a floating "Dynamic Island" capsule rendered in `__root.tsx`; keep it compact, never a full-width bar.
