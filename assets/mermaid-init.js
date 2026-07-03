// Babylon Lite Demo Guide — 全ページ共通の mermaid 読み込み＋初期化
//
// 使い方（各ページの </body> 直前で読み込む）:
//   <script type="module" src="../assets/mermaid-init.js"></script>
//   ※トップページ（ルート）からは src="assets/mermaid-init.js"
//
// 図は <pre class="mermaid"> … </pre> に記述する。
// CDN 到達不可（オフライン等）でもページ本文は壊れないよう try/catch で握りつぶす。

try {
  const { default: mermaid } = await import('https://cdn.jsdelivr.net/npm/mermaid@11.16.0/+esm');
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    securityLevel: 'loose',
    fontFamily: "'Zen Kaku Gothic New', sans-serif",
    flowchart: { htmlLabels: true, curve: 'linear', nodeSpacing: 34, rankSpacing: 42 },
    themeVariables: {
      fontSize: '13.5px',
      primaryColor: '#EDF4EA',
      primaryTextColor: '#263228',
      primaryBorderColor: '#57A045',
      lineColor: '#78848F',
      secondaryColor: '#FBF3E2',
      tertiaryColor: '#EAF2FA',
      clusterBkg: '#F7FAF5',
      clusterBorder: '#C6D1BF',
      edgeLabelBackground: '#F3F6EF',
      titleColor: '#263228'
    }
  });
  await mermaid.run({ querySelector: 'pre.mermaid' });
} catch (e) {
  console.error('mermaid の読み込みに失敗しました（オフラインの可能性）:', e);
}
