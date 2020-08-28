# Deno Scripts Manager
試験的に作ったDeno製のスクリプト管理ツール。  
スクリプトの実行のみに対応。  
より多機能なものなら[Denon](https://github.com/denosaurs/denon)がオススメ。

## インストール
``` bash
deno install --name dsm https://github.com/windchime-yk/deno-scripts-manager/cli/mod.ts
```

## 使い方
```
dsm init
dsm version:deno # サンプルスクリプト
```

## 依存関係
- [exec](https://deno.land/x/exec)

## テスト
``` bash
deno run --allow-run --allow-read --allow-write cli/mod.ts deno -V
```
