# Babylon Lite デモ解説ガイド

WebGPU 専用の軽量 3D エンジン **Babylon Lite** の公式デモを、コードの内側から
初心者向けにやさしく分解して解説する、静的サイトのガイド集です。
地形生成・物理・ライティングなどのしくみを、図（mermaid）とインライン SVG、
コード抜粋で少しずつ読み解きます。

## ページ一覧

| デモ | 状態 | ページ |
|------|------|--------|
| ボクセルの世界のつくりかた（Minecraft 風サンドボックス） | 公開中 | [minecraft/](minecraft/index.html) |
| ピクセルの手ざわりのつくりかた（マリオ風プラットフォーマー） | 公開中 | [platformer/](platformer/index.html) |
| 光るブロックのつくりかた（3D テトリス） | 公開中 | [tetris/](tetris/index.html) |
| Gaussian Splats（仮） | 準備中 | — |
| Treasure Waterfall（仮） | 準備中 | — |

トップページ（全デモの一覧カード）: [index.html](index.html)

## 使い方（ローカル表示）

単純な静的サイトです。`index.html` をブラウザで開くだけで閲覧できます。
mermaid の図は CDN から読み込むため、図を表示するにはネット接続が必要です
（接続がなくても本文は問題なく表示されます）。

より確実に表示したい場合は、任意の静的サーバー経由での閲覧を推奨します:

```sh
# 例: Python の簡易サーバー
python -m http.server 8000
# → http://localhost:8000/ を開く
```

## フォルダ構成

```
babylon-lite-demo-guide/
├── index.html              # トップ：全デモ解説の一覧カード
├── assets/
│   ├── site.css            # 共通デザイントークン（色・フォント・部品）
│   ├── mermaid-init.js     # mermaid の CDN 読み込み＋初期化（全ページ共通）
│   └── img/
│       ├── favicon.svg     # アイソメトリックな草ブロックのファビコン
│       └── ogp/            # SNS シェア用サムネイル（ページごと）
├── minecraft/
│   └── index.html          # Minecraft 風デモの解説（自己完結・インライン CSS）
├── platformer/
│   └── index.html          # マリオ風プラットフォーマーの解説（自己完結・インライン CSS）
├── tetris/
│   └── index.html          # 3D テトリスの解説（自己完結・インライン CSS）
├── LICENSE                 # 解説コンテンツのライセンス（CC BY 4.0）
└── README.md
```

> **メモ:** 現状 `minecraft/index.html` は CSS・mermaid 初期化ともにページ内に
> インラインで持つ自己完結構成です。`assets/site.css` と `assets/mermaid-init.js`
> は共通土台の「骨組み」として用意してあり、次のデモ解説を追加する際に
> 共通部品を拡充していく想定です。

## 新しいデモ解説を追加するには

1. `demo-name/index.html` を作成する（デモごとに 1 フォルダ）。
2. 共通の見た目を使う場合は `../assets/site.css` を読み込み、そのページ固有の
   配色は `--accent` 系トークンを上書きして表現する。
3. 図を使う場合は `<pre class="mermaid">…</pre>` を書き、`</body>` 直前で
   `<script type="module" src="../assets/mermaid-init.js"></script>` を読み込む。
4. トップ [index.html](index.html) のカードグリッドにカードを 1 枚追加する。

## ライセンス

- 解説コンテンツ（文章・図・オリジナル SVG/CSS）: [CC BY 4.0](LICENSE)
- Babylon Lite 本体・公式デモのコード、および第三者素材は、それぞれの
  オリジナルのライセンスに従います。詳細は [LICENSE](LICENSE) を参照。
