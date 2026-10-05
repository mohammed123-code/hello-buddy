<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the preview on TanStack Start with a browser-safe, self-contained Portfolio component; this preserves the fixed preview stack while supporting a standalone frontend export.
- Use Tailwind semantic CSS tokens and Bootstrap's grid-only stylesheet; this provides both requested styling tools without conflicting global resets.
- Vendor the official React Bits BlurText with reduced-motion and visible SSR fallbacks; animations must not hide essential identity text.
- Keep certificate URL fields empty until real documents exist, and render supplied LeetCode statistics as a dated snapshot; never fabricate credentials or imply live API data.
- Deliver the requested ZIP as plain React JavaScript with Vite, converting shared TSX modules during packaging; the user receives frontend-only runnable source without hosting-specific server files.
