/**
 * Inline, render-blocking theme resolver. Runs before first paint so the
 * correct theme is applied with no flash. Dark is the default; light only
 * applies if the visitor has explicitly toggled it (persisted in localStorage).
 */
const THEME_INIT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />;
}
